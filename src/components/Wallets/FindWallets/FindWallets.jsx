import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './FindWallets.scss';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import * as WalletService from '../../../services/WalletService'
// import CustomLoader from '../../CustomLoader/CustomLoader'
class Wallets extends Component {
    findWalletSwiper = '';
    state = {
        wallet:{
            results:[],
            texts:'Choose from options above to see results'
        },
        search:{
            results:[]
        },
       filter:{
           coin:'',
           plan:'',
           compablity:''
       },
       isLoader:false,
        url : ''
    }
    render() {
        return (
            <React.Fragment>
                <section className="gb-find-wallets-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 offset-md-1">
                                <h1>Find a Wallet</h1>
                                <p>It's very important that you use a wallet to keep your cryptocurrency safe! However, finding the right wallet for your needs can be confusing and time consuming. Fear not! We've got you covered. Use our custom Find a Wallet tool to discover the perfect wallet for your storing needs.</p>
                            </div>
                            <div className="col-md-5 offset-md-1">
                                <form id="desktop-wallet-form">
                                    <div className="gb-find-wallets-slider-main">
                                        <div className="swiper-container gb-find-wallet-slider-container">
                                            <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <h2>LET’S BEGIN</h2>
                                                        <h3>Which coin are you storing?</h3>
                                                        <div className="gb-slide-gradient">
                                                            <ul>
                                                                {/* <form> */}
                                                                    <div className="form-group">
                                                                        <input type="text" className="form-control" placeholder="Search" id="coinSearchBox" onKeyPress={(event) => this.onKeyPressSearchBox(event)}  ></input>
                                                                    </div>
                                                                {/* </form> */}
                                                                {this.coinListing()}

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <h2>STEP 2 OF 3</h2>
                                                        <h3>Are you be willing to spend more money for extra wallet security?</h3>
                                                        <div className="gb-chack-main">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" onClick={()=> this.selectPlan('monthly')} name="plan" id="mobile-radio1" value="yes"/>
                                                                <label className="form-check-label" htmlFor="mobile-radio1">
                                                                    Yes
                                                                    <span>I’m willing to pay for heightened security (recommended)</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" onClick={()=>this.selectPlan('free')} name="plan" id="mobile-radio2" value="no"/>
                                                                <label className="form-check-label" htmlFor="mobile-radio2">
                                                                    No
                                                                    <span> I would like to use a free wallet </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <h2>Last Step</h2>
                                                        <h3>I need to be able to access my funds from...</h3>
                                                        <div className="gb-funds-chack-main gb-chack-main">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" onClick={()=>this.selectHardware('digital')} name="fundchackradio" id="fundchackradio1" value="fundoption1"/>
                                                                <label className="form-check-label">
                                                                    <i className="gb-devices-icon"></i>
                                                                    <h4>My devices</h4>
                                                                    <span>More secure, less convenient</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" onClick={()=>this.selectHardware('online')} name="fundchackradio" id="fundchackradio2" value="fundoption2"/>
                                                                <label className="form-check-label">
                                                                <i className="gb-internet-icon"></i>
                                                                    <h4>Internet</h4>
                                                                    <span>Less secure, more convenient</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" onClick={()=>this.selectHardware('')} name="fundchackradio" id="fundchackradio3" value="fundoption3"/>
                                                                <label className="form-check-label">
                                                                <i className="gb-skip-icon"></i>
                                                                    <h4>Not sure</h4>
                                                                    <span>Skip, for now</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="gb-swiper-button">
                                                <div onClick={(e) => this.slideToNextPrev(e,'prev')} className="swiper-button-prev gb-find-wallet-swiper-button-prev">Reset</div>
                                                <div onClick={(e) => this.slideToNextPrev(e,'next')} className="swiper-button-next gb-find-wallet-swiper-button-next">Next</div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="gb-find-wallets-main gb-find-wallets-main-mobile">
                    <div className="container">
                        <h1>Find a Wallet</h1>
                        <p>You’ve invested in multiple coins. Read all the learn content on our site. You’re a crypto professional. But wait-where should you store all of your cryptocurrency? Generally, leaving your assets on an exchange subjects them to more risk. Instead, you should transfer your funds to a cryptocurrency wallet that only you have access to. There are dozens of options, but don’t worry! Our tool will make the whole process smooth and straightforward. Click on to take a look!</p>
                    </div>
                </section>
                <section className="gb-find-wallets-main gb-find-wallet-slider-mobile">
                    <form id="mobile-wallet-form">
                        <div className="gb-find-wallets-slider-main">
                            <div className="swiper-container gb-find-wallet-slider-container">
                                <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <h2>LET’S BEGIN</h2>
                                            <h3>Which coin are you storing?</h3>
                                            {/* <form> */}
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Search"></input>
                                                </div>
                                            {/* </form> */}
                                            <div className="btn-group gb-find-wallet-dropdown dropup">
                                                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    Choose a coin
                                                </button>
                                                <div className="dropdown-menu">
                                                    <ul>
                                                        {this.coinListing()}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <h2>STEP 2 OF 3</h2>
                                            <h3>Are you be willing to spend more money for extra wallet security?</h3>
                                            <div className="gb-chack-main">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="plan" onClick={()=>this.selectPlan('monthly')} id="exampleRadios1" value="yes"/>
                                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                                        Yes
                                                        <span>I’m willing to pay for heightened security (recommended)</span>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="plan" onClick={()=>this.selectPlan('free')} id="exampleRadios2" value="no"/>
                                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                                        No
                                                        <span>I would like to use a free wallet</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <h2>Last Step</h2>
                                            <h3>I need to be able to access my funds from...</h3>
                                            <div className="gb-funds-chack-main gb-chack-main">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="fundchackradio" onClick={()=>this.selectHardware('digital')} id="fundchackradio-mobile1" value="digital"/>
                                                    <label className="form-check-label">
                                                        <div className="gb-chack-last-main">
                                                            <h4>My devices</h4>
                                                            <span>More secure, less convenient</span>
                                                        </div>
                                                        <i className="gb-devices-icon"></i>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="fundchackradio" onClick={()=>this.selectHardware('online')} id="fundchackradio-mobile2" value="internet"/>
                                                    <label className="form-check-label">
                                                        <div className="gb-chack-last-main">
                                                            <h4>Internet</h4>
                                                            <span>Less secure, more convenient</span>
                                                        </div>
                                                        <i className="gb-internet-icon"></i>
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="fundchackradio" onClick={()=>this.selectHardware('')} id="fundchackradio3-mobile" value='' />
                                                    <label className="form-check-label">
                                                        <div className="gb-chack-last-main">
                                                            <h4>Not sure</h4>
                                                            <span>Skip, for now</span>
                                                        </div>
                                                        <i className="gb-skip-icon"></i>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="gb-swiper-button">
                                    <div onClick={(e) => this.slideToNextPrev(e,'prev')} className="swiper-button-prev gb-find-wallet-swiper-button-prev">Reset</div>
                                    <div onClick={(e) => this.slideToNextPrev(e,'next')} className="swiper-button-next gb-find-wallet-swiper-button-next">Next</div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                <section className="gb-find-wallets-option-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="gb-find-wallets-options">
                                    <h4>{this.state.wallet.texts}</h4>
                                    {/*<h4>Your results</h4> */}
                                </div>
                                {/* <h3>Showing 1 - 2 of 2 Wallets</h3> */}
                                {this.walletList()}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="gb-wallets-slider">
                    <h1 className="text-center">Learn about <span>Wallets</span></h1>
                    <div className="swiper-container gb-wallet-slider-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide green-slide text-center">
                                <div className="slide-text">
                                    <h2>Wallets</h2>
                                    <h3>What is a wallet?</h3>
                                </div>
                                <Link className="gb-letsgo-btn" to="/wallets/what-is-wallet">Let’s go<i></i></Link>
                            </div>
                            <div className="swiper-slide orange-slide text-center">
                                <div className="slide-text">
                                    <h2>Wallets</h2>
                                    <h3>How To Send &amp; Receive Crypto</h3>
                                </div>
                                <Link className="gb-letsgo-btn" to="/wallets/send-receive-crypto">Let’s go<i></i></Link>
                            </div>
                        </div>
                        <div className="swiper-button-next gb-wallet-swiper-button-next"></div>
                        <div className="swiper-button-prev gb-wallet-swiper-button-prev"></div>
                    </div>
                </section>
                {/* {this.state.isLoader && <CustomLoader/>} */}
            </React.Fragment>
        );
    }
    componentDidMount = () => {
        document.title = "Find Wallets | Goodbit101";
        this.initWalletSwiper();
        this.initFindWalletSwiper();
        // this.getWallet();
        this.searchBox = document.getElementById('coinSearchBox');
        this.searchForResult(this.searchBox.value);
        document.getElementById('coinSearchBox').addEventListener('keyup', this.debounce(() => {
            this.searchForResult(this.searchBox.value);
        }, 500));
        let swipeButtons = document.getElementsByClassName('gb-find-wallet-swiper-button-next');
            swipeButtons[0].classList.add('swiper-button-disabled');
            swipeButtons[1].classList.add('swiper-button-disabled');
    }
    componentWillUnmount() {
        document.getElementById('coinSearchBox').removeEventListener('keyup',this.searchForResult);
    }
    debounce = (func, delay) => {
        let debounceTimer
        return function() {
            const context = this
            const args = arguments
                clearTimeout(debounceTimer)
                    debounceTimer
                = setTimeout(() => func.apply(context, args), delay)
        }
    }
    walletList(){
        if(this.state.wallet.results){
            return  this.state.wallet.results.map((data, i) => {
                return (
            <div className="gb-wallet-main" key={i}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="gb-logo-img">
                            <img src={this.state.url+'/logo/'+data.logo} alt="product-logo"></img>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="gb-product-name">
                            <h2>{data.name}</h2>
                        </div>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-md-3">
                        <div className="gb-product-img ">
                            <img src={this.state.url+'thumb/'+data.image} alt="product-logo"></img>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="gb-product-detail">
                            <h2>Goodbit Review</h2>
                            <p dangerouslySetInnerHTML={{__html: data.description}}></p>
                            {/* <a href={null}>Read full review</a> */}
                        </div>
                    </div>
                </div>
                <div className="row d-flex align-items-end">
                    <div className="col-md-3 gb-order-change">
                    <a href={data.link} className="gray-btn" target="_blank" rel="noopener noreferrer">
                        Learn More<i></i>
                    </a>
                    </div>
                </div>
            </div>
         )
        });
        }

    }
    scrollToContent() {
        let element = document.getElementsByClassName('gb-find-wallets-options');
        // element.scrollTop = 0;
        if(element[0]){
            element[0].scrollIntoView({block:'start'});
        }
    }
    slideToNextPrev(e,type){
        if (type === 'next') {
            e.target.classList.add('swiper-button-disabled');
            if (e.target.id === "last") {
                this.setState({isLoader:true});
                this.getWallet(this.state.filter)
            }
        }
        else{
            if(this.findWalletSwiper){
                let swipeButtons = document.getElementsByClassName('gb-find-wallet-swiper-button-next');
                    swipeButtons[0].removeAttribute("id");
                    swipeButtons[1].removeAttribute("id");
                    // e.target.classList.remove('swiper-button-disabled');
                    this.findWalletSwiper[0].slideTo(0)
                    this.findWalletSwiper[1].slideTo(0)
                    this.resetData();
            }
        }
    }
    resetData(){
        let objWallet = {
            results:[],
            texts:'Choose from options above to see results'
        }
         document.getElementById('desktop-wallet-form').reset();
         document.getElementById('mobile-wallet-form').reset();
        this.setState({wallet:objWallet});
        if(this.findWalletSwiper){
            this.findWalletSwiper[0].allowSlideNext = true;
            this.findWalletSwiper[1].allowSlideNext = true;

        }

    }
    searchForResult(query) {
        let body = {
            search : query,
        };
        WalletService
        .getSearch(body)
        .then((res) => {
            if (res && res.data && res.data.results) {
                let objSearch = {
                    results: res.data.results,
                    total : res.data.total
                }
                this.setState({search: objSearch});
            }
        })
        .catch((error) => {
            console.error('searchForResult =>', error)
        })
    }
    onKeyPressSearchBox(event){
        if(event.charCode === 13) {
            event.preventDefault()
        }
    }
    coinListing(){
        if(this.state.search.results){
            return  this.state.search.results.map((coin, i) => {
                return (
                    <li onClick={() => this.selectCoin(coin.shortname)} key={i}>
                        {/* <a>{coin.name} <span>{coin.shortname}</span></a> */}
                        <input id={"radio"+i} type="radio" name="radio" value="1" />
                        <label htmlFor={"radio"+i}>{coin.name} <span>{coin.shortname}</span></label>
                    </li>
                 )
            });
        }
    }
    //Select Coin
    selectCoin(name){
        let filterCopy = JSON.parse(JSON.stringify(this.state.filter));
        let swipeButtons = document.getElementsByClassName('gb-find-wallet-swiper-button-next');
        swipeButtons[0].classList.remove('swiper-button-disabled');
        swipeButtons[1].classList.remove('swiper-button-disabled');
        filterCopy.coin = name ;
        this.setFilterState(filterCopy);
    }
    //Select Plan
    selectPlan(name){
        let filterCopy = JSON.parse(JSON.stringify(this.state.filter));
        filterCopy.plan = name;
        let swipeButtons = document.getElementsByClassName('gb-find-wallet-swiper-button-next');
            swipeButtons[0].classList.remove('swiper-button-disabled');
            swipeButtons[1].classList.remove('swiper-button-disabled');
        this.setState({filter:filterCopy});
        setTimeout(() => {
            if(name === "monthly"){
                if(this.findWalletSwiper){
                    this.findWalletSwiper[0].allowSlideNext = false;
                    this.findWalletSwiper[1].allowSlideNext = false;
                }
                this.selectHardware('hardware');
                swipeButtons[0].innerHTML = "Finish";
                swipeButtons[1].innerHTML = "Finish";
                swipeButtons[0].setAttribute("id", "last");
                swipeButtons[1].setAttribute("id", "last");

            }
            else{
                if(this.findWalletSwiper){
                    this.findWalletSwiper[0].allowSlideNext = true;
                    this.findWalletSwiper[1].allowSlideNext = true;
                }
                swipeButtons[0].innerHTML = "Next";
                swipeButtons[1].innerHTML = "Next";
                swipeButtons[0].removeAttribute("id");
                swipeButtons[1].removeAttribute("id");
            }
        }, 10);
    }
    //Select Hardware and add id last to last element
    selectHardware(name){
        let filterCopy = JSON.parse(JSON.stringify(this.state.filter));
        filterCopy.compablity = name;
        let swipeButtons = document.getElementsByClassName('gb-find-wallet-swiper-button-next');
            swipeButtons[0].classList.remove('swiper-button-disabled');
            swipeButtons[1].classList.remove('swiper-button-disabled');
            swipeButtons[0].innerHTML = "Finish";
            swipeButtons[1].innerHTML = "Finish";
            swipeButtons[0].setAttribute("id", "last");
            swipeButtons[1].setAttribute("id", "last");
        this.setFilterState(filterCopy);
    }
    setFilterState(filterCopy){
        this.setState({filter:filterCopy});
    }
    getWallet(body){
        WalletService
        .getAllWallet(body)
        .then((res) => {
            if (res && res.data && res.data.results) {
                let objWallet = {
                    results: res.data.results,
                    total : res.data.total,
                    texts : "There are " + res.data.total + " results available"
                }
                this.setState({wallet: objWallet});
                this.setState({url: res.data.displayUrl});
                if(this.state.wallet.results.length){
                    this.scrollToContent();
                }

                // console.log(this.state.wallet);
            }else{
                let objWallet = {
                    results: [],
                    total : 0,
                    texts : "No results found "
                }
                this.setState({wallet: objWallet});
                this.scrollToContent();
            }
            this.setState({isLoader:false});
        })
        .catch((error) => {
            console.error('getAllWallet =>', error)
            this.setState({isLoader:false});
        })
    }
    initWalletSwiper = () => {
        // eslint-disable-next-line
        let walletSwiper = new Swiper('.gb-wallet-slider-container', {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true,
            navigation: {
              nextEl: '.gb-wallet-swiper-button-next',
              prevEl: '.gb-wallet-swiper-button-prev',
            },
            breakpoints: {
                767: {
                  slidesPerView: 1.2,
                  centeredSlides: false
                }
              }
          });
    }

    initFindWalletSwiper = () => {
        // eslint-disable-next-line
        this.findWalletSwiper = new Swiper('.gb-find-wallet-slider-container', {
            touchRatio: 0,
            allowSwipeToPrev: false,
            allowSwipeToNext: false,
            navigation: {
              nextEl: '.gb-find-wallet-swiper-button-next',
              prevEl: '.gb-find-wallet-swiper-button-prev',
            },
            on : {
                reachBeginning : function () {
                   let swipeButtons = document.getElementsByClassName('gb-find-wallet-swiper-button-next');
                   swipeButtons[0].innerHTML = "Next";
                   swipeButtons[1].innerHTML = "Next";
                },
            }
          });
    }
}

export default Wallets;