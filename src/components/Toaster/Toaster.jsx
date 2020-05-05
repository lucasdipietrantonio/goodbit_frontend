import React, { Component } from "react";
import './Toaster.scss';
class Toaster extends Component {
  render() {
    return (
      <div className={ 'gb-toaster-msg ' + (this.props.toaster.isShowToast ? 'gb-sucsess-msg' : '')}>
        <h1 className={this.props.toaster.type === 'success' ? 'green' : 'red'}>
          {this.props.toaster.msg}
        </h1>
      </div>
    );
  }

  componentDidMount() {
    // console.log(this.props);
  }

  componentWillReceiveProps() {
    // console.log("componentWillReceiveProps =>", this.props.toaster);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState);
  }
}

export default Toaster;
