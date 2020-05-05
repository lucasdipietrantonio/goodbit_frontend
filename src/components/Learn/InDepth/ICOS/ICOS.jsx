import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Swiper from "swiper";
import Newslatter from '../../../Newslatter/Newslatter';
import GlossaryPopover from '../../../GlossaryPopover/GlossaryPopover';

import './ICOS.scss';
import '../../Money101/Money101.scss';
import ShareComponent from '../../ShareComponent/ShareComponent';
import ExplainationPopover from '../../../ExplainationPopover/ExplainationPopover';

class ICOS extends Component {
    oldScroll;
    referralRoute;
    state = {
        progressBarWidth :0,
        section : 'What is an ICO?',
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
                <div className="gb-money-main gb-icos-main">
                    <section className="gb-money-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 offset-md-1">
                                    <div className="gb-money-dtl">
                                        {/* <div className="clearfix">
                                            <a href="/" className="gb-basic-btn"><i className="gb-left-arrow"></i>In-depth</a>
                                        </div> */}
                                        <h1 className="gb-in-depth-title">ICO’s</h1>
                                        <div className="gb-money-banner-dtl">
                                            <p>According to industry news sources, <GlossaryPopover content="ICOs"/> raised about $100 million in 2016, and according to Business Insider, they raised $5.5 Billion in 2017, over a 50x increase! In the first half of 2018, ICOs raised $13.7 Billion, according to PwC. So yeah, ICOs are… popular. </p>
                                            <p>Whether you are an investor, a blockchain developer, or the chairman of the <GlossaryPopover content="SEC"/>, ICOs are one of the most hotly debated topics in the <GlossaryPopover content="cryptocurrency"/> space today. Let's dive in.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-1">
                                    <div className="gb-dephth-right">
                                        <div className="gb-money-video">
                                            <img src={require('../../../../assets/images/in-depth/icos-main.svg')}  alt="Icon" />
                                        </div>
                                        {/* Swiper */}
                                        <div className="gb-segment-blk">
                                            <h4>In this segment, you will learn:</h4>
                                            <div className="swiper-container gb-money-question-scroller-container">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <ul>
                                                            <li onClick={() => this.scrollToContent(0)} className="sectionTitle" data-part="Part I">What is an ICO?</li>
                                                            <li onClick={() => this.scrollToContent(1)} className="sectionTitle" data-part="Part II">Regulatory Issues</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="swiper-scrollbar gb-money-question-scrollbar"></div>
                                            </div>
                                            <div className="gb-next-menublk clearfix">
                                                {/* <a href="{null}" className="gb-next-menubtn"> */}
                                                <Link className="gb-next-menubtn" to="/learn/history">
                                                History <i className="gb-right-arrow"></i>
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
                                            <span>2 Sections</span>
                                        </button>
                                    </h5>

                                </div>
                                <div id="collapseOne" className="collapse show gb-collapse-segment" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <ul>
                                            <li>What is an ICO?</li>
                                            <li>Regulatory Issues</li>
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
                                        <span>ICO’s</span>
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
                                                    <h2>What is an ICO?</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p><GlossaryPopover content="ICO"/>  is short for Initial Coin Offering. The term comes from IPO, or Initial Public Offering, an event where a company becomes "public" and openly sells stock. In this case, instead of selling stock, companies sell a digital <GlossaryPopover content="token"/>  that mimics, but often does not actually legally represent a stake in the company.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Let's say that again: when you buy Apple stock, for instance, you are buying a tiny piece of Apple; you own a bit of the company. When you buy an ICO, or a coin released by a company, you do not own any of that company. So what's the point, then?</p>
                                                        <p>The easiest way to explain how ICOs work is to walk through an example:</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>You and I decide to start a company that (we think) will reinvent the blender. We call the company Blendify. We spend hours and hours developing rotor technology and building prototypes.</p>
                                                        <p>We realize that in order to fund production of our first line of blenders, the Blendify 1.0 Series, we need $150,000. No problem. We create a token, called BlendifyCoin.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>We create 1,000,000 tokens, of which we keep 70%, and sell the other 30% for 50 cents each. People can trade us <GlossaryPopover content="cryptocurrency"/>  for our tokens—that's the ICO itself. Then, we sell the crypto we receive from our ICO and use the money to produce our first blenders.</p>
                                                        <p>Investors receive our token, and we receive the funds we need to thrive.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-icos-img1">
                                                        <img src={require('../../../../assets/images/in-depth/icos/icos-img1.svg')}  alt="icos-img1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Even though Blendify coins do not represent a stake in Blendify, the price of Blendify coins will likely be based on the same market factors that determine the prices of stocks: confidence in our company, earnings reports, etc.</p>
                                                        <p>ICOs are poised to (and already are, in some ways) change the nature of <GlossaryPopover content="venture capital"/>. </p>
                                                        <p>Traditionally, raising money for a new company is a very expensive, legally complicated process. As a result, companies looking to gain funding generally raise money from a small number of wealthy investors.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Because ICOs are far less regulated, and because a large number of tokens can be created, companies can effectively <GlossaryPopover content="crowdfund"/> their projects, even if they need many millions of dollars to launch their first product.</p>
                                                        <p>For example: let’s say we need a million dollars for our company. Instead of needing to find 10 investors, each to putting in $100,000 to reach a one million dollar goal, we can now find 10,000 people to each give $100, or 100,000 people to each give $10. This may be far easier to do.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Our economic crowdsourcing culture was launched on platforms like Gofundme and Indiegogo. Crowdsourcing excites entrepreneurs and investors alike, since the funding model allows regular investors to make early stage investments typically reserved for Venture Capitalists. Some think ICOs are the next step in crowdfunding technology.</p>
                                                        <p>And here’s the thing–our tokens are customizable, and we can give them a function. They could be redeemable for a product or service in the future at a discounted price. Or maybe the token plays some role in the product itself, after launch.</p>
                                                        <p>As exciting as ICOs are, investing in them also comes with certain risks.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Any venture capitalist will do extensive research before putting potentially hundreds of thousands, or millions, of dollars into a project. Using an ICO to raise money allows many people to invest very small amounts of money. This lowers the incentive to perform extensive research before investing, because "it’s only 10 bucks, right?"</p>
                                                        <p>This lack of <GlossaryPopover content="due diligence"/> has allowed ICOs to raise enormous amounts of money, sometimes without even having a functioning prototype of the product. Some ICOs have been complete scams, the founders never even intending to launch a product. They simply take the crowdfunded money and run.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Regulatory Issues</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Scams like these have drawn lots of attention from regulatory bodies like the United States Securities and Exchange Commission (<GlossaryPopover content="SEC"/>). They have already cracked down on a number of ICO-scams and are likely to play a continuing role in the debate over the legality of ICOs.</p>
                                                        <p>But what's this debate about in the first place?</p>
                                                        <p>The debate is about <GlossaryPopover content="Securities"/>. Here's the deal:</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>A security is something you invest in, expecting to make a profit based solely on the work of other people. For instance, you buy Apple stock, hoping that all the hard work Apple is doing causes the stock price to rise. For that reason, Apple stock is a security.</p>
                                                        <p>Securities are regulated by the Securities and Exchange Commission, which controls the sale of Securities and oversees that everything occurs in a legal manner. The laws the SEC works with were designed before ICOs even existed, which means old laws are being interpreted to fit an entirely new technology. Regulators are struggling to fit old definitions to new tech.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>So here's the question: are ICOs securities? How different is an ICO from an <GlossaryPopover content="IPO"/>?</p>
                                                        <p>Some people think ICOs being classified as securities would invite more regulation, dispelling scams and welcoming true innovators. Others think ICOs are completely outside the jurisdiction of the SEC. Only time will tell what the SEC actually decides, but perhaps a small hint is that they declared the two largest <GlossaryPopover content="cryptocurrencies"/>, <GlossaryPopover content="Bitcoin"/>  and <GlossaryPopover content="Ethereum"/>, are not securities, even though Ethereum did an ICO way back when.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Regardless of securities status, the ICO can be a powerful tool. It allows founders to raise money from the general public instead of just wealthy investors, giving personal investors the ability to get in early on projects and potentially see massive returns on their investments. This a privilege traditionally reserved only for the very wealthy.</p>
                                                        <p>But be careful out there. ICOs are not always a safe bet, and if it sounds too good to be true, well, it might not be true. The BlendifyCoin pre-sale will begin on…</p>
                                                        <p>Take the quiz below to test your ICO knowledge!</p>
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
                                    <h2>Test yourself — take the ICO's quiz!</h2>
                                    <span>Total time • 6 MIN</span>
                                    <div className="gb-begin-blk">
                                    <a href={null} className="gb-begin-btn" onClick={() => this.toggleQuestionModal('show')}>Begin <i className="gb-right-arrow"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="gb-quiz-money-modal">
                        <div className="gb-quiz-modal">
                            <div className="gb-quiz-body">
                                <div className="container">
                                    <div className="gb-quiz-header">
                                        <div className="gb-quiz-head-left">
                                            <i><img src={require('../../../../assets/images/goodbit-icon.svg')} alt="Goodbit-icon" /></i>
                                            <span>ICO's : Quiz</span>
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
                                                                <h3>“ICO” is short for</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio1" type="radio" name="question1" value="1" />
                                                                        <label htmlFor="radio1">Interactive Cryptocurrency Operation</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio2" type="radio" name="question1" value="2" />
                                                                        <label htmlFor="radio2">International Coin Opening</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio3" type="radio" name="question1" value="3" />
                                                                        <label htmlFor="radio3">Initial Coin Offering</label>
                                                                        <ExplainationPopover content="ICO is an acronym for Initial Coin Offering. This is said to mimic stock IPOs, or Initial Public Offerings of stock."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio4" type="radio" name="question1" value="4" />
                                                                        <label htmlFor="radio4">Integrated Community O-something</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #2</span>
                                                                <h3>True or False: Coins you buy from a company during an ICO reflect a legal equity stake in that company.</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio5" type="radio" name="question2" value="5" />
                                                                        <label htmlFor="radio5">True</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio6" type="radio" name="question2" value="6" />
                                                                        <label htmlFor="radio6">False</label>
                                                                        <ExplainationPopover content="Most often, coins or tokens bought during an ICO do not represent an equity stake, meaning users do not receive dividends from the company or have voting rights."/>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #3</span>
                                                                <h3>ICOs are</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio7" type="radio" name="question3" value="7" />
                                                                        <label htmlFor="radio7">Securities</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio8" type="radio" name="question3" value="8" />
                                                                        <label htmlFor="radio8">Not Securities</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio9" type="radio" name="question3" value="9" />
                                                                        <label htmlFor="radio9">It’s complicated…</label>
                                                                        <ExplainationPopover content="The unfortunate answer is that ICOs do not all fall into one category or another. What we do know is that the United States SEC has declared Bitcoin and Ethereum to be non-securities. The jury is still out on many other ICOs."/>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #4</span>
                                                                <h3>What is the difference between Venture Capital and Crowdsourcing?</h3>
                                                                <ul>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio10" type="radio" name="question4" value="10" />
                                                                        <label htmlFor="radio10">Venture Capital typically means taking a few big checks from a small number of people, Crowdsourcing typically means taking a lot of small checks from a ton of people.</label>
                                                                        <ExplainationPopover content="When entrepreneurs receive venture funding, it’s usually from a few firms and the amounts given are larger. When entrepreneurs raise from crowdfunding, many people each give small amounts."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio11" type="radio" name="question4" value="11" />
                                                                        <label htmlFor="radio11">Crowdsourcing typically means taking a few big checks from a small number of people, Venture Capital typically means taking a lot of small checks from a ton of people.</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio12" type="radio" name="question4" value="12" />
                                                                        <label htmlFor="radio12">They are the same thing.</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #5</span>
                                                                <h3>Before ICO’s, how did people crowdfund?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio13" type="radio" name="question5" value="13" />
                                                                        <label htmlFor="radio13">They didn’t, silly goose.</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio14" type="radio" name="question5" value="14" />
                                                                        <label htmlFor="radio14">Using online platforms.</label>
                                                                        <ExplainationPopover content="Before ICO’s came around, people used online platforms like Indiegogo and GoFundMe to crowdsource projects. The difference is that these platforms act as middlemen, whereas ICOs allow people to crowdsource in a decentralized system."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio15" type="radio" name="question5" value="15" />
                                                                        <label htmlFor="radio15">What’s crowdfunding?</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio16" type="radio" name="question5" value="16" />
                                                                        <label htmlFor="radio16">They stood on street corners and asked for cash.</label>
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

                    <Newslatter/>
                </div>
            </React.Fragment>
         );
    }

    componentDidMount() {
        document.title = "ICO | Goodbit101";
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

export default ICOS;