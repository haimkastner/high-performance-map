using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlatformsPublisher.Models
{
    /// <summary>
    /// Allowable to convert class data into JSON
    /// </summary>
    public interface IJsonify
    {
        /// <summary>
        /// Parse class data into JSON format
        /// </summary>
        /// <returns>JSON object as string</returns>
        string ToJson();
    }
}
