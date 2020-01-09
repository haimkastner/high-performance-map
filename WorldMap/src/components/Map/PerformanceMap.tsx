import React from "react";
import {
  Map,
  TileLayer,
  ImageOverlay,
  Marker,
  Circle,
  Rectangle
} from "react-leaflet";
import { Platform } from "../../models/models";
import { platformsFeed } from "../../services/data-service";
import Entity from "./Entity";
import {
  mapAsBase64,
  mapBottomBound,
  mapTopBound,
  mapRightBound,
  mapLeftBound,
  mapLatitudeCenter,
  mapLongitudeCenter
} from "./raw-map";
// Import Leaflet style
import "leaflet/dist/leaflet.css";
import { subscribeState, unsubscribeState, setSharedState } from "../../services/stats-store";

// Declare the component states
interface State {
  platforms: Platform[];
  selectedPlatform : Platform | null;
}

class PerformanceMap extends React.Component<any, State> {
  state: State = {
    platforms: [],
    selectedPlatform : null
  };

  selectedPlatformToken : any;
  
  componentWillUnmount() {
    unsubscribeState(this.selectedPlatformToken);
  }

  componentDidMount() {
    this.selectedPlatformToken = subscribeState("selectedPlatform", this);

    platformsFeed.subscribe(newPlatforms => {
      // Clean up the platform array
      this.state.platforms.splice(0, this.state.platforms.length);

      // Add each platform to the array
      for (const p of newPlatforms) {

        if(this.state.selectedPlatform && p.ID === this.state.selectedPlatform.ID){
          setSharedState('selectedPlatform', p);
        }
        this.state.platforms.push(p);
      }

      // Set the new platforms state
      this.setState({
        platforms: this.state.platforms
      });
    });
  }

  render() {
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
        style={{ width: "100vw", height: "100vh" }}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        {this.state.platforms.map((platform, i) => (
          <Entity key={i} platform={platform} />
        ))}
        <ImageOverlay
          bounds={[
            [mapTopBound, mapLeftBound],
            [mapBottomBound, mapRightBound]
          ]}
          url={mapAsBase64}
        ></ImageOverlay>
      </Map>
    );
  }
}

export default PerformanceMap;
