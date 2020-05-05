import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './BuyByCoin.scss';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import BuyByCoinModal from '../../Modals/BuyByCoinModal/BuyByCoinModal';
import * as BuyByCoinService from '../../../services/BuyByCoinService';
// import CustomLoader from '../../CustomLoader/CustomLoader';



class BuyByCoin extends Component {
    walletSwiper;
    state = {
        search:{
            results:[]
        },
        filter:{
            coin:'',
            coinname:'',
            paymentMethod:''
        },
        paymentMethod:{
            results:[
                { name : 'Credit/Debit'},
                { name : 'Bank'},
                { name : 'Bitcoin'},
                { name : 'Cash'},
                { name : 'Paypal'},
                { name : 'Gift Cards'},

            ]
        },
        selectedExchanges:{},
        exchanges:{
            results:[],
            total:''
        },
        cryptoExchanges:{
            results:[],
            total:''
        },
        selectedCoin :'',
        buybycoin :{
            results : [],
            total : ''
        },
        noResult:'Loading...',
        isLoader:false,
        displayExchange:false,
        url : ''
    }
    render() {
        return (
            <React.Fragment>
                <section className="gb-buy-by-coin-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 offset-md-1">
                                <h1>Buy by Coin</h1>
                                <p>Have a coin in mind you'd like to buy and don't know where to start? Skip all the hassle and sketchy exchanges with our Buy by Coin tool. Just pick the coin you'd like to buy, using the payment method you prefer, and we'll guide you through the process with only trustworthy, high rated exchanges.</p>
                            </div>
                            <div className="col-md-5 offset-md-1">
                                    <div className="gb-buy-coin-right">
                                        <h2>LET’S BEGIN</h2>
                                        <form id="buybycoin-web-form">
                                            <div className="btn-group gb-buy-coin-dropdown"  id='web-coin-parent-dropdown'>
                                                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    {this.state.filter.coinname ? this.state.filter.coinname : "Choose Coin" }
                                                </button>
                                                <div className="dropdown-menu" id='web-coin-dropdown'>
                                                    {/* <button className="gb-close-btn">Close</button> */}
                                                    <ul>
                                                    {/* <form> */}
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Search" id="coinSearchBox" />
                                                        </div>
                                                    {/* </form> */}
                                                        {this.coinListing()}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="btn-group gb-buy-coin-dropdown gb-buy-coin-dropdown-payment" id="web-payment-parent-dropdown">
                                                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    {this.state.filter.paymentMethod ? this.state.filter.paymentMethod : "Payment Method"}
                                                </button>
                                                <div className="dropdown-menu" id='web-payment-dropdown'>
                                                    {/* <button className="gb-close-btn">Close</button> */}
                                                    <ul>
                                                        {this.paymentMethodListing()}
                                                    </ul>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="gb-buy-coin-right-button">
                                            {/* <button className="gb-buy-coin-right-button-prev">Back</button> */}
                                            <button className="gb-buy-coin-right-button-next" onClick={() => this.toggleBuybyCoinModal('show')}>Next</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="gb-buy-by-coin-main gb-buy-by-coin-main-top-mobile">
                    <div className="container">
                        <h1>Buy by Coin</h1>
                        <p>Welcome to the Buy by Coin tool! Pick the coin you’re looking to buy and choose how you’d like to pay for it. Our tool will create step by step instructions showing you how to buy it! Our most highly rated exchanges will appear first by default, but if you’d like to check out the other options, use the arrows at the top of each box.<br/>Happy coining!</p>
                    </div>
                </section>
                <section className="gb-buy-by-coin-main gb-buy-by-coin-main-bottom-mobile">
                    <div className="container">
                            <div className="gb-buy-coin-right">
                                <h2>LET’S BEGIN</h2>
                                <form id="buybycoin-mobile-form">
                                <div className="btn-group gb-buy-coin-dropdown" id='mobile-coin-parent-dropdown'>
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        {this.state.filter.coinname ? this.state.filter.coinname : "Choose Coin" }
                                    </button>
                                    <div className="dropdown-menu" id='mobile-coin-dropdown'>
                                        {/* <button className="gb-close-btn">Close</button> */}
                                        <ul>
                                        {/* <form> */}
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Search" id="coinSearchBoxMobile" />
                                            </div>
                                        {/* </form> */}
                                            {this.coinListing()}
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="btn-group gb-buy-coin-dropdown gb-buy-coin-dropdown-payment" id='mobile-payment-parent-dropdown'>
                                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            {this.state.filter.paymentMethod ? this.state.filter.paymentMethod : "Payment Method"}
                                        </button>
                                        <div className="dropdown-menu" id='mobile-payment-dropdown'>
                                            {/* <button className="gb-close-btn">Close</button> */}
                                            <ul>
                                                {this.paymentMethodListing()}
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                                <div className="gb-buy-coin-right-button">
                                    <button className="gb-buy-coin-right-button-prev">Back</button>
                                    <button className="gb-buy-coin-right-button-next" onClick={() => this.toggleBuybyCoinModal('show')}>Next</button>
                                </div>
                            </div>
                    </div>
                </section>
                <section className="gb-find-wallets-option-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="gb-find-wallets-options">
                                    <h4>Choose from options above to see results</h4>
                                    {/* <h4>Your results</h4> */}
                                </div>
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
                            <div className="swiper-slide green-slide text-center">
                                <div className="slide-text">
                                    <h2>Wallets</h2>
                                    <h3>Find a Wallet</h3>
                                </div>
                                <Link className="gb-letsgo-btn" to="/wallets/find-wallets">Let’s go<i></i></Link>
                            </div>
                        </div>
                        <div className="swiper-button-next gb-wallet-swiper-button-next"></div>
                        <div className="swiper-button-prev gb-wallet-swiper-button-prev"></div>
                    </div>
                </section>
                <div className="gb-buy-by-coin-modal">
                    <BuyByCoinModal exchanges={this.state.exchanges} cryptoExchanges={this.state.cryptoExchanges} buybycoin={this.state.buybycoin} url={this.state.url} selectedCoin={this.state.selectedCoin} selectedExchanges={this.state.selectedExchanges} noResult={this.state.noResult} resetHandler={this.resetHandler} isLoader={this.state.isLoader}/>
                </div>
                {/* {this.state.isLoader && <CustomLoader/>} */}
            </React.Fragment>
        );
    }
    componentWillMount = () => {
        this.setState({isLoader:true});
    }
    componentDidMount = () => {
        document.title = "Buy By Coin | Goodbit101";
        this.initWalletSwiper();
        this.initFindWalletSwiper();
        // this.getExchanges();

        this.searchBox = document.getElementById('coinSearchBox');
        this.searchForResult(this.searchBox.value);
        document.getElementById('coinSearchBox').addEventListener('keyup', this.debounce(() => {
            this.searchForResult(this.searchBox.value);
        }, 500));
        this.searchBoxMobile = document.getElementById('coinSearchBoxMobile');
        this.searchForResult(this.searchBoxMobile.value);
        document.getElementById('coinSearchBoxMobile').addEventListener('keyup', this.debounce(() => {
            this.searchForResult(this.searchBoxMobile.value);
        }, 500));
    }
    componentWillUnmount() {
        document.getElementById('coinSearchBox').removeEventListener('keyup',this.searchForResult);
        document.getElementById('coinSearchBoxMobile').removeEventListener('keyup',this.searchForResult);
    }
    //Debounc function for late call while typing
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
    //Get All Coin and Also Apply Filter
    searchForResult(query) {
        let body = {
            search : query,
        };
        // console.log(body);
        BuyByCoinService
        .getSearch(body)
        .then((res) => {
            // console.log(res);
            if (res && res.data && res.data.results) {
                let objSearch = {
                    results: res.data.results,
                    total : res.data.total
                }
                this.setState({search: objSearch});
                this.setState({isLoader:false});
            }
        })
        .catch((error) => {
            this.setState({isLoader:false});
            console.error('searchForResult =>', error)
        })
    }
    //Coin Listing
    coinListing(){
        if(this.state.search.results){
            return  this.state.search.results.map((coin, i) => {
                if(this.state.filter.paymentMethod !== coin.name){
                    return (
                        <li onClick={() => this.selectCoin(coin.shortname,coin.name,coin)} key={i}>
                            <input id={"radio"+i} type="radio" name="coin" value={coin.shortname} />
                            <label htmlFor={"radio"+i}>{coin.name} <span>{coin.shortname}</span></label>
                        </li>
                    )
                }
                else{
                    return '';
                }
            });
        }else{
            return '';
        }
    }
    //Payement methode Listing
    paymentMethodListing(){
        if(this.state.paymentMethod.results){
            return  this.state.paymentMethod.results.map((paymentMethod, i) => {
                if(this.state.filter.coinname !== paymentMethod.name){
                    return (
                        <li onClick={() => this.selectPaymentMethod(paymentMethod.name)} key={i}>
                            <input id={"payment"+i} type="radio" name="payment" value="1" />
                            <label htmlFor={"payment"+i}>{paymentMethod.name}</label>
                        </li>
                     )
                }
                else{
                    return '';
                }
            });
        }else{
            return '';
        }
    }

