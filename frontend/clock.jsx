import React from 'react';

class Clock extends React.Component {

  constructor() {
    super();
    this.state = {time: new Date()};
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      100
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const hours = this.addZeros(this.state.time.getHours() % 12);
    const minutes = this.addZeros(this.state.time.getMinutes());
    const seconds = this.addZeros(this.state.time.getSeconds());

    const date = String(this.state.time).split(" ").slice(0, 4).join(" ");

    return <section className="clock">

      <div>
        <p>Time: </p>
        <p>{`${hours}:${minutes}:${seconds}`}</p>
      </div>
      <div>
        <p>Date: </p>
        <p>{`${date}`}</p>
      </div>
    </section>;
  }

  addZeros(time) {
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  }

  tick() {
      this.setState({
        time: new Date()
      });
  }

}


export default Clock;
