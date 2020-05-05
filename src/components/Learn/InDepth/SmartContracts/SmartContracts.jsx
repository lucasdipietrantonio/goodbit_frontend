import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Swiper from "swiper";
import Newslatter from '../../../Newslatter/Newslatter';
import GlossaryPopover from '../../../GlossaryPopover/GlossaryPopover';

import './SmartContracts.scss';
import '../../Money101/Money101.scss';
import ShareComponent from '../../ShareComponent/ShareComponent';
import ExplainationPopover from '../../../ExplainationPopover/ExplainationPopover';

class SmartContracts extends Component {
    oldScroll;
    referralRoute;
    state = {
        progressBarWidth :0,
        section : 'Introduction',
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
                <div className="gb-money-main gb-smart-contracts-main">
                    <section className="gb-money-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 offset-md-1">
                                    <div className="gb-money-dtl">
                                        {/* <div className="clearfix">
                                            <a href="/" className="gb-basic-btn"><i className="gb-left-arrow"></i>In-depth</a>
                                        </div> */}
                                        <h1 className="gb-in-depth-title">Smart Contracts</h1>
                                        <div className="gb-money-banner-dtl">
                                            <p>Smart contracts are <GlossaryPopover content="blockchain"/>-based digital agreements that have the power to:</p>
                                            <ul>
                                                <li>1. auto-execute without being triggered by the people who signed it and</li>
                                                <li>2. directly transfer funds from one party to another.</li>
                                            </ul>
                                            <p>Many consider smart contracts to be a powerful tool that might transform even our day to day agreements with other people. Smart contracts are run on blockchain platforms, the most prominent of which is <GlossaryPopover content="Ethereum"/>.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-1">
                                    <div className="gb-dephth-right">
                                        <div className="gb-money-video">
                                            <img src={require('../../../../assets/images/in-depth/smartcontarcts-main.svg')}  alt="Money-Video" />
                                        </div>
                                        {/* Swiper */}
                                        <div className="gb-segment-blk">
                                            <h4>In this segment, you will learn:</h4>
                                            <div className="swiper-container gb-money-question-scroller-container">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <ul>
                                                            <li onClick={() => this.scrollToContent(0)} className="sectionTitle" data-part="Part I">Introduction</li>
                                                            <li onClick={() => this.scrollToContent(1)} className="sectionTitle" data-part="Part II">Example Use Case</li>
                                                            <li onClick={() => this.scrollToContent(2)} className="sectionTitle" data-part="Part III">Broader Implications</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="swiper-scrollbar gb-money-question-scrollbar"></div>
                                            </div>
                                            <div className="gb-next-menublk clearfix">
                                                {/* <a href="{null}" className="gb-next-menubtn"> */}
                                                <Link className="gb-next-menubtn" to="/learn/nodes">
                                                Nodes <i className="gb-right-arrow"></i>
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
                                            <li>Introduction</li>
                                            <li>Example Use Case</li>
                                            <li>Broader Implications</li>
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
                                        <span>Smart Contracts</span>
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
                                                    <h2>Introduction</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p><GlossaryPopover content="Smart contract"/>  (noun): An agreement that is 1. coded onto a <GlossaryPopover content="blockchain"/>  which 2. has the ability to automatically execute upon 3. completion of specified terms and 4. transfer funds from one party to another.</p>
                                                        <p>Don’t worry, we know it’s a mouthful of rather vague terms. Let’s unpack:</p>
                                                        <ul>
                                                            <li>Smart contracts are coded onto a blockchain. That is to say, instead of writing an agreement on pen and paper, you can write an agreement in code, sign it digitally, and upload it to a blockchain where your code is run by a network of computers. Once pushed to the blockchain, the contract code cannot be altered by the people involved in the agreement.</li>
                                                            <li>Smart contracts can “automatically execute.” When the terms of an agreement are met, no one person must trigger completion of the contract. The contract itself will "know" the outcome of the agreement and complete the contract without anyone telling it to do so.</li>
                                                            <li>The terms of smart contracts are customizable. You could theoretically create a smart contract detailing almost any agreement, making them versatile.</li>
                                                            <li>Smart contracts have the ability to transfer funds between parties. Since everyone involved in the contract has digitally signed it with a <GlossaryPopover content="private key"/> , the contract is endowed with the ability to move funds by itself when terms are met.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>These four things make smart contracts akin to “agreements with superpowers,” according to Henning Diedrich in his book, "Ethereum." Smart contracts are decidedly different, and perhaps more efficient, than traditional pen and paper contracts.</p>
                                                        <p>Using a paper contract involves uncertainty, risk, and hassle. It is always possible that one of the parties involved with the contract does not abide by the terms. For instance, the person who should be paying you could refuse to. Handling disputes like this in our current legal system is both costly and slow. Smart contracts do away with the need to enforce an outcome (in the legal sense). The code of a smart contract includes the power to transfer money from one party to another, so when the terms of an agreement are met the contract automatically completes payment. It's not that disputes become easier, it's that there's nothing to dispute in the first place.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-smart-contract-img1">
                                                        <img src={require('../../../../assets/images/in-depth/smart-contract/smart-contract-img1.svg')}  alt="smart-contract-img1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>One way to think of smart contracts is like a regular contract, but with an escrow service built in.</p>
                                                        <p>Escrow services mediate agreements. For example, you want to sell your house. An escrow service collects the deed from you, and the money from the person you're selling the house to. The service then ensures that the money gets to you and the deed gets to the buyer. They usually charge high fees, upwards of 2%!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Here's how the escrow service is "built into" a smart contract: like an escrow service, the contract has the power to move funds (or information, documents, etc.). This removes the need for the two parties involved to trust each other—they do not need to trust each other in order for the terms to be met.</p>
                                                        <p>This makes the contract “trustless,” meaning that the contract does not require trust to be involved at all. With a pen and paper contract, you are forced to trust that the other party will fulfill their terms. When using a smart contract, you do not have to trust anyone. No one has to agree to pay you at the end of the contract, only in the beginning, when they first sign.</p>
                                                        <p>And one more very important point: escrow services are <GlossaryPopover content="centralized"/> . They are companies or banks that charge high fees. Smart contracts are <GlossaryPopover content="decentralized"/>  agreements that run on a blockchain. If your contract runs on the Ethereum blockchain, every computer <GlossaryPopover content="mining"/>  on Ethereum will complete your contract. It's decentralized, unlike an escrow service.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Right now, there are many platforms that host smart contracts. The largest, as mentioned above, is Ethereum, whose cryptocurrency (more accurately, <GlossaryPopover content="cryptocommodity"/> ), called Ether, is the second largest by <GlossaryPopover content="market capitalization"/>  behind Bitcoin. The Ethereum platform hosts smart contracts primarily written in Ethereum’s own coding language, Solidity. There are many other blockchains in competition to become the Smart Contract King, including NEO, EOS, Cardano, and more.</p>
                                                        <p>Smart contracts do have limitations, and the technology behind them is still developing. There are a number of issues to solve before they are ready to become widely accepted.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Regardless of the word contract, it is unclear whether a smart contract will stand up as a legal document in court. Another issue is that smart contracts are unchangeable the second they are deployed to the blockchain. What if there is a coding error figured out afterwards? Uh oh.</p>
                                                        <p>It is likely that we will see many advancements in the usability and implementation of smart contracts in the coming months and years. Much of this progress is already underway, and there are lots of talented minds trying to make these new tools usable for everyone.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Example Use Case</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Let's get theoretical here. The following example involves technical solutions that haven't quite been figured out, but in the coming years this will very likely be a possible use case for smart contracts. Here goes:</p>
                                                        <p>Smart contracts can act on information from the real world. This works because we can feed information to a smart contract. A program that pushes information to a blockchain is called an “oracle.” Yes, it’s really called that. Yes, it does sound cool.</p>
                                                        <p>Let’s say you and I make a bet about the outcome of a sporting event. You bet me .1 Ether (the native currency of Ethereum) that in an upcoming match, the Decentralogs (D) will beat the Blockspitters (B). Since I think the Blockspitters are a better team, I take the bet. You and I have a few options in terms of writing out an agreement.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>We could take out a piece of paper and write down “If B beats D, you pay me .1 Ether, and if D beats B, I will pay you .1 Ether.” One would hope that upon seeing the final score of the match, we would complete the bet by one of us paying the other, but contracts don’t always work as anticipated. Perhaps I refuse to pay for one reason or another.</p>
                                                        <p>What to do! Let’s review your options:</p>
                                                        <ul>
                                                            <li>Forget about the bet entirely (you’d be out some Ether! Not good!).</li>
                                                            <li>Sue me for the lost funds. Unfortunately, in reality you’d likely end up paying far more in legal fees for this to be worth suing over (not to mention the hassle).</li>
                                                        </ul>
                                                        <p>As you can see, a pen-and-paper contract is extremely difficult to enforce if you or I decide not to follow through with our agreement.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>On the other hand, we could use a smart contract. We’d write the exact same terms (using a coding language), digitally sign, and deploy the contract to the blockchain. Upon deployment, you and I have to pay a small fee for the contract to run. This fee is far lower than what would normally be charged by an escrow service.</p>
                                                        <p>The contract would include an oracle, which can automatically feed the contract the result of the game. Take that in for a second: the contract will know who wins the game.</p>
                                                        <p>For better or worse, regardless of unfair calls or wanting to get out of the bet, at the end of the game the contract will execute on all computers associated with the blockchain and one of us will receive payment. </p>
                                                        <p>Once we sign the contract, <GlossaryPopover content="the agreement is totally out of our hands"/> . No need to enforce. No delayed payments or arguing. No legal fees of any kind.</p>
                                                        <p>This is just one example of how smart contracts may replace traditional ones. Some argue that smart contracts will influence a multitude of industries because they have the potential to operate more efficiently and cheaply than paper contracts, and do not require trust between parties.</p>
                                                        <p>Some of the technologies mentioned above, especially Oracles, are still in development.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Broader Implications</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Smart contracts can be used for betting, sure, but that’s just the tippy tippy top of the huge iceberg. What else can we use them for? </p>
                                                        <p>Imagine a future world with a future economy. It could be a world full of smart contracts which act far more efficiently than the contracts we use today.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>Think about it! Any time you sign a contract or enter an agreement is a potential opportunity to utilize a smart contract. Think mortgage payments, supermarket purchases, or payroll doled out by a company.</p>
                                                        <p>The first industries to be affected might be law, banking, insurance, and escrow services.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-smart-contract-img2">
                                                        <img src={require('../../../../assets/images/in-depth/smart-contract/smart-contract-img2.svg')}  alt="smart-contract-img2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <ul>
                                                            <li>Law firms might have to adapt to a world where both signed papers and digitally signed code are treated as legal documents.</li>
                                                            <li>Banking will adapt to using smart contracts for completion of all sorts of payments.</li>
                                                            <li>Insurance systems might be entirely run using smart contracts and Internet connected devices (known as the <GlossaryPopover content="Internet of Things"/>, or IoT).</li>
                                                            <li>Escrow services might be phased out entirely by less expensive, more efficient alternatives.</li>
                                                        </ul>
                                                        <p>We can’t know how exactly how smart contracts will be integrated into our society, but their implementation is likely to further democratize our economy and make our existing systems more efficient.</p>
                                                        <p>Take the quiz below to see just how smart your contracts are!</p>
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
                                    <h2>Test yourself — take the Smart Contracts quiz!</h2>
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
                                        <h3>Now that you understand smart contracts, it’s time to tackle Nodes!</h3>
                                        <div className="gb-next-page-menu gb-nodes-menu">
                                            <span>Nodes</span>
                                            <div className="gb-letsgo-btnblk">
                                                <Link className="gb-letsgobtn" to="/learn/nodes" >
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
                                            <li className="gb-future-menu gb-fiatcurrency-menu">
                                                <Link to="/learn/fiat-currency" >
                                                    Fiat Currency
                                                </Link>
                                            </li>
                                            <li className="gb-blockchain-menu gb-digital-assets-menu">
                                                <Link to="/learn/digital-assets" >
                                                    Digital Assets
                                                </Link>
                                            </li>
                                            <li className="gb-ethereum-menu gb-forks-menu">
                                                <Link to="/learn/forks" >
                                                    Forks
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
                                            <span>Smart Contracts : Quiz</span>
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
                                                                <h3>What are two of the critical facets of smart contracts?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio1" type="radio" name="question1" value="1" />
                                                                        <label htmlFor="radio1">Auto-execution and payment/information transfer</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio2" type="radio" name="question1" value="2" />
                                                                        <label htmlFor="radio2">Auto-execution and arbitration</label>
                                                                        <ExplainationPopover content="Smart contracts do away with arbitration. They autoexecute based on hard data."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio3" type="radio" name="question1" value="3" />
                                                                        <label htmlFor="radio3">Payment/information transfer and arbitration</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #2</span>
                                                                <h3>True or false: You don’t want to use a smart contract if you plan on changing the terms of the contract.</h3>
                                                                <ul>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio4" type="radio" name="question2" value="4" />
                                                                        <label htmlFor="radio4">true</label>
                                                                        <ExplainationPopover content="Smart contracts, once deployed, WILL execute based on the information that is available to them. This poses a problem if the contract you’re looking at needs to be updated"/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio5" type="radio" name="question2" value="5" />
                                                                        <label htmlFor="radio5">false</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #3</span>
                                                                <h3>Which of the following is an ideal case for a smart contract?</h3>
                                                                <ul>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio6" type="radio" name="question3" value="6" />
                                                                        <label htmlFor="radio6">Escrow for a house payment following an inspection</label>
                                                                        <ExplainationPopover content=""/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio7" type="radio" name="question3" value="7" />
                                                                        <label htmlFor="radio7">Buying goods at a grocery store</label>
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
        document.title = "Smart Contracts | Goodbit101";
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

export default SmartContracts;
