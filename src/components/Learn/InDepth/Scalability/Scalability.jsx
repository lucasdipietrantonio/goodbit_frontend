import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Newslatter from '../../../Newslatter/Newslatter';
import Swiper from "swiper";
import GlossaryPopover from '../../../GlossaryPopover/GlossaryPopover';

import './Scalability.scss';
import '../../Money101/Money101.scss';
import ShareComponent from '../../ShareComponent/ShareComponent';
import ExplainationPopover from '../../../ExplainationPopover/ExplainationPopover';

class Scalability extends Component {
    oldScroll;
    referralRoute;
    state = {
        progressBarWidth :0,
        section : 'Scalability 101',
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
                <div className="gb-money-main gb-scalability-main">
                    <section className="gb-money-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 offset-md-1">
                                    <div className="gb-money-dtl">
                                        {/* <div className="clearfix">
                                            <a href="/" className="gb-basic-btn"><i className="gb-left-arrow"></i>In-depth</a>
                                        </div> */}
                                        <h1 className="gb-in-depth-title">Scalability</h1>
                                        <div className="gb-money-banner-dtl">
                                            <p><GlossaryPopover content="Scalability"/>  refers to how well a technology can grow while still maintaining efficiency. <GlossaryPopover content="blockchain"/>  technology is masterful at intertwining <GlossaryPopover content="cryptography"/> , computer science, and mathematics. </p>
                                            <p>But there have been plenty of unforeseen complications. In the case of blockchain technology, one of the more prominent issues is scalability, and it isn’t going away any time soon. Let’s check it out.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-1">
                                    <div className="gb-dephth-right">
                                        <div className="gb-money-video">
                                            <img src={require('../../../../assets/images/in-depth/scalability-main.svg')}  alt="Scalability" />
                                        </div>
                                        {/* Swiper */}
                                        <div className="gb-segment-blk">
                                            <h4>In this segment, you will learn:</h4>
                                            <div className="swiper-container gb-money-question-scroller-container">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <ul>
                                                            <li onClick={() => this.scrollToContent(0)} className="sectionTitle" data-part="Part I">Scalability 101</li>
                                                            <li onClick={() => this.scrollToContent(1)} className="sectionTitle" data-part="Part II">The Simple Solution: increased block size</li>
                                            <li onClick={() => this.scrollToContent(2)} className="sectionTitle" data-part="Part III">Block Optimization–the SegWit option</li>
                                            <li onClick={() => this.scrollToContent(3)} className="sectionTitle" data-part="Part IV">Lightning Networks: an off chain scaling solution</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="swiper-scrollbar gb-money-question-scrollbar"></div>
                                            </div>
                                            <div className="gb-next-menublk clearfix">
                                                {/* <a href="{null}" className="gb-next-menubtn"> */}
                                                <Link className="gb-next-menubtn" to="/learn/smart-contracts">
                                                Smart-Contracts <i className="gb-right-arrow"></i>
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
                                            <span>4 Section</span>
                                        </button>
                                    </h5>

                                </div>
                                <div id="collapseOne" className="collapse show gb-collapse-segment" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <ul>
                                            <li>Scalability 101</li>
                                            <li>The Simple Solution: increased block size</li>
                                            <li>Block Optimization–the SegWit option</li>
                                            <li>Lightning Networks: an off chain scaling solution</li>
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
                                        <span>Scalability</span>
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
                                        <a onClick={() => this.scrollToTop(0)}>Back to top <i className="gb-up-arrow"></i></a>
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
                                                    <h2>Scalability 101</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>What do we mean by <GlossaryPopover content="scalability"/>? Let’s outline the problem:</p>
                                                        <p>You’re a <GlossaryPopover content="Miner"/>, and when you fill a <GlossaryPopover content="block"/> you can only squeeze so many transactions into it. Let’s say that the blocks you’re working with can accommodate a total of 10 transactions. Fortunately, there are only 10 transactions that need to be added to the <GlossaryPopover content="blockchain"/> right now.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>Great! You put them into a block, run your computers, and hope that you’re the lucky winner of the block reward and transaction fees. </p>
                                                        <p>Let’s fast forward a few years. You’re still mining your chosen blockchain, but it has skyrocketed in popularity. Now, instead of 10 transactions waiting for confirmation, there are 10 million. Hm.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-scalability-img1">
                                                        <img src={require('../../../../assets/images/in-depth/scalability/scalability-img1.svg')}  alt="scalability-img1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Most transactions are going to have to wait around for quite a while before they’re added to the blockchain. We say “most” for a reason–the people who choose to offer high transaction fees won’t see any decrease in performance. All the miners want to maximize their profits, so these transactions will always be added first.</p>
                                                        <p>Only a few transactions can be added to blocks at a time, creating a bottleneck.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>The end result? High wait times and steadily increasing transaction fees, due to rising demand for miners’ attention.</p>
                                                        <p>Well, shoot. One of the major advantages to <GlossaryPopover content="cryptocurrency" /> in the first place was reduced transaction cost!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>This is known as a scalability issue, because there are problems associated with “scaling up” the number of users utilizing the blockchain. Fortunately, developers have been hard at work trying to crack this problem. Let’s take a look at what they’ve come up with!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>The Simple Solution: increased block size</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>The simplest solution proposed so far makes perfect logical sense: increase the number of transactions in a block. If more transactions can be included per block, the issue seems to resolve itself.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>The same number of miners can handle a greater number of transactions without congestion, naturally driving transaction fees downwards. The odds of a transaction being added to a block in the near future increase, increasing transaction speed.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Hmm… almost seems too good to be true, doesn’t it? As is often the case, it kinda is.</p>
                                                        <p>It turns out there are some hidden drawbacks here. Let’s take a look at the case of Bitcoin:</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>The increased block size solution was recently championed by a minority of Bitcoin <GlossaryPopover content="miners"/> and developers. Remember, Bitcoin’s code is <GlossaryPopover content="open source"/>, and modifications can be made if the community reaches agreement on the benefits of a proposal. When it came time to vote, the majority of the Bitcoin community was opposed to a block size change, for a number of reasons:</p>
                                                        <ul>
                                                            <li>Changing the block size represents a major change to the structural code of the Bitcoin <GlossaryPopover content="protocol"/>. Altering this factor would require a <GlossaryPopover content='"hard fork"'/>, essentially creating an entirely new currency. Holders of Bitcoin would be credited with an equal amount of this new currency, which would have a blockchain entirely divergent from the original and with its own mining community.</li>
                                                            <li>Changing block size significantly affects the requirements for useful mining equipment, from a hardware point of view. Increasing the block size requires miners to purchase expensive parts to expand memory capacity. This could phase out miners financially incapable of upgrading their equipment.</li>
                                                            <li> Reducing the number of independent miners gives more power to large, wealthy conglomerates or individuals financially capable of adjusting to the new rules. Mining power would disproportionately be reallocated to these parties, centralizing the mining process. And, as you’ve probably noticed, “centralization” is something of a dirty word in the cryptocurrency world.</li>
                                                            <li>Opting for this route ultimately solves nothing if the network continues to expand. Eventually, even the new block size would be too small to facilitate quick transaction times and low fees and would increase again. Increasing the block size is a temporary fix, not a permanent one.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Still, a minority of miners wanted larger block sizes, so they <GlossaryPopover content="forked"/> Bitcoin to create <GlossaryPopover content="Bitcoin Cash"/>. A minority of the community went with it–currently, the Bitcoin network has about ten times more miners than the Bitcoin Cash network does.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Block size increases are one solution to the scalability issue. Let’s see what other ideas the smarty-pants developers have come up with.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Block Optimization–the SegWit option</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>So let’s say that we don’t want to change the block size–how else can we optimize our system? Let’s take another look at what’s inside a block:</p>
                                                        <ul>
                                                            <li>The <GlossaryPopover content="hash"/> of the previous block</li>
                                                            <li>Transactions</li>
                                                            <li><GlossaryPopover content="Digital signatures"/></li>
                                                            <li>A timestamp</li>
                                                            <li>The <GlossaryPopover content="nonce"/></li>
                                                        </ul>
                                                        <p>Hmm…the transactions probably take up most of the space, right?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Actually, they don’t. Instead, digital signatures account for roughly 60% of the storage space inside a block. Well, shoot. We need signatures to verify our transactions and prevent fraud! Or do we?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>We definitely need them at first, to confirm that all the transactions broadcasted to the network are valid. But after that, they kinda just… sit around, taking up space. Hm.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>But we should probably keep a record of the verification itself, just to prove that each transaction was verified at some point in time, if someone wants proof in the future. How, then, can we reduce the amount of space taken up by signatures, thus increasing the number of transactions that can be put in each block?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>The “SegWit” protocol calls for a separation of the digital signatures themselves from the transactions they are associated with. We still know which signature goes with which transaction, and all the miners still verify each transaction.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Once the signature/transaction pair has been verified by miners, the signature data itself (along with some other information) is <GlossaryPopover content="Hashed"/>. This hash acts as proof that the transactions themselves were signed and verified at some point, and the hash takes up far less space than the digital signature itself.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Then, we take some additional liberties: instead of 1MB, the maximum block size will now be 4 million WU (weight units). A <GlossaryPopover content="byte"/> in the transaction section of the block will "weigh" 4 WU. However, a byte in the signature portion of the block will weigh only 1 WU. As a result, signatures are counted as only 1/4 the size they were before.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Separating the digital signatures from the transactions themselves frees up a great deal of space in the main piece of the block, where transactions can be stored. This allows for a greater number of transactions to be stored in the same sized block, allowing for the same advantages as noted for block size alteration, but without the need to change the mining equipment.</p>
                                                        <p>SegWit allows more transactions to fit into each block.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>A part of the block is dedicated to storing proof of verification data, and this data is called “Witness Data.” It is stored separately (“segregated”) from the transaction information itself. Hence Segregated Witness, or SegWit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Unfortunately, the SegWit update runs into some of the same problems that a block size adjustment does. Eventually, perpetual increases in blockchain traffic will result in slow, expensive transactions once again.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>SegWit is <GlossaryPopover content="backwards compatible"/>, and requires no <GlossaryPopover content="hard fork"/> of an existing blockchain like a block size increment does. It has slowly increased in popularity since introduction, and it boasts lower fees and higher speeds than the original (legacy) chain. However, it won’t stay that way forever.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Recording very large numbers of transactions on a blockchain is expensive, time consuming, and inefficient. Remember, a transaction stored will always be there, so in addition to up front expense, it will become more and more difficult to store increasing amounts of information over time.</p>
                                                        <p>What we really need, then, is a way to minimize the number of transactions that are recorded on the blockchain in the first place. <a target="_blank" rel="noopener noreferrer"href="https://giphy.com/gifs/Tsm2nsYbWuNkk/html5">Hmmmmmmmm</a>.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Lightning Networks: an off chain scaling solution</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Let’s say that you and I send each other money constantly. So often, in fact, that it is cumbersome to include all of our transactions on the <GlossaryPopover content="blockchain"/> because of the transaction fees (this would be particularly true if we are exchanging small amounts of value, say a few dollars at a time).</p>
                                                        <p>In that case, it might be far cheaper for us and more efficient for the blockchain if we were to use a lightning network. (Sounds cool, right? Lightning-y!)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Lighting networks are possible because of <GlossaryPopover content="multisignature wallets"/>, which require the use of more than one <GlossaryPopover content="private key"/> to “unlock.” To open a “channel” on a lightning network, two parties both contribute a starting amount of <GlossaryPopover content="crypto" /> to one of these special wallets. The amount contributed by each party in the channel could be equal, skewed, or completely one sided.</p>
                                                        <p>What’s important is that both parties have access to this multisignature wallet.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Let’s say that I like betting on sports games with you, and we estimate that the total value of our betting will never exceed 1 bitcoin. We open a channel by each contributing 0.5 bitcoins to a multisignature wallet (with its own, new keys) that both of us can access.</p>
                                                        <p>This transfer is broadcasted to the miners and added to the blockchain as a transaction. But from here on out, we can update the internal balance of our multisignature wallet without going through the blockchain.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>For instance, let’s say that I win 0.1 bitcoins from you in one of our bets. We update the internal totals to say that I now own 0.6 bitcoins of the 1 bitcoin in the wallet, while you own 0.4 of them. We each sign this new agreement with our digital signatures, so that we each have a record of the new balance if there’s an issue. Each of our copies have been signed by both of us, so their validity is indisputable</p>
                                                        <p>Here’s the key part of lightning networks: when we change the internal holdings in our wallet, it is not broadcasted to the network. We could conduct a million such transfers of value without going through the blockchain system.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>When does it end? Well, the wallet can be closed by either of us. This might happen when one of us runs out of money, or wants to stop betting. When this happens, the final values attributable to each person are withdrawn to personal wallets on the blockchain. This is the second and final transaction recorded on the blockchain: the ending balances for each of us.</p>
                                                        <p>Let’s review. The shared wallet requires two transactions to be recorded on the blockchain:</p>
                                                        <ul>
                                                            <li>At the beginning, when we open the wallet by sending money to its address.</li>
                                                            <li>At the end, when we close the wallet, and the final balances are sent to our personal addresses.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Incorporated into the wallet structure is a complex system of <GlossaryPopover content="cryptography"/> to essentially prevent fraud between the two parties, rendering the lightning network secure.</p>
                                                        <p>While these wallets save the blockchain a tremendous amount of traffic, they still necesitate that we keep opening wallets. Enough wallet-openings, and we might still have an issue. For instance, if too many people keep opening shared wallets, the blockchain could still be congested.</p>
                                                        <p>A channel between two points.</p>
                                                        <p>Wait! There’s more.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>If you have a channel (shared wallet) open with someone, you can use them as a bridge to transact with any entity that they have a shared wallet with. It works like this:</p>
                                                        <p>You want a haircut. You have no open channel with the hair salon, but your friend Lilly does, and you have an open channel with her. Furthermore, Lilly has enough money in her channel with the salon to theoretically pay for your haircut. Watch what happens:</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>You head over to the hairdresser, and ask them to tell you a secret word. Say, “pineapple.” Then you turn to call Lilly and say, “do me a favor and pay for my haircut. When you pay, tell the salon you’re paying for me and ask for the secret word.”</p>
                                                        <p>Lilly pays and returns with the secret word. If she can tell you the right word (pineapple), you know that she must have in fact paid for the haircut. Thus you pay her back in full using your open channel with her.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>In the real world, the secret word is actually a value that validates a hash using a true/false function. See <Link to="/learn/mining">Mining</Link> for more information on hash verification.</p>
                                                        <p>The point of this whole convoluted transaction is to ensure that your money actually ends up in the hands of the hair salon. And the best part is, you don’t even need to send money directly to the hairdresser or record any transactions on the blockchain!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>At this point, you might be wondering why Lilly would agree to such a deal–it seems like a heck of a lot of work for no reward!</p>
                                                        <p>Well, in reality computers do all of this for us, so there’s no actual work for Lilly involved. Furthermore, lightning networks are coded so that if the middleman (i.e. Lilly) does not receive repayment, they are refunded the money from the intended recipient, ensuring that they aren’t duped.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>In addition to “what’s in it for Lilly,” she can use the lightning network too!</p>
                                                        <p>Another huge side note: in the hair salon example we went through one channel to get payment through, but in reality we can go through as many channels as we need to in order to get money where it needs to go. A real life example would be more like: you know Lilly, Lilly knows Allen, Allen knows Derek, Derek knows Ophelia, Ophelia knows (100 more people in between) and they know the hair salon. We can still get payment there, “lightning” fast and with NO fees.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Let’s just say that again. Lightning networks have no fees.</p>
                                                        <p>To recap, Lightning networks:</p>
                                                        <ul>
                                                            <li>Reduce the transactional strain on the blockchain.</li>
                                                            <li>Allow nearly instantaneous value transfer with no fees.</li>
                                                            <li>Let us “borrow” open channels from others with guaranteed re-payment to them.</li>
                                                            <li>Can be integrated with any blockchain.</li>
                                                            <li>Are close-ish to launching.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>These factors combined have the capability to greatly reduce the number of transactions recorded on the blockchain, lowering fees and transaction times.</p>
                                                        <p>Lightning networks are still in development. There are half a dozen different permutations on the above scheme, but they all operate under roughly the same rules and their mainstream implementation is highly anticipated.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Think about it. Instant transactions. No fees. These are two tremendous accomplishments, and if they can be achieved it will be a huge step forward for cryptocurrency itself.</p>
                                                        <p>Take the quiz below to test your knowledge on scalability, SegWit, lightning network, and all the other silly-named solutions to network speed.</p>
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
                                    <h2>Test yourself — take the Scalability quiz!</h2>
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
                                        <h3>Now that you understand scalability, it’s time to tackle smart contracts!</h3>
                                        <div className="gb-next-page-menu gb-smart-contratcs-menu">
                                            <span>Smart Contracts</span>
                                            <div className="gb-letsgo-btnblk">
                                                <Link className="gb-letsgobtn" to="/learn/smart-contracts" >
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
                                            <li className="gb-ethereum-menu gb-nodes-menu">
                                                <Link to="/learn/nodes" >
                                                    Nodes
                                                </Link>
                                            </li>
                                            <li className="gb-future-menu">
                                                <Link to="/learn/fiat-currency gb-fiatcurrency-menu">
                                                    Fiat Currency
                                                </Link>
                                            </li>
                                            <li className="gb-blockchain-menu">
                                                <Link to="/learn/digital-assets gb-digital-assets-menu">
                                                    Digital Assets
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
                                            <span>Scalability : Quiz</span>
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
                                                                <h3>Why is scalability an issue with blockchain technology?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio1" type="radio" name="question1" value="1" />
                                                                        <label htmlFor="radio1">There aren’t enough miners</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio2" type="radio" name="question1" value="2" />
                                                                        <label htmlFor="radio2">A block can only have a certain number of transactions in it</label>
                                                                        <ExplainationPopover content="Because blocks are added one at a time, the number of transactions in a block limits the rate at which transactions can be officially added to the blockchain"/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio3" type="radio" name="question1" value="3" />
                                                                        <label htmlFor="radio3">There aren’t enough nodes on the network</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio4" type="radio" name="question1" value="4" />
                                                                        <label htmlFor="radio4">The number of transactions allowed in a block decreases over time</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #2</span>
                                                                <h3>Why isn’t increasing block size a long term solution?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio5" type="radio" name="question2" value="5" />
                                                                        <label htmlFor="radio5">It doesn’t address then number of miners on the network</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio6" type="radio" name="question2" value="6" />
                                                                        <label htmlFor="radio6">If transaction number continues to rise, the block size must continually change</label>
                                                                        <ExplainationPopover content=""/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio7" type="radio" name="question2" value="7" />
                                                                        <label htmlFor="radio7">It allows more miners to participate individually, which makes mining more competitive, undermining the network</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #3</span>
                                                                <h3>Roughly what percentage of space in a block is taken up by digital signatures?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio8" type="radio" name="question3" value="8" />
                                                                        <label htmlFor="radio8">10%</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio9" type="radio" name="question3" value="9" />
                                                                        <label htmlFor="radio9">25%</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio10" type="radio" name="question3" value="10" />
                                                                        <label htmlFor="radio10">60%</label>
                                                                        <ExplainationPopover content=""/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio11" type="radio" name="question3" value="11" />
                                                                        <label htmlFor="radio11">80%</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #4</span>
                                                                <h3>Is Segwit a hard fork, or a soft fork?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio12" type="radio" name="question4" value="12" />
                                                                        <label htmlFor="radio12">hard fork</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio13" type="radio" name="question4" value="13" />
                                                                        <label htmlFor="radio13">soft fork</label>
                                                                        <ExplainationPopover content="Segwit is backwards compatible–a soft fork?"/>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #5</span>
                                                                <h3>How many transactions does it take to initiate a channel on a lightning network?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio14" type="radio" name="question5" value="14" />
                                                                        <label htmlFor="radio14">one</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio15" type="radio" name="question5" value="15" />
                                                                        <label htmlFor="radio15">one</label>
                                                                        <ExplainationPopover content="One transaction to initiate the channel, and one to close it and record final account values at the end."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio16" type="radio" name="question5" value="16" />
                                                                        <label htmlFor="radio16">three</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio17" type="radio" name="question5" value="17" />
                                                                        <label htmlFor="radio17">four</label>
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
        document.title = "Scalability | Goodbit101";
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

export default Scalability;