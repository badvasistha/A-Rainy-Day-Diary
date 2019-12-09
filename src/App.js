import React from "react";
import "./App.css";
import { Component } from "react";

// rcc[tab] gives the class component
// Also look for rncs and rconst for comparision
// Simple components can be expressed as class or function.
// And either work with the export to index.js.

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <p>Hello World!</p>
            <p>
              No, it definitely feels good to be back. And this time I am here
              to stay.How are you guys doing? I feel like I know you all very closely. I missed you, you know.
            </p>
          </header>
        </div>
      </div>
    );
  }
}

//The following block of code shows the component as a function.

// function App() {
//   return (
// <div className="App">
//   <header className="App-header">
//     <p>Hello World!</p>
//     <p>No, it definitely feels good to be back. And this time I am here to stay.How are you guys doing? Still coding and all? I know, it gets frustrating.</p>
//   </header>
// </div>
//   );
// }

// export default App;
