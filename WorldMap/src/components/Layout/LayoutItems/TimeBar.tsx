import React from 'react';
import ReactDOM from 'react-dom';

interface State {
  date: Date
}


class Clock extends React.Component<any, State> {

    public timerID: any;
 
    constructor(props: {}) {
      super(props);
      this.state = {date: new Date()};
    }
  
    public componentDidMount() {
      this.timerID = window.setInterval(
        () => this.tick(),
        1000
      );
    }
  
    public componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    public tick() {
      this.setState({
        date: new Date()
      });
    }
  
    public render() {
      return (
        <div>
          {this.state.date.toLocaleTimeString()}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );

  export default Clock;