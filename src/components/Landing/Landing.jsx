import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './landing.scss';
import Newslatter from '../Newslatter/Newslatter';
import { Parallax,Background } from 'react-parallax';
const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };
// const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
// const image1 = "../../assets/images/crypto-banner-left.png";
// const image2 = "../../assets/images/crypto-banner-right.png";

class Landing extends Component {
    state = {
        newsLatterFormLoader :false
    };
    render() {
        return (
        <React.Fragment>
            <div style={styles}>
                {/* <Hello name="Parallax" /> */}
                {/* <Parallax bgImage={require('../../assets/images/crypto-banner-left.png')} strength={500}>
                    <div style={{height: 200}}>
                        <div style={insideStyles}>HTML inside the parallax</div>
                    </div>
                </Parallax> */}
                {/* <Parallax bgImage={image1} strength={500}>
                    <div style={{height: 600}}>
                        <div style={insideStyles}>HTML inside the parallax</div>
                    </div>
                </Parallax> */}
            </div>
            {/* <Parallax bgImage={require('../../assets/images/crypto-banner-left.png')} strength={500}> */}
            {/* <Parallax bgClassName='test' strength={500} className="test">
            <Background className="custom-bg" bgHeight="500px">
                <img src={require('../../assets/images/crypto-banner-left.png')} alt="fill murray" />
                <img src={require('../../assets/images/crypto-banner-right.png')} className="gb-right" alt="fill murray" />
            </Background> */}
            <Parallax bgClassName='test' strength={500} className="test">
            <Background className="custom-bg" bgHeight="500px">
                <img src={require('../../assets/images/crypto-banner-left.svg')} className="gb-left" alt="fill murray" />
                <img src={require('../../assets/images/crypto-banner-right.svg')} className="gb-right" alt="fill murray" />
                <img src={require('../../assets/images/crypto-banner-top.png')} className="gb-top" alt="fill murray" />
                <img src={require('../../assets/images/crypto-banner-bottom.png')} className="gb-bottom" alt="fill murray" />
            </Background>
            <section className="gb-cryptoblk">
                <div className="gb-cryptoblk-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 offset-xl-4 col-md-6 offset-md-3">
                                <div className="gb-crypto-dtl">
                                    <div className="gb-crypto-top clearfix">
                                        <div className="clearfix">
                                            <h1>Your key to cryptocurrency</h1>
                                            <p>Our simple guides, helpful tools, and expert info make learning &amp; investing easy</p>
                                            <span>WATCH “<span className="gb-blue-text">BITCOIN IN </span> <span className="gb-pink-text">2 MINUTES</span>”</span>
                                        </div>
                                        <Link to="/start-here" className="gb-playbtn" data-toggle="modal" data-target="#playvideo"><i className="gb-playicon"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="gb-cryptoblk-bottom">
                    <img src={require('../../assets/images/crypto-banner-left.svg')} className="gb-img-left" alt="fill murray" />
                    <img src={require('../../assets/images/crypto-banner-right.svg')} className="gb-img-right" alt="fill murray" />
                </div> */}
            </section>
            </Parallax>
            <section>
                <div className="gb-learnmore-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="gb-crypto-bottom clearfix">
                                        <span>I want to</span>
                                        <i></i>
                                </div>
                                <div className="gb-learn-dtl clearfix">
                                    <div className="gb-learn-box gb-coin-box">
                                        <Link to="/learn/bitcoin-101">
                                        {/* <a href={null}> */}
                                            <div className="gb-learn-desc">
                                                <span>Learn</span>
                                                <h3>Bitcoin 101</h3>
                                                <div className="clearfix gb-learn-img">
                                                    <img alt='bitcoin' className="gb-color-img" src={ require('../../assets/images/bitcoin.svg') } />
                                                    {/* <img alt='bitcoin-white' className="gb-white-img" src={ require('../../assets/images/bitcoin-white.svg') } /> */}
                                                </div>
                                            </div>
                                        {/* </a> */}
                                        </Link>
                                    </div>
                                    <div className="gb-learn-box gb-chain-box">
                                        {/* <a href={null}> */}
                                        <Link to="/learn/blockchain-101">
                                            <div className="gb-learn-desc">
                                                <span>Learn</span>
                                                <h3>Blockchain 101</h3>
                                                <div className="clearfix gb-learn-img">
                                                    <img  alt='blockchain' className="gb-color-img" src={ require('../../assets/images/blockchain.svg') } />
                                                    {/* <img  alt='blockchain-white' className="gb-white-img" src={ require('../../assets/images/ring.png') } /> */}
                                                </div>
                                            </div>
                                        </Link>
                                        {/* </a> */}
                                    </div>
                                    <div className="gb-learn-box gb-invest-box">
                                        {/* <a href={null}> */}
                                        <Link to="/invest/buy-crypto">
                                            <div className="gb-learn-desc">
                                                <span>Learn</span>
                                                <h3>How to invest</h3>
                                                <div className="clearfix gb-learn-img">
                                                    <img  alt='invest' className="gb-color-img" src={ require('../../assets/images/invest.svg') } />
                                                    {/* <img  alt='invest-white' className="gb-white-img" src={ require('../../assets/images/invest-white.svg') } /> */}
                                                </div>
                                            </div>
                                        </Link>
                                        {/* </a> */}
                                    </div>
                                    <div className="gb-learn-box gb-find-box">
                                        {/* <a href={null}> */}
                                        <Link to="/invest/buy-by-coin">
                                            <div className="gb-learn-desc">
                                                <span>Find</span>
                                                <h3>an Exchange</h3>
                                                <div className="clearfix gb-learn-img">
                                                    <img  alt='exchange' className="gb-color-img" src={ require('../../assets/images/exchange.svg') } />
                                                    {/* <img  alt='exchange-white' className="gb-white-img" src={ require('../../assets/images/exchange-white.svg') } /> */}
                                                </div>
                                            </div>
                                        </Link>
                                        {/* </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gb-content-blk">
                <div className="gb-content-top">
                    <div className="gb-cnt-bg">
                        <div className="container">
                                <img  alt='content-bg' src={ require('../../assets/images/landingpage-image.svg') } />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 offset-md-2 col-10">
                                <div className="gb-invest-dtl">
                                    <h2>Understanding cryptocurrency doesn’t have to be this hard.</h2>
                                    <p><span>Goodbit</span> makes learning &amp; investing simple. All for free.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gb-cover-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 offset-md-1 gb-cover-block-left">
                                <div className="gb-cover-left">
                                    <div className="gb-cover-imgdtl">
                                        {/* <img alt="bitcoin" className="gb-cover-img-web" src={require("../../assets/images/cover-market.svg")}/>
                                        <img alt="bitcoin" className="gb-cover-img-mobile" src={require("../../assets/images/cover-market-mobile.svg")}/> */}
                                        <ul className="gb-web-link">
                                            <li>
                                                <Link to="/learn/money-101"><img alt="money" src={require("../../assets/images/home/money.svg")}/></Link>
                                            </li>
                                            <li>
                                                <Link to="/wallets/what-is-wallet"><img alt="money" src={require("../../assets/images/home/wallet.svg")}/></Link>
                                                <Link to="{null}"><img alt="money" src={require("../../assets/images/home/coin-reviews.svg")}/></Link>
                                            </li>
                                            <li>
                                                <Link to="/ask-us-anything"><img alt="money" src={require("../../assets/images/home/ask-us.svg")}/></Link>
                                            </li>
                                        </ul>
                                        <ul className="gb-mobile-link">
                                            <li>
                                                <Link to="/learn/money-101"><img alt="money" src={require("../../assets/images/home/mobile-money.svg")}/></Link>
                                            </li>
                                            <li>
                                                <Link to="/wallets/what-is-wallet"><img alt="money" src={require("../../assets/images/home/mobile-wallet.svg")}/></Link>
                                            </li>
                                            <li>
                                                <Link to="/invest/buy-crypto"><img alt="money" src={require("../../assets/images/home/mobile-invest.svg")}/></Link>
                                            </li>
                                            <li>
                                                <Link to="/ask-us-anything"><img alt="money" src={require("../../assets/images/home/mobile-ask-us.svg")}/></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="gb-group-img">
                                        <img alt="groupimg" src={require("../../assets/images/boy-girl.svg")}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-md-6 offset-md-1 gb-cover-block-right">
                                <div className="gb-cover-dtl">
                                    <h4>you’re covered</h4>
                                    <h2>Everything you need, totally free</h2>
                                    <div className="gb-cover-desc">
                                        <label>Learn</label>
                                        <p>We demystify Cryptocurrency and Blockchain through guides and videos.</p>
                                        <label>Invest</label>
                                        <p>Learn safe, wealth building investment techniques; then, use our helpful tools to guide you through <Link to="/invest/buy-by-coin">Buying a Coin</Link> and <Link to="/wallets/find-wallets">Finding a Wallet</Link>.</p>
                                        <label>Explore</label>
                                        <p>Dive into our <Link to="/learn/history">In-Depth</Link> learning to become a Crypto Wizard. Still have questions? You can <Link to="/ask-us-anything">Ask us Anything</Link> and we’ll respond as quick as possible. </p>
                                    </div>
                                    <Link to="/start-here" className="gb-start-btn">Start Here <i className="gb-right-arrow"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div className="modal fade gb-video-modal" id="playvideo" tabIndex="-1" role="dialog" aria-labelledby="PlayVideo" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="gb-close-video" data-dismiss="modal" aria-label="Close"></button>
                            <div className="gb-video-block">
                                <div className="gb-video-inner-block">
                                    <iframe width="640" title="landing-video" height="360" src="https://www.youtube.com/embed/bRtFCXkNpWI" frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Newslatter />
        </React.Fragment>
        );
    }
    componentDidMount(){
        document.title = "Home | Goodbit101";
    }

}

export default Landing;