    //Select Coin
     selectCoin(id,name,coin){
        let filterCopy = JSON.parse(JSON.stringify(this.state.filter));
        filterCopy.coin = id ;
        filterCopy.coinname = name ;
        this.setState({selectedCoin : coin})
        this.setFilterState(filterCopy);
        document.getElementById("web-coin-dropdown").classList.toggle("show");
        document.getElementById("web-coin-parent-dropdown").classList.toggle("show");
        document.getElementById("mobile-coin-dropdown").classList.toggle("show");
        document.getElementById("mobile-coin-parent-dropdown").classList.toggle("show");
    }
    //Select Payment Method
    selectPaymentMethod(name){
        let filterCopy = JSON.parse(JSON.stringify(this.state.filter));
        filterCopy.paymentMethod = name ;
        this.setFilterState(filterCopy);
        document.getElementById("web-payment-dropdown").classList.toggle("show");
        document.getElementById("web-payment-parent-dropdown").classList.toggle("show");
        document.getElementById("mobile-payment-dropdown").classList.toggle("show");
        document.getElementById("mobile-payment-parent-dropdown").classList.toggle("show");
    }
    setFilterState(filterCopy){
        this.setState({filter:filterCopy});
        if(filterCopy.coin && filterCopy.paymentMethod){
            this.setState({displayExchange:true});
        }else{
            this.setState({displayExchange:false});
        }
        this.setState({noResult:"Loading..."});
        let objBuyByCoin = {
            results: [],
            total : ''
        }
        this.setState({buybycoin : objBuyByCoin});
    }
    resetHandler = () => {
      let  objfilter = {
            coin:'',
            coinname:'',
            paymentMethod:''
        }
        this.setState({filter:objfilter});
        document.getElementById('buybycoin-web-form').reset();
        document.getElementById('buybycoin-mobile-form').reset();
    }
    getExchanges(body){
        // console.log(body);
        BuyByCoinService
        .getAllBuyByCoinTool(body)
        .then((res) => {
            // console.log(res);
            if (res && res.data && res.data.results) {
                let objExchange = {
                    results: res.data.results.exchanges,
                    total : res.data.total
                }
                let objCryptoExchange = {
                    results: res.data.results.crypto_exchanges,
                    total : res.data.total
                }
                let objBuyByCoin
                if(res.data.results.buybycoin.length === 0){
                    this.setState({noResult:"Sorry there are no results. Please choose a different option"});
                }
                objBuyByCoin = {
                    results: res.data.results.buybycoin,
                    total : res.data.total
                }
                if(res.data.results.default_exchange){
                    this.setState({selectedExchanges:res.data.results.default_exchange})
                }
                this.setState({isLoader:false});
                this.setState({url: res.data.displayUrl});
                this.setState({exchanges: objExchange,buybycoin : objBuyByCoin,cryptoExchanges :objCryptoExchange});
            }
        })
        .catch((error) => {
            this.setState({noResult:"Sorry there are no results. Please choose a different option"});
            this.setState({isLoader:false});
            console.error('searchForResult =>', error)
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
        let findWalletSwiper = new Swiper('.gb-find-wallet-slider-container', {
            navigation: {
              nextEl: '.gb-find-wallet-swiper-button-next',
              prevEl: '.gb-find-wallet-swiper-button-prev',
            }
          });
    }
    toggleBuybyCoinModal = (type) => {
        //   console.log(type);
          if (type === 'hide') {
              document.body.classList.remove("gb-buybycoin-main-body");
        } else {
            if(this.state.displayExchange){
                document.body.classList.add("gb-buybycoin-main-body");
                this.setState({isLoader:true});
                this.getExchanges(this.state.filter);
                setTimeout(() => {
                    window.dispatchEvent(new Event('resize'));
                }, 10);
            }
        }
      }
}

export default BuyByCoin;
