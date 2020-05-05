import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Newslatter from '../../../Newslatter/Newslatter';
import Swiper from "swiper";
import GlossaryPopover from '../../../GlossaryPopover/GlossaryPopover';

import './Cryptography.scss';
import '../../Money101/Money101.scss';
import ShareComponent from '../../ShareComponent/ShareComponent';
import ExplainationPopover from '../../../ExplainationPopover/ExplainationPopover';

class Cryptography extends Component {
    oldScroll;
    referralRoute;
    state = {
        progressBarWidth :0,
        section : 'Public Key Cryptography',
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
                <div className="gb-money-main gb-cryptography-main">
                    <section className="gb-money-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 offset-md-1">
                                    <div className="gb-money-dtl">
                                        {/* <div className="clearfix">
                                            <a href="/" className="gb-basic-btn"><i className="gb-left-arrow"></i>In-depth</a>
                                        </div> */}
                                        <h1 className="gb-in-depth-title">Cryptography</h1>
                                        <div className="gb-money-banner-dtl">
                                            <p>Bitcoin and other cryptocurrencies only work if there is a distributed network of people willing to verify transactions.</p>
                                            <p>Maintenance is upheld by those willing to lend their computing power to the network, known collectively as “miners.” Here we’ll discuss the process of mining, the incentives for doing so, and the basics of how the system maintains network security. We’ll also check in with our pal, Miner Moe.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-1">
                                    <div className="gb-dephth-right">
                                        <div className="gb-money-video">
                                            <img src={require('../../../../assets/images/in-depth/cryptography-main.svg')}  alt="Cryptography" />
                                        </div>
                                        {/* Swiper */}
                                        <div className="gb-segment-blk">
                                            <h4>In this segment, you will learn:</h4>
                                            <div className="swiper-container gb-money-question-scroller-container">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <ul>
                                                            <li onClick={() => this.scrollToContent(0)} className="sectionTitle" data-part="Part I">Public Key Cryptography</li>
                                                            <li onClick={() => this.scrollToContent(1)} className="sectionTitle" data-part="Part II">Elliptic Curve Cryptography</li>
                                                            <li onClick={() => this.scrollToContent(2)} className="sectionTitle" data-part="Part III">Cryptographic Hash Functions</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="swiper-scrollbar gb-money-question-scrollbar"></div>
                                            </div>
                                            <div className="gb-next-menublk clearfix">
                                                {/* <a href="{null}" className="gb-next-menubtn"> */}
                                                <Link className="gb-next-menubtn" to="/learn/proof-of">
                                                Proof-of <i className="gb-right-arrow"></i>
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
                                            <li>Public Key Cryptography</li>
                                            <li>Elliptic Curve Cryptography</li>
                                            <li>Cryptographic Hash Functions</li>
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
                                        <span>Cryptography</span>
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
                                                    <h2>Public Key Cryptography</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p> <GlossaryPopover  content="Public key"/> <GlossaryPopover  content="cryptography"/> was introduced in the late 70’s, and it has revolutionized the way that we communicate securely. Public key cryptography is what allows us to use <GlossaryPopover  content="digital signatures"/> with <GlossaryPopover  content="cryptocurrency"/> transactions. The <GlossaryPopover  content="cryptography"/> is composed of two parts:</p>
                                                        <ul>
                                                            <li>The <GlossaryPopover  content="public key"/>–shared with everyone.</li>
                                                            <li>The <GlossaryPopover  content="private key"/>–held only by one entity, and kept secret.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>In reality, the public and private keys are entirely digital, and represented by strings of 1’s and 0’s. But to craft a clearer picture of how exactly public key cryptography works, let’s assume for a moment that these are real keys.</p>
                                                        <p>You own a super sturdy, unbreakable treasure chest. It’s bolted to the floor in your office, and it has a big lock installed on it. As it turns out, the lock on the chest is a special lock with three positions. Turning the lock to the left is position 1 (locked), turning it to the center is position 2 (unlocked), and turning it to the right is position 3 (locked). Only in the middle position is the chest unlocked.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1 text-center">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-crypto-img1">
                                                        <img src={require('../../../../assets/images/in-depth/cryptography/cryptography-img1.svg')}  alt="cryptographyimg1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Left, 1, locked. Center, 2, unlocked. Right, 3, locked.</p>
                                                        <p>You find a talented locksmith who makes you two different kinds of keys. One key only turns to the right, from position 1 to 2 to 3. You keep this key safe. It’s yours. It’s your “private key.”</p>
                                                        <p>The other key turns only to the left, from position 3 to 2 to 1. You make a ton of copies of this key and give them out to friends, family, and coworkers. It’s your “public key.”</p>
                                                        <p>You might get some pretty important, um, mail n’ stuff at your office building. You don’t want anyone to steal it! You come up with the idea to have everyone leave their packages and notes for you in the totally secure, indestructible chest.</p>
                                                        <p>“If you want to give me anything when I’m not around, put it in the chest and lock it!” you declare. Then, you put the lock into the center position (2), unlocking it.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Anyone with a <GlossaryPopover  content="public key"/> can deposit important information into the chest and turn left (to position 1, locking the chest). However, you are the only one who can turn the lock back towards the center (your private key turns to the right).</p>
                                                        <p>In this system, anyone can leave you packages and lock the chest. No one besides you can unlock the chest and retrieve your private mail.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 offset-lg-2 text-center">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-crypto-img2">
                                                        <img src={require('../../../../assets/images/in-depth/cryptography/cryptography-img2.svg')}  alt="cryptographyimg2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc gb-last-pera">
                                                        <p>This piece of our analogy gives you an idea of how public key cryptography can be used to protect sensitive information from prying eyes, while still allowing anyone to send you information.</p>
                                                        <p>This system has another advantage. Let’s say that rather than receiving information from others, you want to send a message to someone–and you want them to know for certain that it was you (and only you) who sent it.</p>
                                                        <p>You can put a document in the chest and use your private key to turn the lock on the chest all the way to the right, at position 3. This way, anyone with a public key can turn the lock to the left, back to position 2, and unlock the message.</p>
                                                        <p>And because you’re the only person who can turn the lock to position 3, the recipient will know that it must have been you who left the message. Assuming you are the only one with a private key, only you could have turned the lock to position 3.</p>
                                                        <p>So, the recipient of a package will know for certain that it was you who sent it.</p>
                                                        <p>This process is what underlies the idea of <GlossaryPopover  content="digital signatures"/>, which is discussed in the Mining section.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc gb-last-pera">
                                                        <p>How does this apply to <GlossaryPopover  content="cryptocurrencies"/>? Well, each crypto transaction must have a digital signature. A digital signature is equivalent to you turning the lock to position 3, certifying that it was you who sent the transaction, because only you have the power to do that.</p>
                                                        <p>In short, private keys allow you to digitally sign transactions.</p>
                                                        <p>Public and private keys are ubiquitous in the crypto world. Everyone has your public key, and can leave things in your chest. Only you can unlock the chest and take things out. The difference is, instead of using metal keys, we use digital ones, made of long, random strings of numbers.</p>
                                                        <p>The only thing to worry about is keeping your private key safe!</p>
                                                        <p>Public key cryptography was the basis for much of what would eventually make up <GlossaryPopover  content="Bitcoin"/>.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Elliptic Curve Cryptography</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Using <GlossaryPopover  content="Public key"/> <GlossaryPopover  content="Cryptography"/>, we can safely send and receive sensitive information, or even money. The heart of the system lies in a person’s <GlossaryPopover  content="Public key"/> and <GlossaryPopover  content="Private Key"/>. But there’s a little issue we need to deal with: how do we safely generate keys for someone, such that the private key is impossible to figure out? Remember that losing your private key is really, really bad.</p>
                                                        <p>Hopefully you now know that your private key should never be shared with anyone. So if a bad actor could find out your private key by looking at your public key, the entire system would be ruined. So how exactly are “public and private key pairs”, as they are known, generated?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>Prepare for some math!</p>
                                                        <p>The private key generation is easy: pick a number. Any number between 1 and 115792089237316195423570985008687907852837564279074904382605163141518161494337 (yes, really), including 1 but not the big, long number. Convert that to 256 <GlossaryPopover  content="bits"/> of <GlossaryPopover  content="binary"/>, and bam. Private key generated.</p>
                                                        <p>How did we arrive at that number? Private keys are 256 bits. That gives 2 to the power of 256 possible options, with a couple of numbers at the ends off limits.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-crypto-img3">
                                                        <img src={require('../../../../assets/images/in-depth/cryptography/cryptography-img3.svg')}  alt="cryptographyimg3" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>At this point, you might be thinking:</p>
                                                        <p>Well, shoot. Private key generation is easy. Hopefully making the public key is a bit more complicated and… cryptographic-y? Isn’t this whole thing supposed to be super complex and unbreakable?</p>
                                                        <p>Strap in, folks. This is where the mathematicians got to have some fun, because generating a public key from a private key is both deceptively simple to do and mind-bendingly difficult to keep straight in your head.</p>
                                                        <p>The method used to generate a public key from a private key (remember, the private key is just a number) is known as <GlossaryPopover  content="Elliptic Curve Cryptography"/>. An elliptic curve has an equation of the form:</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 offset-lg-2 text-center">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-crypto-img4">
                                                        <img src={require('../../../../assets/images/in-depth/cryptography/cryptography-img4.svg')}  alt="cryptographyimg4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>When we plot that out, it looks something like the Lulu Lemon (not sponsored!) logo on its side, or the Greek letter omega. We can use some of the strange properties of prime numbers and this graph to turn a private key into what seems like a completely random and unrelated public key.</p>
                                                        <p>There are two very important things about these elliptical curves:</p>
                                                        <ul>
                                                            <li>They are symmetrical about the x-axis, meaning they are mirrored lengthwise.</li>
                                                            <li>A line drawn between any two points can be extended to intersect the curve at a third point</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc gb-last-pera">
                                                        <p>Ready for the mind bending part? To generate our public key, we use the following rules:</p>
                                                        <ul>
                                                            <li>Pick a starting point on the graph (this point is predetermined in the case of <GlossaryPopover  content="Bitcoin"/>). In the gif this is point A.</li>
                                                            <li>Draw a line to a second point on the graph, point B.</li>
                                                            <li>Follow the line you’ve drawn so it intersects a third point on the graph (unmarked point when you follow B).</li>
                                                            <li>Flip this point over the x axis to <GlossaryPopover  content="point C"/>. If it was above, draw a line straight down. If it was below, draw a line straight up. Once you find this “flipped” point, cycle 1 has been completed.</li>
                                                            <li>Begin cycle 2 by creating a line connecting the original starting point (A) and the new point (point C).</li>
                                                            <li>Repeat steps 3-5 for a certain number of cycles.</li>
                                                            <li>The final end coordinate is your public key.</li>
                                                        </ul>
                                                        <p>How many cycles do we perform, though? The number of cycles is your <GlossaryPopover  content="private key"/>, which is just a random number! It could have been 1 cycle or 115792089237316195423570985008687907852837564279074904382605163141518161494336. It is likely that this process will have happened for trillions and trillions of cycles. Likely more cycles than seconds the universe has existed, by far.</p>
                                                        <p>The purpose of repeating this process a random number of times is to make going backwards extremely difficult. If you know someone's private key, figuring their public key is doable using a computer. If you only know their public key, it might as well be impossible, even with the strongest computers we have today.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Your public key is, well, public. You don’t care if people know what it is, unless elliptic curve cryptography is broken. What’s actually important about this process is how many cycles you perform, because that number is your private key.</p>
                                                        <p>This is mind-numbingly complicated math. Take it slow, and please reach out here if you have any questions!</p>
                                                        <p>Does your brain hurt yet? That's the point of cryptography. It's time to add another level of complexity.</p>
                                                        <p>Just to make this whole thing hopelessly unsolvable: let’s remove all of the points on the curve that aren’t whole numbers (no decimals allowed). This leaves us with a field of points, still symmetric about the x axis.</p>
                                                        <p>Because the curve extends infinitely (and computers tend to have a hard time with the whole infinity thing), we’re going to set the boundaries of the graph on both sides at a huge prime number, say 2^256 - 2^32 - 2^9 - 2^8 - 2^7 - 2^6 - 2^4 – 1 (because... we can).</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Go back to step 3, above. If the intersection of our line with the third point on the graph doesn’t happen before we hit the boundary, we wrap back around to the other side of our range. Imagine a game of Pacman, where running off screen on one side brings you back on the other side. Eventually, we’ll hit our third point, reflect it over the x-axis, and continue our process.</p>
                                                        <p>So we have a complex, multistep process performed with roughly a billion billion billion billion billion billion billion billion cycles, on average. All to generate a public key from a private key. Well then.</p>
                                                        <p>Let’s imagine we’re a hacker. We know a rich person’s public key (the end point of the last cycle), and we want to steal all the bitcoins she has. So, we take a look at the above rules and do some digging to find the starting point of the elliptical curve (the curve for Bitcoin happens to be y^2 = x^3 +7).</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>We have no better way to guess how many cycles were gone through than to run through every cycle backwards, until we get to the same known starting point. And as it turns out, going in reverse is pretty darn hard. In fact, it’s hard enough that this whole process could be categorized as a <GlossaryPopover  content="trapdoor function"/>…except it doesn’t have a trapdoor.</p>
                                                        <p>Oh, trapdoor functions? They’re very easy to compute in one direction given certain information, and almost impossibly difficult without this information, known as the trapdoor. The thing is, the cryptography discussed above is so efficient that there isn’t even a trapdoor for it. It’s just plain tough to go backwards, no matter how you look at it.</p>
                                                        <p>And by the way, our public key technically isn’t even what we go around giving out to people. We give out our <GlossaryPopover  content="public address"/>, which is a <GlossaryPopover  content="hash"/> (explained next) of the public key. Ultimately, the public key will need to be revealed if you spend money from an address, so that miners can verify your digital signature of the transaction.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>But until then, you have not one, but two layers of near impenetrable security. And if you wanted, you could then transfer the remainder of your funds to a different address to reestablish the second layer of security (your hidden public key). In fact, many wallets do this for you by default.</p>
                                                        <p>Let’s review. We generate a private key at random. We use a ridiculously complicated system to figure out the public key. We hash the public key to get a public address, which is where people can send you bitcoins.</p>
                                                        <p>The bottom line is… this stuff is pretty secure, right now. <GlossaryPopover content="Quantum computing"/> will undoubtedly change things, but the Bitcoin <GlossaryPopover  content="protocol"/> is open source. Thus, the encryption methods can be updated as attackers become more sophisticated.</p>
                                                        <p>If you’re reading this, you just read (or, possibly, gazed at) likely the most complicated and difficult to understand section on Goodbit. It’s okay if it doesn’t immediately make sense. It took people years to develop these cryptographic methods.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Cryptographic Hash Functions</h2>
                                                </div>
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>We mentioned at the end of the last section that your <GlossaryPopover  content="public key"/> is <GlossaryPopover  content="Hashed"/> to produce a <GlossaryPopover  content="public address"/>. Hashing also plays a critical role in mining blocks, and in the creation of our <GlossaryPopover  content="digital signatures"/>, used to sign off on transactions. So what exactly is a “cryptographic hash function” anyway?</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-crypto-img5">
                                                        <img src={require('../../../../assets/images/in-depth/cryptography/cryptography-img5.svg')}  alt="cryptographyimg5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>They are complicated, math-y instructions designed to produce outputs that are seemingly unrelated to their inputs, making it impossible to determine what went in from what comes out. </p>
                                                        <p>For example, if you enter the number “1” into a hash function, it would return an output of 1’s and 0’s that appears completely unrelated. The same would happen if you entered “3”– and importantly, the hash output from “1” bears no correspondence to the output from “3.” The outputs appear to be random.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Honestly, that sums it up pretty well. When we hash something, we make it incredibly difficult to go backwards and determine an input using an output. However, plugging something into a hash function ("going forward") is quick and easy, and importantly, it is consistent. If you plug the same number into a hash function multiple times, it will produce the same result each time.</p>
                                                        <p>Hashing is used both in mining and in public address generation, and the hashing algorithm that <GlossaryPopover  content="Bitcoin"/> uses is called SHA-256.</p>
                                                        <p>To wrap up this section on cryptography, we’d like to take a second to really look at the large numbers we’ve been tossing around.</p>
                                                        <p>SHA-256 has 256 “bits”–1’s or 0’s. Meaning 2^256 possible outputs.</p>
                                                        <p>The truly mind boggling enormousness of 2^256 can’t be fully appreciated on any scale we, as humans, are familiar with. Or can picture, or imagine, or draw, or speak about, or cook with. 2^256 is more atoms than there are in the observable universe. 2^256 is way, way, WAY larger than the number of miliseconds that the universe has existed. It’s stupidly, horribly, unimaginably, crazy big.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>However, it implies something very important: 2^256 is so large that every person on Earth could generate a million <GlossaryPopover  content="private keys"/> without checking against the network to see if they are already taken. The odds of a “<GlossaryPopover  content="collision"/>”, or two people randomly generating the same private key, is so unbelievably small that we can assume it will never happen.</p>
                                                        <p>Is it mathematically possible? Yes. Is it likely? It’s so unlikely that we can assume it is impossible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>This is has important implications–when you want to create an “account” on the blockchain, you don’t need to check if the number you (in reality, your <GlossaryPopover  content="wallet"/>) chose for your private key is the same as anyone else’s number.</p>
                                                        <p>This property allows us to generate private and public keys offline, making it impossible for a hacker to steal your private key through your internet access. This is the basis of <GlossaryPopover  content="cold storage"/>, which we discuss further in the Wallets section.</p>
                                                        <p>At this point you may understand (or at least know the names of) the cryptographic wizardry that keeps Bitcoin, and <GlossaryPopover  content="blockchain"/> technology itself, secure. <GlossaryPopover  content="Public key"/> <GlossaryPopover  content="cryptography"/>, <GlossaryPopover  content="elliptic curve cryptography"/>, and <GlossaryPopover  content="cryptographic hash functions"/>. A greater collection of polysyllabic words would be hard to come up with. If you manage to find one, drop us a line at <a href="mailto:admin@goodbit101.com">admin@goodbit101.com</a>. Haiku (5, 7, 5) format is preferred. </p>
                                                        <p>Take the quiz below to test your cryptography knowledge!</p>
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
                                    <h2>Test yourself — take the Cryptography quiz!</h2>
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
                                        <h3>Now that you understand cryptography, it’s time to tackle Proof of!</h3>
                                        <div className="gb-next-page-menu gb-proofof-menu">
                                            <span>Proof of</span>
                                            <div className="gb-letsgo-btnblk">
                                                <Link className="gb-letsgobtn" to="/learn/proof-of" >
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
                                            <li className="gb-blockchain-menu gb-scalability-menu">
                                                <Link to="/learn/scalability" >
                                                    Scalability
                                                </Link>
                                            </li>
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
                                            <span>Cryptography : Quiz</span>
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
                                                                <h3>What two parts does Public key cryptography consist of?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio1" type="radio" name="question1" value="1" />
                                                                        <label htmlFor="radio1">account password and email</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio2" type="radio" name="question1" value="2" />
                                                                        <label htmlFor="radio2">Private key and Public key</label>
                                                                        <ExplainationPopover content="Public key cryptography consists of both the user’s private and public key. When a user first creates a wallet, they are handed both private and public key."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio3" type="radio" name="question1" value="3" />
                                                                        <label htmlFor="radio3">Private key and email</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #2</span>
                                                                <h3>What bit of information does one need to send you cryptocurrency to your wallet?</h3>
                                                                <ul>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio4" type="radio" name="question2" value="4" />
                                                                        <label htmlFor="radio4">Public key</label>
                                                                        <ExplainationPopover content="The user’s public key is all that is needed in order for cryptocurrency to be sent from one wallet to another."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio5" type="radio" name="question2" value="5" />
                                                                        <label htmlFor="radio5">Private key</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio6" type="radio" name="question2" value="6" />
                                                                        <label htmlFor="radio6">your home address</label>
                                                                    </li>

                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio7" type="radio" name="question2" value="7" />
                                                                        <label htmlFor="radio7">email address</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #3</span>
                                                                <h3>What is the method used to generate a public key from a private key?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio8" type="radio" name="question3" value="8" />
                                                                        <label htmlFor="radio8">point-slope form</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio9" type="radio" name="question3" value="9" />
                                                                        <label htmlFor="radio9">midpoint formula</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio10" type="radio" name="question3" value="10" />
                                                                        <label htmlFor="radio10">Elliptic Curve Cryptography</label>
                                                                        <ExplainationPopover content="Elliptic Curve Cryptography is the process used to convert a public key into a private key."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio11" type="radio" name="question3" value="11" />
                                                                        <label htmlFor="radio11">Satoshi theorem</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #4</span>
                                                                <h3>True or False: You can figure out somebody’s private key with their public key information.</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio12" type="radio" name="question4" value="12" />
                                                                        <label htmlFor="radio12">True</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio13" type="radio" name="question4" value="13" />
                                                                        <label htmlFor="radio13">False</label>
                                                                        <ExplainationPopover content="Due to elliptic Curve Cryptography, it is nearly impossible to figure out somebody’s private key with just their public key."/>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #5</span>
                                                                <h3>What is the likelihood of two individuals producing identical private keys?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio14" type="radio" name="question5" value="14" />
                                                                        <label htmlFor="radio14">very likely</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio15" type="radio" name="question5" value="15" />
                                                                        <label htmlFor="radio15">probable</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio16" type="radio" name="question5" value="16" />
                                                                        <label htmlFor="radio16">certain</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio17" type="radio" name="question5" value="17" />
                                                                        <label htmlFor="radio17">almost impossible</label>
                                                                        <ExplainationPopover content="It is almost impossible for any two people to produce identical private keys."/>
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
        document.title = "Cryptography | Goodbit101";
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


export default Cryptography;