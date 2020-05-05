import React, { Component } from "react";
import { Link } from "react-router-dom";
import './StartHere.scss';
class StartHere extends Component {
  render() {
    return (
        <React.Fragment>
            <section className="gb-started-blk">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1">
                             <div className="gb-start-inner">
                                <div className="gb-start-title">
                                    <label>GET STARTED</label>
                                    <h1>Welcome to <span>Goodbit!</span></h1>
                                </div>
                                    <div className="gb-money-video">
                                        <div className="gb-money-video-inner">
                                            <div className="gb-video-icon">
                                                <img src={require('../../assets/images/video-icon.svg')}  alt="Money-Video" />
                                            </div>
                                            <div className="gb-upcoming">
                                                <h2>Video coming soon</h2>
                                            </div>
                                        </div>
                                </div>
                                <div className="gb-start-desc">
                                    <p>With Goodbit, you'll learn everything you need to know about Cryptocurrency & Blockchain. Whether you'd like to understand, invest, or just talk about it with that one weird Uncle, we've got you covered. Grasp the important subjects with our <Link to='/basics'>Basics</Link> course, become a Crypto Master with our <Link to="/learn/history">In-Depth</Link> sections, <Link to="/ask-us-anything">Ask us Anything</Link> for free, and then, when you're ready to invest, use our custom <Link to="/invest/buy-by-coin">Tools</Link> to purchase and store your crypto safely and easily. Start your Cryptocurrency journey by clicking the begin button below!</p>
                                </div>
                                <div className="clearfix">
                                    <Link to="/basics" className="gb-beginbtn">Begin<i className="gb-right-arrow"></i></Link>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Link to="/thank-you" className="gb-playbtn">thankyou</Link> */}
      </React.Fragment>
    );
  }

  componentDidMount() {
      document.title = "Start here | Goodbit101";
    // console.log(this.props);
  }

  componentWillReceiveProps() {
    // console.log("componentWillReceiveProps =>", this.props.toaster);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState);
  }
}

export default StartHere;
