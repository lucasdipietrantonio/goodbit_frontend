import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../BuyByCoin/BuyByCoin.scss';
import './ComingSoon.scss';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
// import BuyByCoinModal from '../../Modals/BuyByCoinModal/BuyByCoinModal';
// import * as BuyByCoinService from '../../../services/BuyByCoinService'

class ComingSoon extends Component {
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
        exchanges:{
            results:[],
            total:[]
        },
        displayExchange:false,
        url : ''
    }
    render() {
        return (
            <React.Fragment>
                <section className="gb-buy-by-coin-main gb-coming-soon-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="gb-coming-soon-text">
                                    <h1>Buy by Coin</h1>
                                    <span>Coming Soon</span>
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
            </React.Fragment>
        );
    }
    componentDidMount = () => {
        this.initWalletSwiper();
        this.initFindWalletSwiper();
        // this.getExchanges();


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
}

export default ComingSoon;