import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Newslatter from '../../../Newslatter/Newslatter';
import Swiper from "swiper";
import GlossaryPopover from '../../../GlossaryPopover/GlossaryPopover';

import './ProofOf.scss';
import '../../Money101/Money101.scss';
import ShareComponent from '../../ShareComponent/ShareComponent';
import ExplainationPopover from '../../../ExplainationPopover/ExplainationPopover';

class ProofOf extends Component {
    oldScroll;
    referralRoute;
    state = {
        progressBarWidth :0,
        section : 'Proof of Work: the original consensus mechanism',
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
                <div className="gb-money-main gb-proofof-main">
                    <section className="gb-money-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 offset-md-1">
                                    <div className="gb-money-dtl">
                                        {/* <div className="clearfix">
                                            <a href="/" className="gb-basic-btn"><i className="gb-left-arrow"></i>In-depth</a>
                                        </div> */}
                                        <h1 className="gb-in-depth-title">Proof of...</h1>
                                        <div className="gb-money-banner-dtl">
                                            <p>In Crypto-speak, <GlossaryPopover content="consensus"/> means pretty much what it sounds like: agreement. Consensus is the method by which <GlossaryPopover content="blockchain"/> networks agree on which transactions are valid and which aren’t. New “consensus mechanisms” are being developed every day, but here we’ll dive into the most common of them.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-1">
                                    <div className="gb-dephth-right">
                                        <div className="gb-money-video">
                                            <img src={require('../../../../assets/images/in-depth/proof-main.svg')}  alt="Money-Video" />
                                        </div>
                                        {/* Swiper */}
                                        <div className="gb-segment-blk">
                                            <h4>In this segment, you will learn:</h4>
                                            <div className="swiper-container gb-money-question-scroller-container">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <ul>
                                                            <li onClick={() => this.scrollToContent(0)} className="sectionTitle" data-part="Part I">Proof of Work: the original consensus mechanism</li>
                                                            <li onClick={() => this.scrollToContent(1)} className="sectionTitle" data-part="Part II">Proof of Stake: an Improvement?</li>
                                                            <li onClick={() => this.scrollToContent(2)} className="sectionTitle" data-part="Part III">Fantastic! We’ve done it! Well, almost…</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="swiper-scrollbar gb-money-question-scrollbar"></div>
                                            </div>
                                            <div className="gb-next-menublk clearfix">
                                                {/* <a href="{null}" className="gb-next-menubtn"> */}
                                                <Link className="gb-next-menubtn" to="/learn/scalability">
                                                Scalability <i className="gb-right-arrow"></i>
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
                                            <li>Proof of Work: the original consensus mechanism</li>
                                            <li>Proof of Stake: an Improvement?</li>
                                            <li>Fantastic! We’ve done it! Well, almost…</li>
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
                                        <span>ProofOf</span>
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
                                                    <h2>Proof of Work: the original consensus mechanism</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>In our section on <Link to="/learn/mining">Mining</Link>, we discuss the proof of work consensus mechanism, the original cryptographic solution to the “Byzantine General’s Problem” introduced in the Bitcoin <GlossaryPopover content="white paper"/>.</p>
                                                        <p>The Byzantine General’s Problem boils down to this: how can we prevent the falsification of data in an environment where there is an economic incentive to cheat? In other words, how can we stop people from lying when it’s tempting to lie. In our case, this is analogous to <GlossaryPopover content="miners"/> creating fake transactions (or entire blocks) on the public ledger.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>Well, <GlossaryPopover content="Satoshi"/>, being a smart cookie, laid out a plan for how we can trust miners.</p>
                                                        <p>In the case of the Bitcoin <GlossaryPopover content="protocol"/>, it is prohibitively expensive to falsify data–in fact, an interesting summary of the system might be that the network is secure as long as honest miners outspend dishonest ones.</p>
                                                        <p>As the number of honest miners increases, it becomes exponentially more difficult for “bad actors” to create false transactions. When dishonest miners gain a majority of the network, it is possible to mount what is known as a <GlossaryPopover content="51% attack"/>.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-proofof-img1">
                                                        <img src={require('../../../../assets/images/in-depth/proof-of/proofof-img1.svg')}  alt="proofof-img1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Let’s review proof of work and 51% attacks briefly before continuing (please visit <Link to="/learn/mining">Mining</Link> for a step by step, logical explanation of why proof of work is effective):</p>
                                                        <ul>
                                                            <li>Miners operating in a proof of work system are under the assumptions that:</li>
                                                                <ul>
                                                                    <li>The likelihood of mining a block is proportional to mining power (computational power).</li>
                                                                    <li>The things you need in order to mine (energy, time, and computational power) are costly.</li>
                                                                    <ul>
                                                                        <li>Miners must therefore carefully ration their computing power. Usually, miners can only mine one chain at a time. If there are two chains on the same protocol (a <GlossaryPopover content="fork"/>!) to mine on, any effort put into mining the fraudulent one will ultimately yield no reward–only wasted energy and time costs. The inclusion of a limited physical resource (energy) in the entire process motivates you to mine only on one chain… the one that you believe to be honest.</li>
                                                                        <li>The absence of this cost opens the door to a slew of game theory issues, most prominently the “Nothing at Stake” problem. To be discussed further!</li>
                                                                    </ul>
                                                                    <li>Miners will accept the longest chain as the honest one.</li>
                                                                    <ul>
                                                                        <li>In essence, this means miners will accept the chain with the most computational work as legitimate, as it would be incredibly costly to replicate all of the work put into the honest chain.</li>
                                                                        <li>Computational work costs money.</li>
                                                                    </ul>
                                                                </ul>
                                                            <li>Since there is an emphasis on computational work and computational work takes energy, it follows that:</li>
                                                                <ul>
                                                                    <li>A dishonest entity owning 51% of total computing power and mining on a fraudulent chain would, on average, mine blocks faster than the honest chain until the dishonest one is longer.</li>
                                                                    <li>At this point, honest nodes will be forced to accept the longer chain as the valid one, and the attack has succeeded.</li>
                                                                    <li>Therefore, it is of critical importance that no one entity control 51% of the mining power.</li>
                                                                    <li>The cost to mount such an attack would require funding equal to the value of 51% of the entirety of the mining power associated with the network. The assumption of proof of work systems is that:</li>
                                                                        <ul>
                                                                            <li>The coordination of such an endeavor makes this situation unlikely.</li>
                                                                            <li>The cost is large enough to be prohibitive.</li>
                                                                        </ul>
                                                                </ul>
                                                            <li>Furthermore, there is a final layer of security:</li>
                                                                <ul>
                                                                    <li>Miners are rewarded with newly minted cryptocurrency.</li>
                                                                    <li>A succeeding 51% attack on the blockchain implies a broken, insecure system.</li>
                                                                    <li>No one trusts a broken, insecure system.</li>
                                                                    <li>People will immediately sell the broken <GlossaryPopover content="cryptocurrency"/>, crashing its value.</li>
                                                                    <li>Miners pay costs and take a profit by selling the crypto they’ve mined, so they have an economic incentive to keep the system secure. In fact, there has been active miner collaboration in the past to prevent any one entity from controlling too much of the global mining power.</li>
                                                                </ul>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>These distributed and economic solutions serve as a consistent work around for the Byzantine General’s problem, as it is far too costly to mount an effective attack without destroying the value of the currency that has been stolen in the process!</p>
                                                        <p>Mining bitcoin uses about as much electricity as all of Ireland.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>While genius, the proof of work consensus mechanism has some very important drawbacks, the first of which is massive energy consumption. The amount of energy necessary to maintain just the Bitcoin network daily is absolutely staggering.</p>
                                                        <p>It can take upwards of 350,000 times more energy to confirm a single Bitcoin transaction than it does to execute a comparable VISA transaction.</p>
                                                        <p>Because energy costs are high for miners, many of them are forced to form large conglomerates, or “pools,” splitting the <GlossaryPopover content="block reward"/> among contributors when any of the miners finds a block. This decreases the size of payments but increases their frequency, allowing miners to receive a steady income.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-proofof-img2">
                                                        <img src={require('../../../../assets/images/in-depth/proof-of/proofof-img2.svg')}  alt="proofof-img2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>The problem is, this puts a very large proportion of the mining power in the hands of just a few organizations, which is the opposite of what the Bitcoin protocol hopes to achieve.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>Additionally, energy costs vary widely across geographic regions, effectively pricing out some prospective miners just because they live in the wrong place. This further reduces mining <GlossaryPopover content="decentralization"/>–we want as many people mining as possible, all over the place!</p>
                                                        <p>Clearly, proof of work has some serious drawbacks. However, it works. Proof of work has allowed Bitcoin to be decentralized in the first place.</p>
                                                        <p>Building off of this original idea, developers have since worked on a new consensus model. It’s known as <GlossaryPopover content="Proof of Stake"/>, and it solves many of the aforementioned problems while introducing entirely new ones.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Proof of Stake: an Improvement?</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>In a proof of work-based consensus mechanism, a person’s power in the network is proportional to their computing power. If you have more computing power, you’re more likely to discover new blocks.</p>
                                                        <p>One consequence of this methodology is a profit-focused miner mentality. If it makes <GlossaryPopover content="miners"/>  more money to mine a different <GlossaryPopover content="cryptocurrency"/>  on a different <GlossaryPopover content="blockchain"/>, they will do so without reservation. After all, they’ve got high energy bills to pay!</p>
                                                        <p><GlossaryPopover content="Proof of Stake"/> approaches things differently. Instead of using computational work to determine who is likely to win the next block, wealth is used. People who want to contribute to the network can opt to take a portion of their currency and “stake” it. This process is called <GlossaryPopover content="forging"/>.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>To forge, people must place these coins in a special <GlossaryPopover content="wallet"/>, where the coins are effectively frozen. The person staking these coins cannot remove, transfer, or sell them at will. Therefore, a person staking coins is likely to be a dedicated proponent of a given coin, highly motivated to act honestly and maintain system security.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-proofof-img3">
                                                        <img src={require('../../../../assets/images/in-depth/proof-of/proofof-img3.svg')}  alt="proofof-img3" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>The likelihood of a forger discovering the next block is determined by the proportion of total staked coins that they own. For instance, if the total quantity of staked coins is 100 and I’ve staked 10 coins, there is a 10% chance that I will be selected to construct the next block in the blockchain.</p>
                                                        <p>Rather than computationally intense hash functions, a simple randomization algorithm can be easily and continuously run by any computer, determining whether it is eligible to create a block. This block must then be verified by a majority of the other nodes in the network before it is added to the chain.</p>
                                                        <p>Let’s review the issues this solves:</p>
                                                        <ul>
                                                            <li>Energy consumption is no longer an issue.</li>
                                                            <li>Anyone, anywhere with a normal computer can stake coins.</li>
                                                            <li>Because staked coins are locked up for a period of time, only those truly invested in maintaining the honesty and security of the system will stake.</li>
                                                            <li>Mounting a 51% attack would require a person to own 51% of staked coins. Because the price of a coin would inevitably increase as you sought to buy massive quantities of it, it would likely be more expensive to accrue 51% of the supply of a coin than to own 51% of the computational power associated with a comparable proof of work system.</li>
                                                            <li>Conducting a successful attack would destroy the value of a coin, meaning any coins you’ve staked would become worthless.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Fantastic! We’ve done it! Well, almost…</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>There’s a reason that most coins still utilize a proof of work system. There are some serious issues with a proof of stake network. Some of the more obvious are:</p>
                                                        <ul>
                                                            <li>Because those who stake more coins are more likely to be selected to mine a block, the gap between rich forgers and poor forgers will grow over time. The rich get richer! Frown.</li>
                                                            <li>There is no longer a physical restriction on how many chains you can mine at once. In fact, it becomes easy to mine on multiple chains at the same time, because it doesn't require immense computational power and energy.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>That last one actually proves to be quite an issue if you follow its implications through to the end. Let’s take a look at an example:</p>
                                                        <p>You want to <GlossaryPopover content="double spend"/>  some money that you have. You spend it, receive a delicious ice cream cone, and then run home to your computer, where you promptly create an alternate chain. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-proofof-img4">
                                                        <img src={require('../../../../assets/images/in-depth/proof-of/proofof-img4.svg')}  alt="proofof-img4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>On this chain, you change the transaction so that instead of the money going to the ice cream store, it goes to another account that you own. Now, there are two chains on the network. Which will the forgers choose to continue mining, extending to make the longest (and therefore victorious) chain?</p>
                                                        <p>In proof of stake, miners have the ability to mine on both chains.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>In a proof of work system, miners would only be able to mine on one chain per computer. And if they picked the wrong one, it would be a massive waste of electricity for them, with no reward to offset their costs. So, they would all stick with the honest, original chain, the one that has made them money in the past. As a result, the honest chain would be the one used to keep track of account value.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-proofof-img5">
                                                        <img src={require('../../../../assets/images/in-depth/proof-of/proofof-img5.svg')}  alt="proofof-img5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>But in a proof of stake system, it costs forgers nothing to mine on both chains. In fact, they have an economic incentive to do so, because they will be rewarded regardless of which chain ends up winning in the end.</p>
                                                        <p>Back to our situation. Let’s pretend that you’re a forger with 1% of the total staked coins on the network. As soon as you create an alternate chain, all of the forgers begin forging both on the original chain and also on the newly created one.</p>
                                                        <p>In a proof of work system, 100% of mining power must be distributed across competing chains. In a proof of stake network, 100% of forging power can be distributed across each competing chain.</p>
                                                        <p>So, 99% of forging power (not including yours) is at work on both the original and your fraudulent chain, extending them both at the same rate. The 99% is waiting for one chain to grow consistently longer, indicating its identity as the honest chain. The thing is, everyone is forging on both chains, so they extend at the same rate… at first.</p>
                                                        <p>Because you, too, are a forger. You own 1% of total forging power in the network. If you had the same mindset as every other forger, you would forge on both chains. But you don’t!</p>
                                                        <p>You use your forging power only on the fraudulent chain you created.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>As a result, the fraudulent chain will, over time, become longer than the original and be accepted as the valid chain. Even with only 1% of the forging power, your attack will succeed.</p>
                                                        <p>This is known as the Nothing at Stake problem, and it is possible because you are able to forge on multiple chains at the same time without any punishment for doing so. As it turns out, the seemingly flagrant waste of electricity and computational power in proof of work was actually implemented to solve exactly this problem.</p>
                                                        <p>There Ain't No Such Thing As A Free Lunch, or TANSTAAFL, for short.</p>
                                                        <p>On a more fundamental level, you could say that “There Ain’t No Such Thing As A Free Lunch,” especially if you’re trying to secure a global system that keeps track of wealth. To some, proof of stake sounds like accomplishing a task without putting in much work, getting something for nothing, a free lunch.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Another issue with proof of stake is known as the Long Range Attack. If a bad actor were to gain access to the private keys of a person with a massive amount of wealth thousands of blocks in the past, the bad actor would be able to initiate a fork at that point. They could replicate every single transaction up to the present and send all the coins to themselves. Because the chain is ultimately of the same length as the real one and extends back thousands of blocks, only those who were forging the blockchain at the very beginning will know which chain is honest. Any other newcomers will not be able to know the difference.</p>
                                                        <p>But if we trust those who were present at the very beginning to decide which chains are valid and which are fraudulent… aren’t we just trusting a central authority?</p>
                                                        <p>That just won’t do.</p>
                                                        <p>As per usual, however, some very smart people are working on solutions to this issue. Ethereum, founded on a proof of work consensus model, has begun testing of their proof of stake adaptation, known as the <GlossaryPopover content="Casper protocol"/>.</p>
                                                        <p>Ultimately, all of the above issues exist because of a single, systematic flaw: in a proof of stake system, miners are not penalized for mining fraudulent chains.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>So, some seriously smart people over at Ethereum whipped up a plan to do just that. It’s still in development at the moment, but the crypto-space is waiting anxiously to see how the network will transition.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-proofof-img6">
                                                        <img src={require('../../../../assets/images/in-depth/proof-of/proofof-img6.svg')}  alt="proofof-img6" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Actually, several prominent coins have already made this change with considerable success. NEO, a platform similar to Ethereum, operates using a specialized form of proof of stake known as Delegated Byzantine Fault Tolerance.</p>
                                                        <p>It uses a multilayered voting protocol for each block that helps to identify bad actors and remove them from the system. From a technical standpoint, the whole thing is devilishly complicated, but what it basically boils down to is: “cheaters will be punished. Harshly. And we’re darn good at catching them. So don’t cheat!”</p>
                                                        <p>Other cryptocurrencies have attempted to merge the two modes of consensus. Dash, for example, utilizes a proof of work system overlaid by a network of “<GlossaryPopover content="Masternodes"/>”, which act as forgers. These masternodes are required to put up a large amount of money, which makes them motivated to maintain network security.</p>
                                                        <p>Masternodes don’t participate in block addition. Instead, they enable special transaction functions to users (for a fee). These include features like near instantaneous and fully anonymous transactions. While this combination expands the functionality of the cryptocurrency, ultimately it still has the same energy consumption issues as other proof of work networks.</p>
                                                        <p>For now, proof of work still remains king… but proof of stake is rapidly catching up, as smart-as-heck developers work 24/7 to circumvent the system’s flaws. In the meantime, others are developing totally new consensus mechanisms. Over time, we’ll see which prevails.</p>
                                                        <p>Take the quiz below to test your knowledge about consensus mechanisms.</p>
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
                                    <h2>Test yourself — take the Proof of quiz!</h2>
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
                                        <h3>Now that you understand proof of, it’s time to tackle scalability!</h3>
                                        <div className="gb-next-page-menu gb-scalability-menu">
                                            <span>Scalability</span>
                                            <div className="gb-letsgo-btnblk">
                                                <Link className="gb-letsgobtn" to="/learn/scalability" >
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
                                            <li className="gb-blockchain-menu gb-smart-contratcs-menu">
                                                <Link to="/learn/smart-contracts" >
                                                    Smart Contracts
                                                </Link>
                                            </li>
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
                                            <span>Proof-of : Quiz</span>
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
                                                                <h3>What consensus mechanism does Bitcoin use?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio1" type="radio" name="question1" value="1" />
                                                                        <label htmlFor="radio1">Proof of Stake</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio2" type="radio" name="question1" value="2" />
                                                                        <label htmlFor="radio2">Proof of Work</label>
                                                                        <ExplainationPopover content="The original consensus mechanism underlying all blockchain technology was proof of work, in which economic incentivization encourages system maintenance by miners"/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio3" type="radio" name="question1" value="3" />
                                                                        <label htmlFor="radio3">Proof of Steak</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio4" type="radio" name="question1" value="4" />
                                                                        <label htmlFor="radio4">Proof of Authority</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #2</span>
                                                                <h3>How does the transaction capacity of the Bitcoin network compare to that of traditional payment systems like VISA?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio5" type="radio" name="question2" value="5" />
                                                                        <label htmlFor="radio5">Bitcoin is slower, but it can handle more payments at once</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio6" type="radio" name="question2" value="6" />
                                                                        <label htmlFor="radio6">Bitcoin is faster, and it can handle more payments at once</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio7" type="radio" name="question2" value="7" />
                                                                        <label htmlFor="radio7">Bitcoin is slower, and it can’t handle as many transactions</label>
                                                                        <ExplainationPopover content="Where blockchain technology shines is in its security. It’s nearly impossible to shut down the distributed and international systems in place"/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio8" type="radio" name="question2" value="8" />
                                                                        <label htmlFor="radio8">Bitcoin is faster, but it can’t handle as many transactions</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #3</span>
                                                                <h3>Why is the Nothing at Stake problem such an issue for Proof of Stake systems?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio9" type="radio" name="question3" value="9" />
                                                                        <label htmlFor="radio9">Forgers can double the money they make if they cheat</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio10" type="radio" name="question3" value="10" />
                                                                        <label htmlFor="radio10">No one is motivated to keep the system secure</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio11" type="radio" name="question3" value="11" />
                                                                        <label htmlFor="radio11">Double spending becomes possible because forgers can forge multiple chains at once with no repercussions</label>
                                                                        <ExplainationPopover content="Miners are motivated to support only the legitimate chain in a proof of work system because it is costly for them to mine a faulty chain. In Proof of Stake systems, however, it costs a forger nothing to mine multiple chains at once, making it easy for a bad actor to double spend if they are forging."/>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #4</span>
                                                                <h3>What advantages might a proof of stake system have over a proof of work system?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio12" type="radio" name="question4" value="12" />
                                                                        <label htmlFor="radio12">Improved security</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio13" type="radio" name="question4" value="13" />
                                                                        <label htmlFor="radio13">Less electricity consumption</label>
                                                                        <ExplainationPopover content="Remember, there’s no mining with proof of stake, only forging!"/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio14" type="radio" name="question4" value="14" />
                                                                        <label htmlFor="radio14">It’s more difficult to double spend</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio15" type="radio" name="question4" value="15" />
                                                                        <label htmlFor="radio15">It’s easier to mine</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #5</span>
                                                                <h3>What do masternodes do?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio16" type="radio" name="question5" value="16" />
                                                                        <label htmlFor="radio16">add blocks to the chain</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio17" type="radio" name="question5" value="17" />
                                                                        <label htmlFor="radio17">enable special transactional functions</label>
                                                                        <ExplainationPopover content="Masternodes are required to stake capital to ensure their vested interest in the success of the network. They enable special functions for users, and in return are paid in fees."/>
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
        document.title = "Proof Of | Goodbit101";
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

export default ProofOf;