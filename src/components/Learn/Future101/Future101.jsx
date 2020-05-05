import React, { Component } from 'react';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import './Future101.scss';
import '../../Modals/QuizModal/QuizModal.scss';
import { Link } from "react-router-dom";
import Newslatter from '../../Newslatter/Newslatter';
// import QuizModal from '../../Modals/QuizModal/QuizModal';
import CommonFunctions from '../CommonFunctions';
import ShareComponent from '../ShareComponent/ShareComponent';
import GlossaryPopover from '../../GlossaryPopover/GlossaryPopover';
import ExplainationPopover from '../../ExplainationPopover/ExplainationPopover';
class Future101 extends Component {
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
                <main className="gb-money-main gb-future-main">
                    <section className="gb-money-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 offset-md-1">
                                    <div className="gb-money-dtl">
                                        <div className="clearfix">
                                            {/* <a href="{null}" className="gb-basic-btn"> */}
                                            <Link to='/basics' className="gb-basic-btn"><i className="gb-left-arrow"></i> Basics</Link>
                                            {/* </a> */}
                                        </div>
                                        <h1 className="gb-basic-title-icon gb-future-icon">The Future of Blockchain</h1>
                                        <div className="gb-money-banner-dtl">
                                            <p>
                                                It’s the FUTURE. People flying around on jetpacks, eating android hotdogs with digital hot sauce. Artificially-Intelligent-Robot Michael Jackson. “Beep bop Yeehee”. In this strange and wonderful future world, <GlossaryPopover content="blockchain" /> might just play an integral role in our lives. Let’s see how.
                                            </p>
                                        </div>
                                    </div>
                                    {/* Swiper */}
                                    <div className="gb-segment-blk"  onMouseEnter={() => CommonFunctions.preventBodyScroll('hidden')}  onMouseLeave={() => CommonFunctions.preventBodyScroll('auto')}>
                                        <h4>In this segment, you will learn:</h4>
                                        <div className="swiper-container gb-money-question-scroller-container">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <ul>
                                                        <li onClick={() => this.scrollToContent(0)} className="sectionTitle" data-part="Part I">Blockchain review</li>
                                                        <li onClick={() => this.scrollToContent(1)} className="sectionTitle" data-part="Part II">Financial applications</li>
                                                        <li onClick={() => this.scrollToContent(2)} className="sectionTitle" data-part="Part III">Use cases</li>
                                                        <li onClick={() => this.scrollToContent(3)} className="sectionTitle" data-part="Part IV">Smart contracts</li>
                                                        <li onClick={() => this.scrollToContent(4)} className="sectionTitle" data-part="Part V">A bit about DAOs</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="swiper-scrollbar gb-money-question-scrollbar"></div>
                                        </div>
                                        <div className="gb-next-menublk clearfix">
                                            {/* <a href="{null}" className="gb-next-menubtn"> */}
                                            <Link className="gb-next-menubtn" to="/learn/money-101">
                                            Money 101 <i className="gb-right-arrow"></i>
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
                                            <span>5 Sections</span>
                                        </button>
                                    </h5>

