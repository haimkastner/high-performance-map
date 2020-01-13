// Import Leaflet style
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { ImageOverlay, Map, TileLayer } from 'react-leaflet';
import { Platform } from '../../models/models';
import { platformsFeed } from '../../services/data-service';
import { setSharedState, subscribeState, unsubscribeState } from '../../services/stats-store';
import Entity from './Entity';
import {
  mapAsBase64,
  mapBottomBound,
  mapLatitudeCenter,
  mapLeftBound,
  mapLongitudeCenter,
  mapRightBound,
  mapTopBound,
} from './raw-map';

// Declare the component states
interface State {
  platforms: Platform[];
  selectedPlatform: Platform | null;
}

class PerformanceMap extends React.Component<any, State> {
  public state: State = {
    platforms: [],
    selectedPlatform: null,
  };

  public selectedPlatformToken: any;

  public componentWillUnmount() {
    unsubscribeState(this.selectedPlatformToken);
  }

  public componentDidMount() {
    this.selectedPlatformToken = subscribeState('selectedPlatform', this);

    platformsFeed.subscribe(newPlatforms => {
      // Clean up the platform array
      this.state.platforms.splice(0, this.state.platforms.length);

      // Add each platform to the array
      for (const p of newPlatforms) {
        if (this.state.selectedPlatform && p.ID === this.state.selectedPlatform.ID) {
          setSharedState('selectedPlatform', p);
        }
        this.state.platforms.push(p);
      }

      // Set the new platforms state
      this.setState({
        platforms: this.state.platforms,
      });
    });
  }

  public render() {
    return (
      <Map
        center={[mapLatitudeCenter, mapLongitudeCenter]}
        zoom={8}
        attributionControl={true}
        zoomControl={false}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        style={{ width: '100vw', height: '100vh' }}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        {this.state.platforms.map((platform, i) => (
          <Entity key={i} platform={platform} />
        ))}
        <ImageOverlay
          bounds={[
            [mapTopBound, mapLeftBound],
            [mapBottomBound, mapRightBound],
          ]}
          url={mapAsBase64}
        ></ImageOverlay>
      </Map>
    );
  }
}

export default PerformanceMap;
