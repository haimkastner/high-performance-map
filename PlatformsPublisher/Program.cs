using System;
using System.Configuration;
using System.Net;
using System.Threading;
using UnitsNet;

namespace PlatformsPublisher
{
    class Program
    {
        static string ip;
        static int port;
        static int platfromAmount;
        static double secondsBetweenUpdates;

        static void Main(string[] args)
        {
            // Show the welcome message
            WelcomeMessage();

            // Load configuration
            LoadConfiguration(args);

            // Create a platformsManager
            PlatformsManager platformsManager = new PlatformsManager();
            // Create a mqttDriver
            MqttDriver mqttDriver = new MqttDriver(ip: ip, port: port);

            // Generate a new world
            platformsManager.GenerateWorld(platformsAmount: platfromAmount);

            // Time to sleep between updates
            Duration timeBetweenSteps = Duration.FromSeconds(secondsBetweenUpdates);

            while (true)
            {
                // Publish current world
                mqttDriver.PublishWorld(platformsManager.ToJson()).Wait();

                // Sleep a while
                Thread.Sleep((int)timeBetweenSteps.Milliseconds);

                // Move world platform to the next step positions
                platformsManager.MovePlatformsNextStep(timeBetweenSteps);
            }
        }

        /// <summary>
        /// Load the app configuration from a raw configuration values
        /// </summary>
        static void ParseAndLoadConf(
            string rawIp,
            string rawPort,
            string rawPlatfromAmount,
            string rawSecondsBetweenUpdates)
        {
            if (IPAddress.TryParse(rawIp, out IPAddress address))
                ip = rawIp;
            else
                throw new ArgumentException("Invalid IP address");

            if (!int.TryParse(rawPort, out port) ||
                port > 65535 ||
                port <= 0)
                throw new ArgumentException("Invalid PORT number");

            if (!int.TryParse(rawPlatfromAmount, out platfromAmount) ||
                platfromAmount <= 0)
                throw new ArgumentException("Invalid Platfrom Amount");

            if (!double.TryParse(rawSecondsBetweenUpdates, out secondsBetweenUpdates) ||
                secondsBetweenUpdates <= 0)
                throw new ArgumentException("Invalid Seconds Between Updates");
        }

        /// <summary>
        /// Load the app configuration from the app.config file
        /// </summary>
        static void LoadConfFromAppconfig()
        {
            var rawIp = ConfigurationManager.AppSettings["BROKER_IP"];
            var rawPort = ConfigurationManager.AppSettings["BROKER_PORT"];
            var rawPlatfromAmount = ConfigurationManager.AppSettings["PLATFORMS_AMOUNT"];
            var rawSecondsBetweenUpdates = ConfigurationManager.AppSettings["SECONDS_BETWEEN_UPDATES"];

            try
            {
                ParseAndLoadConf(
                rawIp: rawIp,
                rawPort: rawPort,
                rawPlatfromAmount: rawPlatfromAmount,
                rawSecondsBetweenUpdates: rawSecondsBetweenUpdates);
            }
            catch (Exception ex)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine($"Invalid AppSettings: {ex.Message}{Environment.NewLine}Exiting...");
                Console.ReadKey();
                Environment.Exit(1);
            }
        }

        /// <summary>
        /// Load the app configuration from the app arguments
        /// </summary>
        /// <param name="args">The app arguments</param>
        static void LoadConfFromArgs(string[] args)
        {

            var rawIp = args[0];
            var rawPort = args[1];
            var rawPlatfromAmount = args[2];
            var rawSecondsBetweenUpdates = args[3];

            try
            {
                ParseAndLoadConf(
                rawIp: rawIp,
                rawPort: rawPort,
                rawPlatfromAmount: rawPlatfromAmount,
                rawSecondsBetweenUpdates: rawSecondsBetweenUpdates);
            }
            catch (Exception ex)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine($"Invalid Arguments: {ex.Message}{Environment.NewLine}Exiting...");
                Console.ReadKey();
                Environment.Exit(1);
            }
        }

        /// <summary>
        /// Load the app confuguration 
        /// </summary>
        /// <param name="args"></param>
        static void LoadConfiguration(string[] args)
        {
            if (args.Length >= 4)
            {
                Console.WriteLine("Loading app cunfiguration from the app arguments...");
                LoadConfFromArgs(args);
            }
            else
            {
                LoadConfFromAppconfig();
                Console.WriteLine("Loading app cunfiguration from the app.config file...");
            }
        }

        /// <summary>
        /// A welocme message with using instruction
        /// </summary>
        static void WelcomeMessage()
        {
            Console.ForegroundColor = ConsoleColor.Blue;

            var WelcomeMessage =
                @"
****************************************** WELCOME TO *******************************************
*    _____  _       _    __                         _____       _     _ _     _                 *
*   |  __ \| |     | |  / _|                       |  __ \     | |   | (_)   | |                *
*   | |__) | | __ _| |_| |_ ___  _ __ _ __ ___  ___| |__) |   _| |__ | |_ ___| |__   ___ _ __   *
*   |  ___/| |/ _` | __|  _/ _ \| '__| '_ ` _ \/ __|  ___/ | | | '_ \| | / __| '_ \ / _ \ '__|  *
*   | |    | | (_| | |_| || (_) | |  | | | | | \__ \ |   | |_| | |_) | | \__ \ | | |  __/ |     *
*   |_|    |_|\__,_|\__|_| \___/|_|  |_| |_| |_|___/_|    \__,_|_.__/|_|_|___/_| |_|\___|_|     *
*                                                                                               *
*                                                                                               *
*                                            .  ..__..___..___.          ,          .           *
*                               . . __*._  _ |\/||  |  |    |  ._ ._. _ -+- _  _. _ |           *
*                               (_|_) |[ )(_]|  ||__\  |    |  [_)[  (_) | (_)(_.(_)|           *
*                                         ._|                  |                                *
*                                                                                               *
*************************************************************************************************

                 ";
            Console.WriteLine(WelcomeMessage);
            Console.WriteLine();

            var configurationMessage = @"
______________________________________________________________________________________________________

You can set the broker IP/PORT etc by App.config or by app arguments.

To set by arguments: ""PlatformsPublisher.exe ipAddress port amountOfPlatforms secondsBetweenUpdates""
For example: PlatformsPublisher.exe ""127.0.0.1"" 1883 10 0.3

Or by app config keys: BROKER_IP BROKER_PORT PLATFORMS_AMOUNT SECONDS_BETWEEN_UPDATES
______________________________________________________________________________________________________
";
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine(configurationMessage);
            Console.WriteLine();
            Console.ResetColor();
        }
    }
}
