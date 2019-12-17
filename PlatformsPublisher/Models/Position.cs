using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnitsNet;

namespace PlatformsPublisher.Models
{
    /// <summary>
    /// Represents geodetic position in the world
    /// </summary>
    public class Position : IJsonify
    {
        /// <summary>
        /// The latitude angle
        /// </summary>
        public Angle Latitude { get; set; }
        
        /// <summary>
        /// The longitude angle
        /// </summary>
        public Angle Longitude { get; set; }

        /// <summary>
        /// The altitude hight
        /// </summary>
        public Length Altitude { get; set; }

        /// <summary>
        /// Create a new geodetic position.
        /// </summary>
        /// <param name="latitude">The latitude angle</param>
        /// <param name="longitude">The longitude angle</param>
        /// <param name="altitude">The altitude hight</param>
        public Position(Angle latitude, Angle longitude, Length altitude)
        {
            Latitude = latitude;
            Longitude = longitude;
            Altitude = altitude;
        }

        public string ToJson()
        {
            return @"
            {
                ""Latitude"" : " + $"{ Latitude.Degrees }" + @",
                ""Longitude"" : " + $" { Longitude.Degrees }" + @",
                ""Altitude"" : " + $"{ Altitude.Meters }" + @"
            }
            ";
        }
    }

}
