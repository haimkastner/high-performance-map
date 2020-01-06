import PubSub from 'pubsub-js';

const dataStor = PubSub;

export function subsribeState(state: string, component: React.Component): any {
    return dataStor.subscribe(state, (msg: any, data: string) => {
        const newState: { [key: string]: string } = {};
        newState[state] = data;
        component.setState(newState);
    });
}

export function subscribeHookState(state: string, hook: React.Dispatch<React.SetStateAction<any>>): any {
    return dataStor.subscribe(state, (msg: any, data: string) => {
        hook(data);
    });
}

export function unsubsribeState(token: string): any {
    dataStor.unsubscribe(token);
}

export function setSharedState(state: string, data: any): any {
    dataStor.publish(state, data);
}
