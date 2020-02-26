import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    results: [],
  };

  getResults = () => {
    axios.get('https://demo.staging.energyhelpline-aws.com/api/results/a8823b4b-1abe-41de-a5b3-ab6700c08d98').then(res => {
      this.setState({ results: res.data});
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getResults();
  }
  
  render () {
    return (
      <div className="App">

        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="submit" value="display results"></input>
          </form>   
        </div>

        <div className="results">
          {/* <p>{this.state.results.gasResults}</p>
          <p>{this.state.results.elecResults}</p> */}
        </div>

      </div>
    );
  }
}

export default App;
