export type PlatformType = 'Aircraft' | 'SurfaceVessel';

export interface Position {
    /** Latitude In Degrees */
    Latitude: number,
    /** Longitude In Degrees */
    Longitude: number,
    /** Altitude In Meters */
    Altitude: number
}

export interface Movement {
     /** Speed In MetersPerSecond */
    Speed: number;
     /** Course (Bearing) In Degrees */
    Course: number;
}

export interface Spacial {
    Position: Position;
    Movement: Movement;
}

export interface Platform {
    ID: number,
    Name: string,
    PlatformType: PlatformType,
    Spacial: Spacial;
}