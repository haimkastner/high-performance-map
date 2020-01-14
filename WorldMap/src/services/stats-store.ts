import PubSub from 'pubsub-js';

const dataStor = PubSub;

const currentState: { [key: string]: any } = {};

export function subscribeState(state: string, component: React.Component): any {
  const currState = getCurrentState(state);
  if (currState !== undefined) {
    // First update the current state
    const newState: { [key: string]: string } = {};
    newState[state] = currState;
    component.setState(newState);
  }

  return dataStor.subscribe(state, (msg: any, data: any) => {
    const newState: { [key: string]: string } = {};
    newState[state] = data;
    component.setState(newState);
  });
}

export function subscribeHookState(state: string, hook: React.Dispatch<React.SetStateAction<any>>): any {
  const currState = getCurrentState(state);
  if (currState !== undefined) {
    // First update the current state
    hook(currState);
  }

  return dataStor.subscribe(state, (msg: any, data: any) => {
    hook(data);
  });
}

export function unsubscribeState(token: string): any {
  dataStor.unsubscribe(token);
}

export function setSharedState(state: string, data: any): any {
  currentState[state] = data;
  dataStor.publish(state, data);
}

export function getCurrentState(state: string): any {
  return currentState[state];
}

export const storPubSub = dataStor;
