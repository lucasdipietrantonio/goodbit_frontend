import React, { Component } from 'react';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import './Money101.scss';
import '../../Modals/QuizModal/QuizModal.scss';
import { Link } from "react-router-dom";
import Newslatter from '../../Newslatter/Newslatter';
import CommonFunctions from '../CommonFunctions';
import ShareComponent from '../ShareComponent/ShareComponent';
import GlossaryPopover from '../../GlossaryPopover/GlossaryPopover';
import ExplainationPopover from '../../ExplainationPopover/ExplainationPopover';

class Money101 extends Component {
    oldScroll;
    referralRoute;
    state = {
        progressBarWidth :0,
        section : 'How was Money invented?',
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
                <main className="gb-money-main">
                    <section className="gb-money-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 offset-md-1">
                                    <div className="gb-money-dtl">
                                        <div className="clearfix">
                                            <Link to='/basics' className="gb-basic-btn"><i className="gb-left-arrow"></i> Basics</Link>
                                        </div>
                                        <h1 className="gb-basic-title-icon gb-money-icon">Money 101</h1>
                                        <div className="gb-money-banner-dtl">
                                            <p>Before we dive into <GlossaryPopover content="Bitcoin" />, we've gotta take a step back and look at Money itself.</p>
                                        </div>
                                    </div>
                                    {/* Swiper */}
                                    <div className="gb-segment-blk"  onMouseEnter={() => CommonFunctions.preventBodyScroll('hidden')}  onMouseLeave={() => CommonFunctions.preventBodyScroll('auto')}>
                                        <h4>In this segment, you will learn:</h4>
                                        <div className="swiper-container gb-money-question-scroller-container">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <ul>
                                                        <li onClick={() => this.scrollToContent(0)} className="sectionTitle" data-part="Part I">How was money invented?</li>
                                                        <li onClick={() => this.scrollToContent(1)} className="sectionTitle" data-part="Part II">How money has changed over time</li>
                                                        <li onClick={() => this.scrollToContent(2)} className="sectionTitle" data-part="Part III">How today’s money works</li>
                                                        <li onClick={() => this.scrollToContent(3)} className="sectionTitle" data-part="Part IV">Where crypto comes in</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="swiper-scrollbar gb-money-question-scrollbar"></div>
                                        </div>
                                        <div className="gb-next-menublk clearfix">
                                            {/* <a href="{null}" className="gb-next-menubtn"> */}
                                            <Link className="gb-next-menubtn" to="/learn/bitcoin-101">
                                                Bitcoin 101 <i className="gb-right-arrow"></i>
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
                                            <li>How was money invented?</li>
                                            <li>How money has changed over time</li>
                                            <li>How today’s money works</li>
                                            <li>Where crypto comes in</li>
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
                                        <i><img src={require('../../../assets/images/dollar-icon.svg')}  alt="Dollar-icon"/></i>
                                        <span>Money 101</span>
                                    </div>
                                    <div className="gb-section-part">
                                        <div className="gb-section-left">
                                            <span><span>{this.state.part}:</span> {this.state.section}</span>
                                        </div>
                                        <div className="gb-section-right">
                                            {/* <a href="{null}">Skip to next section</a> */}
                                            <a  onClick={() => this.scrollToContent(this.state.next)} className={this.state.hideSkipSectionText ? 'd-none' : '' }>Skip to next section</a>
                                        </div>
                                    </div>
                                    <div className="gb-money-back">
                                        {/* <a href="{null}">Back to top <i className="gb-up-arrow"></i></a> */}
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
                                            <div className="col-lg-5 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>How was money invented?</h2>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-10">
                                                        <div className="gb-money-content-dtl">
                                                            <div className="gb-money-content-desc">
                                                                <p>Let’s begin by rolling back the clock a few thousands years or so.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-content-img gb-money-img1">
                                                        <img src={require('../../../assets/images/learn/money/money-img1.svg')}  alt="moneyimg1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-money-img2 mb-0">
                                                        <img src={require('../../../assets/images/learn/money/money-img2.svg')}  alt="moneyimg2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-2">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>Imagine that you're a baker in an ancient village. How do you buy goods and services, like pointy sticks for hunting, or that cool new wheel thing? Since money doesn’t exist yet, you’ll probably trade bread in return for the goods you want to buy… but what if the only wheel maker in your village doesn’t want your stinking bread?</p>
                                                        <p>Then you’re out of luck. Having to barter each time you want to buy something is slow, inefficient, and annoying. This is one of the reasons why we started using money.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc gb-last-pera">
                                                        <p>Money is just a tool used to exchange value. Money standardizes value, such that you don’t have to figure out how many loaves of bread a wheel is worth, you can just know a wheel is worth, like, 10 seashells.</p>
                                                        <p>Anything can act as money, like bits of metal, seashells, or pieces of paper. Anything can be used as money as long as we all agree that it has value. </p>
                                                        <p>This is an important point: value is a shared belief. So if we all believe something has value, then it does. But beliefs can change, and money has changed a lot over time.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-money-img3">
                                                        <img src={require('../../../assets/images/learn/money/money-img3.svg')}  alt="moneyimg3" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row" >
                                        {/* <div className="row">
                                            <div className="col-lg-6">

                                            </div>
                                        </div> */}
                                        <div className="row">
                                            <div className="col-lg-5 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>How money has changed over time</h2>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-10">
                                                        <div className="gb-money-content-dtl">
                                                            <div className="gb-money-content-desc">
                                                                <p>As you know if you’ve ever been to a Natural History Museum, for a while we used gold coins as money. There’s a fixed amount of gold that exists–it’s scarce. We can’t just say “Abracadabra!” and make more gold appear, which is good! Scarcity limits the supply of money, giving it intrinsic value.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-money-img4">
                                                        <img src={require('../../../assets/images/learn/money/money-img4.svg')}  alt="moneyimg4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-2 order-change">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-money-img5">
                                                        <img src={require('../../../assets/images/learn/money/money-img5.svg')}  alt="moneyimg5" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>But a few thousand years of carrying clunky gold coins around, and it was time for something a little more portable, so we created paper money, which is what we use today. The money we use is technically called <GlossaryPopover content="Fiat Money" />. Here’s what that means.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row" >
                                        {/* <div className="row">
                                            <div className="col-lg-6">

                                            </div>
                                        </div> */}
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>How today’s money works</h2>
                                                </div>
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p> <GlossaryPopover content="Fiat Money" /> is government issued and not backed by any scarce assets, like gold. Fiat money is not scarce. </p>
                                                        <p>Remember how we couldn’t just say "Abracadabra!” and make more gold, because gold is scarce? Well, fiat money is not scarce, so governments can say “Abracadabra!” and make more fiat money whenever they want, and they do! When governments print new money, it’s called <GlossaryPopover content="inflation" />.</p>
                                                        <p>Governments print paper money whenever they want, and when debts start to pile up, the printing press becomes more and more appealing. When governments way overprint fiat money, it's called hyperinflation, and when that happens, the supply of money rapidly increases, making the value of money drop drastically. That’s bad news, for a number of reasons. To read more about hyperinflation, <Link to="/learn/fiat-currency">click here</Link>.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1 text-right">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-content-img gb-money-img6">
                                                        <img src={require('../../../assets/images/learn/money/money-img6.svg')}  alt="moneyimg6" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 order-change offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-content-img gb-money-img7">
                                                        <img src={require('../../../assets/images/learn/money/money-img7.svg')}  alt="moneyimg7" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc gb-last-pera">
                                                        <p>Okay so inflation is one issue. But what are some other concerns about our fiat money system? ~What could possibly go wrong?~</p>
                                                        <p>Here’s what! Our monetary systems are controlled by "too big to fail" companies like banks and credit card operators. These Giants keep our money safe (at least safer than under our mattresses), but using them comes at a price: banks and credit card companies charge high fees, up to 3% per transaction, and often take days to process payments fully.</p>
                                                        <p>They are slow and clunky, as you know if you've ever been on the phone with… well, our lawyers advise us against specifics here, but let’s play a game called “Rhymes With.” Rhymes With: “Sank of Lemerica” and “Kells Nargo.” Obviously, poetry is not our strong suit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc gb-last-pera">
                                                        <p>More seriously, think about the security you lose when you give up control of your own money. When you put your money in a bank, the bank controls your money, not you. What would you do if your bank went well… bankrupt? All your money goes poof. That’s happened before, and it could happen again.</p>
                                                        <p>“But wait! What are we doing to fix our money?! Is there a better system? How can I use it?” Well, yeah. That’s like, what this website is about… and stuff…</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-content-img gb-money-img8">
                                                        <img src={require('../../../assets/images/learn/money/Mike-Myers-Thumbs-Up-GIF.gif')}  alt="moneyimg8" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row" >
                                        {/* <div className="row">
                                            <div className="col-lg-4 offset-lg-1">

                                            </div>
                                        </div> */}
                                        <div className="row">
                                            <div className="col-lg-7 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Where Crypto Comes In</h2>
                                                </div>
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>The money we use today works, for the most part. It’s not the most efficient, there’s fraud, and payments can be slow, but it functions. Still, we can do better. Thanks to the Internet, we live in a world where sharing information is fast, easy, global, and personal. Shouldn’t sending money work the same way? </p>
                                                        <p>That's where <GlossaryPopover content="cryptocurrency" /> comes in. It allows you to transfer money to people easily, quickly, and globally. Take the quiz below, and read on for more!</p>
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
                                                <h3>How was money invented?</h3>
                                                <ul>
                                                    <li>• Barter systems were inefficient, and required trust on an individual level</li>
                                                    <li>• Money was introduced as a universally valuable good to made trade easier</li>
                                                </ul>
                                            </div>
                                            <div className="gb-summary-dtl">
                                                <h3>How has money changed over time?</h3>
                                                <ul>
                                                    <li>• Durable coins replaced shells and livestock, and portable paper money replaced coins</li>
                                                    <li>• Anything can be used as money, since value is a shared belief</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="gb-summary-dtl">
                                                <h3>How does today’s money work?</h3>
                                                <ul>
                                                    <li>• Today’s money is made of paper and unlinked from any scarce asset, so governments can print as much as they want</li>
                                                    <li>• Our monetary systems are controlled by giant banks and credit card companies, who charge a hefty price for their services</li>
                                                </ul>
                                            </div>
                                            <div className="gb-summary-dtl">
                                                <h3>Where does cryptocurrency fit in?</h3>
                                                <ul>
                                                    <li>• It’s fast, global, and cheap to use for sending money anywhere</li>
                                                    <li>• It isn’t controlled by an bank, government, company, or <GlossaryPopover content="central authority" />, but rather by the community that uses it</li>
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
                                    <h2>Test yourself — take the Money 101 quiz!</h2>
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
                                                <h3>Now that you understand the history of money, it’s time to tackle Bitcoin!</h3>
                                            </div>
                                        </div>
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
                                <div className="col-md-4 offset-md-1">
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
                <div className="gb-quiz-money-modal">
                    <div className="gb-quiz-modal">
                        <div className="gb-quiz-body">
                            <div className="container">
                                <div className="gb-quiz-header">
                                    <div className="gb-quiz-head-left">
                                        <i><img src={require('../../../assets/images/goodbit-icon.svg')} alt="Goodbit-icon" /></i>
                                        <span>Money 101: Quiz</span>
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
                                                            <h3>What's a dollar worth?</h3>
                                                            <ul>
                                                                <li className="gb-options"><input onChange={(event)=>this.onAnswer(event)} id="radio1" type="radio" name="question1" value="1" /><label htmlFor="radio1">A big mac, I guess?</label></li>
                                                                <li className="gb-options"><input onChange={(event)=>this.onAnswer(event)} id="radio2" type="radio" name="question1" value="2" /><label htmlFor="radio2">Nothing, it's just a piece of paper</label></li>
                                                                <li className="gb-right-answer gb-options"><input onChange={(event)=>this.onAnswer(event)} id="radio3" type="radio" name="question1" value="3" /><label htmlFor="radio3">The value of a dollar changes over time based on inflation </label>
                                                                    <ExplainationPopover content="The purchasing power of a dollar actually changes each year. It's worth what society agrees it can buy at a given time–the value of money is fluid." />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #2</span>
                                                            <h3>Which of the following most accurately describes money?</h3>
                                                            <ul>
                                                                <li className="gb-right-answer gb-options"><input onChange={(event)=>this.onAnswer(event)} id="radio4" type="radio" name="question2" value="4" /><label htmlFor="radio4">An evolving technology used to facilitate the fluid exchange of goods and services</label>
                                                                    <ExplainationPopover content="While at certain points in our history both gold coins and government issued paper have been used as money, fundamentally money is nothing more than a shared tool used to communicate value easily. We've improved that tool over time." />
                                                                </li>
                                                                <li className="gb-options"><input onChange={(event)=>this.onAnswer(event)} id="radio5" type="radio" name="question2" value="5" /><label htmlFor="radio5">A government issued piece of paper</label></li>
                                                                <li className="gb-options"><input onChange={(event)=>this.onAnswer(event)} id="radio6" type="radio" name="question2" value="6" /><label htmlFor="radio6">Gold coins</label></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #3</span>
                                                            <h3>As more currency is created, your existing currency...</h3>
                                                            <ul>
                                                                <li className="gb-options"><input onChange={(event)=>this.onAnswer(event)} id="radio7" type="radio" name="question3" value="7" /><label htmlFor="radio7">Is equally valuable</label></li>
                                                                <li className="gb-right-answer gb-options"><input onChange={(event)=>this.onAnswer(event)} id="radio8" type="radio" name="question3" value="8" /><label htmlFor="radio8">Becomes less valuable</label>
                                                                    <ExplainationPopover content="This is the rule of scarcity! The more of something there is, the less it's worth. In monetary terms, printing more money decreases the purchasing power of each dollar, or unit of money." />
                                                                </li>
                                                                <li className="gb-options"><input onChange={(event)=>this.onAnswer(event)} id="radio9" type="radio" name="question3" value="9" /><label htmlFor="radio9">Becomes more valuable</label></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #4</span>
                                                            <h3>Why is paper money classified as fiat currency?</h3>
                                                            <ul>
                                                                <li className="gb-options"><input onChange={(event)=>this.onAnswer(event)} id="radio10" type="radio" name="question4" value="10" /><label htmlFor="radio10">Man, that car company has been making some big moves lately...</label></li>
                                                                <li className="gb-options"><input onChange={(event)=>this.onAnswer(event)} id="radio11" type="radio" name="question4" value="11" /><label htmlFor="radio11">Fiat is Greek for paper</label></li>
                                                                <li className="gb-right-answer gb-options"><input onChange={(event)=>this.onAnswer(event)} id="radio12" type="radio" name="question4" value="12" /><label htmlFor="radio12">Fiat is Latin for decree</label>
                                                                    <ExplainationPopover content="Fiat currency is valuable because the government issuing it 'decrees' that it is legal tender and has value, and citizens go along with it."/>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="gb-question-blk">
                                                            <span>QUESTION #5</span>
                                                            <h3>Fiat currency is</h3>
                                                            <ul>
                                                                <li className="gb-right-answer gb-options"><input onChange={(event)=>this.onAnswer(event)} id="radio13" type="radio" name="question5" value="13" /><label htmlFor="radio13">Centralized</label>
                                                                    <ExplainationPopover content="In a fiat currency system, the government acts as a central authority. The government controls the supply of money and also controls what you are and are not allowed to do with the money "/>
                                                                </li>
                                                                <li className="gb-options"><input onChange={(event)=>this.onAnswer(event)} id="radio14" type="radio" name="question5" value="14" /><label htmlFor="radio14">Decentralized</label></li>
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
        document.title = 'Money101 | Goodbit101'
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

export default Money101;
