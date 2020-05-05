import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Newslatter from '../../../Newslatter/Newslatter';
import Swiper from "swiper";
import GlossaryPopover from '../../../GlossaryPopover/GlossaryPopover';

import './Mining.scss';
import '../../Money101/Money101.scss';
import ShareComponent from '../../ShareComponent/ShareComponent';
import ExplainationPopover from '../../../ExplainationPopover/ExplainationPopover';

class Mining extends Component {
    oldScroll;
    referralRoute;
    state = {
        progressBarWidth :0,
        section : 'Creating a transaction',
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
                <div className="gb-money-main gb-mining-main">
                    <section className="gb-money-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 offset-md-1">
                                    <div className="gb-money-dtl">
                                        {/* <div className="clearfix">
                                            <a href="/" className="gb-basic-btn"><i className="gb-left-arrow"></i>In-depth</a>
                                        </div> */}
                                        <h1 className="gb-in-depth-title">Mining</h1>
                                        <div className="gb-money-banner-dtl">
                                            <p><GlossaryPopover content="Bitcoin"/>  and other <GlossaryPopover content="cryptocurrencies"/>  only work if there is a <GlossaryPopover content="distributed"/>  network of people willing to verify transactions.</p>
                                            <p>Maintenance is upheld by those willing to lend their computing power to the network, known collectively as “<GlossaryPopover content="miners"/>”. Here we’ll discuss the process of mining, the incentives for doing so, and the basics of how the system maintains network security. We’ll also check in with our pal, Miner Moe.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-1">
                                    <div className="gb-dephth-right">
                                        <div className="gb-money-video">
                                            <img src={require('../../../../assets/images/in-depth/minning-main.svg')}  alt="Mining" />
                                        </div>
                                        {/* Swiper */}
                                        <div className="gb-segment-blk">
                                            <h4>In this segment, you will learn:</h4>
                                            <div className="swiper-container gb-money-question-scroller-container">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <ul>
                                                            <li onClick={() => this.scrollToContent(0)} className="sectionTitle" data-part="Part I">Creating a transaction</li>
                                                            <li onClick={() => this.scrollToContent(1)} className="sectionTitle" data-part="Part II">Verifying a Transaction</li>
                                                            <li onClick={() => this.scrollToContent(2)} className="sectionTitle" data-part="Part III">The Escapades of Miner Moe</li>
                                                            <li onClick={() => this.scrollToContent(2)} className="sectionTitle" data-part="Part IV">Preventing Fraud</li>
                                                            <li onClick={() => this.scrollToContent(2)} className="sectionTitle" data-part="Part V">Mining Today and Fancy Computers</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="swiper-scrollbar gb-money-question-scrollbar"></div>
                                            </div>
                                            <div className="gb-next-menublk clearfix">
                                                {/* <a href="{null}" className="gb-next-menubtn"> */}
                                                <Link className="gb-next-menubtn" to="/learn/cryptography">
                                                Cryptography <i className="gb-right-arrow"></i>
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
                                            <li>Creating a transaction</li>
                                            <li>Verifying a Transaction</li>
                                            <li>The Escapades of Miner Moe</li>
                                            <li>Preventing Fraud</li>
                                            <li>Mining Today and Fancy Computers</li>
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
                                        <span>Mining</span>
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
                                                    <h2>Creating a transaction</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Let’s walk through a <GlossaryPopover content="blockchain"/>  transaction. I agree to send you 1 bitcoin in exchange for one Double Chocolatey Sprinkle Cone™ (that’s an expensive cone…). You give me your <GlossaryPopover content="public address"/>, and I “announce” the transaction to the blockchain (in reality, my <GlossaryPopover content="wallet"/>  announces the transaction).</p>
                                                        <p>My announcement includes how much money I’ll be sending, your public address, and my <GlossaryPopover content="digital signature"/>.</p>
                                                        <p>(which proves that it’s really me sending you a bitcoin). The first two parts are self-explanatory, but the digital signature requires some digging to fully understand. After all, how can you sign something digitally in the first place? Couldn’t you forge a signature by simply copy and pasting?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>Pause. Before we dig deeper, we need to define the <GlossaryPopover content="cryptographic hash function" />. These functions are complicated math-y instructions designed to produce outputs that are seemingly unrelated to their inputs, making it impossible to determine the input from the output.</p>
                                                        <p>For example, if you enter the number “1” into a hash function, it would return a seemingly random output of 1's and 0's. The same would happen if you entered “3”–and importantly, the hash output from “1” bears no correspondence to the output from “3.” The outputs mirror randomness.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-mining-img1">
                                                        <img src={require('../../../../assets/images/in-depth/mining/mining-img1.svg')}  alt="miningimg1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Any by the way, Bitcoin uses a hashing algorithm called “SHA-256,” meaning that the output is made up of 256 1’s or 0’s. This means that the odds of luckily guessing the input from the output are unfathomably low. If you still aren’t convinced, visit our section on <Link to="/learn/cryptography" >Security & Cryptography</Link>.</p>
                                                        <p>So, how do hashing functions relate to digital signatures? The answer is, we use hashing functions to create complicated digital signatures that cannot be faked. Signatures are created by feeding your <GlossaryPopover content="private key"/>  and transaction information into the hashing function, so an entirely new digital signature is created for each transaction.</p>
                                                        <p>I need to send you a bitcoin for the Double Chocolatey Sprinkle Cone™. So, I input to a hashing function the amount of crypto I want to send you, your address, and my private key. Out pops my signature for the transaction (in the form of a bunch of 1’s and 0’s). I include this with the transaction itself when I broadcast it to the network.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Verifying a Transaction</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Because I’m using a hash function, if any piece of the transaction is changed (my <GlossaryPopover content="private key"/>, your <GlossaryPopover content="address"/> , the transaction amount), the resulting signature is totally different! If you were to compare two signatures from the same person on two different messages, you wouldn’t be able to see any relationship between the two. However, we can verify that the signature is valid using a “verification algorithm.”</p>
                                                        <p>We input the transaction (including the address of the recipient and the amount), the address of the sender, and the digital signature. The verification algorithm takes this information and gives us a true or a false. Simple!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>If everything checks out, the transaction is valid. If not, then something is amiss. The verification algorithm works because the public address of the sender and their private key are related in a very complicated way (take our word for it, or see <GlossaryPopover content="Elliptic Curve Cryptography"/>).</p>
                                                        <p>Thus, the verification function will tell us whether or not the signature is real. The details of public key cryptography and cryptographic hash functions will be covered in detail in the <Link to="/learn/cryptography">Security & Cryptography</Link> section. For now, keep in mind that these hashing algorithms make it functionally impossible for a person to sign a message without the correct private key.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-mining-img2">
                                                        <img src={require('../../../../assets/images/in-depth/mining/mining-img2.svg')}  alt="miningimg2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Back to our transaction. I generated it, signed it using my private key, and broadcasted it out to the network. Thousands of <GlossaryPopover content="miners"/> received my transaction due to the magic of the Internet, and the miners checked the transaction using the verification algorithm to ensure two things:</p>
                                                        <ul>
                                                            <li>That it was really me sending you a bitcoin. If it had been an imposter, the transaction would have been rejected by the network.</li>
                                                            <li>That I have enough bitcoins to complete the transaction (remember, no overspending, and consequently no debt, is allowed on a blockchain).</li>
                                                        </ul>
                                                        <p>Great! Everything checks out. So, our transaction has been verified and is added to the pool of transactions that haven’t yet been officially added to the blockchain, waiting to be indelibly etched into digital history. My job as a participant in the ecosystem is complete–the miners take it from here. Yay! </p>
                                                        <p>Moving on…</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>The Escapades of Miner Moe</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p><GlossaryPopover content="Miner"/>  Moe, nearby, is getting ready to start mining for the first time and he wants one thing: to earn bitcoins. And there’s only one way for a miner to earn them:</p>
                                                        <p>Add the next block to the <GlossaryPopover content="blockchain"/> . If Moe is able to do so, he will receive a <GlossaryPopover content="block reward"/>  of newly minted bitcoins, plus the transaction fees from those conducting transactions. These transaction fees are included voluntarily by the sender, in this case me, along with every transaction broadcasted to the network.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>Why? Miners choose which transactions will be added to the next blocks, so offering a high transaction fee improves the chance that your transaction will be included as soon as possible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>For instance, let’s say that Moe is mining on a fictitious blockchain that includes only one transaction per block. Because Moe and other miners get to choose which transactions they will attempt to add to the blockchain first, the transaction with the highest fee will always be the one added first. So if you care about transaction speed, you also care about transaction fees.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 offset-lg-2 text-center">
                                                <div className="gb-content-img gb-mining-img3">
                                                    <img src={require('../../../../assets/images/in-depth/mining/mining-img3.svg')}  alt="miningimg3" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Returning to our example:</p>
                                                        <p>Moe wants to mine the next block. If he does so, he receives newly minted bitcoins and transaction fees. He selects the proper number of transactions to fill a block, taking those with the highest transaction fees and working his way down until the <GlossaryPopover content="block"/>  is full. To fully understand what takes place next, we need the following additional information:</p>
                                                        <ul>
                                                            <li>Simultaneously, every other miner around the world is doing the same thing as Moe, and there are many.</li>
                                                            <li>The transactions Moe selected are compressed into a very long number representing them. This number will eventually be combined with two other pieces of information and fed into the SHA-256 hashing algorithm. These are:</li>
                                                            <li>A number associated with the previously mined block (known as the <GlossaryPopover content="hash"/>  of the previous block), and</li>
                                                            <li>a newly generated, random number between 0 and 2^32 known as a <GlossaryPopover content="nonce"/>.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Let’s go over that again. In the final hash of this process, there are three inputs:</p>
                                                        <ul>
                                                            <li>A number representing all of the transactions in the new block.</li>
                                                            <li>A hash representing all of the transactions in the last block.</li>
                                                            <li>A new number, chosen at random, called a nonce.</li>
                                                        </ul>
                                                        <p>After feeding these things into SHA-256 (Bitcoin’s hashing algorithm), we get a new hash. Remember, hashes are 256 1’s or 0’s.</p>
                                                        <p>The goal of the miner is to find a nonce that makes a hash with a predetermined number of 0’s at the beginning. These 0’s are called “<GlossaryPopover content="leading zeros"/>”.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Why? SHA-256 only operates in the forward direction, and the only way Miner Moe can produce this special hash is by trying random nonces till he gets lucky and finds a hash with enough leading zeros.</p>
                                                        <p>Moe’s computer picks a nonce at random, combines it with the two other inputs, feeds the result into SHA-256, and checks the resulting hash for the correct number of leading zeros over…and over… and over… before finally finding a lucky nonce that generates the desired hash. Miners can also, and may need to, change the transactions in the block to generate this hash.</p>
                                                        <p>The randomness of SHA-256 comes into play here. There is no way for Miner Moe to calculate which combination of nonce, transactions, and previous hash will be correct. The most efficient way to find the hash with the right number of zeroes is to guess and check different combinations.</p>
                                                        <p>So why is this important? Well, only the first miner to produce the hash with the correct number of zeros is rewarded. Finding a block is akin to winning the lottery (or, aptly, luckily discovering a gold deposit, hence the term mining).</p>
                                                        <p>If you win, your computer happened to come across the right random nonce before anyone else’s did, and you collect a reward as result. Mining, at its core, is a combination of luck and immense computing power. The more computing power you have, meaning the more hashes you can produce, the more luck you will have.</p>
                                                        <p>The number of 0’s required for a block’s hash to be considered valid changes depending upon how much computer power is attempting to find each block. In the case of the Bitcoin protocol, the number of 0’s is adjusted so that a block is mined roughly every 10 minutes. If more computing power begins mining, the number of 0’s required at the beginning of the hash increases. If miners leave the network, decreasing total mining power, the number of 0’s decreases.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Preventing Fraud</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Remember that in <GlossaryPopover content="Miner"/> Moe’s final <GlossaryPopover content="hash"/>, the one where he chose a <GlossaryPopover content="nonce"/>, he included the hash of the previous <GlossaryPopover content="block"/> as an input. The hash Moe made, the one with the right nonce and leading zeros, will be used by miners as part of the next block.</p>
                                                        <p>Because the hash of each block is partially dependent upon the hash of the block before it, all of the blocks in the chain are connected. If, for instance, I were to change a single transaction in a single block, that would change:</p>
                                                        <ul>
                                                            <li>The transaction itself, invalidating the signature.</li>
                                                            <li>The hash of the block (the number produced when the transactions in the block, the nonce, and the hash of the previous block are fed through SHA-256). The block’s hash, when utilizing the previously correct nonce, would no longer be preceded by the correct number of 0’s due to the nearly completely random nature of the cryptographic hashing algorithm. Even a small change in the block will completely change the hash.</li>
                                                            <li>The hash of every block following this block. The hash of each block includes the hash of the block that came before it, so changing the hash of the first block invalidates every block that follows it in the chain.</li>
                                                        </ul>
                                                        <p>This ripple effect prevents even the slightest attempted changes in the blockchain from going unnoticed. More importantly, it requires someone attempting to rewrite history to find the new, correct, nonce and hash for every single block following the changed one.</p>
                                                        <p>Huh. Wait, couldn’t someone just… do that?</p>
                                                        <p>Well, sure. But remember, it takes an enormous amount of computing power, time, and electricity to calculate these things. Also, keep in mind that the Bitcoin <GlossaryPopover content="protocol"/> instructs miners to follow whichever chain is longest.</p>
                                                        <p>Let’s dig into the implications of this statement a bit:</p>
                                                        <p>Moe's brother, Joe. Joe is a "bad actor" in the network.</p>
                                                        <p>Moe’s brother Joe wants to cheat the system. A week ago, he paid for a haircut in bitcoins, received the service, and now wants to go back and change the record of the transaction. Instead of sending the bitcoins to the barber, he will instead send them to a different account that he himself owns. Then, he’ll mine a block that contains this fake expenditure and not the real one.</p>
                                                        <p>He’s only changing the one transaction, but it will invalidate every block following the one containing his payment.</p>
                                                        <p>“So be it!” he says with disdain. “I’ll just re-mine all the blocks following the changed one back to the present.”</p>
                                                        <p>At this point, you may be confused (we certainly were at first) – if he can just re-mine old blocks, then how can the <GlossaryPopover content="blockchain"/> be safe?</p>
                                                        <p>Fortunately, he can’t. The blockchain is <GlossaryPopover content="immutable"/>, so every block that’s ever been mined is still in existence. It is impossible for him to “write over” existing blocks. He’ll have to create a separate chain of blocks, each containing the same transactions as the original chain (except for the one change he made).</p>
                                                        <p>The chains will be identical up until the changed block, and separate after that point, because the blocks they are composed of will have different hashes and different nonces.</p>
                                                        <p>The Bitcoin “<GlossaryPopover content="proof of work"/>” protocol states that when two chains are created, as in this case, the computational power of the miners is pooled for both chains. Only one block can be mined every 10 minutes. This means that it is just as hard for Joe to find a nonce as the rest of the miners, and they have much more computational power than he does.</p>
                                                        <p>As long as more computational power is mining the correct chain, it will be statistically more likely to have blocks added to it and will grow more quickly. Thus, as the honest chain grows, the dishonest one falls further and further behind.</p>
                                                        <p>Miners only trust the longer chain–the honest one–and only accept transactions that are valid on the honest chain. Transactions on Joe’s chain will be invalidated. Joe’s attack has failed! And remember, we assumed that Joe was able to instantaneously mine all the blocks after his fraudulent block up to the present instantaneously. In reality, it is nearly impossible for a lone attacker to catch up.</p>
                                                        <p>Unless…Joe made a side deal with thousands of other miners, who all agree to mine on his fraudulent chain. If there are more dishonest collaborating miners than honest independent ones, they are able to add blocks to their alternate chain more quickly.</p>
                                                        <p>Eventually, their chain will be the longer one and the honest miners will switch to it (because they follow the longer chain). This is known as the 51% attack, and it has the potential to undermine the fraudless nature of the blockchain. It’s called a <GlossaryPopover content="51% attack"/> because whichever chain has 51% of the mining power will grow more quickly over time.</p>
                                                        <p>Fortunately, a 51% attack is incredibly difficult to execute for several reasons:</p>
                                                        <ul>
                                                            <li>As more and more miners join the network, it becomes more difficult to arrange collusion among 51% of the members.</li>
                                                            <li>Assuming you want to go back in time and change an old transaction, it is extraordinarily expensive to re-mine a significant number of blocks.</li>
                                                            <li>Miners have an incentive to prevent dishonesty and collusion. If a 51% attack were to happen, the security of the blockchain would be compromised and no one would accept the cryptocurrency as payment. This will cause the price to crash as everyone loses trust in the system. Because miners make their living by selling the bitcoins they have mined, they are economically motivated to prevent this from occurring. In fact, in some cases early on in Bitcoin’s history, miners have actively altered their behavior to stop this from happening.</li>
                                                        </ul>
                                                        <p>Man, was that a lot of information.</p>
                                                        <p>To sum it all up in few sentences: miners race to find new blocks, receiving newly minted coins as a reward if they are successful. This is done by “guess and checking” exceedingly large numbers in an attempt to produce a hash with a predetermined number of 0’s at the front. </p>
                                                        <p>The number of 0’s is adjusted (making the mining process proceed more quickly or more slowly) so that blocks are mined roughly every 10 minutes (this is true of Bitcoin specifically). Guess and checking is called “computational work” in fancy-pants-computer-science language. Whichever chain has the most computational work behind it (which will, inevitably, be the longest chain) is considered the true chain by miners.</p>
                                                        <p>You’ve made it through most of the technical jargon surrounding mining. Does your brain hurt? Yeah, ours too.</p>
                                                        <p>Let’s talk about how mining works today.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Mining Today and Fancy Computers</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>The method discussed previously for ensuring the absence of fraud is known as “<GlossaryPopover content="proof of work"/>,” due to the computational work (in the form of energy, time, and calculation) required to produce a block.</p>
                                                        <p>Because the mining difficulty is adjustable, as more miners have joined the network it has become more difficult to mine. This has lead to a sizable increase in the amount of electricity consumed per block produced, and many are concerned about the environmental impacts of such consumption.</p>
                                                        <p>Alternatives to proof of work are discussed in our <Link to="/learn/proof-of">Proof of</Link> section.</p>
                                                        <p>The faster you can check <GlossaryPopover content="nonces"/>, the faster you can find a <GlossaryPopover content="hash"/>, the more likely you are to find the right hash, and the more likely you are to get a block reward (lots of money). Thus, mining has contributed to a market for specialized computer chips designed specifically for finding nonces and running hashing algorithms.</p>
                                                        <p>Application Specific Integrated Circuits (<GlossaryPopover content="ASICs"/>) have significantly multiplied our ability to run through nonce possibilities as quickly as possible, and large conglomerates now purchase them by the thousands. Because mining is an all or nothing business, many individual miners saw a dramatic drop in the consistency of their rewards when large players entered the market, making it difficult to pay the high energy bills.</p>
                                                        <p>An ASIC</p>
                                                        <p>And so came <GlossaryPopover content="mining pools"/>: collections of many individuals, each contributing a small amount of mining power but together representing a vast amount. Rewards generated by any person in the pool are distributed according to computing power contributed to the pool. This allows miners to take profit more consistently and compete against larger, better funded opponents.</p>
                                                        <p>The downside? As mining pools draw more and more individual miners, computing power becomes more concentrated among specific groups, making it even more difficult for solo miners without lots of funding to sustain themselves. Given that Bitcoin was designed to be <GlossaryPopover content="decentralized"/>, this is concerning to many.</p>
                                                        <p>It is likely that, as better computing technology develops (which it invariably will), mining technology will change. And, as we said, there are some cryptocurrencies which aren’t even mined at all! You can read about that in the Proof of section.</p>
                                                        <p>Take the quiz below to find out if you’re Miner Moe or Miner Joe! And also to, like, test your mining knowledge, that kinda thing.</p>
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
                                    <h2>Test yourself — take the Mining quiz!</h2>
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
                                        <h3>Now that you understand mining, it’s time to tackle cryptography!</h3>
                                        <div className="gb-next-page-menu gb-cryptography-menu">
                                            <span>Cryptography</span>
                                            <div className="gb-letsgo-btnblk">
                                                <Link className="gb-letsgobtn" to="/learn/cryptography" >
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
                                            <li className="gb-blockchain-menu gb-proofof-menu">
                                                <Link to="/learn/proof-of" >
                                                    Proof of...
                                                </Link>
                                            </li>
                                            <li className="gb-ethereum-menu gb-scalability-menu">
                                                <Link to="/learn/scalability" >
                                                    Scalability
                                                </Link>
                                            </li>
                                            <li className="gb-future-menu gb-smart-contratcs-menu">
                                                <Link to="/learn/smart-contracts" >
                                                    Smart Contracts
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
                                            <span>Mining : Quiz</span>
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
                                                                <h3>When I send you money using Bitcoin, I send it to your _____ using my _______.</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio1" type="radio" name="question1" value="1" />
                                                                        <label htmlFor="radio1">Private key, Public key</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio2" type="radio" name="question1" value="2" />
                                                                        <label htmlFor="radio2">Public address, digital signature</label>
                                                                        <ExplainationPopover content="You send bitcoins to someone’s public address, and you sign the transaction using a digital signature, which uses a private key."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio3" type="radio" name="question1" value="3" />
                                                                        <label htmlFor="radio3">Public key, Public key</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio4" type="radio" name="question1" value="4" />
                                                                        <label htmlFor="radio4">Private key, Private key</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #2</span>
                                                                <h3>Cryptographic hash functions make it impossible to</h3>
                                                                <ul>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio5" type="radio" name="question2" value="5" />
                                                                        <label htmlFor="radio5">Determine inputs from outputs</label>
                                                                        <ExplainationPopover content="Hash outputs, called hashes, seem random. It’s very easy to go forward, and find a hash from a given input, but it’s very difficult, if not impossible, to go reverse and figure out an input given the hash."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio6" type="radio" name="question2" value="6" />
                                                                        <label htmlFor="radio6">Determine outputs from inputs</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #3</span>
                                                                <h3>The main purpose of verifying transactions is to see if</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio7" type="radio" name="question3" value="7" />
                                                                        <label htmlFor="radio7">The public address is valid</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio8" type="radio" name="question3" value="8" />
                                                                        <label htmlFor="radio8">The digital signature is valid</label>
                                                                        <ExplainationPopover content="We want to make sure the transaction was sent by the person who owns the cryptocurrency, and we check that by making sure the the digital signature on the transaction is correct."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio9" type="radio" name="question3" value="9" />
                                                                        <label htmlFor="radio9">The bitcoins are valid</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio10" type="radio" name="question3" value="10" />
                                                                        <label htmlFor="radio10">The public key is valid</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #4</span>
                                                                <h3>Miners earn bitcoins by</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio11" type="radio" name="question4" value="11" />
                                                                        <label htmlFor="radio11">Verifying transactions</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio12" type="radio" name="question4" value="12" />
                                                                        <label htmlFor="radio12">Broadcasting transactions</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio13" type="radio" name="question4" value="13" />
                                                                        <label htmlFor="radio13">Adding a new block to the blockchain</label>
                                                                        <ExplainationPopover content="When a miner adds a new block to the existing chain, they are given a “block reward,” which means they are given newly created bitcoins. The block reward decreases in size over time."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio14" type="radio" name="question4" value="14" />
                                                                        <label htmlFor="radio14">Running a node</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #5</span>
                                                                <h3>In order to add their block to the blockchain, a miner must</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio15" type="radio" name="question5" value="15" />
                                                                        <label htmlFor="radio15">Make a hash for each public address</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio16" type="radio" name="question5" value="16" />
                                                                        <label htmlFor="radio16">Accept transactions with the lowest transaction fee first</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio17" type="radio" name="question5" value="17" />
                                                                        <label htmlFor="radio17">Find a hash with the correct number of leading zeros</label>
                                                                        <ExplainationPopover content="there were many attempts at a digital currency before Bitcoin came around, such as b-money, BitGold, and HashCash. Bitcoin was the first successful digital currency."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio18" type="radio" name="question5" value="18" />
                                                                        <label htmlFor="radio18">Ask all the other miners in the network for permission</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #6</span>
                                                                <h3>Made-up-scenario: a group of thousands of miners collaborate to take a majority share of the Bitcoin network computing power and create fraudulent blocks. This issue is known as</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio19" type="radio" name="question6" value="19" />
                                                                        <label htmlFor="radio19">The Double Spending Problem</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio20" type="radio" name="question6" value="20" />
                                                                        <label htmlFor="radio20">A 51% Attack</label>
                                                                        <ExplainationPopover content=""/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio21" type="radio" name="question6" value="21" />
                                                                        <label htmlFor="radio21">The Byzantine Generals Problem</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio22" type="radio" name="question6" value="22" />
                                                                        <label htmlFor="radio22">A Nonce Attack</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #7</span>
                                                                <h3>The powerful computers miners use today are called</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio23" type="radio" name="question7" value="23" />
                                                                        <label htmlFor="radio23">GPUs</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio24" type="radio" name="question7" value="24" />
                                                                        <label htmlFor="radio24">ASICs</label>
                                                                        <ExplainationPopover content="Application Specific Integrated Circuits, or ASICs, are computers designed specifically to produce a huge number of hashes per second. Miners use them to generate hashes and solve blocks."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio25" type="radio" name="question7" value="25" />
                                                                        <label htmlFor="radio25">Mining Rigs</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio26" type="radio" name="question7" value="26" />
                                                                        <label htmlFor="radio26">Macbook Pro</label>
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
        document.title = "Mining | Goodbit101";
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

export default Mining;