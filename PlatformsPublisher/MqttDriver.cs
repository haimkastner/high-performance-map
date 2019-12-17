using MQTTnet;
using MQTTnet.Client;
using MQTTnet.Client.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace PlatformsPublisher
{
    /// <summary>
    /// An MQTT client to publish platforms to an MQTT broker
    /// </summary>
    public class MqttDriver
    {
        /// <summary>
        /// The platforms MQTT topic
        /// </summary>
        readonly static string PLATFORMS_TOPIC = "world/platforms";

        /// <summary>
        /// MQTT client instance
        /// </summary>
        IMqttClient mqttClient;

        /// <summary>
        /// Create an MQTT client
        /// </summary>
        /// <param name="ip">The broker IP address</param>
        /// <param name="port">The borker port</param>
        public MqttDriver(string ip, int port)
        {
            EstablishConnection(ip: ip, port: port).Wait();
        }

        /// <summary>
        /// Publish data by an MQTT protocol, to the <see cref="PLATFORMS_TOPIC"/>.  
        /// </summary>
        /// <param name="data">The platforms JSON data as a string</param>
        /// <returns></returns>
        public async Task PublishWorld(string data)
        {
            var message = new MqttApplicationMessageBuilder()
                                .WithTopic(PLATFORMS_TOPIC)
                                .WithPayload(data)
                                .WithExactlyOnceQoS()
                                .WithRetainFlag()
                                .Build();
            try
            {
                await mqttClient.PublishAsync(message);
                Console.WriteLine($"World platforms successfully sent at {DateTime.Now.ToLongTimeString()}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Sending world platforms to the MQTT broker failed, {ex.Message}");
            }
        }

        /// <summary>
        /// Connect as a client to an MQTT broker.
        /// </summary>
        /// <param name="ip">The broker IP address</param>
        /// <param name="port">The broker port</param>
        /// <returns></returns>
        private async Task EstablishConnection(string ip, int port)
        {
            // Create a new mqttClient instance
            var factory = new MqttFactory();
            mqttClient = factory.CreateMqttClient();

            var options = new MqttClientOptionsBuilder()
                                .WithTcpServer(ip, port)
                                .Build();

            // Subscribe to disconnected event to try connect agine.
            mqttClient.UseDisconnectedHandler(async e =>
            {
                Console.WriteLine("### DISCONNECTED FROM SERVER ###");
                await Task.Delay(TimeSpan.FromSeconds(5));

                try
                {
                    await mqttClient.ConnectAsync(options, CancellationToken.None); // Since 3.0.5 with CancellationToken
                }
                catch
                {
                    Console.WriteLine("### RECONNECTING FAILED ###");
                }
            });

            // Subscribe to message arrrived for next use.
            mqttClient.UseApplicationMessageReceivedHandler(e =>
            {
                Console.WriteLine("### RECEIVED APPLICATION MESSAGE ###");
                Console.WriteLine($"+ Topic = {e.ApplicationMessage.Topic}");
                Console.WriteLine($"+ Payload = {Encoding.UTF8.GetString(e.ApplicationMessage.Payload)}");
                Console.WriteLine($"+ QoS = {e.ApplicationMessage.QualityOfServiceLevel}");
                Console.WriteLine($"+ Retain = {e.ApplicationMessage.Retain}");
                Console.WriteLine();
            });

            // Subsribe to on connect event for next use. 
            mqttClient.UseConnectedHandler(async e =>
            {
                Console.WriteLine("### SUCCESSFULLY CONNECTED TO THE MQTT BROKER ###");

                // Subscribe to a topic
                // await mqttClient.SubscribeAsync(new TopicFilterBuilder().WithTopic(PLATFORMS_TOPIC).Build());
                // Console.WriteLine("### SUBSCRIBED ###");
            });

            // Try to connect the MQTT broker
            try
            {
                Console.WriteLine($"### CONNECTING TO THE MQTT BROKER AT {ip}:{port}... ###");
                await mqttClient.ConnectAsync(options, CancellationToken.None); // Since 3.0.5 with CancellationToken
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Connection to the broker at {ip}:{port} failed, {ex.Message}");
            }
        }
    }
}
