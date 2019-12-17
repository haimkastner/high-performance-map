
namespace PlatformsPublisher.Models
{
    /// <summary>
    /// Represnets a platform in a workd
    /// </summary>
    public class Platform : IJsonify
    {
        /// <summary>
        /// The platform uniqe id
        /// </summary>
        public int ID { get; }

        /// <summary>
        /// Platform name
        /// </summary>
        public string Name { get; }

        /// <summary>
        /// Platform type
        /// </summary>
        public PlatformType PlatformType { get; }

        /// <summary>
        /// The spacial data of the platform
        /// </summary>
        public Spacial Spacial { get; }

        /// <summary>
        /// Create a new platform
        /// </summary>
        /// <param name="id">The platform uniqe id</param>
        /// <param name="name">Platform name</param>
        /// <param name="platformType">Platform type</param>
        /// <param name="spacial">The spacial data of the platform</param>
        public Platform(int id, string name, PlatformType platformType, Spacial spacial)
        {
            ID = id;
            Name = name;
            PlatformType = platformType;
            Spacial = spacial;
        }

        public string ToJson()
        {
            return @"
            {
                ""ID"" : " + $"{ ID }" + @",
                ""Name"" : " + $"\"{ Name }\"" + @",
                ""PlatformType"" : " + $"\"{ PlatformType }\"" + @",
                ""Spacial"" : " + $"{ Spacial.ToJson() }" + @"
            }
            ";
        }
    }
}
