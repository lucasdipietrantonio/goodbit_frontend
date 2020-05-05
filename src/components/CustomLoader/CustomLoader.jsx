import React, { Component } from "react";
import './CustomLoader.scss';

class CustomLoader extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="loader-img">
        <img src={require('../../assets/images/loader-img.svg')}  alt="Loader-img" />
        </div>

        </React.Fragment>
    );
  }
}

export default CustomLoader;
