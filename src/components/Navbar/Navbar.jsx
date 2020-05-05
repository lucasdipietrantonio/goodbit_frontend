import React from 'react';
import { Link } from "react-router-dom";
import './navbar.scss';
class Navbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          linkLearnActive: false,
          linkAboutActive: false,
          linkWalletActive: false,
          linkInvestActive: false,
          basicActive: false,
          inDepthActive: false,
          width: window.innerWidth
      };
    }
    onMouseOverMenuItem = (id) => {
        document.getElementById(id).click();
    }
    onMouseOutMenuItem = (id) => {
        let parent = document.getElementById(id +'Parent');
        let hasClass = parent.classList.contains('show');
        if(hasClass){
            document.getElementById(id).click();
        }

    }
    hasClass(ele,cls) {
        return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
    }

    openContact() {
        document.body.classList.add("gb-contact-body");
        setTimeout(() => {
            document.body.classList.add("gb-contact-overlay");
        }, 300);
    }
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    //   document.body.addEventListener('click', this.handleBodyClick.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
        document.body.removeEventListener('click', this.handleBodyClick);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    mouseEnterLearnLink(e) {
        e.preventDefault();
        if(this.state.width > 991 ){
            this.setState({basicActive: true});
            this.setState({inDepthActive: true});
        }
        this.setState({linkLearnActive: true});
    }
    mouseLeaveLearnLink(e) {
        e.preventDefault();
        this.setState({linkLearnActive: false});
    }
    mouseEnterBasic(e) {
        e.preventDefault();
        this.setState({basicActive: true});
    }
    mouseLeaveinDepth(e) {
        e.preventDefault();
        this.setState({inDepthActive: true});
    }
    mouseEnterinDepth(e) {
        e.preventDefault();
        this.setState({inDepthActive: true});
    }
    mouseLeaveBasic(e) {
        e.preventDefault();
        this.setState({inDepthActive: true});
    }
    mouseEnterAboutLink(e) {
        e.preventDefault();
        this.setState({linkAboutActive: true});
    }
    mouseLeaveAboutLink(e) {
        e.preventDefault();
        this.setState({linkAboutActive: false});
    }
    mouseEnterWalletLink(e) {
        e.preventDefault();
        this.setState({linkWalletActive: true});
    }
    mouseLeaveWalletLink(e) {
        e.preventDefault();
        this.setState({linkWalletActive: false});
    }
    mouseEnterInvestLink(e) {
        e.preventDefault();
        this.setState({linkInvestActive: true});
    }
    mouseLeaveInvestLink(e) {
        e.preventDefault();
        this.setState({linkInvestActive: false});
    }
    clickLearnLink(e){
        e.preventDefault();
        this.setState(prevState => ({
            linkLearnActive: !prevState.linkLearnActive
        }));
        // console.log("learn click",e);
        //   this.setState({inDepthActive: false});
        //   this.setState({basicActive: false});
        this.setState({linkAboutActive: false});
        this.setState({linkWalletActive: false});
        this.setState({linkInvestActive: false});
    }
    clickBasic(e){
        e.preventDefault();
        if(this.state.width <= 991 ){
            this.setState(prevState => ({
                basicActive: !prevState.basicActive
            }));
            this.setState({inDepthActive: false});
        }
    }
    clickinDepth(e){
        //   console.log(e);
        e.preventDefault();
        if(this.state.width <= 991 ){

            this.setState(prevState => ({
            inDepthActive: !prevState.inDepthActive
            }));
            this.setState({basicActive: false});
        }
    }

    clickAboutLink(e){
        e.preventDefault();
        this.setState(prevState => ({
        linkAboutActive: !prevState.linkAboutActive
        }));
        this.setState({linkLearnActive: false});
        this.setState({linkInvestActive: false});
        this.setState({linkWalletActive: false});

    }

    clickWalletLink(e){
        e.preventDefault();
        this.setState(prevState => ({
        linkWalletActive: !prevState.linkWalletActive
        }));
        this.setState({linkLearnActive: false});
        this.setState({linkAboutActive: false});
        this.setState({linkInvestActive: false});
    }


    clickInvestLink(e){
        e.preventDefault();
        this.setState(prevState => ({
        linkInvestActive: !prevState.linkInvestActive
        }));
        this.setState({linkLearnActive: false});
        this.setState({linkAboutActive: false});
        this.setState({linkWalletActive: false});
    }


    handleBodyClick() {
        this.setState({linkLearnActive: false});
        this.setState({linkAboutActive: false});
        this.setState({linkInvestActive: false});
        this.setState({linkWalletActive: false});
    }
    openMobileMenu(){
        if(this.hasClass(document.body,'gb-open-mobile-menu')){
            document.body.classList.remove("gb-open-mobile-menu");
        }else{
            document.body.classList.add("gb-open-mobile-menu");
        }
    }
    onClickToggleClass(data){
        // console.log("handleKeyUp"data);
        if (data === 'show') {
            if (document.getElementById('navBarToggler').getAttribute('aria-expanded') === "true") {
                document.getElementById('navBarToggler').click();
            }
            document.getElementById('searchbox').classList.add('gb-search-box-open');
        } else {
            document.getElementById('searchbox').classList.remove('gb-search-box-open');
        }
    }
    globalContentSearch(event){
        this.eventValue = event.target
        document.onkeydown = (e) => {
           if(e.keyCode === 13 && this.eventValue.value){
               let search = this.eventValue.value;

               this.searchGlossaryData(search)
           }
        };
    }

    searchGlossaryData(search){
        // GlossaryService
        // .searchGlossaryData(body)
        // .then((res) => {
        //     console.log(res);
            this.routeChange('/search-result/'+search,search)
        // })
        // .catch((error) => {
        //     console.error('searchGlossaryData =>', error)
        // })
    }
    routeChange(path,search){
        this.props.history.push({
                pathname: path
            }
        );
    }
    //   debounce = (func, delay) => {
    //         let debounceTimer
    //         return function() {
    //             const context = this
    //             const args = arguments
    //                 clearTimeout(debounceTimer)
    //                     debounceTimer
    //                 = setTimeout(() => func.apply(context, args), delay)
    //         }
    //     }
    renderLearn(condition){
        return (
            <React.Fragment>
            <button className={condition ? "nav-link dropdown-toggle show" : "nav-link dropdown-toggle"} onClick={(event)=>this.clickLearnLink(event)} to="#" id="learnNavbarDropdown">
                Learn
            </button>
            {(condition)?
                <div className="dropdown-menu show">
                    <div className="gb-dropdown">
                        <div className="gb-menu-left">
                            <ul>
                                <li className="dropdown" onClick={(event)=>this.clickBasic(event)} >
                                    {this.renderBasic(this.state.basicActive)}
                                </li>
                            </ul>
                        </div>
                        <div className="gb-menu-right">
                            <ul className="gb-dropmenu-title">
                                <li className="dropdown" onClick={(event)=>this.clickinDepth(event)} >
                                    {this.renderinDepth(this.state.inDepthActive)}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="gb-terms-menu clearfix">
                        <Link to="/learn/terms-glossary"><i className="gb-terms-icon"></i>Terms Glossary</Link>
                    </div>
                </div>
                : ''
            }
            </React.Fragment>
        );
    }
    renderBasic(condition){
    return(
        <React.Fragment>
            <button className={condition ? "nav-link dropdown-toggle show" : "nav-link dropdown-toggle"} id="basicsNavbarDropdown">
                Basics
            </button>
            {(condition) ?
                <div className="dropdown-menu show">
                    <ul className="gb-basic-menu">
                        <li>
                            <Link className="gb-money-menu" to="/learn/money-101">
                                <i className="gb-money-icon"></i>
                                <span>Money 101</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="gb-coin-menu" to="/learn/bitcoin-101">
                                <i className="gb-coin-icon"></i>
                                <span>Bitcoin 101</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="gb-chain-menu" to="/learn/blockchain-101">
                                <i className="gb-chain-icon"></i>
                                <span>Blockchain 101</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="gb-ethereum-menu" to="/learn/ethereum-101">
                                <i className="gb-ethereum-icon"></i>
                                <span>Ethereum 101</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="gb-future-menu" to="/learn/future-101">
                                <i className="gb-future-icon"></i>
                                <span>The Future 101</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            :
            ''
            }

        </React.Fragment>
    )
    }
    renderinDepth(condition){
    return(
        <React.Fragment>
            <button className={condition ? "nav-link dropdown-toggle show" : "nav-link dropdown-toggle"} id="basicsNavbarDropdown">
                In Depth
            </button>
            {(condition) ?
                <div className="dropdown-menu show">
                    <ul className="gb-basic-menu">
                        <li><Link to="/learn/history">History</Link></li>
                        <li><Link to="/learn/mining">Mining</Link></li>
                        <li><Link to="/learn/cryptography">Cryptography</Link></li>
                        <li><Link to="/learn/proof-of">Proof of...</Link></li>
                        <li><Link to="/learn/scalability">Scalability</Link></li>
                        <li><Link to="/learn/smart-contracts">Smart Contracts</Link></li>
                    </ul>
                    <ul className="gb-basic-menu show">
                        <li><Link to="/learn/nodes">Nodes</Link></li>
                        <li><Link to="/learn/fiat-currency">Fiat Currency</Link></li>
                        <li><Link to="/learn/digital-assets">Digital Assets</Link></li>
                        <li><Link to="/learn/forks">Forks</Link></li>
                        <li><Link to="/learn/privacy">Privacy</Link></li>
                        <li><Link to="/learn/icos">ICO’s</Link></li>
                    </ul>
                </div>
            :
            ''
            }

        </React.Fragment>
    )
    }
    renderInvest(condition){
        return(
            <React.Fragment>
                <button className={condition ? "nav-link dropdown-toggle show" : "nav-link dropdown-toggle"} id="investNavbarDropdown">
                    Invest
                </button>
                {(condition)?
                    <div className="dropdown-menu gb-submenu-block show">
                        <div className="gb-dropdown">
                            <div className="gb-menu-title">
                                <h3>Invest</h3>
                            </div>
                            <ul>
                                <li>
                                    <Link className="dropdown-item" to="/invest/buy-crypto">
                                        <i className="gb-howto-icon"></i>
                                        <div className="gb-submenu-block-right">
                                            <h2>How to: Buy Crypto</h2>
                                            <h3>A step-by-step guide</h3>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item gb-blue-item" to="/invest/buy-by-coin">
                                        <i className="gb-buy-by-icon"></i>
                                        <div className="gb-submenu-block-right">
                                            <h2>Buy By Coin<sup>Tool</sup></h2>
                                            <h3>Buy <i>any</i> Cryptocurrency you want, with ease</h3>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    : ''
                }
            </React.Fragment>
        )
    }
    renderWallet(condition){
        return(
            <React.Fragment>
                <button className={condition ? "nav-link dropdown-toggle show" : "nav-link dropdown-toggle"} id="walletNavbarDropdown">
                    Wallets
                </button>
                {(condition)?
                    <div className="dropdown-menu gb-submenu-block show">
                        <div className="gb-dropdown">
                            <div className="gb-menu-title">
                                <h3>Wallets</h3>
                            </div>
                            <ul>
                                <li>
                                    <Link className="dropdown-item" to="/wallets/what-is-wallet">
                                        <i className="gb-wallet-icon"></i>
                                        <div className="gb-submenu-block-right">
                                            <h2>What is a wallet?</h2>
                                            <h3>How to store Cryptocurrency</h3>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/wallets/send-receive-crypto">
                                        <i className="gb-send-receive-icon"></i>
                                        <div className="gb-submenu-block-right">
                                            <h2>How to send &amp; <br></br> receive crytpo</h2>
                                            <h3>A step-by-step guide</h3>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item gb-blue-item" to="/wallets/find-wallets">
                                        <i className="gb-find-wallet-icon"></i>
                                        <div className="gb-submenu-block-right">
                                            <h2>Find a Wallet<sup>Tool</sup></h2>
                                            <h3>Find the best wallet for storing your Crypto</h3>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    : ''
                }
            </React.Fragment>
        )
    }
    renderAbout(condition){
        return(
            <React.Fragment>
                <button className={condition ? "nav-link dropdown-toggle show" : "nav-link dropdown-toggle"} id="aboutNavbarDropdown">
                    About
                </button>
                {(condition)?
                    <div className="dropdown-menu dropdown-menu-about show">
                        <div className="gb-dropdown">
                            <div className="gb-about-submenu">
                                <ul>
                                    <li>
                                        <Link className="gb-about-us-link" to="/about">
                                            <i className="gb-about-us-icon"></i>
                                            <div className="gb-about-right">
                                                <h2>About Us</h2>
                                                <h3>Our mission & team.</h3>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="gb-about-us-link" to="/license-content">
                                            <i className="gb-licence-icon"></i>
                                            <div className="gb-about-right">
                                                <h2>License Content</h2>
                                                <h3>Use our content legally.</h3>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        {this.contactus()}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    : ''
                }
            </React.Fragment>
        )
    }
    contactus(){
        return(
            <Link className="gb-about-us-link" to="#" onClick={() => this.openContact()}>
                <i className="gb-contact-icon"></i>
                <div className="gb-about-right">
                    <h2>Contact Us</h2>
                    <h3>Feel free to reach out.</h3>
                </div>
            </Link>
        )
    }
    render() {
        const { width } = this.state;
        const isMobile = width <= 991;

        return (
            <React.Fragment>
                {(isMobile)?
                    <header className="gb-header">
                        <nav className="navbar navbar-expand-lg gb-navbar">
                            <div className="container">
                                <div className="gb-header-top">
                                    <div className="gb-logo">
                                        <Link className="navbar-brand" to="/">
                                            <img src={ require('../../assets/images/goodbit-logo.svg') } alt='goodbit logo'/>
                                        </Link>
                                    </div>
                                    <div className="gb-head-top-right">
                                        <div className="gb-search-box" id="searchbox">
                                            <input type="search"  className="form-control" placeholder="Search" onChange={(event) => this.globalContentSearch(event)} />
                                            <button className="gb-search-btn d-block d-sm-block d-md-none d-lg-none d-xl-none" type="button" onClick={() => this.onClickToggleClass('show')}>
                                                <i className="gb-search-icon"></i>
                                            </button>
                                            <div className="gb-mobile-search">
                                                <input type="search" className="form-control" placeholder="Search" onChange={(event) => this.globalContentSearch(event)} />
                                                <button className="gb-close-btn" onClick={() => this.onClickToggleClass('hide')}   type="button">
                                                    <i className="gb-close-icon"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <ul className="gb-social-icon">
                                            <li>
                                                <a href="https://www.facebook.com/Goodbit-467077723813775/" target="_blank" rel="noopener noreferrer">
                                                    <i className="fb-icon"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/Goodbit101" target="_blank" rel="noopener noreferrer">
                                                    <i className="twitter-icon"></i>
                                                </a>
                                            </li>

                                        </ul>
                                        <button className="navbar-toggler collapsed" id="navBarToggler" onClick={() => this.openMobileMenu()} type="button">
                                            <span className="gb-toggle-icon"></span>
                                            <span className="gb-toggle-icon"></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="gb-menu">
                                    <div className="gb-head-start">
                                        <Link to="/start-here" className="gb-start-btn">Start Here <i className="gb-right-arrow"></i></Link>
                                    </div>
                                    <div className="collapse navbar-collapse gb-collapse justify-content-between" id="navbarSupportedContent">
                                        <ul className="navbar-nav gb-navbar-nav">
                                            <li className="nav-item dropdown">
                                                {this.renderLearn(this.state.linkLearnActive)}
                                            </li>
                                            <li className="nav-item dropdown" onClick={this.clickInvestLink.bind(this)}>
                                                {this.renderInvest(this.state.linkInvestActive)}
                                            </li>
                                            <li className="nav-item dropdown" onClick={this.clickWalletLink.bind(this)}>
                                                {this.renderWallet(this.state.linkWalletActive)}
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/ask-us-anything">
                                                    Ask us anything
                                                </Link>
                                            </li>
                                        </ul>
                                        <ul className="navbar-nav gb-navbar-nav">
                                            <li className="nav-item dropdown" onClick={this.clickAboutLink.bind(this)}>
                                                {this.renderAbout(this.state.linkAboutActive)}
                                            </li>
                                            <li className="nav-item">
                                                <Link  className="nav-link gb-blog-btn" to='/blog'>
                                                    Blog
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                :
                    <header className="gb-header">
                        <nav className="navbar navbar-expand-lg gb-navbar">
                            <div className="container">
                                <div className="gb-header-top">
                                    <div className="gb-logo">
                                        <Link className="navbar-brand" to="/">
                                            <img src={ require('../../assets/images/goodbit-logo.svg') } alt='goodbit logo'/>
                                        </Link>
                                    </div>
                                    <div className="gb-head-top-right">
                                        <div className="gb-search-box" id="searchbox">
                                            <input type="search"  className="form-control" placeholder="Search" onChange={(event) => this.globalContentSearch(event)} />

                                            <button className="gb-search-btn d-block d-sm-block d-md-none d-lg-none d-xl-none" type="button"><i className="gb-search-icon"></i></button>

                                            <button className="gb-search-btn d-none d-sm-none d-md-block d-lg-block d-xl-block"  type="button"><i className="gb-search-icon"></i></button>
                                            <div className="gb-mobile-search">
                                                <input type="search" className="form-control" placeholder="Search" onChange={(event) => this.globalContentSearch(event)} />
                                                <button className="gb-close-btn" type="button"><i className="gb-close-icon"></i></button>
                                            </div>
                                        </div>
                                        <ul className="gb-social-icon">
                                            <li>
                                                <a href="https://www.facebook.com/Goodbit-467077723813775/" target="_blank" rel="noopener noreferrer">
                                                    <i className="fb-icon"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/Goodbit101" target="_blank" rel="noopener noreferrer">
                                                    <i className="twitter-icon"></i>
                                                </a>
                                            </li>
                                        </ul>
                                        <button className="navbar-toggler collapsed" id="navBarToggler" type="button">
                                            <span className="gb-toggle-icon"></span>
                                            <span className="gb-toggle-icon"></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="gb-menu">
                                    <div className="gb-head-start">
                                        <Link to="/start-here" className="gb-start-btn">Start Here <i className="gb-right-arrow"></i></Link>
                                    </div>
                                    <div className="collapse navbar-collapse gb-collapse justify-content-between" id="navbarSupportedContent">
                                        <ul className="navbar-nav gb-navbar-nav">
                                            <li className="nav-item dropdown" onMouseEnter={this.mouseEnterLearnLink.bind(this)} onMouseLeave={this.mouseLeaveLearnLink.bind(this)}>
                                                {this.renderLearn(this.state.linkLearnActive)}
                                            </li>
                                            <li className="nav-item dropdown" onMouseEnter={this.mouseEnterInvestLink.bind(this)} onMouseLeave={this.mouseLeaveInvestLink.bind(this)}>
                                                {this.renderInvest(this.state.linkInvestActive)}
                                            </li>
                                            <li className="nav-item dropdown" onMouseEnter={this.mouseEnterWalletLink.bind(this)} onMouseLeave={this.mouseLeaveWalletLink.bind(this)}>
                                                {this.renderWallet(this.state.linkWalletActive)}
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/ask-us-anything">
                                                    Ask us anything
                                                </Link>
                                            </li>
                                        </ul>
                                        <ul className="navbar-nav gb-navbar-nav">
                                            <li className="nav-item dropdown" onMouseEnter={this.mouseEnterAboutLink.bind(this)} onMouseLeave={this.mouseLeaveAboutLink.bind(this)}>
                                                {this.renderAbout(this.state.linkAboutActive)}
                                            </li>
                                            <li className="nav-item">
                                                <Link  className="nav-link gb-blog-btn" to='/blog'>
                                                    Blog
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                }
            </React.Fragment>
        )
    }
}
export default Navbar;