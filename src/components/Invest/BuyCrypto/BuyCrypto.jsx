import React, { Component } from 'react';
import GlossaryPopover from '../../GlossaryPopover/GlossaryPopover';
import "./BuyCrypto.scss";
import { Link } from "react-router-dom";

class BuyCrypto extends Component {
    state = {
        referralRoute : ''
     }
    render() {
        return (
            <React.Fragment>
                <section className="gb-wallets-detail-main gb-buy-detail-main text-center">
                    <div className="container">
                        <div className="gb-wallet-banner-box">
                            <h2>Goodbit's How To</h2>
                            <h1>Buy Crypto</h1>
                            <p>Today, buying bitcoins can be as easy as setting up an account and clicking a few buttons. But here’s the thing–getting your hands on one of thousands of other cryptocurrencies besides bitcoin can be more complex. Once you know which cryptocurrency you might be interested in, our <Link to="/invest/buy-by-coin">Buy By Coin</Link> tool makes the whole process easy!</p>
                        </div>
                    </div>
                </section>
                <section className="gb-buy-crypto-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 offset-md-1 col-lg-2">
                                <div className="gb-crypto-menu-block">
                                    <div className="gb-sticky-crypto-menu">
                                        <h3>Menu</h3>
                                        <ul>
                                            <li onClick={(e) => this.scrollToContent(e,0)} className="active"><a>Buying Methods</a></li>
                                            <li onClick={(e) => this.scrollToContent(e,1)}><a>Online Exchanges</a></li>
                                            <li onClick={(e) => this.scrollToContent(e,2)}><a>Buying Locally</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 offset-md-1 col-lg-7">
                                <div className="gb-crypto-buydetail">
                                    <div className="gb-crypto-buy-block-main">
                                        <div className="gb-crypto-detail-row">
                                            <h3>There are two main ways to buy bitcoins, which is almost always the first step in buying most any other cryptocurrency:</h3>
                                            <p><label>1. </label>Through an online exchange (more popular),</p>
                                            <p><label>2. </label>In person, from people looking to sell bitcoins or bitcoin ATMs (less popular)</p>
                                        </div>
                                        <div className="gb-crypto-detail-row">
                                            <h3>Online exchanges make it easy to get involved with cryptocurrencies. There are two main types:</h3>
                                            <div className="gb-crypto-detail-list">
                                                <h4>1. Fiat exchanges</h4>
                                                <p>These are exchanges that allow you to deposit money in the form of dollars or other paper money, and directly buy a limited number of cryptocurrencies (typically, Bitcoin, Ethereum, and perhaps a few others). You can do so by linking a bank or a credit card, and uploading identification to the exchange. Some examples include <GlossaryPopover content="Coinbase" />, <GlossaryPopover content="Gemini" /> , and <GlossaryPopover content="Kraken" />. Unfortunately, these exchanges don't offer the user full access to all the cryptocurrencies that are out there, and they often require identity verification of some sort. If you're interested in cryptocurrencies for their privacy, this adds a chink to your armor of anonymity. However, this is by far the easiest and fastest option to buy and sell crypto, and the one we recommend to new users.</p>
                                            </div>
                                            <div className="gb-crypto-detail-list">
                                                <h4>2. Non-Fiat exchanges</h4>
                                                <p>These exchanges allow you to trade in your Bitcoin or Ethereum (or sometimes a few other Cryptos) for any number of thousands of other coins, investing in other currencies as you see fit. They sometimes require less identity verification, and settle all transactions solely in cryptocurrency. No fiat is used. Prominent examples include <GlossaryPopover content="Bittrex" />, <GlossaryPopover content="Poloniex" />, and <GlossaryPopover content="Binance" />.</p>
                                                <p>-</p>
                                                <p>Taken together, these two types of online exchanges provide you with everything you need to turn your paper money into any cryptocurrency quickly and easily. </p>
                                                <p>Just to be clear, in order to use a non-fiat exchange, you have to set up an account and then send bitcoin into your account. It’s easy enough, and <Link to="/invest/buy-crypto">we’ll show you how</Link>!</p>
                                                <p>An important note! When you leave cryptocurrencies that you bought on an exchange on the exchange itself, you may forfeit many of the security advantages inherent to owning cryptocurrency. Exchanges are <GlossaryPopover content="centralized" /> entities with their own accounting systems, and in most cases you aren’t truly in full control of your cryptocurrency until you move it from the exchange to a wallet under your own control. Check out our <Link to="/wallets/find-wallets">Find a Wallet</Link> tool to pick the wallet that’s right for you!</p>
                                            </div>
                                        </div>
                                        <div className="gb-crypto-detail-row">
                                            <h3>Let's take a look at buying cryptocurrencies locally:</h3>
                                            <p>If you're interested in purchasing cryptocurrency with complete anonymity, this could be the option for you. Sites like Local Bitcoins, or physical bitcoin ATMs, serve as platforms to connect buyers directly to sellers. This allows you to meet up with a person and trade them cash for bitcoin directly, avoiding exchange identity verification in the process.</p>
                                            <p>Most people buy cryptocurrencies through an online exchange–check out our <Link to="/invest/buy-crypto">How to Buy Bitcoin</Link> page or our <Link to="/invest/buy-by-coin">Buy by Coin tool</Link> to get started, and welcome to the world of Crypto!</p>
                                            <p>If you encounter any issues, or have a question about exchanges, feel free to reach out at the <Link to="/ask-us-anything">Ask Us Anything</Link> page!</p>
                                        </div>
                                    </div>
                                    <div className="gb-crypto-bottom">
                                        <ul>
                                            <li>
                                                {/* <a href="{null}"> */}
                                                <a href={"http://www.facebook.com/sharer.php?u="+this.state.referralRoute} target="_blank" rel="noopener noreferrer">
                                                    <i className="gb-fb-icon"></i>
                                                </a>
                                                {/* </a> */}
                                            </li>
                                            <li>
                                                {/* <a href="{null}"> */}
                                                <a href={"https://twitter.com/share?url="+this.state.referralRoute+"&amp;text=&amp;hashtags=goodbit"} target="_blank" rel="noopener noreferrer">
                                                    <i className="gb-twitter-icon"></i>
                                                </a>
                                                {/* </a> */}
                                            </li>
                                            <li>
                                                {/* <a href="{null}"> */}
                                                <a href={"http://www.linkedin.com/shareArticle?mini=true&amp;url="+this.state.referralRoute}target="_blank" rel="noopener noreferrer">
                                                    <i className="gb-linkedin-icon"></i>
                                                </a>
                                                {/* </a> */}
                                            </li>
                                            <li>
                                                {/* <a href="{null}"> */}
                                                <a href={"https://plus.google.com/share?url="+this.state.referralRoute} target="_blank" rel="noopener noreferrer">
                                                    <i className="gb-gplus-icon"></i>
                                                </a>
                                                {/* </a> */}
                                            </li>
                                        </ul>
                                        <h3>Read this next</h3>
                                        <div className="gb-next-post-link">
                                            <div className="gb-howto-blk">
                                                <label>How to</label>
                                            </div>
                                            <div className="gb-next-post-dtl">
                                                <p><Link to="/invest/buy-by-coin">How to: Buy By Coin Tool</Link></p>
                                                <span>INVEST </span>
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
        document.title = "Buy Crypto | Goodbit101";
        this.setState({referralRoute: window.location.href});
    }
    scrollToContent(e,i) {
        //Set Active Link
        let lastactive = e.target.closest('ul').getElementsByClassName('active')[0];
        lastactive.classList.remove('active');
        e.target.closest('li').classList.add('active')
        //Scrollto Particular section
        let element = document.getElementsByClassName('gb-crypto-detail-row');
        element[i].scrollIntoView({behavior: 'smooth',block:'start'});
    }
}

export default BuyCrypto;