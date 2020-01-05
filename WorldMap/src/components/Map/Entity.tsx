import React from 'react'
import { Popup, Circle } from 'react-leaflet';
import { Platform } from '../../models/models';

// Declare the component properties
interface Props {
    platform: Platform;
};

class Entity extends React.Component<Props> {

    render() {
        return (
            // Draw the entity on the map
            <Circle
                color={this.props.platform.PlatformType === 'Aircraft' ? '#e81a53' : '#1a92e8'}
                center={[this.props.platform.Spacial.Position.Latitude, this.props.platform.Spacial.Position.Longitude]}
                radius={250}>
                <Popup>
                    <h2>{this.props.platform.Name}</h2>
                    
                    <h4> Latitude: {this.props.platform.Spacial.Position.Latitude} </h4>
                    <h4> Longitude: {this.props.platform.Spacial.Position.Longitude}</h4>
                    <h4> Altitude: {this.props.platform.Spacial.Position.Altitude}</h4>
                
                    <h5> Speed: {this.props.platform.Spacial.Movement.Speed} Course: {this.props.platform.Spacial.Movement.Course}</h5>
                </Popup>
            </Circle>
        );
    }
}

export default Entity