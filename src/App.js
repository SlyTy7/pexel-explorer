import React from 'react';
import './App.css';
import Photos from './components/Photos.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    const url = "https://api.pexels.com/v1/curated?per_page=16&page=1";
    const key = { headers : {"Authorization": "563492ad6f91700001000001a6af389b2ac047ac84acbcadb9604d40"} };

    fetch(url, key).then( res => res.json() )
      .then( results => {
        this.setState({
          loaded: true,
          results: results
        })
      })
      .catch( err => {
        console.log(err);
      })
  }

  render(){
    return (
      <div className="App">
        <Photos loaded={ this.state.loaded } results={ this.state.results } />
      </div>
    );
  }
}

export default App;
