using Geodesy;
using PlatformsPublisher.Models;
using System;
using System.Collections.Generic;
using System.Text;
using UnitsNet;
using Angle = UnitsNet.Angle;

namespace PlatformsPublisher
{
    /// <summary>
    /// Manage platforms in a world, generating, moving, etc.
    /// </summary>
    public class PlatformsManager : IJsonify
    {
        // Constant values for random properties
        readonly static Angle HIGHST_LATITUDE = Angle.FromDegrees(36);
        readonly static Angle LOWEST_LATITUDE = Angle.FromDegrees(31);
        readonly static Angle HIGHST_LONGITUDE = Angle.FromDegrees(36);
        readonly static Angle LOWEST_LONGITUDE = Angle.FromDegrees(30);
        readonly static Speed MIN_SURFACE_SPEED = Speed.FromKilometersPerHour(100);
        readonly static Speed MAX_SURFACE_SPEED = Speed.FromKilometersPerHour(500);
        readonly static Speed MIN_AIRCRAFT_SPEED = Speed.FromKilometersPerHour(1000);
        readonly static Speed MAX_AIRCRAFT_SPEED = Speed.FromKilometersPerHour(3500);
        readonly static Length MIN_AIRCRAFT_HIGTH = Length.FromMeters(50);
        readonly static Length MAX_AIRCRAFT_HIGTH = Length.FromMeters(1500);

        /// <summary>
        /// Used to randomized platforms position etc.
        /// </summary>
        readonly Random random = new Random();
        
        /// <summary>
        /// A platform collection to hold platforms in the world 
        /// </summary>
        readonly List<Platform> platforms = new List<Platform>();

        /// <summary>
        /// WGS84 datum converter 
        /// </summary>
        readonly GeodeticCalculator geodeticCalculator = new GeodeticCalculator(Ellipsoid.WGS84);

        /// <summary>
        /// Generate new world platforms (remove current if exists) 
        /// </summary>
        /// <param name="platformsAmount">Number of platforms to generate</param>
        public void GenerateWorld(int platformsAmount)
        {
            // Clean up platform collection
            platforms.Clear();

            for (int i = 0; i < platformsAmount; i++)
            {
                // Generate a new platform with random properties
                var platformType = random.Next(0, 2) == 1
                    ? PlatformType.Aircraft
                    : PlatformType.SurfaceVessel;

                platforms.Add(new Platform(
                    id: i,
                    name: $"World:{platformType}:{i}",
                    platformType: platformType,
                    spacial: new Spacial(
                        position: new Position(
                            latitude: Angle.FromDegrees(random.Next((int)LOWEST_LATITUDE.Degrees, (int)HIGHST_LATITUDE.Degrees) + random.NextDouble()),
                            longitude: Angle.FromDegrees(random.Next((int)LOWEST_LONGITUDE.Degrees, (int)HIGHST_LONGITUDE.Degrees) + random.NextDouble()),
                            altitude: Length.FromMeters(platformType != PlatformType.Aircraft 
                            ? 0 
                            : random.Next((int)MIN_AIRCRAFT_HIGTH.Meters, (int)MAX_AIRCRAFT_HIGTH.Meters))),
                        movement: new Movement(
                            speed: Speed.FromMetersPerSecond(platformType != PlatformType.Aircraft
                             ? random.Next((int)MIN_SURFACE_SPEED.MetersPerSecond, (int)MAX_SURFACE_SPEED.MetersPerSecond)
                             : random.Next((int)MIN_AIRCRAFT_SPEED.MetersPerSecond, (int)MAX_AIRCRAFT_SPEED.MetersPerSecond)),
                            course: Angle.FromDegrees(random.Next(0, 360))
                            )
                        )
                    )); ;
            }
        }

        /// <summary>
        /// Move platforms in the world to the new place.
        /// based on <see cref="Platform"/> <see cref="Spacial.Movement"/> data and the time that passed.  
        /// </summary>
        /// <param name="timePassed">The time that passed from the last update</param>
        public void MovePlatformsNextStep(Duration timePassed)
        {
            foreach (var platform in platforms)
            {
                // Get current position and movement data
                var platformPosition = platform.Spacial.Position;
                var platformMovement = platform.Spacial.Movement;

                // Translate position to a Geodesy Coordinate instance
                var originalGeoPosition = new GlobalCoordinates(
                    latitude: new Geodesy.Angle(platformPosition.Latitude.Degrees),
                    longitude: new Geodesy.Angle(platformPosition.Longitude.Degrees));

                // Calculate the distance in meters based on the time that passed and platform speed
                var distanceInMeters = timePassed.Seconds * platformMovement.Speed.MetersPerSecond;

                // Calculate and get the position where the platform should be now
                var nextGeoPosition = 
                    geodeticCalculator.CalculateEndingGlobalCoordinates(
                        start: originalGeoPosition,
                        startBearing: new Geodesy.Angle(platformMovement.Course.Degrees),
                        distance: distanceInMeters);

                // Update the platform position
                platformPosition.Latitude = Angle.FromDegrees(nextGeoPosition.Latitude.Degrees);
                platformPosition.Longitude = Angle.FromDegrees(nextGeoPosition.Longitude.Degrees);
            }
        }

        public string ToJson()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine("[");

            // Used to know how if it's the last platform in collection
            int platformIndex = 1;
            foreach (var platform in platforms)
            {
                sb.AppendLine(platform.ToJson());

                // The last item should not have "," after the object in a JSON array
                if (platformIndex != platforms.Count)
                    sb.Append(",");

                platformIndex++;
            }
            sb.AppendLine("]");

            return sb.ToString();
        }
    }
}
