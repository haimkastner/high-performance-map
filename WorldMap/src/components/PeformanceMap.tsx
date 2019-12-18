import React from 'react'
import { Map, TileLayer} from 'react-leaflet';
import { Platform } from '../models/models';
import { platformsFeed } from '../services/data-service';
import Entity from './Entity';

// Import Leaflet style
import 'leaflet/dist/leaflet.css';

// Declare the component states
interface State {
    platforms: Platform[];
};

class PeformanceMap extends React.Component<any, State> {

    state: State = {
        platforms: [],
    };

    componentDidMount() {
        platformsFeed.subscribe((newPlatforms) => {

            // Clean up the platfrom array
            this.state.platforms.splice(0, this.state.platforms.length)

            // Add each platfrom to the array
            for (const p of newPlatforms) {
                this.state.platforms.push(p);
            }

            // Set the new platfroms state
            this.setState({
                platforms: this.state.platforms,
            })
        });
    }

    render() {
        return (
            <Map
                center={[32, 35]}
                zoom={6}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
                style={{ width: '100%', height: 'calc(100vh - 64px)' }}>
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                {this.state.platforms.map((platform, i) => (
                    <Entity key={i} platform={platform} />
                ))}

            </Map>
        );
    }
}

export default PeformanceMap