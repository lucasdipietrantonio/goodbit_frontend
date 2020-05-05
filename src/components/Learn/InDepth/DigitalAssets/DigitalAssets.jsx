import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Newslatter from '../../../Newslatter/Newslatter';
import Swiper from "swiper";
import GlossaryPopover from '../../../GlossaryPopover/GlossaryPopover';
import ExplainationPopover from '../../../ExplainationPopover/ExplainationPopover';

import './DigitalAssets.scss';
import '../../Money101/Money101.scss';
import ShareComponent from '../../ShareComponent/ShareComponent';

class DigitalAssets extends Component {
    oldScroll;
    referralRoute;
    state = {
        progressBarWidth :0,
        section : 'The Cryptopia',
        part : 'Part I',
        next : 0,
        hideSkipSectionText:false
    }
    scrollToContent(i) {
        let element = document.getElementsByClassName('gb-content-row');
        element[i].scrollIntoView({behavior: 'smooth',block:'start'});
    }
    scrollToTop() {
        document.body.scrollIntoView({behavior: 'smooth',block:'start'});
    }
    render() {
        return (
            <React.Fragment>
                <div className="gb-money-main gb-digitalassets-main">
                    <section className="gb-money-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 offset-md-1">
                                    <div className="gb-money-dtl">
                                        {/* <div className="clearfix">
                                            <a href="/" className="gb-basic-btn"><i className="gb-left-arrow"></i>In-depth</a>
                                        </div> */}
                                        <h1 className="gb-in-depth-title">Digital Assets</h1>
                                        <div className="gb-money-banner-dtl">
                                            <p>Over time, as the <GlossaryPopover content="blockchain"/>  space has diversified, many different tradable digital <GlossaryPopover content="assets"/>  have begun to take shape. Here we’ll discuss the broad categories of coin-types, including <GlossaryPopover content="privacy coins"/>, <GlossaryPopover content="utility tokens"/>, and more.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-1">
                                    <div className="gb-dephth-right">
                                        <div className="gb-money-video">
                                            <img src={require('../../../../assets/images/in-depth/digital-main.svg')}  alt="Digital-assets" />
                                        </div>
                                        {/* Swiper */}
                                        <div className="gb-segment-blk">
                                            <h4>In this segment, you will learn:</h4>
                                            <div className="swiper-container gb-money-question-scroller-container">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <ul>
                                                            <li onClick={() => this.scrollToContent(0)} className="sectionTitle" data-part="Part I">The Cryptopia</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="swiper-scrollbar gb-money-question-scrollbar"></div>
                                            </div>
                                            <div className="gb-next-menublk clearfix">
                                                {/* <a href="{null}" className="gb-next-menubtn"> */}
                                                <Link className="gb-next-menubtn" to="/learn/forks">
                                                Forks <i className="gb-right-arrow"></i>
                                                </Link>
                                                {/* </a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="gb-accordian-mobile">
                        <div className="accordion gb-segment-accordian" id="accordionExample">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            See segment outline
                                            <span>1 Section</span>
                                        </button>
                                    </h5>

                                </div>
                                <div id="collapseOne" className="collapse show gb-collapse-segment" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <ul>
                                            <li>The Cryptopia</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <h5 className="gb-blue-title">Ready? Let’s begin!</h5> */}
                    </section>
                    <section className="gb-money-content-wrapper" id="gbMoneyContentWrapper">
                        <div className="gb-money-header" id="gbMoneyHeader">
                            <div className="gb-money-progressbar">
                                <div className="gb-money-inner-bar" style={{"width" : this.state.progressBarWidth + '%'}}></div>
                            </div>
                            <div className="container-fluid p-0">
                                <div className="gb-money-header-row">
                                    <div className="gb-money-left">
                                        <i><img src={require('../../../../assets/images/nodes/nodes-goodbit-icon.svg')}  alt="Dollar-icon"/></i>
                                        <span>Digital Assets</span>
                                    </div>
                                    <div className="gb-section-part">
                                        <div className="gb-section-left">
                                            <span><span>{this.state.part}:</span>{this.state.section}</span>
                                        </div>
                                        <div className="gb-section-right">
                                            <a  onClick={() => this.scrollToContent(this.state.next)} className={this.state.hideSkipSectionText ? 'd-none' : '' }>Skip to next section</a>
                                        </div>
                                    </div>
                                    <div className="gb-money-back">
                                        <a onClick={() => this.scrollToTop()}>Back to top <i className="gb-up-arrow"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container" id="scrollProgressContainer">
                            <div className="row">
                                <div className="col-md-12">
                                <div className="gb-money-social">
                                    <ShareComponent share={this.referralRoute}/>
                                </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>The Cryptopia</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Since Bitcoin was released in 2009 there have been thousands of other <GlossaryPopover content="cryptocurrencies"/> to hit the market. Now there are all kinds of terms thrown around, like "<GlossaryPopover content="token"/>", "<GlossaryPopover content="cryptoasset"/>", and more. So what is a token? What is a crypto? Does ICO stand for Ice Cream Operation? How about Icelandic Corn Opening? Wait, what? You’ve come to the right place.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>Let’s start with the big picture. An <GlossaryPopover content="asset"/> is defined as a piece of property that has some kind of value. If you own a house, a car, or even money (cash or crypto), you own assets. Bitcoin helped create a new type of asset: a digital asset. </p>
                                                        <p><GlossaryPopover showAs= "Cryptocurrencies" content="cryptocurrencies"/> are a special kind of digital asset, dubbed cryptoassets. <GlossaryPopover content="Cryptotokens"/> and <GlossaryPopover content="cryptocommodities"/> also fall under this category, and they have distinct definitions and implications. We’ll get there in a moment.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-digital-assets-img1">
                                                        <img src={require('../../../../assets/images/in-depth/Digital-assets/digital-assets-img1.svg')}  alt="digital-assets-img1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Before we dig in, there’s one more broad topic to address: the difference between a protocol and a currency or token. A <GlossaryPopover content="protocol"/> is a set of rules governing a system. Bitcoin (with a capital B) is a protocol, outlining how a <GlossaryPopover content="decentralized"/> system of <GlossaryPopover content="miners"/> can keep track of and transfer digital money. The digital money, the asset itself, the bitcoins (with a lower case b), are a different thing.</p>
                                                        <p>You transact using bitcoins. The way bitcoins can be exchanged is determined by the Bitcoin protocol, which is a set of rules.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Let’s take a deeper dive into some common classifications:</p>
                                                        <ul>
                                                            <li>Cryptocurrencies are intended to be digital stores of value, <GlossaryPopover content="mediums of exchange"/>, and <GlossaryPopover content="units of account"/>. They are digital money. These can be exchanged on their respective <GlossaryPopover content="blockchains"/>. For example, you exchange bitcoins on the Bitcoin blockchain, and you exchange litecoins on the <GlossaryPopover content="Litecoin"/> blockchain, which has its own protocol.</li>
                                                            <ul>
                                                                <li><GlossaryPopover content="Privacy Coins"/>–as we've said, Bitcoin is <GlossaryPopover content="pseudonymous"/>. These coins aim to make transactions entirely <GlossaryPopover content="anonymous"/> by using advanced <GlossaryPopover content="cryptography"/> and specially designed protocols. Bitcoin might be quasi-anonymous, but privacy coins take anonymity to the next level, so that no one can trace anybody's funds, ever. Examples: Monero, Zcash, Dash.</li>
                                                            </ul>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <ul>
                                                            <li><GlossaryPopover showAs="Cryptocommodities" content="cryptocommodities"/>–a commodity is a resource that has real world value, like water, gold, or agricultural products. A cryptocommodity works the same way, except digitally. Here's how it goes: you want to use a certain blockchain, meaning you want access to computing power from miners all around the world. You need to pay for it! How? Using a cryptocurrency which acts like a commodity.</li>
                                                            <ul>
                                                                <li>Platform Tokens–these have a specific role within a greater ecosystem. A prime example is <GlossaryPopover content="Ethereum"/>, a blockchain protocol allowing users to build decentralized applications using smart contracts. Its native <GlossaryPopover content="token"/> is known as <GlossaryPopover content="Ether"/>. Developers pay in ether to build on the Ethereum blockchain. This makes Ether a cryptocommodity.</li>
                                                            </ul>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <ul>
                                                            <li><GlossaryPopover content="Cryptotokens"/>–tied to a particular product, service, or value.</li>
                                                            <ul>
                                                                <li>Utility Tokens–as the name suggests, these assets have a utility, a purpose. Utility tokens can be redeemable for some type of service, or may allow you to participate in a market in some way. There are many types of utility tokens, but keep in mind that they allow you to access a specific product or service. Examples: SALT (lending platform), Augur (prediction market).</li>
                                                                <li>Ownership Tokens–buying an ownership token grants you the rights to part of… well… just about anything. There are lots of things that can be <GlossaryPopover content='"tokenized"'/>. For example, you could split up a company into 1000 tokens and sell them. Owners of 1 token would then own 1/1000th of the company. The same philosophy could be applied to real estate, art, or any other physical commodity.</li>
                                                            </ul>
                                                        </ul>
                                                        <p>The lingo here is kinda complicated, kinda disputed, and kinda still constantly changing. But this summary serves as a guide for talking about the various types of coins, tokens, and blockchains in the space.</p>
                                                        <p>Take the quiz below to test your digital asset knowledge!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="gb-quiz-content-blk">
                        <div className="container">
                            <div className="col-md-4 offset-md-4">
                                <div className="gb-quiz-content-dtl">
                                    <h2>Test yourself — take the Digital Assets quiz!</h2>
                                    <span>Total time • 6 MIN</span>
                                    <div className="gb-begin-blk">
                                    <a href={null} className="gb-begin-btn" onClick={() => this.toggleQuestionModal('show')}>Begin <i className="gb-right-arrow"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>




                    <section className="gb-next-pageblk">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 offset-md-1">
                                    <div className="gb-next-page-dtl">
                                        <h3>Now that you understand digital assets, it’s time to tackle forks!</h3>
                                        <div className="gb-next-page-menu gb-forks-menu">
                                            <span>Forks</span>
                                            <div className="gb-letsgo-btnblk">
                                                <Link className="gb-letsgobtn" to="/learn/forks" >
                                                    Let’s go<i className="gb-right-arrow"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-2">
                                    <div className="gb-skip-next-page">
                                        <h3>Or, skip ahead.</h3>
                                        <ul>
                                            <li className="gb-future-menu gb-privacy-menu">
                                                <Link to="/learn/privacy" >
                                                    Privacy
                                                </Link>
                                            </li>
                                            <li className="gb-blockchain-menu gb-icos-menu">
                                                <Link to="/learn/icos" >
                                                    ICO's
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Newslatter/>

                    <div className="gb-quiz-money-modal">
                        <div className="gb-quiz-modal">
                            <div className="gb-quiz-body">
                                <div className="container">
                                    <div className="gb-quiz-header">
                                        <div className="gb-quiz-head-left">
                                            <i><img src={require('../../../../assets/images/goodbit-icon.svg')} alt="Goodbit-icon" /></i>
                                            <span>Digital Assets : Quiz</span>
                                        </div>
                                        <button type="button" className="btn btn-secondary" onClick={() => this.toggleQuestionModal('hide')}></button>
                                    </div>
                                    <div className="gb-quiz-modal-body">
                                        <div className="row">
                                            <div className="col-xl-4 offset-xl-4 col-md-6 offset-md-3">
                                                <div className="swiper-container gb-money-question-swiper-container">
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #1</span>
                                                                <h3>Which of the following choices is not a digital asset?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio1" type="radio" name="question1" value="1" />
                                                                        <label htmlFor="radio1">Bitcoins</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio2" type="radio" name="question1" value="2" />
                                                                        <label htmlFor="radio2">Gold</label>
                                                                        <ExplainationPopover content="Bitcoins and “cryptocurrency” are both a form of digital asset which hold value digitally. Gold is a physical commodity while minecraft emeralds hold value in just the video game."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio3" type="radio" name="question1" value="3" />
                                                                        <label htmlFor="radio3">Cryptocurrency</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio4" type="radio" name="question1" value="4" />
                                                                        <label htmlFor="radio4">Minecraft emerald</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #2</span>
                                                                <h3>Which of the following terms does Ether fall into the most?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio5" type="radio" name="question2" value="5" />
                                                                        <label htmlFor="radio5">Ownership token</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio6" type="radio" name="question2" value="6" />
                                                                        <label htmlFor="radio6">Private token</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio7" type="radio" name="question2" value="7" />
                                                                        <label htmlFor="radio7">Physical commodity</label>
                                                                    </li>

                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio8" type="radio" name="question2" value="8" />
                                                                        <label htmlFor="radio8">Cryptocommidity</label>
                                                                        <ExplainationPopover content="Ether is used as a cryptocommidty, typically referred to as “gas,” to allow users of the Ethereum platform to launch smart-contracts."/>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #3</span>
                                                                <h3>What phrase best explains a “protocol?”</h3>
                                                                <ul>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio9" type="radio" name="question3" value="9" />
                                                                        <label htmlFor="radio9">a set of rules governing a system</label>
                                                                        <ExplainationPopover content="A protocol is a set of rules governing a system. “Bitcoin” is a well known example of this."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio10" type="radio" name="question3" value="10" />
                                                                        <label htmlFor="radio10">a cryptocurrency</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio11" type="radio" name="question3" value="11" />
                                                                        <label htmlFor="radio11">physical assets that have real-world value</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio12" type="radio" name="question3" value="12" />
                                                                        <label htmlFor="radio12">The ingredients of cheese pizza</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #4</span>
                                                                <h3>True or False: bitcoins are the leading privacy token.</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio13" type="radio" name="question4" value="13" />
                                                                        <label htmlFor="radio13">True</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio14" type="radio" name="question4" value="14" />
                                                                        <label htmlFor="radio14">False</label>
                                                                        <ExplainationPopover content="Bitcoin is not a security token. Cryptocurrencies like Dash, Monero, and Zcash are security tokens due to their increased anonymity and cryptography."/>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #5</span>
                                                                <h3>When was Bitcoin released?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio15" type="radio" name="question5" value="15" />
                                                                        <label htmlFor="radio15">2006</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio16" type="radio" name="question5" value="16" />
                                                                        <label htmlFor="radio16">1997</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio17" type="radio" name="question5" value="17" />
                                                                        <label htmlFor="radio17">2009</label>
                                                                        <ExplainationPopover content="It is almost impossible for any two people to produce identical private keys."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio18" type="radio" name="question5" value="18" />
                                                                        <label htmlFor="radio18">2017</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gb-quiz-slider">
                                                    <div className="row">
                                                        <div className="col-xl-4 offset-xl-4 col-md-6 offset-md-3">
                                                            <div className="swiper-button-next gb-money-question-swiper-button-prev"><i className="gb-prev-icon"></i> Prev</div>
                                                            <div className="swiper-button-prev gb-money-question-swiper-button-next">Next<i className="gb-next-icon"></i></div>
                                                            <div className="swiper-button-next gb-money-question-swiper-button-prev gb-mobile-prev"><i className="gb-prev-icon"></i></div>
                                                            <div className="swiper-button-prev gb-money-question-swiper-button-next gb-mobile-next"><i className="gb-next-icon"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </React.Fragment>
        );
    }
    componentDidMount() {
        document.title = "Digital Assets | Goodbit101";
        this.referralRoute = window.location.href;
        this.initMoneyQuestionScroller();
        this.initMoneyQuestionSwiper();
        window.addEventListener("scroll", this.handleScroll);
        var hoverElements = document.getElementsByClassName('gb-text-hover');
        for (var i=0; i<hoverElements.length; i++) {
           this.addMouseInOutListner(hoverElements[i])
        }
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        var hoverElements = document.getElementsByClassName('gb-text-hover');
        for (var i=0; i<hoverElements.length; i++) {
            this.removeMouseInOutListner(hoverElements[i]);
        }
    }
    addMouseInOutListner(hoverElement) {
        hoverElement.addEventListener("mouseover", () => {

        })
        hoverElement.addEventListener("mouseout", () => {

        })
    }
    removeMouseInOutListner(hoverElement){
        hoverElement.removeEventListener("mouseover", () => {

        })
        hoverElement.removeEventListener("mouseout", () => {

        })
    }
    handleScroll = (event) => {
        let scrollProgressContainer = document.getElementById('scrollProgressContainer');
        let progress;
        let sectionTitle = document.getElementsByClassName('sectionTitle');
        let sections = document.getElementsByClassName('gb-content-row');
        for(let i=0;i < sections.length ;i++){
            let element_position = sections[i].getBoundingClientRect();
            let element_area = element_position.top+element_position.height;
            if( (element_area > 0) && (element_position.top < 10) ){
                this.setState({ section: sectionTitle[i].innerHTML,part : sectionTitle[i].getAttribute('data-part')});
                if(i<sections.length-1){
                    this.setState({next : i+1});
                    this.setState({hideSkipSectionText : false});
                }else{
                    this.setState({hideSkipSectionText : true});
                }
            }
        }

        if (scrollProgressContainer) {
            let currentPosition = scrollProgressContainer.getBoundingClientRect().y;
            let height = -1 *  scrollProgressContainer.getBoundingClientRect().height;
            // console.log(height)
            progress = (currentPosition * 100) / height;
            // console.log(this.state);
            this.setState({ progressBarWidth: progress});
        }

        let gbMoneyContentWrapper = document.getElementById("gbMoneyContentWrapper");
        if (gbMoneyContentWrapper) {
            let y = gbMoneyContentWrapper.getBoundingClientRect().y;
            // console.log(progress);
            if (y <= 0 && progress < 100) {
                document.getElementById('gbMoneyHeader').classList.add('gb-money-sticky-header');
                document.getElementById('gbMoneyHeader').classList.add('gb-money-fixed-header');
            } else {
                document.getElementById('gbMoneyHeader').classList.remove('gb-money-sticky-header');
                document.getElementById('gbMoneyHeader').classList.remove('gb-money-fixed-header');
            }
        }

        // direction up
        // if(this.oldScroll > progress && progress < 92 && progress > 0) {
        //     // console.log('direction up');
        // } else {
        // }
        this.oldScroll = progress;
    }

