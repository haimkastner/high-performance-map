import * as mqttapi from 'async-mqtt';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '../models/models';

// Constants
const MQTT_BROKER_URL = 'ws://127.0.0.1:1884';
const PUBLIC_HTTP_API_URL = 'http://127.0.0.1:8080';
const PLATFORMS_TOPIC = 'world/platforms';

// Connect to the MQTT broker
const mqttClient = mqttapi.connect(MQTT_BROKER_URL);

// Subscribe to 'onConnect' event, then subscribe to the platforms update topic
mqttClient.on('connect', async () => {
  await mqttClient.subscribe(PLATFORMS_TOPIC);
});

// Subscribe to 'onMessage' event, then publish the new platfroms to all subscribers
mqttClient.on('message', async (topic: string, payload: any) => {
  try {
    if (topic === PLATFORMS_TOPIC) {
      // convert payload to a valid platfroms array
      const platforms: Platform[] = JSON.parse(payload.toString('utf8'));
      platformsFeed.next(platforms);
    }
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.warn(`Converting ${topic} payload failed, ${error}`);
  }
});

/**
 * Platfroms feed.
 * Subscribe to get the update about platfroms.
 */
export const platformsFeed = new BehaviorSubject<Platform[]>([]);

/**
 * An exapmle of fetching data from an HTTP server.
 */
export async function fetchData(): Promise<void> {
  try {
    await axios.get(`${PUBLIC_HTTP_API_URL}/data`, { withCredentials: true });
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.warn('fetch data fail ' + (error || ''));
    throw new Error('fetch data fail');
  }
}
