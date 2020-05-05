import React, { Component } from 'react';
import './BuyByCoinModal.scss';
import { Link } from "react-router-dom";
import GlossaryPopover from '../../GlossaryPopover/GlossaryPopover';
// import CustomLoader from '../../CustomLoader/CustomLoader';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

class BuyByCoinModal extends Component {
    state = {
        selectedCoin:'',
        exchanges : {},
        cryptoExchanges:{},
        buybycoin:{},
        url:'',
        selectedExchange:'',
        selectedCryptoExchange:'',
        noResult:'Loading...',
        isLoader:true
    }
    buybycoinStepsSwiper ;
    render() {
      return (
        <React.Fragment>
            <div className="gb-buy-by-coin-modal">
                <div className="gb-buy-by-coin-body">
                    <div className="container">
                        <div className="gb-buy-by-coin-close-btn">
                            <button type="button" className="btn btn-secondary" onClick={() => this.toggleQuestionModal('hide')}></button>
                        </div>
                        <div className="gb-buy-by-coin-header">
                            <img src={require('../../../assets/images/find-wallets/buy-by-coin/buy-by-coin-logo.svg')} alt="Goodbit-icon" />
                        </div>

                        <div className="gb-buy-by-coin-modal-body">
                            <div className="swiper-container gb-buy-by-coin-swiper-container">
                                <div className="swiper-wrapper">
                                    {this.buybycoinSteps()}
                                </div>
                            </div>
                        </div>
                        <div className="gb-buy-by-coin-footer">
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    <div className="gb-buy-by-coin-slider">
                                        <div className="swiper-button-next gb-buy-by-coin-swiper-button-prev"><i className="gb-prev-icon"></i> Prev</div>
                                        <div onClick={(e)=>this.finishBuybycoin(e)} className="swiper-button-prev gb-buy-by-coin-swiper-button-next">Next<i className="gb-next-icon"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {this.state.isLoader && <CustomLoader/>} */}
        </React.Fragment>
      );
    }

    componentDidMount() {
        this.initBuyByCoinSwiper();
        // let swipeButtons = document.getElementsByClassName('gb-buy-by-coin-swiper-button-next');
        // swipeButtons[0].classList.add('swiper-button-disabled');

        // swipeButtons[0].classList.add('swiper-button-disabled');
    }

    componentWillUnmount(){
        document.body.classList.remove("gb-buybycoin-main-body");
        // document.getElementsByClassName('gb-read-btn')[0].removeEventListener("click", this.onClickShowInstruction);
    }
    finishBuybycoin(e){
        if(e.target.innerHTML === "Finish"){
            document.body.classList.remove("gb-buybycoin-main-body");
            this.props.resetHandler();
        }
    }

    onClickShowInstruction = (event) => {

        let parent = event.target.closest('.infodiv')
        let modelBody = event.target.closest('.gb-buy-by-coin-modal').classList;
        // console.log(parent);
        if(modelBody){
            modelBody.add('gb-instruction-body')
        }
        if(parent){
            parent = parent.getElementsByClassName('gb-buyby-read-moreblock')[0].classList;

            let hasClass = parent.contains('gb-buyby-read-moreblock-active');
            if(hasClass){
                parent.remove('gb-buyby-read-moreblock-active')
            }else{
                parent.add('gb-buyby-read-moreblock-active');

            }
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 10);
        }

    }

    closeInstruction(event){

        let modelBody = event.target.closest('.gb-instruction-body').classList;
        let parent = event.target.closest('.infodiv')

        // console.log(parent);
        if(modelBody){
            modelBody.remove('gb-instruction-body');
        }
        parent = parent.getElementsByClassName('gb-buyby-read-moreblock')[0].classList;

        let hasClass = parent.contains('gb-buyby-read-moreblock-active');
        if(hasClass){
            parent.remove('gb-buyby-read-moreblock-active')
        }else{
            parent.add('gb-buyby-read-moreblock-active');

        }

        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 10);

    }

    showExchangeInstruction(instructions){
        if (instructions) {
            return  instructions.map((instruction, i) => {
                return (
                     <div key={i} dangerouslySetInnerHTML={{__html: instruction.description}}></div>
                )
            })
        }
    }

    showStepInstruction(step){
        console.log(step);
        if (step.instruction) {
            return (
                    <div dangerouslySetInnerHTML={{__html: step.instruction}}></div>
            )
        }else{
            return(
                <div>No Instruction</div>
            )
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState(
            {
                selectedCoin:'',
                exchanges : {},
                cryptoExchanges:{},
                buybycoin:{},
                url:'',
                selectedExchange:'',
                selectedCryptoExchange:'',
                noResult:'Loading...',
                isLoader:true
            },
            function(){
                this.setState(
                    {
                        exchanges:nextProps.exchanges,
                        cryptoExchanges:nextProps.cryptoExchanges,
                        buybycoin:nextProps.buybycoin,url:nextProps.url,
                        selectedCoin:nextProps.selectedCoin,
                        selectedExchange:nextProps.selectedExchanges[0],
                        noResult:nextProps.noResult,
                        isLoader:nextProps.isLoader
                    }
                );

            }
        )
        if(this.buybycoinStepsSwiper){
            this.buybycoinStepsSwiper.slideTo(0);
            let next = document.getElementsByClassName('gb-buy-by-coin-swiper-button-next');
            next[0].innerHTML = 'Next';
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 100);
        }
    //   console.log("componentWillReceiveProps =>", this.props.nextProps);
    }

    initBuyByCoinSwiper() {
        // eslint-disable-next-line
        this.buybycoinStepsSwiper = new Swiper(".gb-buy-by-coin-swiper-container", {
            autoHeight: true,
            slidesPerView: 1,
            touchRatio: 0,
            navigation: {
              nextEl: ".gb-buy-by-coin-swiper-button-next",
              prevEl: ".gb-buy-by-coin-swiper-button-prev"
            },
            on: {
              init: function () {
                setTimeout(() => {
                    window.dispatchEvent(new Event('resize'));
                }, 100);
              },
              slideChangeTransitionStart: function(){
                document.getElementsByClassName('gb-buy-by-coin-header')[0].scrollIntoView({block:'start'});
              },
              slideNextTransitionEnd: function () {
                let next = document.getElementsByClassName('gb-buy-by-coin-swiper-button-next');

                let hasClass = next[0].classList.contains('swiper-button-disabled');
                if(hasClass){
                    next[0].classList.remove('swiper-button-disabled');
                    next[0].innerHTML = 'Finish';
                }
              },
              slidePrevTransitionEnd: function () {
                let next = document.getElementsByClassName('gb-buy-by-coin-swiper-button-next');
                next[0].innerHTML = 'Next';
              }
            },
        });
    }

    componentDidUpdate(prevProps, prevState) {
        this.buybycoinStepsSwiper.update();
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);
    //   console.log(this.state);
    }

    toggleQuestionModal = (type) => {
        //   console.log(type);
          if (type === 'hide') {
              document.body.classList.remove("gb-buybycoin-main-body");
        } else {
            document.body.classList.add("gb-buybycoin-main-body");
        }
    }

    listingFiatExchange(){
        if(this.state.exchanges.results){
            return  this.state.exchanges.results.map((exchange, i) => {

                return(
                    <div className="col-md-5 offset-md-1 mb-3 infodiv gb-buyby-coin-column" key={i}>
                        <div className={ ((this.state.selectedExchange.name === exchange.name) ?  "gb-buy-by-coin-product-box gb-buy-by-coin-product-box-active" : "gb-buy-by-coin-product-box" )} >
                            <div className="gb-buy-by-coin-box-top">
                                <input type="radio" name="exchannge-radio" onClick={()=> {this.setState({selectedExchange : exchange})}} />
                                <div className="gb-coin-box-img">
                                    <img src={this.state.url+'exchange/logo/'+exchange.logo} alt="product-logo"></img>
                                </div>
                                <h2>{exchange.name}</h2>
                                <h5>Our Rating: <span className="gb-green">{exchange.goodbit_rating}</span></h5>
                                <div className="gb-product-detail">
                                    <h2>Goodbit Review</h2>
                                    <p dangerouslySetInnerHTML={{__html: exchange.description}}></p>
                                    <a href={exchange.link} target="_blank" rel="noopener noreferrer">Visit exchange</a>
                                </div>
                                <button className="gb-read-btn" onClick={this.onClickShowInstruction}>Read instructions<i></i></button>
                                {/* onClick={(e) => this.onClickShowInstruction(event)}  */}
                            </div>
                            <div className="gb-buyby-read-moreblock">
                                <div className="gb-instruction-body-close-btn">
                                    <button type="button" className="btn btn-secondary" onClick={(event) => this.closeInstruction(event)}></button>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1">
                                            {this.showExchangeInstruction(exchange.instruction)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
        }
    }

    listingCryptoExchange(){
        if(this.state.cryptoExchanges.results){
            return  this.state.cryptoExchanges.results.map((exchange, i) => {
                return(
                    <div className="col-md-5 offset-md-1 mb-3 infodiv gb-buyby-coin-column" key={i}>
                        <div className={ (( this.state.selectedCryptoExchange && this.state.selectedCryptoExchange.name === exchange.name) ?  "gb-buy-by-coin-product-box gb-buy-by-coin-product-box-active" : "gb-buy-by-coin-product-box" )} >
                            <div className="gb-buy-by-coin-box-top">
                                <input type="radio" name="exchannge-radio" onClick={()=> {this.setState({selectedCryptoExchange : exchange})}} />
                                <div className="gb-coin-box-img">
                                    <img src={this.state.url+'exchange/logo/'+exchange.logo} alt="product-logo"></img>
                                </div>
                                <h2>{exchange.name}</h2>
                                <h5>Our Rating: <span className="gb-green">{exchange.goodbit_rating}</span></h5>
                                <div className="gb-product-detail">
                                    <h2>Goodbit Review</h2>
                                    <p dangerouslySetInnerHTML={{__html: exchange.description}}></p>
                                    <a href={exchange.link} target="_blank" rel="noopener noreferrer">Visit exchange</a>
                                </div>
                                <button className="gb-read-btn" onClick={this.onClickShowInstruction} >Read instructions<i></i></button>
                                {/* onClick={(e) => this.onClickShowInstruction(event)} */}
                            </div>
                            <div className="gb-buyby-read-moreblock">
                                <div className="gb-instruction-body-close-btn">
                                    <button type="button" className="btn btn-secondary" onClick={(event) => this.closeInstruction(event)}></button>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1">
                                            {this.showExchangeInstruction(exchange.instruction)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
        }
    }

    showTradeForBitcoin(step){
        if(this.state.selectedCryptoExchange){
            return(
                <div className="col-md-6 offset-md-3 infodiv">
                    <div className="gb-buy-by-coin-send-box">
                        <div className="gb-send-coin">
                            <img src={ require('../../../assets/images/find-wallets/buy-by-coin/bitcoin.svg') } alt="product-logo"></img>
                            <h2>Send your BTC</h2>
                        </div>
                        <div className="gb-send-from-to-blk">
                            <div className="gb-send-from-blk">
                                {
                                    this.state.selectedExchange.logo && <img src={ this.state.url+'exchange/logo/'+this.state.selectedExchange.logo } alt={this.state.selectedExchange.name}></img>
                                }
                                {
                                    this.state.selectedExchange.image && <img src={ this.state.url+'TokenImage/'+this.state.selectedExchange.image } alt={this.state.selectedExchange.name}></img>
                                }
                                <p>{this.state.selectedExchange.name}</p>
                                {/* <p>3Ke1sbakpie9xvacySQbSB 293dsDJrQEM1</p> */}
                            </div>
                            <i className="gb-coin-right-arrow"></i>
                            <div className="gb-send-from-blk">
                                <img src={ this.state.url+'exchange/logo/'+this.state.selectedCryptoExchange.logo } alt="product-logo"></img>
                                <p>{this.state.selectedCryptoExchange.name}</p>
                                {/* <p>3Ke1sbakpie9xvacySQbSB 293dsDJrQEM1</p> */}
                            </div>


                        </div>
                            <button className="gb-read-btn" onClick={this.onClickShowInstruction}>Read instructions<i></i></button>
                        <div className="gb-buyby-read-moreblock">
                            <div className="gb-instruction-body-close-btn">
                                <button type="button" className="btn btn-secondary" onClick={(event) => this.closeInstruction(event)}></button>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1">
                                        {this.showStepInstruction(step)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="gb-buyby-read-moreblock">
                            <div>
                                {this.showStepInstruction()}
                            </div>
                        </div> */}
                    </div>
                </div>
            )
        }else{
            return (<div className="col-md-6 offset-md-3">
                    <div className="gb-buy-by-coin-send-box">
                        <div className="gb-send-coin">
                            <img src={ require('../../../assets/images/find-wallets/buy-by-coin/bitcoin.svg') } alt="product-logo"></img>
                            <h2>Please Select Crypto Exchange</h2>
                        </div>
                </div>
            </div>
            )
        }
    }

    showTradeForSelectedCoin(step){
        if(this.state.selectedCryptoExchange){
            return(
                <div className="col-md-6 offset-md-3 infodiv">
                    <div className="gb-buy-by-coin-send-box">
                        <div className="gb-send-coin">

                           <img src={ this.state.url+'exchange/logo/'+this.state.selectedCryptoExchange.logo } alt="product-logo"></img>
                            <h2>{this.state.selectedCryptoExchange.name}</h2>
                        </div>
                        <div className="gb-send-from-to-blk">
                            <div className="gb-send-from-blk">
                                {/* <img src={ require('../../../assets/images/find-wallets/buy-by-coin/bitcoin.svg') } alt="bitcoin-logo"></img> */}
                                <img src={ require('../../../assets/images/find-wallets/buy-by-coin/bitcoin.svg') } alt="product-logo"></img>
                                <p>Bitcoin</p>
                                {/* <p>{this.state.selectedExchange.name}</p> */}
                            </div>
                            <i className="gb-coin-right-arrow"></i>
                            <div className="gb-send-from-blk">
                                <img src={ this.state.url+'TokenImage/'+this.state.selectedCoin.image } alt="product-logo"></img>
                                {/* <img src={ require('../../../assets/images/find-wallets/buy-by-coin/bitcoin2.svg') } alt="product-logo"></img> */}
                                {/* <h2>{this.state.selectedCoin}</h2> */}
                                <p>{this.state.selectedCoin.name}</p>
                            </div>

                        </div>
                            <button className="gb-read-btn" onClick={this.onClickShowInstruction}>Read instructions<i></i></button>
                        <div className="gb-buyby-read-moreblock">
                            <div className="gb-instruction-body-close-btn">
                                <button type="button" className="btn btn-secondary" onClick={(event) => this.closeInstruction(event)}></button>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1">
                                        {this.showStepInstruction(step)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="gb-buyby-read-moreblock">
                            <div>
                                {this.showStepInstruction(step)}
                            </div>
                        </div> */}
                    </div>
                </div>
            )
        }else{
            return (<div className="col-md-6 offset-md-3">
                    <div className="gb-buy-by-coin-send-box">
                        <div className="gb-send-coin">
                            <img src={ require('../../../assets/images/find-wallets/buy-by-coin/bitcoin.svg') } alt="product-logo"></img>
                            <h2>Please Select Crypto Exchange</h2>
                        </div>
                </div>
            </div>
            )
        }
    }

    showFinalSlide(){

        return(
            <div className="col-md-6 offset-md-3 text-center">
                <div className="gb-congrats-blockimg">
                        <img src={ require('../../../assets/images/thumb.svg') } alt="Thumb"></img>
                </div>
            </div>
        )
    }

    buybycoinSteps(){
        if(this.state.buybycoin.results && this.state.buybycoin.results && this.state.buybycoin.results.steps){
            return  this.state.buybycoin.results.steps.map((step, i) => {
                // if(((this.state.selectedExchange) && (step.name.toLowerCase() !== 'step-1') )){
                    return(
                        <div className="swiper-slide" key={i}>
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    <div className="gb-slider-header-text">
                                        <h2>{"Step "+(i+1)}</h2>
                                        <h1>{step.title.replace(/<selected_coin>/g,this.state.selectedCoin.name).replace(/<selected_crypto_exchange>/g,this.state.selectedCryptoExchange.name).replace(/<selected_exchange>/g,this.state.selectedExchange.name)}</h1>
                                        <p>{step.description.replace(/<selected_coin>/g,this.state.selectedCoin.name).replace(/<selected_crypto_exchange>/g,this.state.selectedCryptoExchange.name).replace(/<selected_exchange>/g,this.state.selectedExchange.name)}
                                        {(step.name.replace('-',' ').toLowerCase() === 'step 5') &&
                                         <span> <GlossaryPopover content="cryptocurrency wallet" />. Use our  <Link to="/wallets/find-wallets">Find a Wallet</Link> Tool to pick the right one for you and make sure that your funds are safe.
                                        </span>
                                        }
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            {(step.name.replace('-',' ').toLowerCase() === 'step 1') && this.listingFiatExchange()}
                            {(step.name.replace('-',' ').toLowerCase() === 'step 2') && this.listingCryptoExchange()}
                            {(step.name.replace('-',' ').toLowerCase() === 'step 3') && this.showTradeForBitcoin(step)}
                            {(step.name.replace('-',' ').toLowerCase() === 'step 4') && this.showTradeForSelectedCoin(step)}
                            {(step.name.replace('-',' ').toLowerCase() === 'step 5') && this.showFinalSlide()}
                            {/* {(this.state.buybycoin.results[0].steps.length == i+1) &&} */}
                                {/* <div className="col-md-6 offset-md-3">
                                    <div className="gb-buy-by-coin-send-box gb-buy-by-coin-change-box">
                                        <div className="gb-send-coin">
                                            <img src={ require('../../../assets/images/find-wallets/buy-by-coin/coinbase.svg') } alt="product-logo"></img>
                                        </div>
                                        <div className="gb-send-from-to-blk">
                                            <div className="gb-send-from-blk">
                                                <img src={ require('../../../assets/images/find-wallets/buy-by-coin/bitcoin.svg') } alt="product-logo"></img>
                                            </div>
                                            <i className="gb-coin-right-arrow"></i>
                                            <div className="gb-send-from-blk">
                                                <img src={ require('../../../assets/images/find-wallets/buy-by-coin/bitcoin2.svg') } alt="product-logo"></img>
                                            </div>
                                        </div>
                                        <button className="gb-read-btn">Read instructions<i></i></button>
                                    </div>
                                </div> */}
                            </div>
                            {window.dispatchEvent(new Event('resize'))}
                        </div>
                    );
                // }
                // else{
                    // return '';
                // }
            });
        }else{
            return(
                <div className="swiper-slide">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="gb-slider-header-text">
                                <h1>{this.state.noResult}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

  }

  export default BuyByCoinModal;