    initMoneyQuestionScroller() {
        // eslint-disable-next-line
        let moneyQuestionScroller;
        moneyQuestionScroller = new Swiper('.gb-money-question-scroller-container', {
            direction: "vertical",
            slidesPerView: "auto",
            freeMode: true,
            scrollbar: {
              el: ".gb-money-question-scrollbar"
            },
            mousewheel: true,
            on: {
                init: function () {
                    setTimeout(() => {
                        window.dispatchEvent(new Event('resize'));
                    }, 1);
                },
              }
          });
    }

    initMoneyQuestionSwiper() {
        // eslint-disable-next-line
        let moneyQuestionSwiper = new Swiper(".gb-money-question-swiper-container", {
            slidesPerView: 1,
            navigation: {
              nextEl: ".gb-money-question-swiper-button-next",
              prevEl: ".gb-money-question-swiper-button-prev"
            },
            on: {
              init: function () {
                  window.dispatchEvent(new Event('resize'));
              },
              slideChangeTransitionStart : function(){
                if(window.answerPopover !== undefined){
                    window.answerPopover.popover('dispose');
                }
              }
            },
        });
    }

    toggleQuestionModal = (type) => {
        //   console.log(type);
          if (type === 'hide') {
              document.body.classList.remove("gb-quiz-main-body");
              if(window.answerPopover !== undefined){
                window.answerPopover.popover('dispose');
            }
        } else {
            document.body.classList.add("gb-quiz-main-body");
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 10);
        }
    }
    onAnswer(event){
        let parentUl = event.target.closest('ul');
        parentUl.getElementsByClassName('gb-right-answer')[0].classList.add('active');
        parentUl.classList.add('active');
    }
}

export default DigitalAssets;
