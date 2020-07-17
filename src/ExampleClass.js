import React from "react";

export default class ExampleClass extends React.Component {
  state = {
    x: 0,
    y: 0,
    moveCount: 0,
    cross: 0
  };

  mouseMoveHandler = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
    window.addEventListener("mousemove", this.mouseMoveHandler);
  }

  componentDidUpdate(prevProps, prevState) {
    const { x, y } = this.state;
    if (x !== prevState.x || y !== prevState.y) {
      this.setState(prev => {
        return {
          moveCount: prev.moveCount + 1
        };
      });
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.x === state.y) {
      return {
        cross: state.x
      };
    }
    return null;
  }

  componentWillUnmount() {
    console.log("componentDidUnmount");
    window.removeEventListener("mousemove", this.mouseMoveHandler);
  }

  render() {
    const { x, y, moveCount, cross } = this.state;

    return (
      <div>
        <p>
          Координаты мыши: {x}, {y}
        </p>
        <p>Счетчик движения мыши: {moveCount} сек</p>
        <p>
          Позиция пересечения двух точек: {cross}, {cross}
        </p>
      </div>
    );
  }
}
