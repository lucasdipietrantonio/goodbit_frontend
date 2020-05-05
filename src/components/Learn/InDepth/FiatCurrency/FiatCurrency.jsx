import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Swiper from "swiper";
import Newslatter from '../../../Newslatter/Newslatter';
import GlossaryPopover from '../../../GlossaryPopover/GlossaryPopover';
import ExplainationPopover from '../../../ExplainationPopover/ExplainationPopover';

import './FiatCurrency.scss';
import '../../Money101/Money101.scss';
import ShareComponent from '../../ShareComponent/ShareComponent';

class FiatCurrency extends Component {
    oldScroll;
    referralRoute;
    state = {
        progressBarWidth :0,
        section : 'Scarcity',
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
                <div className="gb-money-main gb-fiatcurrency-main">
                    <section className="gb-money-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 offset-md-1">
                                    <div className="gb-money-dtl">
                                        {/* <div className="clearfix">
                                            <a href="/" className="gb-basic-btn"><i className="gb-left-arrow"></i>In-depth</a>
                                        </div> */}
                                        <h1 className="gb-in-depth-title">Fiat Currency</h1>
                                        <div className="gb-money-banner-dtl">
                                            <p>We each interact with money every day. You pay rent for your apartment, or buy groceries at the store. Swiping a credit card or handing somebody cash is so easy that we barely think about what goes into these transactions—we really don't need to understand money in order to use it.</p>
                                            <p>But shouldn't we understand something we use every single day? In this section, we're going to talk about <GlossaryPopover content="fiat money"/>, the <GlossaryPopover content="Gold Standard"/>, <GlossaryPopover content="inflation"/>, <GlossaryPopover content="scarcity"/>, and the implications of these concepts.</p>
                                            <p>Buckle up your seatbelt, an Econ 101 refresher is coming your way.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-1">
                                    <div className="gb-dephth-right">
                                        <div className="gb-money-video">
                                            <img src={require('../../../../assets/images/in-depth/fiat-currency-main.svg')}  alt="fiat-currency-main" />
                                        </div>
                                        {/* Swiper */}
                                        <div className="gb-segment-blk">
                                            <h4>In this segment, you will learn:</h4>
                                            <div className="swiper-container gb-money-question-scroller-container">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <ul>
                                                            <li onClick={() => this.scrollToContent(0)} className="sectionTitle" data-part="Part I">Scarcity</li>
                                                            <li onClick={() => this.scrollToContent(0)} className="sectionTitle" data-part="Part II">Inflation</li>
                                                            <li onClick={() => this.scrollToContent(0)} className="sectionTitle" data-part="Part III">Germany!</li>
                                                            <li onClick={() => this.scrollToContent(0)} className="sectionTitle" data-part="Part IV">Takeaways</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="swiper-scrollbar gb-money-question-scrollbar"></div>
                                            </div>
                                            <div className="gb-next-menublk clearfix">
                                                {/* <a href="{null}" className="gb-next-menubtn"> */}
                                                <Link className="gb-next-menubtn" to="/learn/digital-assets">
                                                Digital-Assets <i className="gb-right-arrow"></i>
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
                                            <span>4 Sections</span>
                                        </button>
                                    </h5>

                                </div>
                                <div id="collapseOne" className="collapse show gb-collapse-segment" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <ul>
                                            <li>Scarcity</li>
                                            <li>Inflation</li>
                                            <li>Germany!</li>
                                            <li>Takeaways</li>
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
                                        <span>Fiat Currency</span>
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
                                                    <h2>Scarcity</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Let's start with the dollar. A dollar bill is nothing more than a piece of paper (cotton, actually). Did you know dollars used to be backed up by gold?</p>
                                                        <p>A hundred years ago, if you had a dollar you could actually redeem your dollar for a little chunk of gold. For each dollar the government printed, you could know that the government held, in some vault somewhere, a dollar worth of gold. This limited the money supply because there could not be more dollars than there was gold.</p>
                                                        <p>Why couldn't there be more dollars than gold? <GlossaryPopover content="Scarcity"/>  Gold is a scarce <GlossaryPopover content="asset"/>. We only have access to however much gold we mine, and that's limited. If the dollars represent the gold, and the gold is limited, the dollars are limited too.</p>
                                                        <p>Backing our money with a physical asset like gold has benefits and drawbacks. Let's start with the benefits:</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>The money has intrinsic value. Gold is nearly universally valuable, regardless of which country you're in. Since dollars were essentially the same as gold, dollars were also intrinsically valuable.</p>
                                                        <p>Money cannot be printed at will. The only way to increase the money supply is to:</p>
                                                        <p>Find more gold... or</p>
                                                        <p>Have a favorable balance of trade, such that you are exporting more goods than you are importing. This will result in a net flow of money into your country. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 ">
                                                <div className="gb-money-content-dtl text-center">
                                                    <div className="gb-content-img gb-fiat-currency-img1">
                                                        <img src={require('../../../../assets/images/in-depth/fiat-currency/fiat-currency-img1.svg')}  alt="fiat-currency-img1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>In short, this model makes things simple. Each dollar is backed up by a little piece of gold. The dollars have value because the gold has value. However, this system also has drawbacks:</p>
                                                        <p>Controlling the money supply is an effective tool to steer the economy, and during recessions, printing money is one of the main ways the government can stimulate growth. Using gold-backed money means the government is unable to control the money supply, taking away an important economic tool.</p>
                                                        <p>Importing more goods than you export becomes an issue, as it causes money to flow out of your country.</p>
                                                        <p>As you can see, having money backed by gold (often called the "<GlossaryPopover content="Gold Standard"/>") has its positives and negatives. Most countries, including the United States, used to be on the Gold Standard. But in the USA, the Gold Standard was cut in 1933 during the Great Depression.</p>
                                                        <p>Why?</p>
                                                        <p>Reread the first drawback above! The government was unable to use gold-backed money to steer the economy back on track. Recessions are painful, resulting in poverty, crime, and civil unrest. To help us get through the Great Depression, the government printed more money. In the short term, this strategy worked. As you'll see, in the long term, this can be a dubious solution.</p>
                                                        <p>In 1971, the US completely unlinked the dollar from gold, leaving us with the <GlossaryPopover content="fiat money"/>  system we have today. Fiat money is unbacked—there is no scarce asset giving our dollars value. Instead, fiat money has value because the government certifies that it does (fiat actually means “decree”).</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>There are many economists who think fiat systems are healthier than asset-backed systems. And it makes sense! In fiat systems, the Treasury and Federal Reserve have more power to grow the economy.</p>
                                                        <p>But consider the following point: unlinking the dollar from gold also unlinked the dollar from scarcity itself.The government can print as many dollars as it wants to.</p>
                                                        <p>And there's a price we pay for this lack of scarcity. It's called <GlossaryPopover content="inflation"/>.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Inflation</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Inflation happens as the overall supply of money rises, or "inflates." As the supply rises, and there are more dollars in existence, the value of each dollar drops.</p>
                                                        <p>This is why we notice the price of groceries going up from year to year, and why your grandfather paid 5 cents for a hotdog while you pay 5 bucks. The dollars we have today are worth less, so retailers have to charge more.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>The commonly cited "inflation target" in the United States and other countries is 2%, meaning the government and banking systems seek to increase the supply of money by 2% per year. This doesn't just mean that there's 2% more money in circulation–it also means that the money that's already in circulation will be worth less.</p>
                                                        <p>Skeptical of the math? Think about it like this: if we suddenly doubled the money supply, each dollar would be worth half as much. Twice as many dollars for the same number of goods, so each good costs twice as much. If we raise the money supply by 2%, the money is worth approximately 2% less (it's actually slightly less than 2%–we explore the math below).</p>
                                                        <p>So, our dollars are worth ~2% less on a year-to-year basis. Over time, that changes the value of dollars drastically.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>To find out how long it takes the money supply to double we can use the following equation: 1.02^x=2; Thus, x=35.</p>
                                                        <p>Translated into English, this equation asks "If each year the money supply is 102% of what it was the year before (2% increase), how long does it take for the money supply to double?" This question is important because when the money supply doubles, each dollar buys half as much as it used to. And the answer is roughly 35.</p>
                                                        <p>35 years. In 35 years, our money will be worth half of what it is today with 2% yearly inflation.</p>
                                                        <p>Money that you save at age 30 will have half the buying power it did when you saved it by the time you retire at 65. If your dollar could buy two apples when you saved it, by the time you retire it would only be able to buy one.</p>
                                                        <p>This is sometimes referred to as the <GlossaryPopover content="inflation tax"/>, and it is expensive. </p>
                                                        <p>It's easy to see how the money printing press could become very, very appealing to a government deep in debt or during an economic crisis, with long term inflationary consequences.</p>
                                                        <p>As a case study, let's look at what happened in Germany after World War I. We promise this is going somewhere.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Germany!</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>During and before WWI, to fund war costs, the German government ended their <GlossaryPopover content="Gold Standard"/>  and borrowed a ton of money. Their plan was to win the war and easily be able to pay back debt with all the <GlossaryPopover content="Doubloons"/>  they'd steal. They then lost the war, had to pay off debts, and were hit with huge reparation bills by the Allied nations. Ouch!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>Basically, they had a ton of debt with no way to pay it off. So they started printing money like crazy to pay back their debts.</p>
                                                        <p>Before the war, in 1914, one US Dollar could buy you about 4 German Marks. In November of 1923, one US Dollar could buy you 4,210,500,000,000 German marks. That's 4 trillion marks, or one trillion times more than 9 years before. No joke!</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-content-img gb-fiat-currency-img2">
                                                        <img src={require('../../../../assets/images/in-depth/fiat-currency/fiat-currency-img2.svg')}  alt="fiat-currency-img2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Marks became almost completely worthless. The government printed higher and higher denominations of bills. Kids played with stacks of money like building blocks, because the money had almost no value at all. Money was cheaper than firewood, so people burned it to heat their homes. Anyone who had ever saved anything in their lives saw their money become worthless.</p>
                                                        <p>In order to fix the situation, the German government had to install an entirely new currency, the Rentenmark. One Rentenmark was worth 1,000,000,000,000 (a trillion!) old marks, again returning the exchange rate to 4.2 Rentenmarks to the US Dollar.</p>
                                                        <p>So they got out okay, right? Well, kinda. They ended up okay, and the Rentenmark saved the German economy, but for a few years money was so worthless that people literally could not use it! Imagine living in Germany during that period... people even reverted to bartering for goods. Crazy, huh? </p>
                                                        <p>And while this may seem like nothing more than an interesting thought experiment, this economic crisis resulted in widespread rioting, poverty, and crime, crushing the economy and destabilizing society.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Well, at least this was just a special case, right? Wrong.</p>
                                                        <p>Hyperinflation has happened again and again over time in countries with <GlossaryPopover content="fiat money"/> (again, not backed by a physical <GlossaryPopover content="asset"/> ). It's happened in Ancient Rome, in the 1940's in Hungary, in the 2000's in Zimbabwe, and even today in Venezuela.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>So why is hyperinflation more popular than <GlossaryPopover content="cronuts"/>, if it can have such catastrophic consequences? Well, it's tempting. When printing money is just too easy, and when your problems can be solved by printing more more money, it's hard not to print more money.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-content-row">
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-content-title">
                                                    <h2>Takeaways</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Here's what you can take away from all this: monetary policy is... complicated. If we use a <GlossaryPopover content="Gold Standard"/> <GlossaryPopover content="hyperinflation"/> is impossible and our money has real value, but the government cannot stimulate the economy in times of need. If we use a <GlossaryPopover content="fiat money"/>, <GlossaryPopover content="inflation"/> tends to become an issue over time and our money has no real <GlossaryPopover content="asset"/> value, but the government can grow the economy in times of need.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl gb-money-content-dtl-right">
                                                    <div className="gb-money-content-desc">
                                                        <p>There's no simple answer to determine which system is better, and maybe what we truly need is some form of hybrid, combining elements of both systems.</p>
                                                        <p>Today, <GlossaryPopover content="cryptocurrencies"/> are experimenting with different monetary policies to find out what works the best. There are some cryptocurrencies, like <GlossaryPopover content="Bitcoin"/>, that are <GlossaryPopover content="scarce"/>, and have strict rules detailing how much of the coin can ever exist. There are some cryptocurrencies, like Tether or Basis, on the other hand, that automatically adjust the supply such that the value of the coin is always the same. These are called <GlossaryPopover content="Stablecoins"/>.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-1">
                                                <div className="gb-money-content-dtl">
                                                    <div className="gb-money-content-desc">
                                                        <p>Part of what makes cryptocurrencies so interesting is that they are programmable money. We can make them stable in value, we can make them scarce, we can make them inflationary, we can make them pseudonymous, anonymous, blue, yellow, purple, red, round, square, sweet, spicy, and so on. This is only true because cryptocurrencies are programmable! Thank you, <GlossaryPopover content="blockchain"/>. Right now, people are experimenting to create the best digital money possible.</p>
                                                        <p>Take the quiz below to test your money knowledge!</p>
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
                                    <h2>Test yourself — take the Fiat Currency quiz!</h2>
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
                                        <h3>Now that you understand the fiat currency, it’s time to tackle digital assets!</h3>
                                        <div className="gb-next-page-menu gb-digital-assets-menu">
                                            <span>Digital Assets</span>
                                            <div className="gb-letsgo-btnblk">
                                                <Link className="gb-letsgobtn" to="/learn/digital-assets" >
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
                                            <li className="gb-ethereum-menu gb-forks-menu">
                                                <Link to="/learn/forks" >
                                                    Forks
                                                </Link>
                                            </li>
                                            <li className="gb-future-menu gb-privacy-menu">
                                                <Link to="/learn/privacy" >
                                                    Privacy
                                                </Link>
                                            </li>
                                            <li className="gb-blockchain-menu gb-icos-menu">
                                                <Link to="/learn/icos" >
                                                    ICO's
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
                                            <span>Fiat Currency : Quiz</span>
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
                                                                <h3>When was the “Gold Standard” abandoned?</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio1" type="radio" name="question1" value="1" />
                                                                        <label htmlFor="radio1">1898</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio2" type="radio" name="question1" value="2" />
                                                                        <label htmlFor="radio2">2009</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio3" type="radio" name="question1" value="3" />
                                                                        <label htmlFor="radio3">1933</label>
                                                                        <ExplainationPopover content="The gold standard was let go during the great depression when America needed an increase of currency to remain economically stable."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio4" type="radio" name="question1" value="4" />
                                                                        <label htmlFor="radio4">2018</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #2</span>
                                                                <h3>Finish the following sentence: Inflation happens as...</h3>
                                                                <ul>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio5" type="radio" name="question2" value="5" />
                                                                        <label htmlFor="radio5">the overall supply of money remains the same</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio6" type="radio" name="question2" value="6" />
                                                                        <label htmlFor="radio6">governments fall apart</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio7" type="radio" name="question2" value="7" />
                                                                        <label htmlFor="radio7">the overall supply of money decreases</label>
                                                                    </li>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio8" type="radio" name="question2" value="8" />
                                                                        <label htmlFor="radio8">the overall supply of money rises</label>
                                                                        <ExplainationPopover content='Inflation is when the overall supply of money increases or “inflates.”'/>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #3</span>
                                                                <h3>What is the “inflation target” of the United States?</h3>
                                                                <ul>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio9" type="radio" name="question3" value="9" />
                                                                        <label htmlFor="radio9">2% annual increase</label>
                                                                        <ExplainationPopover content="The commonly cited 'inflation target' in the United States and other countries is 2%, meaning the government and banking systems seek to increase the supply of money by 2% per year."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio10" type="radio" name="question3" value="10" />
                                                                        <label htmlFor="radio10">20% annual increase</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio11" type="radio" name="question3" value="11" />
                                                                        <label htmlFor="radio11">- 2% annual increase</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio12" type="radio" name="question3" value="12" />
                                                                        <label htmlFor="radio12">- 20% annual increase</label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="swiper-slide">
                                                            <div className="gb-question-blk">
                                                                <span>QUESTION #4</span>
                                                                <h3>True or False: Venezuela is currently going through hyperinflation.</h3>
                                                                <ul>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio13" type="radio" name="question4" value="13" />
                                                                        <label htmlFor="radio13">True</label>
                                                                        <ExplainationPopover content="In order to restore economic value, Venezuela is using methods such as hyperinflation to produce value."/>
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
                                                                <h3>How many German Marks could be traded for one US dollar in 1923?</h3>
                                                                <ul>
                                                                    <li className="gb-right-answer gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio15" type="radio" name="question5" value="15" />
                                                                        <label htmlFor="radio15">4,210,500,000,000</label>
                                                                        <ExplainationPopover content="It is almost impossible for any two people to produce identical private keys."/>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio16" type="radio" name="question5" value="16" />
                                                                        <label htmlFor="radio16">42,105</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio17" type="radio" name="question5" value="17" />
                                                                        <label htmlFor="radio17">4</label>
                                                                    </li>
                                                                    <li className="gb-options">
                                                                        <input onChange={(event)=>this.onAnswer(event)} id="radio18" type="radio" name="question5" value="18" />
                                                                        <label htmlFor="radio18">2017</label>
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
        document.title = "Fiat Currency | Goodbit101";
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

export default FiatCurrency;
