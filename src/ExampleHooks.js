import React, { useState, useEffect } from "react";

export default props => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [cross, setCross] = useState(0);

  const mouseMoveHandler = event => {
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    console.log("componentDidUpdate");
    if (x === y) {
      setCross(x);
    }
  }, [x, y]);

  useEffect(() => {
    console.log("componentDidMount");
    document.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      console.log("componentDidUnmount");
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  useEffect(() => {
    setMoveCount(moveCount => moveCount + 1);
  }, [x, y]);

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
};
