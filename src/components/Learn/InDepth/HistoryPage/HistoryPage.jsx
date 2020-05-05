import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Newslatter from '../../../Newslatter/Newslatter';
import Swiper from "swiper";
import GlossaryPopover from '../../../GlossaryPopover/GlossaryPopover';

import './HistoryPage.scss';
import '../../Money101/Money101.scss';
import ShareComponent from '../../ShareComponent/ShareComponent';
import ExplainationPopover from '../../../ExplainationPopover/ExplainationPopover';

class HistoryPage extends Component {
    oldScroll;
    referralRoute;
    state = {
        progressBarWidth :0,
        section : 'Pre-Bitcoin',
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
                <div className="gb-money-main gb-history-main">
                    <section className="gb-money-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 offset-md-1">
                                    <div className="gb-money-dtl">
                                        {/* <div className="clearfix">
                                            <a href="/" className="gb-basic-btn"><i className="gb-left-arrow"></i>In-depth</a>
                                        </div> */}
                                        <h1 className="gb-in-depth-title">History</h1>
                                        <div className="gb-money-banner-dtl">
                                            <p>Find a nice, comfy chair and put on your reading glasses. It’s time for a history lesson</p>
                                            <p>In 2008, somebody (or somebodies) using the fake name <GlossaryPopover content="Satoshi Nakamoto"/>  created <GlossaryPopover content="Bitcoin"/>. Why? What happened before this event, and what happened after? Let’s explore.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-1">
                                    <div className="gb-dephth-right">
                                        <div className="gb-money-video">
                                            <img src={require('../../../../assets/images/in-depth/history-main.svg')}  alt="History" />
                                        </div>
                                        {/* Swiper */}
                                        <div className="gb-segment-blk">
                                            <h4>In this segment, you will learn:</h4>
                                            <div className="swiper-container gb-money-question-scroller-container">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <ul>
                                                            <li onClick={() => this.scrollToContent(0)} className="sectionTitle" data-part="Part I">Pre-Bitcoin</li>
                                                            <li onClick={() => this.scrollToContent(1)} className="sectionTitle" data-part="Part II">Bitcoin</li>
                                                            <li onClick={() => this.scrollToContent(2)} className="sectionTitle" data-part="Part III">Post Bitcoin</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="swiper-scrollbar gb-money-question-scrollbar"></div>
                                            </div>
                                            <div className="gb-next-menublk clearfix">
                                                {/* <a href="{null}" className="gb-next-menubtn"> */}
                                                <Link className="gb-next-menubtn" to="/learn/mining">
                                                Mining <i className="gb-right-arrow"></i>
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
                                            <span>3 Sections</span>
                                        </button>
                                    </h5>

                                </div>
                                <div id="collapseOne" className="collapse show gb-collapse-segment" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <ul>
                                            <li>Pre-Bitcoin</li>
                                            <li>Bitcoin</li>
                                            <li>Post Bitcoin</li>
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
                                        <span>History</span>
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
                                                    <h2>Pre-Bitcoin</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1 order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>As computer technology developed, so did a community of people concerned for (and willing to fight to protect) our digital privacy. They believe(d) that **privacy is a basic, necessary, and essential human right.** A group called the <GlossaryPopover content="Cypherpunks"/>  took it upon themselves to defend our privacy online. Cypher is a reference to code writing and punk a reference to, well... punks.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>The ‘Punks, led by Eric Hughes, Timothy May, and John Gilmore, created an email list in 1992 for the purpose of discussing <GlossaryPopover content="cryptography"/>  and digital privacy. In 1993, Hughes released a statement called “The Cypherpunk Manifesto” outlining his–and the group’s–goals.</p>
                                                        <p>He wrote, “We must defend our own privacy if we expect to have any... We the Cypherpunks are dedicated to… defending our privacy with cryptography… and with electronic money… We don't much care if you don't approve of the software we write. We know that software can't be destroyed and that a widely dispersed system can't be shut down.” The attitude of the Cypherpunks might be classified as Robin-Hood-esq Digital Bad-Assery. Iconic.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-history-img1">
                                                        <img src={require('../../../../assets/images/in-depth/history/history-img1.svg')}  alt="historyimg1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc gb-last-pera">
                                                        <p>The ‘Punks created a "<GlossaryPopover content="remailer"/>" email service in 1997 to communicate with each other anonymously. Shortly thereafter, they tossed around ideas for creating an anonymous digital currency. Some proposals, created by people like <GlossaryPopover content="Nick Szabo"/>  and <GlossaryPopover content="Wei Dai"/>, were b-money, Hashcash, and Bit Gold, none of which stuck.</p>
                                                        <p>An excerpt from the <GlossaryPopover content="Manifesto" />.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Bitcoin</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1 order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>In the midst of the 2008 global financial collapse, the<GlossaryPopover content="Bitcoin White Paper" /> was released online by an <GlossaryPopover content="anonymous"/>  figure using the name <GlossaryPopover content="Satoshi Nakamoto"/>. In the very first sentence of the White Paper, Nakamoto writes of the need to perform monetary transactions without the oversight of financial institutions. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>Over the last 10 years, many have tried to unmask the anonymous crusader, but no one has been able to determine who Nakamoto is.</p>
                                                        <p>In January 2009, the first Bitcoin <GlossaryPopover content="block"/>  (called the <GlossaryPopover content="genesis block"/>) was <GlossaryPopover content="mined"/>  by Nakamoto, and shortly after, they sent some bitcoins to a man named Hal Finney, a computer scientist and Cypherpunk. (Sidenote: some think Finney may have been Nakamoto. Finney died young and is currently <GlossaryPopover content="cryo-frozen"/>. Yes, we're serious. It’s not relevant, but it sure is interesting.).</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc gb-last-pera">
                                                        <p>In October 2009, the first Bitcoin exchange rate was listed at 1,309.03 bitcoins per dollar (quite lower than today!), and in 2010 the Bitcoin exchange Mt. Gox launched. We’ll circle back to that one.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Post Bitcoin</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1 order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>It would be inaccurate to write a history of Bitcoin without discussing the deep web–the hairy underbelly of the Internet that many black markets call home. Some <GlossaryPopover content="cryptocurrencies"/> thrive on the deep web, as they allow users to send each other funds digitally and privately.</p>
                                                        <p>Original Gawker article about the Silk Road, published in 2011.</p>
                                                        <p>In 2011, Gawker published an article somewhat praising the Silk Road, a deep web drug marketplace that used exclusively bitcoins as payment. Publicity lead to a surge in Silk Road use, and a proportional surge in the price of bitcoins. Even though the Silk Road was eventually shut down by the U.S. Government, its existence undeniably exposed many, many people to cryptocurrencies for the first time.</p>
                                                        <p>Also in 2011, Bitcoin saw the rise of its first major competitor. A man named <GlossaryPopover content="Charlie Lee"/>  (far from anonymously) created a cryptocurrency called Litecoin, which still exists today.</p>
                                                        <p>Let’s swing back around to Mt. Gox (pronounced Mount Gox). From 2011 to 2013, the Japan-based crypto <GlossaryPopover content="exchange"/>  surged in popularity, and by late 2013 it handled about 70% of all cryptocurrency trading volume online. Despite its success, in early 2014 Mt. Gox closed its trading platform and filed for bankruptcy. The platform admitted that, over the years, close to 900,000 bitcoins had been stolen (that’s a lot…), and they were no longer able to return customers’ money.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1 order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Let’s swing back around to Mt. Gox (pronounced Mount Gox). From 2011 to 2013, the Japan-based crypto <GlossaryPopover content="exchange"/>  surged in popularity, and by late 2013 it handled about 70% of all cryptocurrency trading volume online. Despite its success, in early 2014 Mt. Gox closed its trading platform and filed for bankruptcy. The platform admitted that, over the years, close to 900,000 bitcoins had been stolen (that’s a lot…), and they were no longer able to return customers’ money.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-history-img2">
                                                        <img src={require('../../../../assets/images/in-depth/history/history-img2.svg')}  alt="historyimg2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>After Mt. Gox closed, the price of bitcoin fell sharply (spoiler alert: it eventually ended up recovering). New exchanges with much, much tighter security protocols gained popularity. Some say that the closing of Mt. Gox signaled the end of the “Wild West” era for Bitcoin, after which there was far less theft and ambiguity in the space.</p>
                                                        <p>From 2014 onwards, the price of Bitcoin has trended steadily upwards. Along the way, many other cryptocurrencies and blockchain platforms came into existence. This is the time period when blockchain became mainstream, in a way.</p>
                                                        <p>Today, there are over a thousand cryptocurrencies, but Bitcoin still has the largest <GlossaryPopover content="market capitalization"/>  of them all. Many new cryptocurrencies are designed with a specific purpose in mind, whether it be supreme privacy or lightning-fast transaction times. Some characterize this period as cryptocurrency’s “adolescence.” The market is growing up.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc gb-last-pera">
                                                        <p>Bitcoin, cryptocurrencies, and blockchain technology have vivid pasts. Let’s try to sum it up in a couple sentences:</p>
                                                        <p>When the Internet was still young, some digital “punks” decided it would be a good idea to make a private, digital money, and in 2008 Bitcoin was released by an anonymous figure called Satoshi Nakamoto. Since then the cryptocurrency market has grappled with many challenges and seen a tremendous rise in value.</p>
                                                        <p>May the future be equally interesting!</p>
                                                        <p>Take the quiz below to find out how much of a historian you are…</p>
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
                                    <h2>Test yourself — take the History quiz!</h2>
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
                                        <h3>Now that you understand history, it’s time to tackle mining!</h3>
                                        <div className="gb-next-page-menu gb-mining-menu">
                                            <span>Mining</span>
                                            <div className="gb-letsgo-btnblk">
                                                <Link className="gb-letsgobtn" to="/learn/mining" >
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
                                            <li className="gb-blockchain-menu gb-cryptography-menu">
                                                <Link to="/learn/cryptography" >
                                                    Cryptography
                                                </Link>
                                            </li>
                                            <li className="gb-ethereum-menu gb-proofof-menu">
                                                <Link to="/learn/proof-of" >
                                                    Proof of...
                                                </Link>
                                            </li>
                                            <li className="gb-future-menu gb-scalability-menu">
                                                <Link to="/learn/scalability" >
                                                    Scalability
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
                                            <span>History : Quiz</span>
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
                                                                <h3>What was the purpose of the Cypherpunks?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio1" type="radio" name="question1" value="1" />
                                                                        <label htmlFor="radio1">To jam out to punk music</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio2" type="radio" name="question1" value="2" />
                                                                        <label htmlFor="radio2">To protect digital privacy</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio3" type="radio" name="question1" value="3" />
                                                                        <label htmlFor="radio3">To write code</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio3" type="radio" name="question1" value="3" />
                                                                        <label htmlFor="radio3">More than one of the above</label>
                                                                        <ExplainationPopover content="The Cypherpunks were created to protect our privacy when using the Internet. The way they did so was by writing code!"/>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #2</span>
                                                                <h3>True or False: we know who Satoshi Nakamoto was.</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio4" type="radio" name="question2" value="4" />
                                                                        <label htmlFor="radio4">True</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio5" type="radio" name="question2" value="5" />
                                                                        <label htmlFor="radio5">False</label>
                                                                        <ExplainationPopover content="Satoshi Nakamoto was the pen name used by the creator of Bitcoin. Their true identity is still a mystery."/>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #3</span>
                                                                <h3>What is the Silk Road?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio8" type="radio" name="question3" value="8" />
                                                                        <label htmlFor="radio8">An illicit online marketplace.</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio8" type="radio" name="question3" value="8" />
                                                                        <label htmlFor="radio8">One of the reasons that Bitcoin became popular.</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio8" type="radio" name="question3" value="8" />
                                                                        <label htmlFor="radio8">A reference to old Asian trade routes.</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio7" type="radio" name="question3" value="7" />
                                                                        <label htmlFor="radio7">All of the above.</label>
                                                                        <ExplainationPopover content="The Silk Road was a website where users could purchase all sorts of drugs and illicit materials. It was taken down by the FBI and its creator is still in jail."/>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #4</span>
                                                                <h3>Mt. Gox, the largest Bitcoin exchange in the world…</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio9" type="radio" name="question4" value="9" />
                                                                        <label htmlFor="radio9">The largest Bitcoin exchange in the world, at one point.</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio10" type="radio" name="question4" value="10" />
                                                                        <label htmlFor="radio10">Hacked, and lost close to 1 million bitcoins.</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio11" type="radio" name="question4" value="11" />
                                                                        <label htmlFor="radio11">Unable to reimburse customers for years.</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio12" type="radio" name="question4" value="12" />
                                                                        <label htmlFor="radio12">All of the above</label>
                                                                        <ExplainationPopover content="The Mt. Gox hack was an absolute disaster for many Bitcoiners, who saw their money disappear. Only after years was the Japan-based company able to give customers their money back."/>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #5</span>
                                                                <h3>True or False: Bitcoin was the first attempted digital currency.</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio13" type="radio" name="question5" value="13" />
                                                                        <label htmlFor="radio13">True</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio14" type="radio" name="question5" value="14" />
                                                                        <label htmlFor="radio14">False</label>
                                                                        <ExplainationPopover content="there were many attempts at a digital currency before Bitcoin came around, such as b-money, BitGold, and HashCash. Bitcoin was the first successful digital currency."/>
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
        document.title = "History | Goodbit101";
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

export default HistoryPage;