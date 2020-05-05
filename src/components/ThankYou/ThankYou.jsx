import React, { Component } from "react";
import './ThankYou.scss';
class ThankYou extends Component {
  render() {
    return (
        <React.Fragment>
            <section className="gb-thanks-block">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1">
                            <div className="gb-thanks-inner-blk">
                                <div className="gb-thanks-title">
                                    <h3>Thanks for watching!</h3>
                                    <span>Now, where would you like to go?</span>
                                </div>
                            </div>
                            <div className="gb-start-link-block">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="gb-link-box gb-link-box-left">
                                            <h3>Get Started</h3>
                                            <ul>
                                                <li><a href="{null}">How to: Buy Crypto</a></li>
                                                <li><a href="{null}">Explore Coins</a></li>
                                                <li><a href="{null}">What is a Wallet?</a></li>
                                                <li><a href="{null}">Investing 101</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="gb-link-box gb-link-box-right">
                                        <h3>Learn</h3>
                                            <ul>
                                                <li><a href="{null}">Money 101</a></li>
                                                <li><a href="{null}">Bitcoin 101</a></li>
                                                <li><a href="{null}">Blockchain 101</a></li>
                                                <li><a href="{null}">Ethereum 101</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }

  componentDidMount() {
      document.title = "Thank You | Goodbit101";
    // console.log(this.props);
  }

  componentWillReceiveProps() {
    // console.log("componentWillReceiveProps =>", this.props.toaster);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState);
  }
}

export default ThankYou;
