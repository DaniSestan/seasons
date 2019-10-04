import React from 'react';
import './SeasonDisplay.css';

class SeasonDisplay extends React.Component {
    state = {
        weather: {
            id: '',
            message: '',
            icon: '',
        }
    };

    componentDidMount() {
        var month = new Date().getMonth();
        if (month >= 3 && month <= 8) {
            if (this.props.lat > 0)
                this.setState({weather: {id: 'warm', message:"It's warm out there!", icon: 'sun'}});
            else
                this.setState({weather: {id: 'cold', message:"It's cold out there!", icon: 'snowflake'}});
        }else {
            if (this.props.lat > 0)
                this.setState({weather: {id: 'cold', message:"It's cold out there!", icon: 'snowflake'}});
            else
                this.setState({weather: {id: 'warm', message:"It's warm out there!", icon: 'sun'}});
        }
    }
    render(){
        return(
            <div className={`${this.state.weather['id']}`}>
                <i className={`icon-left massive ${this.state.weather['icon']} icon`}  />
                <h1 className='season-display'>{this.state.weather['message']}</h1>
                <i className={`icon-right massive ${this.state.weather['icon']} icon`}  />
            </div>
        )
    }
}

export default SeasonDisplay;