import React, { Component } from 'react';
import './Wallets.scss';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

class Wallets extends Component {
    state = {  }
    render() {
        return (
            <React.Fragment>
                <section className="gb-wallets-detail-main text-center">
                    <div className="container">
                        <div className="gb-wallet-banner-box">
                            <h2>Goodbit’s</h2>
                            <h1>Best Crypto Wallets </h1>
                            <p>To get the most from buying crpyto, you need a low fee, good customer support crypto wallet. If you earn interest on your cash, even better. Our team spent over 200 hours analyzing, comparing and rating a host of banks and credit unions.</p>
                        </div>
                    </div>
                </section>

                <section className="gb-wallets-main-blk">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <h1>Filter Wallets</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="pills-all-tab" data-toggle="pill" href="#pills-all" role="tab" aria-controls="pills-all" aria-selected="true">All Wallets</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-no-monthly-fee-tab" data-toggle="pill" href="#pills-no-monthly-fee" role="tab" aria-controls="pills-no-monthly-fee" aria-selected="false">No Monthly Fees</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-live-help-tab" data-toggle="pill" href="#pills-live-help" role="tab" aria-controls="pills-live-help" aria-selected="false">Live Help</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-all-coins-tab" data-toggle="pill" href="#pills-all-coins" role="tab" aria-controls="pills-all-coins" aria-selected="false">All Coins</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
                                        <h3>Showing 1 - 2 of 2 Wallets</h3>
                                        <div className="gb-wallet-main">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="gb-product-img">
                                                        <img src={ require('../../assets/images/Wallets/ledger-logo.svg') } alt="product-logo"></img>
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="gb-product-name">
                                                        <h2>Ledger Nano S</h2>
                                                        <div className="gb-rating-review">
                                                            <ul>
                                                                <li><a href={null}><i className="gb-star-icon gb-chacked"></i></a></li>
                                                                <li><a href={null}><i className="gb-star-icon gb-chacked"></i></a></li>
                                                                <li><a href={null}><i className="gb-star-icon gb-chacked"></i></a></li>
                                                                <li><a href={null}><i className="gb-star-icon"></i></a></li>
                                                                <li><a href={null}><i className="gb-star-icon"></i></a></li>
                                                            </ul>
                                                            <h4>103 Reviews</h4>
                                                        </div>
                                                        <h5>Our Rating: <span>A</span></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row d-flex align-items-center">
                                                <div className="col-md-3">
                                                    <div className="gb-product-img">
                                                        <img src={ require('../../assets/images/Wallets/pendrive.png') } alt="product-logo"></img>
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="gb-product-detail">
                                                        <h2>In a nutshell</h2>
                                                        <div className="gb-tabs">
                                                            <ul>
                                                                <li><a href={null}>No Monthly Fees</a></li>
                                                                <li><a href={null}>Live Help</a></li>
                                                                <li><a href={null}>All Coins</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row d-flex align-items-end">
                                                <div className="col-md-3 gb-order-change">
                                                    <button className="blue-btn">Buy Now</button>
                                                    <button className="gray-btn"><i></i>Watch tutorial</button>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="gb-product-detail">
                                                        <h2>Goodbit Review</h2>
                                                        <p>To get the most from buying crpyto, you need a low fee, good customer support crypto wallet. If you earn interest on your cash, even better. Our team spent over 200 hours analyzing, comparing and rating a host of banks and credit unions.</p>
                                                        <a href={null}>Read full review</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-no-monthly-fee" role="tabpanel" aria-labelledby="pills-no-monthly-fee-tab">2</div>
                                    <div className="tab-pane fade" id="pills-live-help" role="tabpanel" aria-labelledby="pills-live-help-tab">3</div>
                                    <div className="tab-pane fade" id="pills-all-coins" role="tabpanel" aria-labelledby="pills-all-coins-tab">4</div>
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
                                <button>Let’s go<i></i></button>
                            </div>
                            <div className="swiper-slide orange-slide text-center">
                                <div className="slide-text">
                                    <h2>Wallets</h2>
                                    <h3>How money has changed over time</h3>
                                </div>
                                <button>Let’s go<i></i></button>
                            </div>
                            <div className="swiper-slide green-slide text-center">
                                <div className="slide-text">
                                    <h2>Wallets</h2>
                                    <h3>How do you buy Bitcoin?</h3>
                                </div>
                                <button>Let’s go<i></i></button>
                            </div>
                            <div className="swiper-slide orange-slide text-center">
                                <div className="slide-text">
                                    <h2>Wallets</h2>
                                    <h3>What is a wallet?</h3>
                                </div>
                                <button>Let’s go<i></i></button>
                            </div>
                            <div className="swiper-slide green-slide text-center">
                                <div className="slide-text">
                                    <h2>Wallets</h2>
                                    <h3>What is a wallet?</h3>
                                </div>
                                <button>Let’s go<i></i></button>
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
        document.title = "Wallets | Goodbit101";
        this.initWalletSwiper();
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
                  slidesPerView: 1.2,centeredSlides: false
                }
              }
          });
    }
}

export default Wallets;