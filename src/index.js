import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner"

class App extends React.Component {
    constructor(props) {
        super(props);

        // This is the only time we do direct assignment
        // to this.state
        this.state = { lat: null, errorMessage: "" };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we call setState() to update a state object
                // which is the only way to update the state
                this.setState({ lat: position.coords.latitude });
                // console.log(position.coords.latitude);
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept the location request"/>
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
