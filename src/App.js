import React from 'react';
import Example from "./ExampleHooks";
import ExampleClass from "./ExampleClass";

function App() {
  return (
    <div>
      React Class:
      <ExampleClass />
      React Hooks:
      <Example />
    </div>
  );
}

export default App;
