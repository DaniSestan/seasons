import React from 'react';
import ReactDOM from 'react-dom';
//
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//       (position) => console.log(position),
//       (err) => console.log(err)
//   );
//   return <div>Latitude</div>
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render(){
    return <div>Latitude: </div>
  };
}

ReactDOM.render(<App />, document.querySelector('#root'));