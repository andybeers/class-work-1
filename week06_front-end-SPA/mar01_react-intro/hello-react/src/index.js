import React from 'react';
import ReactDOM from 'react-dom';

/*function OurGreeting(props) {  
  return (
    <p>
      Our Greeting: {props.greeting.message}
    </p>
  );
}

function App(props) {
  const messages = props.greetings.map(greeting => (
    <OurGreeting 
      key={greeting.id}
      greeting={greeting} 
    />
  ));

  return (
    <div>
      <h1>Header!</h1>
      {messages}  
    </div>
  );
}
 
const greetings = [
  { id: 'A', message: 'Hello!' },
  { id: 'X', message: 'Howdy!' },
  { id: 'ABC', message: 'Anyong!' },
];*/

// ReactDOM.render(
//   <App greetings={greetings} />,
//   document.getElementById('funkyTown')
// );

import './main.css';

let theCount = 1;

function Counter(props) {
  return (
    <div 
      className={props.count % 2 ? 'banana' : null}
      style={{
        padding: '10px',
      }}
    >
      The Count Is: {props.count}
    </div>
  );
}

setInterval(() => {
  theCount = theCount + 1;
  ReactDOM.render(
    <Counter count={theCount}/>,
    document.getElementById('funkyTown')
  );
}, 1116);
