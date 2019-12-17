using UnitsNet;

namespace PlatformsPublisher.Models
{
    /// <summary>
    /// Represents an entity movement data
    /// </summary>
    public class Movement : IJsonify
    {
        /// <summary>
        /// The entity speed
        /// </summary>
        public Speed Speed { get; set; }

        /// <summary>
        /// The entity cource (bearing)
        /// </summary>
        public Angle Course { get; set; }

        /// <summary>
        /// Create a entity movement data 
        /// </summary>
        /// <param name="speed">The entity speed</param>
        /// <param name="course">The entity cource (bearing)</param>
        public Movement(Speed speed, Angle course)
        {
            Speed = speed;
            Course = course;
        }

        public string ToJson()
        {
            return @"
            {
                ""Speed"" : " + $"{ Speed.MetersPerSecond }" + @",
                ""Course"" : " + $" { Course.Radians }" + @"
            }
            ";
        }
    }
}
