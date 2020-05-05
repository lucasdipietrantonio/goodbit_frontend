import React, { Component } from 'react';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import './Blockchain101.scss';
import '../../Modals/QuizModal/QuizModal.scss';
import { Link } from "react-router-dom";
import Newslatter from '../../Newslatter/Newslatter';
// import QuizModal from '../../Modals/QuizModal/QuizModal';
import CommonFunctions from '../CommonFunctions';
import ShareComponent from '../ShareComponent/ShareComponent';
import GlossaryPopover from '../../GlossaryPopover/GlossaryPopover';
import ExplainationPopover from '../../ExplainationPopover/ExplainationPopover';
class Blockchain101 extends Component {
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
                <main className="gb-money-main gb-blockchain-main">
                    <section className="gb-money-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 offset-md-1">
                                    <div className="gb-money-dtl">
                                        <div className="clearfix">
                                            <Link to='/basics' className="gb-basic-btn"><i className="gb-left-arrow"></i> Basics</Link>
                                        </div>
                                        <h1 className="gb-basic-title-icon gb-blockchain-icon">Blockchain 101</h1>
                                        <div className="gb-money-banner-dtl">
                                            <p>Today we are going to be answering a fundamental question of life. Okay, maybe not fundamental but pretty darn cool.</p>
                                            <p>What the heck is a blockchain? Let’s dive in.</p>
                                        </div>
                                    </div>
                                    {/* Swiper */}
                                    <div className="gb-segment-blk"  onMouseEnter={() => CommonFunctions.preventBodyScroll('hidden')}  onMouseLeave={() => CommonFunctions.preventBodyScroll('auto')}>
                                        <h4>In this segment, you will learn:</h4>
                                        <div className="swiper-container gb-money-question-scroller-container">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <ul>
                                                        <li onClick={() => this.scrollToContent(0)} className="sectionTitle" data-part="Part I">What problem is Blockchain solving?</li>
                                                        <li onClick={() => this.scrollToContent(1)} className="sectionTitle" data-part="Part II">What is a Blockchain?</li>
                                                        <li onClick={() => this.scrollToContent(2)} className="sectionTitle" data-part="Part III">How does it work?</li>
                                                        <li onClick={() => this.scrollToContent(3)} className="sectionTitle" data-part="Part IV">What is mining?</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="swiper-scrollbar gb-money-question-scrollbar"></div>
                                        </div>
                                        <div className="gb-next-menublk clearfix">
                                            {/* <a href="{null}" className="gb-next-menubtn"> */}
                                            <Link className="gb-next-menubtn" to="/learn/ethereum-101">
                                            Ethereum 101 <i className="gb-right-arrow"></i>
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
                                            <li>What problem is Blockchain solving?</li>
                                            <li>What is a Blockchain?</li>
                                            <li>How does it work?</li>
                                            <li>What is mining?</li>
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
                                        <i><img src={require('../../../assets/images/blockchain.svg')}  alt="Dollar-icon"/></i>
                                        <span>Blockchain 101</span>
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
                                            <div className="col-lg-5 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>What problem is Blockchain solving?</h2>
                                                </div>
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc gb-blockchain-content-top">
                                                        <p>It's really, really hard to trust people on the Internet, because you just don't know them. It’s especially difficult when money gets involved.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-blockchain-img1">
                                                        <img src={require('../../../assets/images/learn/blockchain/blockchain-img1.svg')}  alt="blockchainimg1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1 order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-blockchain-img2">
                                                        <img src={require('../../../assets/images/learn/blockchain/blockchain-img2.svg')}  alt="blockchainimg2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>Unfortunately, there probably isn’t really a down-on-his-luck Nigerian Prince sending you emails, it’s just that Scammy-Kid-From-High-School. You can’t just conduct business with random strangers overseas and trust that they’ll pay you, unless you use a third party system like PayPal that takes a large cut.</p>
                                                        <p>We’ve gotten used to relying on banks and companies like PayPal to keep our finances safe, but these companies charge us a hefty price for their services, and in the past, these platforms have failed and customers have lost all their money.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc gb-last-pera">
                                                        <p><GlossaryPopover content="Blockchains" /> allow us to safely transact with people digitally, even if they’re strangers–without using a third party like a bank. And that’s a game changer. For the first time, we can safely trust perfect strangers, and even conduct business with them, all without going through a <GlossaryPopover content="middleman" />.</p>
                                                        <p>Let’s dig a little deeper in the next section.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-blockchain-img3">
                                                        <img src={require('../../../assets/images/learn/blockchain/blockchain-img3.svg')}  alt="blockchainimg3" />
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
                                                    <h2>What is a Blockchain?</h2>
                                                </div>
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Doing financial transactions requires record-keeping. Companies like PayPal do their own private, <GlossaryPopover content="centralized" /> bookkeeping. Blockchain technology uses public, <GlossaryPopover content="decentralized" /> bookkeeping. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-blockchain-img4">
                                                        <img src={require('../../../assets/images/learn/blockchain/blockchain-img4.svg')}  alt="blockchainimg4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-blockchain-img5">
                                                        <img src={require('../../../assets/images/learn/blockchain/blockchain-img5.svg')}  alt="blockchainimg5" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>Instead of one, top-secret copy of the <GlossaryPopover content="ledgers" /> held by a private entity, thousands of people all around the world each keep their own copy using a specialized computer program. These computers constantly compare their own ledgers to everyone else’s and check to be sure that no one is trying to cheat.</p>
                                                        <p>When you put money in a bank, that money is out of your hands. If that bank fails or is hacked, your money is gone, and there’s nothing you can do about it. Blockchain, on the other hand, is decentralized–a vast network of thousands of computers, all around the globe, contribute to network security. This makes the network far more resilient.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc gb-last-pera">
                                                        <p>This is the core of how a blockchain functions. We don’t want to trust any one entity to keep the Ledger, so instead we trust a decentralized system made up of individuals all around the world. And it works.</p>
                                                        <p>Okay, so we have the main idea down. Let’s get literal. How. Does. It. Work?</p>
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
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>How does it work?</h2>
                                                </div>
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Here we go!</p>
                                                        <p>At the core, <GlossaryPopover content="blockchains" />  act like <GlossaryPopover showAs="ledgers" content="ledger" />. For ledgers to function they need to be able to reference people. A blockchain needs to be able to say “Kate’s Account sends 1 Bitcoin to Jamal’s Account.” This is to say, users need some kind of account.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-blockchain-img6">
                                                        <img src={require('../../../assets/images/learn/blockchain/blockchain-img6.svg')}  alt="blockchainimg6" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1 order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-blockchain-img7">
                                                        <img src={require('../../../assets/images/learn/blockchain/blockchain-img7.svg')}  alt="blockchainimg7" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>Every user has an account with two parts: a <GlossaryPopover content="Public Key" /> (often called a <GlossaryPopover content="Public Address" /> ) and a <GlossaryPopover content="Private Key" />. Think of it like your email account. People send emails to your email address; people send cryptocurrency to your blockchain address. To send an email, you have to use your password to log in; to send <GlossaryPopover content="cryptocurrency" />, you have to use your private key to log in. (This is a bit of an oversimplification, just for the purposes of getting the idea down.)</p>
                                                        <p>Email address, email account password. Public Address, Private Key. These are analogous.</p>
                                                        <p>Your email password should never be given to anyone, because your password grants complete control over your account. In the same way, your private key should never be given to anyone else.</p>
                                                        <p>Don’t worry, no names are involved. Instead, your Public Address and Private Key will both be long, random strings of numbers and letters. This is what protects your identity.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc gb-last-pera">
                                                        <p>So what actually happens to a transaction on a blockchain?</p>
                                                        <p>To send someone cryptocurrency, you need several pieces of information: the recipient’s account information (their Public Key), how much you want to send, and your Private Key. Once you hit send, the transaction is broadcast to and received by thousands of computers all around the globe. One little piece of info: your Private Key acts as what’s called a digital signature. A <GlossaryPopover content="digital signature" /> is like your digital seal of approval, certifying that it was you--and only you--who sent a transaction.</p>
                                                        <p>All of the behind the scenes technical legwork is handled by a piece of software called a <GlossaryPopover content="wallet" /> (more on those later)–you don’t actually have to know any code.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1 text-center">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-blockchain-img8">
                                                        <img src={require('../../../assets/images/learn/blockchain/blockchain-img8.svg')}  alt="blockchainimg8" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-blockchain-img9">
                                                        <img src={require('../../../assets/images/learn/blockchain/blockchain-img9.svg')}  alt="blockchainimg9" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>The transaction is reviewed by each computer on the network, and each computer has its own copy of the public ledger. The computers check to see that your digital signature is valid and that your address has the necessary funds to complete the transaction. This is referred to as transaction verification. Once your transaction is verified, individuals called <GlossaryPopover content="miners" /> come in to do the heavy lifting with fancy, number crunching computers.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Quick recap of what we’ve covered so far: accounts have two parts, a public key (also referred to as a public address) and a private key. When you send a transaction to someone else’s public address, it must first be verified by thousands of computers. Then the miners step in.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 offset-lg-1">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        {/* <div className="row">
                                            <div className="col-lg-6">
                                            </div>
                                        </div> */}
                                        <div className="row">
                                            <div className="col-lg-5 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>What is mining?</h2>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-10">
                                                        <div className="gb-money-content-dtl">
                                                            <div className="gb-money-content-desc">
                                                                <p>Miners are responsible for a two special things: grouping verified transactions into what are called blocks, and adding those blocks onto the official <GlossaryPopover content="ledger" />.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-left">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img  gb-blockchain-img10">
                                                        <img src={require('../../../assets/images/learn/blockchain/blockchain-img10.svg')}  alt="blockchainimg10" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1 text-center order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-blockchain-img11">
                                                        <img src={require('../../../assets/images/learn/blockchain/blockchain-img11.svg')}  alt="blockchainimg11" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>While the first is rather easy, actually adding a block of transactions to the shared public ledger requires a great deal of energy and computational work. Miners put in computational work by having their computers endlessly solve complicated math puzzles. It’s this work that makes the blockchain nearly impossible to cheat.</p>
                                                        <p>What’s the point of having computers solve… math puzzles? After all, electricity is expensive!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Well, running these computers costs a lot of electricity, making it expensive to try to commit fraud. If a miner tries to do so, they have to compete against allllllll the other miners who are keeping the network secure. In order to successfully attack the system, a miner would have to spend more money than every other miner, combined–and that’s prohibitively expensive. For more information about just how hard this would be, see <Link to="/learn/mining">Mining</Link>.</p>
                                                        <p>Okay, so it’s nearly impossible to commit fraud. But what’s the incentive to mine? As we just established, it’s an expensive process. Well, when a miner out-solves the other miners (solves the math puzzles first) they earn the right to add the next block to the blockchain. When they do so, they are rewarded for their efforts with newly minted <GlossaryPopover content="cryptocurrency" />. If you solve a Bitcoin block, for instance, you receive 12.5 bitcoins.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-blockchain-img12">
                                                        <img src={require('../../../assets/images/learn/blockchain/blockchain-img12.svg')}  alt="blockchainimg12" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-blockchain-img13">
                                                        <img src={require('../../../assets/images/learn/blockchain/blockchain-img13.svg')}  alt="blockchainimg13" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>Importantly, each block that is added to the existing public ledger contains information about the block that came before it, which is linked to the block that came before it, and so on, creating a sort of…chain…of blocks (eureka!).</p>
                                                        <p>Because the blocks are linked, changing even a single transaction in any block would change that block and every block following it, making fraudulent activity obvious. The chain starts with the first block ever made, contains every transaction that’s ever happened, and is constantly being updated. That’s the <GlossaryPopover content="Blockchain" />!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Let’s recap: Blockchains are public ledgers that thousands of people all over the world work to maintain and secure. In fact, they’re used by thousands of other cryptocurrencies besides bitcoin, with potentially different rules and fancy technical terms. And as it turns out, blockchain technology is capable of much more. That’s because at its core, blockchain can store and verify any kind of information, not just data about transactions.</p>
                                                        <p>Take the quiz below to test your blockchain knowledge, and then move on to learn about <GlossaryPopover content="Ethereum" /> and the future of blockchain!</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 offset-lg-1"></div>
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
                                                <h3>What problem does blockchain aim to solve?</h3>
                                                <ul>
                                                    <li>• Trusting people online with transactions of value is incredibly difficult</li>
                                                    <li>• <GlossaryPopover content="Centralized" /> third parties help prevent fraud, but take large cuts for their services</li>
                                                </ul>
                                            </div>
                                            <div className="gb-summary-dtl">
                                                <h3>What is blockchain technology?</h3>
                                                <ul>
                                                    <li>• Instead of having one, top secret copy of the <GlossaryPopover content="ledger" /> of account balances held by a third party, <GlossaryPopover content="blockchain" />  utilizes a globally distributed network of thousands of individuals to maintain the system</li>
                                                    <li>• These individuals constantly check to be sure that no one is trying to cheat, and that cheaters are cut out of the system</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="gb-summary-dtl">
                                                <h3>How does blockchain work?</h3>
                                                <ul>
                                                    <li>• Accounts on a blockchain have two parts: the <GlossaryPopover content="public key" /> and the <GlossaryPopover content="private key" />. The former is given out like an email address; the latter allows whoever has it full access to all of your funds</li>
                                                    <li>• When you initiate a transaction, your private key is used to generate a <GlossaryPopover content="digital signature" /> proving your ownership of the account. This signature must be verified by the distributed network before your transaction is accepted as valid</li>
                                                </ul>
                                            </div>
                                            <div className="gb-summary-dtl">
                                                <h3>What is mining?</h3>
                                                <ul>
                                                    <li>• <GlossaryPopover content="Miners" /> group verified transactions into <GlossaryPopover content="blocks" /> and solve complex math puzzles to earn the right to add the next block to the existing record of transactions (chain)</li>
                                                    <li>• The winning miner is rewarded for their efforts with newly minted <GlossaryPopover content="cryptocurrency" /></li>
                                                    <li>• Each block is linked to the block that came before it
                                                    </li>
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
                                    <h2>Test yourself — take the Blockchain 101 quiz!</h2>
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
                                                <h3>Now that you understand blockchain, it’s time to tackle ethereum!</h3>
                                            </div>
                                        </div>
                                        <div className="gb-next-page-menu gb-next-ethereum-menu">
                                            <span><i><img src={require('../../../assets/images/money/ethereum-icon-menu.svg')} alt="Bitcoin" /></i> Ethereum 101</span>
                                            <div className="gb-letsgo-btnblk">
                                                <Link className="gb-letsgobtn" to="/learn/ethereum-101" >
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
                <div className="gb-quiz-money-modal gb-quiz-blockchain-modal">
                    <div className="gb-quiz-modal">
                        <div className="gb-quiz-body">
                            <div className="container">
                                <div className="gb-quiz-header">
                                    <div className="gb-quiz-head-left">
                                        <i><img src={require('../../../assets/images/goodbit-icon.svg')} alt="Goodbit-icon" /></i>
                                        <span>Blockchain 101: Quiz</span>
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
                                                            <h3>A ledger is</h3>
                                                            <ul>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio1" type="radio" name="question1" value="1" />
                                                                    <label htmlFor="radio1">A big book</label>
                                                                </li>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio2" type="radio" name="question1" value="2" />
                                                                    <label htmlFor="radio2">A long list of timestamped entries, like transactions</label>
                                                                    <ExplainationPopover content="At its core, a ledger is a place to store information. Each entry contains a piece of information, like a transaction amount, and the time it happened."/>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio3" type="radio" name="question1" value="3" />
                                                                    <label htmlFor="radio3">Something only banks use</label>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio4" type="radio" name="question1" value="4" />
                                                                    <label htmlFor="radio4">NY Style Thin Crust Pizza</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #2</span>
                                                            <h3>Blockchains use a _____ ledger.</h3>
                                                            <ul>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio5" type="radio" name="question2" value="5" />
                                                                    <label htmlFor="radio5">Centralized</label>
                                                                </li>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio6" type="radio" name="question2" value="6" />
                                                                    <label htmlFor="radio6">Distributed</label>
                                                                    <ExplainationPopover content="In a blockchain system, the ledger is held by many members of a group. In the case of Bitcoin, the ledger is held by thousands of people."/>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #3</span>
                                                            <h3>What is a Public Key?</h3>
                                                            <ul>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio7" type="radio" name="question3" value="7" />
                                                                    <label htmlFor="radio7">A metal key. Like one you would use to unlock a door.</label>
                                                                </li>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio8" type="radio" name="question3" value="8" />
                                                                    <label htmlFor="radio8">An address that people can use to send you Bitcoin, kind of like your email address.</label>
                                                                    <ExplainationPopover content="Public keys are kind of like email addresses. Anyone can use your email address to send you email, meaning the security of your account is not compromised by telling people your address. It is not your name, but instead a random string of numbers and letters."/>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio9" type="radio" name="question3" value="9" />
                                                                    <label htmlFor="radio9">Your name.</label>
                                                                </li>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio10" type="radio" name="question3" value="10" />
                                                                    <label htmlFor="radio10">Something that should be kept secret, always.</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #4</span>
                                                            <h3>True or False: Private Keys should be kept secret at all times.</h3>
                                                            <ul>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio11" type="radio" name="question4" value="11" />
                                                                    <label htmlFor="radio11">True</label>
                                                                    <ExplainationPopover content="Think of a private key like a password to your blockchain account, so to speak. If somebody has your password, they can send your funds wherever they want, and you cannot do anything about it. Keeping your key safe is really important! With the right tools, it is easy to keep your Private Key secure."/>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio12" type="radio" name="question4" value="12" />
                                                                    <label htmlFor="radio12">False</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #5</span>
                                                            <h3>Why do miners spend the time and money to mine?</h3>
                                                            <ul>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio13" type="radio" name="question5" value="13" />
                                                                    <label htmlFor="radio13">Out of the goodness of their hearts.</label>
                                                                </li>
                                                                <li className="gb-right-answer gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio14" type="radio" name="question5" value="14" />
                                                                    <label htmlFor="radio14">Because they receive Bitcoin in return for their work.</label>
                                                                    <ExplainationPopover content="Yeah, it may be exciting, but the real reason to mine is that you can earn Bitcoin doing so. Many people mine as a full time job. Some just leave a mining computer on at home. Either way, miners earn Bitcoin."/>
                                                                </li>
                                                                <li className="gb-options">
                                                                    <input onChange={(event)=>this.onAnswer(event)} id="radio15" type="radio" name="question5" value="15" />
                                                                    <label htmlFor="radio15">Because it's exciting!</label>
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
        document.title = "Blockchain101 | Goodbit101";
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

export default Blockchain101;