                                </div>
                                <div id="collapseOne" className="collapse show gb-collapse-segment" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <ul>
                                            <li>Blockchain review</li>
                                            <li>Financial applications</li>
                                            <li>Use cases</li>
                                            <li>Smart Contracts</li>
                                            <li>A bit about DAOs</li>
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
                                        <i><img src={require('../../../assets/images/money/future-icon-menu.svg')}  alt="Dollar-icon"/></i>
                                        <span>Future 101</span>
                                    </div>
                                    <div className="gb-section-part">
                                        <div className="gb-section-left">
                                            <span><span>{this.state.part}:</span> {this.state.section}</span>
                                        </div>
                                        <div className="gb-section-right">
                                            {/* <a href="{null}"> */}
                                            <a  onClick={() => this.scrollToContent(this.state.next)} className={this.state.hideSkipSectionText ? 'd-none' : '' }>Skip to next section</a>
                                            {/* </a> */}
                                        </div>
                                    </div>
                                    <div className="gb-money-back">
                                        {/* <a href="{null}"> */}
                                            <a onClick={() => this.scrollToTop()}>Back to top <i className="gb-up-arrow"></i></a>
                                        {/* </a> */}
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
                                            <div className="col-lg-7 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Blockchain review</h2>
                                                </div>
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>First, let's recap what makes <GlossaryPopover content="blockchain" /> technology important.</p>
                                                        <p>A blockchain is:</p>
                                                        <p>Permanent. Once information is stored on it, it will be there forever, and it can never be tampered with.</p>
                                                        <p>Verifiable. Every entry has been approved and has a timestamp, preventing fraudulent activity.</p>
                                                        <p>And finally, <GlossaryPopover content="distributed" />. The people that keep the system in check aren't all employed by a single entity–they're all contributing on their own, from around the world, democratizing power.</p>
                                                        <p>So, how are we using blockchains today?</p>
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
                                                    <h2>Financial applications</h2>
                                                </div>
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Right now, <GlossaryPopover content="blockchain" /> is most popularly used in <GlossaryPopover content="cryptocurrencies" /> like Bitcoin. Cryptocurrencies allow you to safely, cheaply, and quickly send money to anyone, anywhere. Anyone with an Internet connection can use cryptocurrencies—let's consider that fact for a second.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-future-img1">
                                                        <img src={require('../../../assets/images/learn/future/future-img1.svg')}  alt="Futureimg1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-5 order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-future-img2">
                                                        <img src={require('../../../assets/images/learn/future/future-img2.svg')}  alt="Futureimg2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>An estimated two billion people worldwide have no access to financial services. They can’t get a loan, store funds, or transfer money to others safely. Really think about that for a second.</p>
                                                        <p>Cryptocurrencies, powered by blockchain technology, change all of that, giving financial access to anybody with a smartphone (true, not everyone has a smartphone. But this is better than what we have today.). No financial institution or minimum balance involved.</p>
                                                        <p>There are lots of financial use cases for blockchain, but let’s now think outside the box to see where this technology could take us.</p>
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
                                        <div className="row">
                                            <div className="col-lg-7 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Use cases</h2>
                                                </div>
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>As revolutionary as they are, <GlossaryPopover content="cryptocurrencies" /> are just the tip of the iceberg. <GlossaryPopover content="Blockchains" /> can do much more than store financial transactions–in fact, they can secure and verify all sorts of information.</p>
                                                        <p>Let’s explore how blockchain could be integrated into or even replace the systems we use today, making them more open and efficient. Many of these applications are still being built, but here’s a taste of what blockchain could change.</p>
                                                        <p>Identity. Today's tech giants have unprecedented data on all of us. What we like to watch, what we search for, what we buy, even where we are. Imagine a world where you have complete control over your personal data, with no one peeking over your shoulder. So long, <GlossaryPopover content="Big Brother" /> !</p>
                                                        <p>Voting. There's an election coming up. There always is. And when it happens, we'll have to wait for the votes to come in, for them to be counted, re-counted, and then Al Gore loses because Florida (long story). Imagine a system where we record votes using a blockchain. Users sign their vote and it is permanently recorded to the blockchain, doing away with fraud and recounts. Suddenly election disputes are a thing of the past.</p>
                                                        <p>Ownership rights. Rights to music, art, and real estate can be easily defined, sent and received, and even split into thousands of chunks. Imagine if you could own a slice of a pizza restaurant. That could be possible very soon.</p>
                                                        <p><GlossaryPopover content="Decentralized" /> File Storage. This is starting to get real nerdy but, stick with us. Instead of having all your data on one central server *cough* Google *cough*, your information could be encrypted, split up, and stored globally- meaning no one can access it but you and there’s no chance of losing your precious data!</p>
                                                        <p>And lastly, blockchain technology is useful in making a delicious buzzword salad: Quantum AI powered proof of <GlossaryPopover content="Tokenized" /> <GlossaryPopover content="Internet of Things" /> cloud based-blockchain with <GlossaryPopover content="machine learning" /> drones… all inside <GlossaryPopover content="VR" />… .com. Do we sound smart yet?</p>
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
                                                    <h2>Smart Contracts</h2>
                                                </div>
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p><GlossaryPopover content="Blockchains" /> can do more than transfer value–and one of the most promising technological innovations came in the form of the <GlossaryPopover content="smart contract" />. Let’s review:</p>
                                                        <p>A smart contract is an agreement written in computer code that has the ability to transfer funds or information automatically once conditions are met. These contracts work in "if...then" statements, like "If the milkman delivers milk, then transfer funds to his account."</p>
                                                        <p>The key to smart contracts is the "automatic" part. Once the contract is signed and sent, it's completely out of our hands. We cannot cancel it or tamper with it, which will simplify any disputes! Like, the one you have with your milkman, say.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-future-img3">
                                                        <img src={require('../../../assets/images/learn/future/future-img3.svg')}  alt="Futureimg3" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1 order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-future-img4">
                                                        <img src={require('../../../assets/images/learn/future/future-img4.svg')}  alt="Futureimg4" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Are milkmen still a thing…?</p>
                                                        <p>Now, the technology behind smart contracts is still being worked out. Making a piece of code that understands milkmen is hard enough–imagine a contract that pays your taxes, automatically.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>The technology is still in its infancy, but here's a taste of what smart contracts might be able to do in the future:</p>
                                                        <ul>
                                                            <li>Simplify legal disputes in almost any area. Rent agreements, paying the milkman, the mechanic fixing the car. It could be anything.</li>
                                                            <li>Replace escrow services that hold onto money during deals.</li>
                                                            <li>Automate payments, like insurance or payroll.</li>
                                                            <li>Or perhaps simplify prenuptial agreements. Take that, Jessica.</li>
                                                        </ul>
                                                        <p>Time to get theoretical. You might say, “wait, nameless Goodbit writer (my is Lucas, nice to meet you), weren’t we already theoretical?” Shhhhhh. Time to get… theoretical-er.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-future-img5">
                                                        <img src={require('../../../assets/images/learn/future/future-img5.svg')}  alt="Futureimg5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6">
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>A bit about DAOs</h2>
                                                </div>
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p><GlossaryPopover content="Smart contracts" /> allow users to engage in <GlossaryPopover content="decentralized" /> agreements. But we can take it a step further. Imagine compiling a series of smart contracts, thousands even, that combine to lay out the rules of operation for an entire business.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-future-img6">
                                                        <img src={require('../../../assets/images/learn/future/future-img6.svg')}  alt="Futureimg6" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-end">
                                            <div className="col-lg-4 offset-lg-1 order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-future-img7">
                                                        <img src={require('../../../assets/images/learn/future/future-img7.svg')}  alt="Futureimg7" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p><GlossaryPopover content="DAO" /> stands for Decentralized Autonomous Organization. A DAO is not owned by anyone, rather run by a group of people. It's operated completely autonomously on the Ethereum <GlossaryPopover content="blockchain" />  using complex smart contracts.</p>
                                                        <p>Imagine decentralizing entire businesses. Instead of using Uber and Lyft to connect riders and drivers, a decentralized marketplace operates to bring freelancing drivers and people who need rides together, removing the <GlossaryPopover content="middleman" /> and the fee. This type of business would qualify as a DAO.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>In reality, we wouldn’t notice the difference between Uber and Decentralized Uber (dUber for short). The taxi ride would be the same. The difference is, instead of going through a middleman, the riders and the drivers are connected through a Decentralized Autonomous Organization, or DAO.</p>
                                                        <p>This is what the world could look like. It wouldn't actually feel that different, but the structures underlying it would be revolutionized. Centralized data pots would be replaced with decentralized networks, making services cheaper and fraud much less common. Maybe Michael Jackson is there, who knows.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-future-img8">
                                                        <img src={require('../../../assets/images/learn/future/future-img8.svg')}  alt="Futureimg8" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 offset-lg-1 order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-future-img9">
                                                        <img src={require('../../../assets/images/learn/future/future-img9.svg')}  alt="Futureimg9" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>It's still very early for blockchain, but the technology is growing, and fast. Like the Internet in the early 90's, its not perfect yet but this technology has a bright future. As talented minds flock to this new space, we may soon find blockchain intertwined with the systems we use every day: think computers, money, social media, and more. The future is global, decentralized, and in your control.</p>
                                                        <p>It all started with <GlossaryPopover content="Bitcoin" />, and who knows where we'll go.</p>
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
                                                <h3>What is blockchain?</h3>
                                                <ul>
                                                    <li>• Blockchains allow us to store and verify any type of information in a safe and permanent way</li>
                                                    <li>• They rely on <GlossaryPopover content="distributed" /> networks instead of <GlossaryPopover content="centralized" /> third parties</li>
                                                </ul>
                                            </div>
                                            <div className="gb-summary-dtl">
                                                <h3>How are blockchains currently used?</h3>
                                                <ul>
                                                    <li>• The use case of blockchain technology was <GlossaryPopover content="cryptocurrency" />.</li>
                                                    <li>• Cryptocurrencies allow for cheap, easy value transfer without the need for a bank or identity information, potentially allowing billions of people to access financial services</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="gb-summary-dtl">
                                                <h3>What are the future uses of blockchain?</h3>
                                                <ul>
                                                    <li>• By eliminating <GlossaryPopover content="middlemen" />, blockchain technology has the potential to make many of today’s systems more efficient</li>
                                                    <li>• Examples include ownership services, escrow, voting, identity, and decentralized file storage</li>
                                                </ul>
                                            </div>
                                            <div className="gb-summary-dtl">
                                                <h3>How can smart contracts be used to create complex entities like DAOs?</h3>
                                                <ul>
                                                    <li>• With careful coding of a multitude of <GlossaryPopover content="smart contracts" />, we can create complex self governing entities</li>
                                                    <li>• The epitome of these is the <GlossaryPopover content="Decentralized Autonomous Organization" />, which is run entirely by a set of smart contracts. It makes its own decisions based on the guidelines set forth in its smart contracts, requiring no human intervention</li>
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
                                    <h2>Test yourself — take the Future 101 quiz!</h2>
                                    <span>Total time • 6 MIN</span>
                                    <div className="gb-begin-blk">
                                    <a href={null} className="gb-begin-btn" onClick={() => this.toggleQuestionModal('show')}>Begin <i className="gb-right-arrow"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <section className="gb-next-pageblk">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 offset-md-1">
                                    <div className="gb-next-page-dtl">
                                        <h3>Now that you understand the history of ethereum, it’s time to tackle The Future!</h3>
                                        <div className="gb-next-page-menu">
                                            <span><i><img src={require('../../../assets/images/money/bitcoin-icon-menu.svg')} alt="Bitcoin" /></i> Bitcoin 101</span>
                                            <div className="gb-letsgo-btnblk">
                                                <Link className="gb-letsgobtn" to="/learn/bitcoin-101" >
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
                                            <li className="gb-blockchain-menu">
                                                <Link to="/learn/blockchain-101" >
                                                    <i>
                                                        <img src={require('../../../assets/images/money/blockchain-icon-menu.svg')} alt="Blockchain" />
                                                    </i>Blockchain 101
                                                </Link>
                                            </li>
                                            <li className="gb-ethereum-menu">
                                                <Link to="/learn/ethereum-101" >
                                                    <i>
                                                        <img src={require('../../../assets/images/money/ethereum-icon-menu.svg')}  alt="Ethereum"/>
                                                    </i>
                                                    Ethereum 101
                                                </Link>
                                            </li>
                                            <li className="gb-future-menu">
                                                <Link to="/learn/future-101" >

