import React from "react";

export default class CurrentDate extends React.Component {
  state = {
    date: ""
  };

  public componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var date = new Date().toLocaleDateString();
    this.setState({ date });
  };

  render() {
    const { date } = this.state;

    return <div>{date}</div>;
  }
}