import React, { Component } from 'react';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import './Ethereum101.scss';
import '../../Modals/QuizModal/QuizModal.scss';
import { Link } from "react-router-dom";
import Newslatter from '../../Newslatter/Newslatter';
// import QuizModal from '../../Modals/QuizModal/QuizModal';
import CommonFunctions from '../CommonFunctions';
import ShareComponent from '../ShareComponent/ShareComponent'
import GlossaryPopover from '../../GlossaryPopover/GlossaryPopover';
import ExplainationPopover from '../../ExplainationPopover/ExplainationPopover';
class Ethereum101 extends Component {
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
                <main className="gb-money-main gb-ethereum-main">
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
                                        <h1 className="gb-basic-title-icon gb-ethereum-icon">Ethereum 101</h1>
                                        <div className="gb-money-banner-dtl">
                                            <p>While Bitcoin targeted value transfer, the goal of Ethereum is to <GlossaryPopover content="decentralize" />, well, everything else: the way we send and receive information, build businesses, pay for things, and more.</p>
                                        </div>
                                    </div>
                                    {/* Swiper */}
                                    <div className="gb-segment-blk"  onMouseEnter={() => CommonFunctions.preventBodyScroll('hidden')}  onMouseLeave={() => CommonFunctions.preventBodyScroll('auto')}>
                                        <h4>In this segment, you will learn:</h4>
                                        <div className="swiper-container gb-money-question-scroller-container">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <ul>
                                                        <li onClick={() => this.scrollToContent(0)} className="sectionTitle" data-part="Part I">What is Ethereum?</li>
                                                        <li onClick={() => this.scrollToContent(1)} className="sectionTitle" data-part="Part II">How does it work?</li>
                                                        <li onClick={() => this.scrollToContent(2)} className="sectionTitle" data-part="Part III">Smart Contracts</li>
                                                        <li onClick={() => this.scrollToContent(3)} className="sectionTitle" data-part="Part IV">Ethereum and the future</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="swiper-scrollbar gb-money-question-scrollbar"></div>
                                        </div>
                                        <div className="gb-next-menublk clearfix">
                                            {/* <a href="{null}" className="gb-next-menubtn"> */}
                                            <Link className="gb-next-menubtn" to="/learn/future-101">
                                            The Future 101 <i className="gb-right-arrow"></i>
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
                                            <li>What is Ethereum?</li>
                                            <li>How does it work?</li>
                                            <li>Smart Contracts</li>
                                            <li>Ethereum and the future</li>
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
                                        <i><img src={require('../../../assets/images/money/ethereum-icon-menu.svg')}  alt="Dollar-icon"/></i>
                                        <span>Ethereum 101</span>
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
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>What is Ethereum?</h2>
                                                </div>
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p><GlossaryPopover content="Ethereum" /> is a completely separate community from <GlossaryPopover content="Bitcoin" />, and it has its own, separate blockchain. Unlike Bitcoin’s “ <GlossaryPopover content="Satoshi Nakamoto" />”, we very much know who the founder of Ethereum is (<GlossaryPopover content="Vitalik Buterin" /> is his name), and he's still very much involved with the project.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-ethereum-img1">
                                                        <img src={require('../../../assets/images/learn/ethereum/ethereum-img1.svg')}  alt="Ethereumimg1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1 order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-ethereum-img2">
                                                        <img src={require('../../../assets/images/learn/ethereum/ethereum-img2.svg')}  alt="Ethereumimg2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-2">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>Bitcoin allows users to transfer digital information (payments) to each other. Ethereum, on the other hand, allows users to run programs and decentralized Applications, or <GlossaryPopover content="dApps" />.</p>
                                                        <p>Think about the applications or websites we use today. They all run on <GlossaryPopover content="centralized" /> servers. Facebook, a social media application, stores your data on Facebook servers. Your bank information, health information, all kinds of personal data, are stored on massive, privatized computers.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc gb-last-pera">
                                                        <p>But it's more than that. All these <GlossaryPopover content="middlemen" />, banks, social media applications, health record keepers, take a fee for the service they provide, whether storing your money, connecting you with friends, or keeping your records. Or worse yet–they sell your data for a profit (yeah, remember those massive terms and conditions you skipped through? Many of these companies sell your data...).</p>
                                                        <p>Ethereum imagines a world where we don't need middlemen. A world where services like these can be decentralized. Blockchains are run by <GlossaryPopover content="decentralized" /> networks of computers. Ethereum’s blockchain allows users to build whatever applications they want to.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-ethereum-img3">
                                                        <img src={require('../../../assets/images/learn/ethereum/ethereum-img3.svg')}  alt="Ethereumimg3" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1 text-center order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-ethereum-img4">
                                                        <img src={require('../../../assets/images/learn/ethereum/ethereum-img4.svg')}  alt="Ethereumimg4" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-2">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>Think of the Ethereum network as a plot of land, the bedrock on top of which anything can be built. Coders are architects, who can construct all kinds of applications on top of the Ethereum platform. Make sense? Ethereum is essentially a massive virtual computer for developers to build with and us to benefit from!</p>
                                                        <p>Ethereum is classified as a <GlossaryPopover content="protocol" />. It's a set of rules, defining how the network operates. It does not suggest what to do with the network, it just IS the network. Kind of like the Internet itself.</p>
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
                                                    <h2>How does it work?</h2>
                                                </div>
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Okay, so Ethereum is this <GlossaryPopover content="decentralized" /> computing system, and users can run programs on the network. Right. But for a decentralized <GlossaryPopover content="protocol" /> to work, there must be a decentralized network of individuals all around the world maintaining it. Sound familiar? </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-ethereum-img5">
                                                        <img src={require('../../../assets/images/learn/ethereum/ethereum-img5.svg')}  alt="Ethereumimg5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1 text-center order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-ethereum-img6">
                                                        <img src={require('../../../assets/images/learn/ethereum/ethereum-img6.svg')}  alt="Ethereumimg6" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>Ah, our good, neighborhood friends, the <GlossaryPopover content="miners" />. Ethereum has its own miners, just like Bitcoin does. In the Bitcoin network, miners run computer software to verify and record transactions–in essence they process payments. On the Ethereum network, miners run computer software to execute various functions that allow all of the <GlossaryPopover content="dApps" />  to function correctly...oh, and they process payments too.</p>
                                                        <p>Does that seem broad to you? Well, it is broad. That’s because Bitcoin is really only good for payment processing. Ethereum is good for, well, a lot of different things.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc gb-last-pera">
                                                        <p>Here's the thing: Ethereum (ee-thee-ree-um) (the protocol, the network) has its own <GlossaryPopover content="cryptocurrency" />, called <GlossaryPopover content="Ether" /> (ee-thur). Many people call the cryptocurrency Ethereum but, technically, it's called Ether. Here's why Ether exists: there needs to be an incentive for miners to maintain the decentralized network of computers. When you run a program on Ethereum, you are using thousands of computers around the globe to do it, and you pay the owners of those computers a small fee in Ether for their trouble.</p>
                                                        <p>Ethereum: the decentralized computing network. Ether: the cryptocurrency used to pay miners for maintaining the Ethereum network. Alright, we've been tossing around terms like Ether, decentralized applications (dApps), global computing, and <GlossaryPopover content="cronuts" /> (tasty).</p>
                                                        <p>How does this actually work? Drumroll please!</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1 text-center">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-ethereum-img7">
                                                        <img src={require('../../../assets/images/learn/ethereum/ethereum-img7.svg')}  alt="Ethereumimg7" />
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
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Smart Contracts</h2>
                                                </div>
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p> <GlossaryPopover content="Smart contracts" /> are what make Ethereum special. </p>
                                                        <p>Smart contracts collapse an agreement and the execution of that agreement into one thing. They do not automate it, combine it, attach it, transpose it, blend it, petrify it, sauté it, boil it, broil it, no. They collapse agreement and execution. Here's how.</p>
                                                        <p>A smart contract is a digital agreement that two (or more) people sign. It details the terms of the agreement, and has the power to automatically execute and transfer funds or information once the terms of the contract are met. It executes, automatically, and it runs on a <GlossaryPopover content="blockchain" />. Sounds pretty smart.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1 text-center">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-ethereum-img8">
                                                        <img src={require('../../../assets/images/learn/ethereum/ethereum-img8.svg')}  alt="Ethereumimg8" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1 text-center order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-ethereum-img9">
                                                        <img src={require('../../../assets/images/learn/ethereum/ethereum-img9.svg')}  alt="Ethereumimg9" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc gb-last-pera">
                                                        <p>Wondering how we'd ever use such a contract? Well here's an example in the wonderful world of sports betting. You and I make a bet for $100 on a basketball game. I say the Warriors are going to win, you say the Lakers are going to win. Your opinion is invalid. It's okay to be wrong. Don’t worry about it.</p>
                                                        <p>We write down the terms on a piece of paper and sign. The Warriors lose, somehow. You were right. Shoot! I'm a sore loser, and besides that I think the ref made a bad call during the game, so I refuse to pay you. That's not very nice of me, but what are you going to do?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>Well, you certainly aren't going to sue me. Suing me would cost you far more than $100, not to mention the hassle. So, basically, you won, I won't pay, and there's very little you can do about it, because paper contracts separate the agreement from the execution. You and I can both agree on something, but nothing in a paper contract guarantees that we will follow through on our agreement (except legal action, but that's often far more trouble than it's worth).</p>
                                                        <p>Reverse the tape. Hop in the time machine. Imagine just before we sign the paper contract you go, "oh wait! We should use a smart contract! Duh!" You smarty pants.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1 text-center">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-ethereum-img10">
                                                        <img src={require('../../../assets/images/learn/ethereum/ethereum-img10.svg')}  alt="Ethereumimg10" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-5 order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-ethereum-img11">
                                                        <img src={require('../../../assets/images/learn/ethereum/ethereum-img11.svg')}  alt="Ethereumimg11" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc gb-last-pera">
                                                        <p>Here's how it would go down: Let's imagine a reputable source (like the NBA or ESPN) posts the score of the game on their website after the game. We write a contract on the Ethereum platform that says "check the score of the game at this website at this specified time. If the Warriors scored higher than the Lakers, transfer funds to Account A. If the Lakers scored higher than the Warriors, transfer funds to Account B."</p>
                                                        <p>Of course, the contract doesn't read like that. It would be written in a programming language called <GlossaryPopover content="Solidity" />, and deployed to the Ethereum blockchain.</p>
                                                        <p>Anyway, we both sign, giving the contract the power to move funds, pay a small fee to the network, and send the contract off. Then, we wait. The game happens. The ref makes the bad call. The Warriors lose. I'm pissed. I lost. Rats!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>The contract kicks into effect on thousands of computers all around the world. We can't change it or stop it from happening. The contract executes, sees the score of the game, and transfers <GlossaryPopover content="Ether" /> to your address. The smart contract collapsed the agreement and the execution into one step. Once we agree to the contract, it will execute.</p>
                                                        <p>This does not simplify the legal disputing process. This does away with the legal disputing process.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 offset-lg-1"></div>
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
                                                    <h2>Ethereum and the <br></br> future</h2>
                                                </div>
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>That, in a nutshell, is how <GlossaryPopover content="smart contracts" /> work. They are digital agreements signed by multiple parties that have the power to automatically execute and even transfer funds (or information) between people.</p>
                                                        <p>Bottom line? Bitcoin was the first <GlossaryPopover content="cryptocurrency" />, and it changed the nature of money. Ethereum took things a step further, opening up <GlossaryPopover content="decentralized" /> networks to much more than value. And it has the power to change much, much more than money.</p>
                                                        <p>Take the quiz below to test your Ethereum knowledge, and then move on to The Future of Blockchain to learn how we can apply technologies like Ethereum in the future, about <GlossaryPopover content="dApps" />, <GlossaryPopover content="DAOs" />, and more!</p>
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
                                                <h3>What is Ethereum?</h3>
                                                <ul>
                                                    <li>Ethereum is a <GlossaryPopover content="protocol" />, a set of rules that defines how a <GlossaryPopover content="decentralized" /> network operates, kinda like <GlossaryPopover content="Bitcoin" />.</li>
                                                    <li>It allows developers to build decentralized applications, or <GlossaryPopover content="dApps" />, that utilize Ethereum’s <GlossaryPopover content="distributed" /> computing network.</li>
                                                </ul>
                                            </div>
                                            <div className="gb-summary-dtl">
                                                <h3>How does it work?</h3>
                                                <ul>
                                                    <li>Similar to Bitcoin, Ethereum has a network of <GlossaryPopover content="miners" /> that process both transactions of value and operations for decentralized applications</li>
                                                    <li>Miners are paid for their efforts in <GlossaryPopover content="Ether" />, the native currency of the Ethereum <GlossaryPopover content="blockchain" />.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="gb-summary-dtl">
                                                <h3>What are smart contracts?</h3>
                                                <ul>
                                                    <li><GlossaryPopover content="Smart contracts" /> collapse agreement on a contract with execution of the terms of that contract.</li>
                                                    <li>They run on thousands of computers throughout the distributed network, making them impossible to stop once deployed.</li>
                                                </ul>
                                            </div>
                                            <div className="gb-summary-dtl">
                                                <h3>What are Ethereum’s future implications?</h3>
                                                <ul>
                                                    <li>Smart contracts cut out arbitration <GlossaryPopover content="middlemen" /> like escrow services.</li>
                                                    <li>Many industries could be made more efficient by implementing smart contracts.</li>
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
                                    <h2>Test yourself — take the Ethereum 101 quiz!</h2>
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
                                <div className="col-md-5 offset-md-1">
                                    <div className="gb-next-page-dtl">
                                        <div className="row">
                                            <div className="col-xl-10">
                                                <h3>Now that you understand ethereum, it’s time to tackle the future!</h3>
                                            </div>
                                        </div>
                                        <div className="gb-next-page-menu gb-next-future-menu">
                                            <span><i><img src={require('../../../assets/images/money/future-icon-menu.svg')} alt="Bitcoin" /></i> The Future 101</span>
                                            <div className="gb-letsgo-btnblk">
                                                <Link className="gb-letsgobtn" to="/learn/future-101" >
                                                    Let’s go<i className="gb-right-arrow"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-md-4 offset-md-2">
                                    <div className="gb-skip-next-page">
                                        <h3>Or, skip ahead.</h3>
                                        <ul>
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
                                </div> */}
                            </div>
                        </div>
                    </section>
                    <Newslatter/>
                </main>
                <div className="gb-quiz-money-modal gb-quiz-ethereum-modal">
                    <div className="gb-quiz-modal">
                        <div className="gb-quiz-body">
                            <div className="container">
                                <div className="gb-quiz-header">
                                    <div className="gb-quiz-head-left">
                                        <i><img src={require('../../../assets/images/goodbit-icon.svg')} alt="Goodbit-icon" /></i>
                                        <span>Ethereum 101: Quiz</span>
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
                                                            <h3>Who is the creator of Ethereum?</h3>
                                                            <ul>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio1" type="radio" name="question1" value="1" />
                                                                    <label htmlFor="radio1">Satoshi Nakamoto</label>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio2" type="radio" name="question1" value="2" />
                                                                    <label htmlFor="radio2">Jihan Wu</label>
                                                                </li>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio3" type="radio" name="question1" value="3" />
                                                                    <label htmlFor="radio3">Vitalik Buterin</label>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio4" type="radio" name="question1" value="4" />
                                                                    <label htmlFor="radio4">Roger Ver</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #2</span>
                                                            <h3>How is Ethereum different from Bitcoin?</h3>
                                                            <ul>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio5" type="radio" name="question2" value="5" />
                                                                    <label htmlFor="radio5">Ethereum does not allow transactions of value</label>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio6" type="radio" name="question2" value="6" />
                                                                    <label htmlFor="radio6">Ethereum does not employ a mining network</label>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio7" type="radio" name="question2" value="7" />
                                                                    <label htmlFor="radio7">Ethereum only allows decentralized applications</label>
                                                                </li>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio8" type="radio" name="question2" value="8" />
                                                                    <label htmlFor="radio8">Ethereum allows both decentralized applications and transactions of value</label>
                                                                    <ExplainationPopover content="Ethereum is a more flexible protocol than Bitcoin is, allowing for both transactions of value and decentralized applications."/>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #3</span>
                                                            <h3>What is the difference between Ethereum and Ether?</h3>
                                                            <ul>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio9" type="radio" name="question3" value="9" />
                                                                    <label htmlFor="radio9">Ethereum is a protocol, Ether is a cryptocurrency</label>
                                                                    <ExplainationPopover content="Ethereum is a decentralized computing network, a protocol. Ether is the currency used within the Ethereum ecosystem to incentivize miners to maintain the system."/>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio10" type="radio" name="question3" value="10" />
                                                                    <label htmlFor="radio10">Ethereum is a cryptocurrency, Ether is a protocol</label>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio11" type="radio" name="question3" value="11" />
                                                                    <label htmlFor="radio11">Both Ethereum and Ether are cryptocurrencies</label>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio12" type="radio" name="question3" value="12" />
                                                                    <label htmlFor="radio12">Both Ethereum and Ether are protocols</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #4</span>
                                                            <h3>Why are smart contracts so effective?</h3>
                                                            <ul>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio13" type="radio" name="question4" value="13" />
                                                                    <label htmlFor="radio13">They're easy to alter once deployed</label>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio14" type="radio" name="question4" value="14" />
                                                                    <label htmlFor="radio14">All of their information is in one place, making them easy to tailor</label>
                                                                </li>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio15" type="radio" name="question4" value="15" />
                                                                    <label htmlFor="radio15">They inextricably link agreement and execution</label>
                                                                    <ExplainationPopover content="When a smart contract is deployed, it runs on thousands of computers, all around the world. When the conditions of the agreement are met, it executes automatically. No payment default is possible."/>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio16" type="radio" name="question4" value="16" />
                                                                    <label htmlFor="radio16">They can easily complete super complex math problems</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #5</span>
                                                            <h3>Ethereum is to dApps as...</h3>
                                                            <ul>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio17" type="radio" name="question5" value="17" />
                                                                    <label htmlFor="radio17">Ether is to Ethereum</label>
                                                                </li>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio18" type="radio" name="question5" value="18" />
                                                                    <label htmlFor="radio18">The App store is to Apps</label>
                                                                    <ExplainationPopover content="Ethereum is the bedrock, upon which many different products can be built."/>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio19" type="radio" name="question5" value="19" />
                                                                    <label htmlFor="radio19">Ethereum is to blockchain</label>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio20" type="radio" name="question5" value="20" />
                                                                    <label htmlFor="radio20">Billy Mays is to the Big City Slider Station</label>
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
        document.title = "Ethereum101 | Goodbit101";
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
    scrollToContent(i) {
        let element = document.getElementsByClassName('gb-content-row');
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

export default Ethereum101;