                                                    <i>
                                                        <img src={require('../../../assets/images/money/future-icon-menu.svg')}  alt="Future"/>
                                                    </i>
                                                    The Future 101
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <Newslatter/>
                </main>
                <div className="gb-quiz-money-modal gb-quiz-future-modal">
                    <div className="gb-quiz-modal">
                        <div className="gb-quiz-body">
                            <div className="container">
                                <div className="gb-quiz-header">
                                    <div className="gb-quiz-head-left">
                                        <i><img src={require('../../../assets/images/goodbit-icon.svg')} alt="Goodbit-icon" /></i>
                                        <span>Future 101: Quiz</span>
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
                                                            <h3>Which of the following might a smart contract NOT be good for?</h3>
                                                            <ul>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio1" type="radio" name="question1" value="1" />
                                                                    <label htmlFor="radio1">Escrow</label>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio2" type="radio" name="question1" value="2" />
                                                                    <label htmlFor="radio2">Legal Contracts</label>
                                                                </li>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio3" type="radio" name="question1" value="3" />
                                                                    <label htmlFor="radio3">Copywriting</label>
                                                                    <ExplainationPopover content="Smart contracts are fantastic, but they need very explicit parameters to function effectively. Copywriting is a subjective process, and a smart contract"/>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #2</span>
                                                            <h3>Blockchain technology...</h3>
                                                            <ul>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio4" type="radio" name="question2" value="4" />
                                                                    <label htmlFor="radio4">Is the solution to many of our technical problems</label>
                                                                </li>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio5" type="radio" name="question2" value="5" />
                                                                    <label htmlFor="radio5">Is in its early stages, but shows some promise</label>
                                                                    <ExplainationPopover content="While it could be the case that blockchain becomes fundamental to many of our systems, it's too early to tell right now. Researchers and coders are optimistic, and it seems like blockchain tech could be a real game changer, but only time will tell."/>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio6" type="radio" name="question2" value="6" />
                                                                    <label htmlFor="radio6">Is well on its way to being a major part of our lives</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #3</span>
                                                            <h3>There is more than one blockchain</h3>
                                                            <ul>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio7" type="radio" name="question3" value="7" />
                                                                    <label htmlFor="radio7">True</label>
                                                                    <ExplainationPopover content="The first blockchain belonged to Bitcoin, but since then a number of others have been created, each with their own advantages and drawbacks. Each blockchain requires its own community of validators to keep the system running at its full potential"/>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio8" type="radio" name="question3" value="8" />
                                                                    <label htmlFor="radio8">False</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #4</span>
                                                            <h3>How might cryptocurrency benefit residents of economically-developing countries (assuming they have Internet access)?</h3>
                                                            <ul>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio9" type="radio" name="question4" value="9" />
                                                                    <label htmlFor="radio9">People can access financial services without identity verification or minimum balances.</label>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio10" type="radio" name="question4" value="10" />
                                                                    <label htmlFor="radio10">People can send money worldwide, and even send micropayments, for a low cost.</label>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio11" type="radio" name="question4" value="11" />
                                                                    <label htmlFor="radio11">People can receive loans.</label>
                                                                </li>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio12" type="radio" name="question4" value="12" />
                                                                    <label htmlFor="radio12">All of the above</label>
                                                                    <ExplainationPopover content="All of the above are true! Internet availability is growing rapidly, especially in developing countries. Soon, almost every person will have access to our global economy using cryptocurrency."/>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #5</span>
                                                            <h3>Where does a smart contract run?</h3>
                                                            <ul>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio13" type="radio" name="question5" value="13" />
                                                                    <label htmlFor="radio13">On a randomly chosen miner's computer</label>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio14" type="radio" name="question5" value="14" />
                                                                    <label htmlFor="radio14">On a central server</label>
                                                                </li>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio15" type="radio" name="question5" value="15" />
                                                                    <label htmlFor="radio15">On the computer of every node on the blockchain</label>
                                                                    <ExplainationPopover content="This is what makes smart contracts so powerful! Because they run on every single computer that's part of the network, it's impossible to stop them from executing. This means that they can't be reversed once deployed, which has its advantages and drawbacks."/>
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
            hoverElement.classList.add('active');
        })
        hoverElement.addEventListener("mouseout", () => {
            hoverElement.classList.remove('active');
        })
    }
    removeMouseInOutListner(hoverElement){
        hoverElement.removeEventListener("mouseover", () => {
            hoverElement.classList.add('active');
        })
        hoverElement.removeEventListener("mouseout", () => {
            hoverElement.classList.remove('active');
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
    scrollToContent(i) {
        let element = document.getElementsByClassName('gb-content-row');
        element[i].scrollIntoView({behavior: 'smooth',block:'start'});
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

export default Future101;