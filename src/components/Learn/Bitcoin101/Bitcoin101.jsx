import React, { Component } from 'react';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import './BitCoin101.scss';
import '../../Modals/QuizModal/QuizModal.scss';
import { Link } from "react-router-dom";
import Newslatter from '../../Newslatter/Newslatter';
// import QuizModal from '../../Modals/QuizModal/QuizModal';
import CommonFunctions from '../CommonFunctions';
import ShareComponent from '../ShareComponent/ShareComponent'
import GlossaryPopover from '../../GlossaryPopover/GlossaryPopover';
import ExplainationPopover from '../../ExplainationPopover/ExplainationPopover';
class Bitcoin101 extends Component {
    oldScroll;
    referralRoute;
    state = {
        progressBarWidth :0,
        section : '',
        part : 'Part I',
        next : 0,
        hideSkipSectionText:false
    }
    scrollToTop() {
        document.body.scrollIntoView({behavior: 'smooth',block:'start'});
    }
    render() {
        return (
            <React.Fragment>
                <main className="gb-money-main gb-bitcoin-main">
                    <section className="gb-money-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 offset-md-1">
                                    <div className="gb-money-dtl">
                                        <div className="clearfix">
                                            <Link to='/basics' className="gb-basic-btn"><i className="gb-left-arrow"></i> Basics</Link>
                                        </div>
                                        <h1 className="gb-basic-title-icon gb-bitcoin-icon">Bitcoin 101</h1>
                                        <div className="gb-money-banner-dtl">
                                            <p>The time has arrived, dear friends! Let’s talk Bitcoin.</p>
                                        </div>
                                    </div>
                                    {/* Swiper */}
                                    <div className="gb-segment-blk"  onMouseEnter={() => CommonFunctions.preventBodyScroll('hidden')}  onMouseLeave={() => CommonFunctions.preventBodyScroll('auto')}>
                                        <h4>In this segment, you will learn:</h4>
                                        <div className="swiper-container gb-money-question-scroller-container">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <ul>
                                                        <li onClick={() => this.scrollToContent(0)} className="sectionTitle" data-part="Part I">What is Bitcoin?</li>
                                                        <li onClick={() => this.scrollToContent(1)} className="sectionTitle" data-part="Part II">Why Bitcoin is so revolutionary</li>
                                                        <li onClick={() => this.scrollToContent(2)} className="sectionTitle" data-part="Part III">How it works</li>
                                                        <li onClick={() => this.scrollToContent(3)} className="sectionTitle" data-part="Part IV">Where you can use it?</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="swiper-scrollbar gb-money-question-scrollbar"></div>
                                        </div>
                                        <div className="gb-next-menublk clearfix">
                                            {/* <a href="{null}" className="gb-next-menubtn"> */}
                                            <Link className="gb-next-menubtn" to="/learn/blockchain-101">
                                                Blockchain 101 <i className="gb-right-arrow"></i>
                                            </Link>
                                            {/* </a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="gb-money-video">
                                        <div className="gb-money-video-inner">
                                            <div className="gb-video-icon">
                                                <img src={require('../../../assets/images/video-icon.svg')}  alt="Money-Video" />
                                            </div>
                                            <div className="gb-upcoming">
                                                <h2>Video coming soon</h2>
                                                <span>Scroll down for the full article</span>
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
                                            <span>4 Sections</span>
                                        </button>
                                    </h5>

                                </div>
                                <div id="collapseOne" className="collapse show gb-collapse-segment" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <ul>
                                            <li>What is Bitcoin?</li>
                                            <li>Why Bitcoin is so revolutionary</li>
                                            <li>How it works</li>
                                            <li>Where you can use it?</li>
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
                                        <i><img src={require('../../../assets/images/bitcoin.svg')}  alt="Dollar-icon"/></i>
                                        <span>Bitcoin 101</span>
                                    </div>
                                    <div className="gb-section-part">
                                        <div className="gb-section-left">
                                            <span><span>{this.state.part}:</span> {this.state.section}</span>
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
                                        {/* <div className="row">
                                            <div className="col-lg-6">

                                            </div>
                                        </div> */}
                                        <div className="row">
                                            <div className="col-lg-5 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>What is Bitcoin?</h2>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-10">
                                                        <div className="gb-money-content-dtl">
                                                            <div className="gb-money-content-desc">
                                                                <p>The simplest answer is digital money, but let’s back up.</p>
                                                                <p>People have been trying to create digital money since the Internet was invented, but there was little success until 2008. Right as we were going through the worst financial crisis in 70 years (Housing Crisis, etc.), Bitcoin was launched. Coincidence? You be the judge...</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-content-img gb-bitcoin-img1">
                                                        <img src={require('../../../assets/images/learn/bitcoin/bitcoin-img1.svg')}  alt="Bitcoin1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1 text-center order-change">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-content-img gb-bitcoin-img2">
                                                        <img src={require('../../../assets/images/learn/bitcoin/bitcoin-img2.svg')}  alt="Bitcoin2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Bitcoin was created by a person--or group of people?--using the pen-name <GlossaryPopover content="Satoshi Nakamoto" />. We still don’t know who they are, and maybe never will. Their identity is a mystery.</p>
                                                        <p>But that’s okay, maybe even a good thing, because there is no CEO of Bitcoin–it’s not a corporation, it’s a community. Any potential changes are decided on by the people who actually use it. It’s run by the people, for the people... inside the people-- okay maybe not the last one.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-3 text-lg-center">
                                                <div className="gb-content-title">
                                                    <h2>Why Bitcoin is so revolutionary?</h2>
                                                </div>
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-content-img gb-bitcoin-img3">
                                                        <img src={require('../../../assets/images/learn/bitcoin/bitcoin-img3.svg')}  alt="Bitcoin3" />
                                                    </div>
                                                </div>
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Wait, wait, wait. What's so useful about Bitcoin? We already have credit cards...what does Bitcoin do that they can’t? It turns out, quite a few things:</p>
                                                        <p>Bitcoin is a truly global monetary system. Sending bitcoins to your neighbor is no different from sending bitcoins to your aunt in New Zealand, or to an astronaut on the ISS. If you have an Internet connection, you can use it. Period.</p>
                                                        <p>It’s cheap to use. Bitcoin transactions cost only a few cents, no matter how much you’re sending.</p>
                                                        <p>It’s fast. Bitcoin transactions take minutes or less to process, making them quicker than any kind of bank or wire transfer.</p>
                                                        <p>It’s <GlossaryPopover content="scarce" />. Only 21 million Bitcoins will ever exist, giving them durable value.</p>
                                                        <p>It’s safe. Cutting edge <GlossaryPopover content="cryptography" /> shields Bitcoin transactions from tampering, making it hacker-proof.</p>
                                                        <p>Finally, Bitcoin is <GlossaryPopover content="peer-to-peer" />. Transactions don’t go through a third party, like a bank. Instead they go directly between individual people. No bank or government can freeze your funds or deduct from your account.</p>
                                                        <p>These factors combine to create a new form of entirely digital money, run by a global collection of people, that is inexpensive and quick to use and safe from fraud. Does this sound too good to be true? Does it sound like Magic Internet Money™?</p>
                                                        <p>Let’s talk details in the next section.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>How it works</h2>
                                                </div>
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>In order to function, Bitcoin is backed up by a trifecta of high-level mathematics, <GlossaryPopover content="cryptography" />, and computer science. As Shakespeare once wrote, “buckle thine seatbelts.”</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-content-img gb-bitcoin-img4">
                                                        <img src={require('../../../assets/images/learn/bitcoin/bitcoin-img4.svg')}  alt="Bitcoin4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1 text-center order-change">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-content-img gb-bitcoin-img5">
                                                        <img src={require('../../../assets/images/learn/bitcoin/bitcoin-img5.svg')}  alt="Bitcoin5" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>For any payment system to work, we need to keep track of transactions and account balances. Transactions are usually recorded in something called a <GlossaryPopover content="Ledger" />. Today, banks and companies like PayPal keep private, internal ledgers detailing the account holdings of each customer. This paints a huge target on these ledgers for hackers, making them potentially unsafe. Banks lose money, but they also lose your personal information (remember Equifax?).</p>
                                                        <p>Bitcoin's ledger is the exact opposite.</p>
                                                        <p>Instead of having one top secret copy that only a few people can see, the Bitcoin ledger is maintained by people all around the world who use computers to check it for fraudulent activity. These people are called <GlossaryPopover content="miners" />.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Now, how you do let thousands of strangers monitor all these transactions (including yours) without the risk of identity theft? Good question! In order to keep your info private, no names are used in the Bitcoin ledger. Instead, your account is identified only by a long, random string of numbers and letters. There’s a lot more going on under the hood, but using Bitcoin is quick and easy, and we’ll show you how! For more information about the internal mechanisms of Bitcoin, check out the in-depth sections on Mining and Cryptography.</p>
                                                        <p>So that’s how Bitcoin works. What can you do with it?</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1 text-right">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-content-img gb-bitcoin-img6">
                                                        <img src={require('../../../assets/images/learn/bitcoin/bitcoin-img6.svg')}  alt="Bitcoin6" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        {/* <div className="row">
                                            <div className="col-lg-6">

                                            </div>
                                        </div> */}
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Where you can use it?</h2>
                                                </div>
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>We’re rapidly approaching a time when you can buy just about anything with bitcoin. You can buy houses, cars, pay in restaurants, or anything on Amazon using Purse.io (no, we aren’t sponsored!). The bitcoin marketplace is growing rapidly. As awareness grows, more and more retail stores are opting to accept it.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1 text-center">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-content-img gb-bitcoin-img7">
                                                        <img src={require('../../../assets/images/learn/bitcoin/bitcoin-img7.svg')}  alt="Bitcoin7" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1 text-center order-change">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-content-img gb-bitcoin-img8">
                                                        <img src={require('../../../assets/images/learn/bitcoin/bitcoin-img8.svg')}  alt="Bitcoin8" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Besides use as a method of payment for goods, Bitcoin is popularly used as a payment mechanism between people. Whether for paying a debt, paying your rent, or sending remittances to your family, Bitcoin is an easy choice.
                                                        We threw a lot of stuff at you, so let’s recap:</p>
                                                        <p>Bitcoin is</p>
                                                        <ul>
                                                            <li>The world's first global money</li>
                                                            <li>Entirely digital</li>
                                                            <li>Limited in supply</li>
                                                            <li>Safe to use</li>
                                                            <li>And <GlossaryPopover content="peer-to-peer" />, meaning not controlled by any bank or government</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>We’d also like to point out that Bitcoin is still evolving. <GlossaryPopover content="Developers" /> are working every day to make things faster and easier to use for everyone. There are still many barriers to overcome before Bitcoin becomes a seamless global payment system.</p>
                                                        <p>But the fact that Bitcoin is still evolving is part of the reason why it's so exciting.</p>
                                                        <p>Bitcoin has already inspired the creation of thousands of other digital currencies, known as <GlossaryPopover content="cryptocurrencies" />  (also called Cryptos) that can be used for a slew of applications. There are thousands of brilliant minds working to improve these currencies every day, and they’re all competing to try and create a new and improved monetary system–for all of us.</p>
                                                        <p>Take the quiz below to test your Bitcoin knowledge, and then move on to Blockchain 101 to learn about the ledger technology Bitcoin uses.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1 text-center">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-content-img gb-bitcoin-img9">
                                                        <img src={require('../../../assets/images/learn/bitcoin/bitcoin-img9.svg')}  alt="Bitcoin9" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="gb-summary-blk">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 offset-md-1">
                                    <div className="gb-summary-title">
                                        <h3>TLDR<span>Summary</span></h3>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="gb-summary-dtl">
                                                <h3>What is Bitcoin?</h3>
                                                <ul>
                                                    <li>• In short, <GlossaryPopover content="decentralized" />  digital money</li>
                                                    <li>• Bitcoin is controlled by the community of people that use it</li>
                                                </ul>
                                            </div>
                                            <div className="gb-summary-dtl">
                                                <h3>Why is Bitcoin so revolutionary?</h3>
                                                <ul>
                                                    <li>• It’s cheap to use, and works globally</li>
                                                    <li>• It’s fast, and safe to use</li>
                                                    <li>• There’s a limited supply of Bitcoin, and bitcoins are sent directly <GlossaryPopover content="peer-to-peer" /> rather than through centralized middlemen</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="gb-summary-dtl">
                                                <h3>How does Bitcoin work?</h3>
                                                <ul>
                                                    <li>• Using complicated mathematics, <GlossaryPopover content="cryptography" />, and computer science, Bitcoin uses a worldwide network of individuals called <GlossaryPopover content="miners" /> to maintain and secure the system</li>
                                                    <li>• All accounts are identified only by random strings of numbers and letters</li>
                                                </ul>
                                            </div>
                                            <div className="gb-summary-dtl">
                                                <h3>How can Bitcoin be used?</h3>
                                                <ul>
                                                    <li>• Bitcoin can be used to pay for a number of goods and servicers; anything on Amazon can be bought with bitcoins, and many stores are starting to accept it</li>
                                                    <li>• It’s often used as a payment system between individuals. Bitcoin is a very popular currency for remittances, for instance.</li>
                                                </ul>
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
                                    <h2>Test yourself — take the Bitcoin 101 quiz!</h2>
                                    <span>Total time • 6 MIN</span>
                                    <div className="gb-begin-blk">
                                    <Link to="#" className="gb-begin-btn" onClick={() => this.toggleQuestionModal('show')}>Begin <i className="gb-right-arrow"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section className="gb-next-pageblk">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 offset-md-1">
                                    <div className="gb-next-page-dtl">
                                        <div className="row">
                                            <div className="col-xl-10">
                                                <h3>Now that you understand bitcoin, it’s time to tackle blockchain!</h3>
                                            </div>
                                        </div>
                                        <div className="gb-next-page-menu gb-next-blockchain-menu">
                                            <span><i><img src={require('../../../assets/images/money/blockchain-icon-menu.svg')} alt="blockchain" /></i> Blockchain 101</span>
                                            <div className="gb-letsgo-btnblk">
                                                <Link className="gb-letsgobtn" to="/learn/blockchain-101" >
                                                    Let’s go<i className="gb-right-arrow"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-1">
                                    <div className="gb-skip-next-page">
                                        <h3>Or, skip ahead.</h3>
                                        <ul>
                                            <li className="gb-ethereum-menu">
                                                <Link to="/learn/ethereum-101" >
                                                {/* <a href="{null}"> */}
                                                    <i>
                                                        <img src={require('../../../assets/images/money/ethereum-icon-menu.svg')}  alt="Ethereum"/>
                                                    </i>
                                                    Ethereum 101
                                                {/* </a> */}
                                                </Link>
                                            </li>
                                            <li className="gb-future-menu">
                                                {/* <a href="{null}"> */}
                                                <Link to="/learn/future-101" >

                                                    <i>
                                                        <img src={require('../../../assets/images/money/future-icon-menu.svg')}  alt="Future"/>
                                                    </i>
                                                    The Future 101
                                                </Link>
                                                {/* </a> */}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                   <Newslatter/>
                </main>
                <div className="gb-quiz-money-modal gb-quiz-bitcoin-modal">
                    <div className="gb-quiz-modal">
                        <div className="gb-quiz-body">
                            <div className="container">
                                <div className="gb-quiz-header">
                                    <div className="gb-quiz-head-left">
                                        <i><img src={require('../../../assets/images/goodbit-icon.svg')} alt="Goodbit-icon" /></i>
                                        <span>Bitcoin 101: Quiz</span>
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
                                                            <h3>Bitcoin was created by...</h3>
                                                            <ul>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio1" type="radio" name="question1" value="1" />
                                                                    <label htmlFor="radio1">A corporation</label>
                                                                </li>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio2" type="radio" name="question1" value="2" />
                                                                    <label htmlFor="radio2">Satoshi Nakamoto</label>
                                                                    <ExplainationPopover content="The inventor of Bitcoin is known as Satoshi Nakamoto. Their true identity is still a mystery. They could have been an individual, or a group of people. We still do not know."/>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio3" type="radio" name="question1" value="3" />
                                                                    <label htmlFor="radio3">Miners</label>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio4" type="radio" name="question1" value="4" />
                                                                    <label htmlFor="radio4">IBM</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #2</span>
                                                            <h3>You can use Bitcoin as long as you have</h3>
                                                            <ul>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio5" type="radio" name="question2" value="5" />
                                                                    <label htmlFor="radio5">A bank account</label>
                                                                </li>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio6" type="radio" name="question2" value="6" />
                                                                    <label htmlFor="radio6">An Internet connection</label>
                                                                    <ExplainationPopover content="Anyone with an Internet connection can send and receive Bitcoin, regardless of nationality, location, or documentation. Buying Bitcoin might be more or less tricky depending on where you live, but anyone can use it."/>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio7" type="radio" name="question2" value="7" />
                                                                    <label htmlFor="radio7">A valid passport</label>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio8" type="radio" name="question2" value="8" />
                                                                    <label htmlFor="radio8">Lucious hair like Jared Leto</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #3</span>
                                                            <h3>What do miners do?</h3>
                                                            <ul>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio9" type="radio" name="question3" value="9" />
                                                                    <label htmlFor="radio9">Check incoming Bitcoin transactions for fraudulent activity</label>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio10" type="radio" name="question3" value="10" />
                                                                    <label htmlFor="radio10">Lump transactions into blocks</label>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio11" type="radio" name="question3" value="11" />
                                                                    <label htmlFor="radio11">Receive Bitcoin in return for their work</label>
                                                                </li>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio12" type="radio" name="question3" value="12" />
                                                                    <label htmlFor="radio12">All of the above</label>
                                                                    <ExplainationPopover content="Miners serve all these functions in the Bitcoin network. They are what keep transactions secure, and the more miners there are in the network the safer the network is. Anyone can become a miner."/>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #4</span>
                                                            <h3>True or false: there is a limit of 21 million Bitcoins that will ever exist.</h3>
                                                            <ul>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio13" type="radio" name="question4" value="13" />
                                                                    <label htmlFor="radio13">True</label>
                                                                    <ExplainationPopover content="New Bitcoins are created by miners every day as part of the Bitcoin system. The rate of Bitcoin creation slows down over time, such that there will never be more than 21 million."/>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio14" type="radio" name="question4" value="14" />
                                                                    <label htmlFor="radio14">False</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #5</span>
                                                            <h3>You can use Bitcoin to</h3>
                                                            <ul>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio15" type="radio" name="question5" value="15" />
                                                                    <label htmlFor="radio15">Transfer funds to anyone, anywhere, who also uses Bitcoin</label>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio16" type="radio" name="question5" value="16" />
                                                                    <label htmlFor="radio16">Buy things</label>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio17" type="radio" name="question5" value="17" />
                                                                    <label htmlFor="radio17">Store your funds</label>
                                                                </li>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio18" type="radio" name="question5" value="18" />
                                                                    <label htmlFor="radio18">All of the above</label>
                                                                    <ExplainationPopover content="There's a lot you can do with Bitcoin. You can send it to anyone using their address. You can buy things at any store that accepts Bitcoin (list at <a href='https://airbitz.co/search?term=&location=Current+Location' target='_blank' rel='noopener noreferrer'>https://airbitz.co/search?term=&location=Current+Location</a>). You can buy anything on Amazon using Bitcoin at <a href='https://purse.io/shop' target='_blank' rel='noopener noreferrer'>Purse.io</a>. And, lastly, you can leave funds in Bitcoin safely over time."/>
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
            </React.Fragment>
        );
    }

    componentDidMount() {
        document.title = "Bitcoin101 | Goodbit101";
        this.referralRoute = window.location.href;
        this.initMoneyQuestionScroller();
        this.initMoneyQuestionSwiper();
        let sectionTitle = document.getElementsByClassName('sectionTitle');
        this.setState({ section: sectionTitle[0].innerHTML,part : sectionTitle[0].getAttribute('data-part')});
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
    scrollToContent(i) {
        let element = document.getElementsByClassName('gb-content-row');
        // element.scrollTop = 0;
        element[i].scrollIntoView({behavior: 'smooth',block:'start'});
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

export default Bitcoin101;