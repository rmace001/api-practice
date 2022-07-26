import logo from "./logo.svg";
import "./App.css";
import React from "react";

let photosAPI = "https://jsonplaceholder.typicode.com/photos";

const getPics = async () => {
  // fetch returns a promise, so we can use await
  let photosResponse = await fetch(photosAPI);
  // json() also returns a promise, and since we want to run this after fetch, we can call it below
  // and also use await
  let returnPhotos = await photosResponse.json();
  return {
    photos: returnPhotos,
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
    };
  }
  componentDidMount = () => {
    getPics()
      .then((response) => {
        const idx = Math.floor(Math.random() * 4000);
        console.log(response.photos[idx]);
        this.setState({ photo: response.photos[idx] });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  renderPhoto = () => {
    if (this.state.photo !== null) {
      return (
        <img src={this.state.photo.thumbnailUrl} alt={this.state.photo.title} />
      );
    } else {
      return null;
    }
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
        {this.renderPhoto()}
      </div>
    );
  };
}

export default App;
