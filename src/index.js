import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from "./Spinner";
import './SeasonDisplay.css';


class App extends React.Component {
  state = {
    lat: null,
    errorMessage: ''
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({lat: position.coords.latitude}),
        (err) => this.setState({errorMessage: err.message})
    );
  }

  renderContent(){
    if(this.state.errorMessage && !this.state.lat){
      return (
          <div>
            Error: {this.state.errorMessage}
          </div>
      )
    } else if(!this.state.errorMessage && this.state.lat){
      return (
          <div>
            {/*Lat: {this.state.lat}*/}
            <SeasonDisplay lat = {this.state.lat}/>
          </div>
      )
    } else {
      return <Spinner message="Please accept request for location."/>;
    }
  };

  render() {
    return <div className='weather'>{this.renderContent()}</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));