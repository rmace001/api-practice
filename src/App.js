import logo from "./logo.svg";
import "./App.css";
import React from "react";

let photosAPI = "https://jsonplaceholder.typicode.com/photos";

const getPics = async () => {
  let photosResponse = await fetch(photosAPI);
  let returnPhotos = await photosResponse.json();
  return {
    photos: returnPhotos,
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    getPics().then((response) => {
      console.log(response.photos[0]);
    });
  };

  render = () => {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
          </a>
        </header> */}
        <h1>Here is some h1</h1>
      </div>
    );
  };
}

export default App;
