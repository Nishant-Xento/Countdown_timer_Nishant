import React from "react";

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startingVal: this.props.number || 30
    };
  }

  interval = null;

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ startingVal: this.state.startingVal - 1 });
    }, 1000);
  }

  componentDidUpdate(nextProps, nextstate) {
    console.log(nextstate);
    if (nextstate.startingVal < 2) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1 style={{ fontSize: 120, textAlign: "center" }}>
          {this.state.startingVal}
        </h1>

        <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>
          {this.state.startingVal === 0 ? "Time's up" : ""}
        </p>
      </div>
    );
  }
}

export default Countdown;
