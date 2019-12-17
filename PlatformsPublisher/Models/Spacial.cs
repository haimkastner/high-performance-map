using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlatformsPublisher.Models
{
    /// <summary>
    /// Represents the spacial data of entity in the world
    /// </summary>
    public class Spacial : IJsonify
    {
        /// <summary>
        /// The position in the world
        /// </summary>
        public Position Position { get; }

        /// <summary>
        /// The movement in the world
        /// </summary>
        public Movement Movement { get; }

        /// <summary>
        /// Create a new spacial data
        /// </summary>
        /// <param name="position">The position in the world</param>
        /// <param name="movement">The movement in the world</param>
        public Spacial(Position position, Movement movement)
        {
            Position = position;
            Movement = movement;
        }

        public string ToJson()
        {
            return @"
            {
                ""Position"" : " + $"{ Position.ToJson() }" + @",
                ""Movement"" : " + $" { Movement.ToJson() }" + @"
            }
            ";
        }
    }
}
