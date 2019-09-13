import React, { useState, Profiler, PureComponent } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{`You Clicked  ${count} times`}</div>

      <Instructions content="Click Butotn Below1" />

      <MyInstructions content="Click Butotn Below2" />

      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

class Instructions extends PureComponent {
  render() {
    return (
      <Profiler
        id="instrucitons"
        onRender={(id, phase, actualDurationTime) => {
          console.log(`profiler id ${id}`);
          console.log(phase);
          console.log(actualDurationTime);
        }}
      >
        <div>{this.props.content}</div>
      </Profiler>
    );
  }
}

const MyInstructions = React.memo(({ content }) => {
  return (
    <Profiler
      id="my instructions"
      onRender={(id, phase, actualDurationTime) => {
        console.log(`profiler id ${id}`);
        console.log(phase);
        console.log(actualDurationTime);
      }}
    >
      <div>
        <div> ${content} </div>
      </div>
    </Profiler>
  );
});
