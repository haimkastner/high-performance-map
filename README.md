# Purpose
A PoC of implementing a map with at least 1000 dynamic platforms with high-rate updates. Using MQTT (C# + JS) & React + Leaflet.

## How are we going to do it

Creating a world platfroms generator with motion engine using a simple [dead reckoning](https://en.wikipedia.org/wiki/Dead_reckoning) algorithm to publish world platfrom and a browser based UI to show the world platfroms in real-time.

All of this should work with a lot of platfroms and in high-rate updates.

## Technologies

### Platfroms publisher

C# MQTT client using [MQTTnet](https://github.com/chkr1011/MQTTnet) library, and [Geodesy](https://github.com/juergenpf/Geodesy) for the platfrom movements.

### World Map

React + TypeScript MQTT client using [async-mqtt](https://www.npmjs.com/package/async-mqtt), [Leaflet](https://leafletjs.com/) & [Leaflet-react](https://react-leaflet.js.org/) for the map and [Material UI](https://material-ui.com/) for UI components. 

## Run it

### MQTT Broker
You can use any MQTT broker, just make sure the broker support WebSockets connection (for the browser clients).

It's recommened to use [mosquitto](https://mosquitto.org/) broker. 

Just open the WebSockets interface by editing the configuration.

In Windows it's by editing the `C:\Program Files\mosquitto\mosquitto.conf` file as following:
```ini
# Port to use for the default listener.
port 1883

# Choose the protocol to use when listening.
# This can be either mqtt or websockets.
# Websockets support is currently disabled by default at compile time.
# Certificate based TLS may be used with websockets, except that
# only the cafile, certfile, keyfile and ciphers options are supported.
listener 1884
protocol websockets
```

Then run in the command line `C:\Program Files\mosquitto>mosquitto.exe -c ./mosquitto.conf`

After all make sure the broker is up and running.

### Platfroms publisher
Open [PlatformsPublisher.sln](./PlatformsPublisher/PlatformsPublisher.sln) in VisualStudio, then build & run.

### Wrold Map
- Open command line at `high-performance-map/WorldMap`
- Install dependecies by `npm i` command
- Run the develoment serve by `npm run start`

# Enjoy!

