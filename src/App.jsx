import React, { Component } from "react";

import {
  Router,
  Route,
  Switch
  // Redirect
} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import "./App.scss";

import AskusAnything from "./components/AskusAnything/AskusAnything";
import BlogNavbar from "./components/BlogNavbar/BlogNavbar";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import CustomLoader from "./components/CustomLoader/CustomLoader"
import Navbar from "./components/Navbar/Navbar";
import NotFound404 from "./components/NotFound404/NotFound404";
import Wallets from "./components/Wallets/Wallets";
import FindWallets from "./components/Wallets/FindWallets/FindWallets";

// about
import About from "./components/About/About";
import AboutProfile from "./components/About/AboutProfile/AboutProfile";

// learn
import TermsGlossary from "./components/Learn/TermsGlossary/TermsGlossary";

import Money101 from "./components/Learn/Money101/Money101";
import Bitcoin101 from "./components/Learn/Bitcoin101/Bitcoin101";
import Blockchain101 from "./components/Learn/Blockchain101/Blockchain101";
import Ethereum101 from "./components/Learn/Ethereum101/Ethereum101";
import Future101 from "./components/Learn/Future101/Future101";

import Mining from "./components/Learn/InDepth/Mining/Mining";
import SmartContracts from "./components/Learn/InDepth/SmartContracts/SmartContracts";
import HistoryPage from "./components/Learn/InDepth/HistoryPage/HistoryPage";
import ProofOf from "./components/Learn/InDepth/ProofOf/ProofOf";
import Scalability from "./components/Learn/InDepth/Scalability/Scalability";
import DigitalAssets from "./components/Learn/InDepth/DigitalAssets/DigitalAssets";
import Privacy from "./components/Learn/InDepth/Privacy/Privacy";
import Nodes from "./components/Learn/InDepth/Nodes/Nodes";
import Forks from "./components/Learn/InDepth/Forks/Forks";
import FiatCurrency from "./components/Learn/InDepth/FiatCurrency/FiatCurrency";
import ICOS from "./components/Learn/InDepth/ICOS/ICOS";
import Cryptography from "./components/Learn/InDepth/Cryptography/Cryptography";
import Basics from './components/Basics/Basics';

// blog
import Blog from "./components/Blog/Blog";
import AuthorBlog from "./components/Blog/AuthorBlog/AuthorBlog";
import Blogdetail from "./components/Blog/Blogdetail/Blogdetail";
import Toaster from "./components/Toaster/Toaster";

import StartHere from "./components/StartHere/StartHere";
import ThankYou from "./components/ThankYou/ThankYou";

import * as CommanService from './services/CommanService';
import * as GlossaryService from './services/GlossaryService';
import BuyByCoin from "./components/Invest/BuyByCoin/BuyByCoin";

// import ComingSoon from "./components/Invest/ComingSoon/ComingSoon";

import BuyCrypto from "./components/Invest/BuyCrypto/BuyCrypto";
import SendReceiveCrypto from "./components/Wallets/SendReceiveCrypto/SendReceiveCrypto";
import WhatIsWallet from "./components/Wallets/WhatIsWallet/WhatIsWallet";

import SearchResult from "./components/SearchResult/SearchResult";

import TermsOfServices from "./components/TermsOfServices/TermsOfServices";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsGlossaryDetail from "./components/Learn/TermsGlossary/TermsGlossaryDetail/TermsGlossaryDetail";

import LicenseContent from "./components/LicenseContent/LicenseContent";

const history = createBrowserHistory();

class App extends Component {
    unlisten;
    toastUnlisten;
    state = {
        routeName : window.location.pathname.includes("/about/about-profile") ? '/about/about-profile' :  window.location.pathname ,
        blogRoute : (window.location.pathname === "/blog" || window.location.pathname.includes("/blog/") ) ? '/blog' : window.location.pathname,
        toaster: {
            type:'',
            msg:'',
            isShowToast:false
        }
    }
    render() {
    return (
      <Router history={history}>
        <React.Fragment>
            <Toaster toaster={this.state.toaster} />
            {/* onChange={(type) => this.onChange(type)} */}
            {/* <button onClick={() => this.showToast()} className="btn btn-block btn-primary">SHOW TOAST</button> */}
            {this.state.routeName !== '/about/about-profile' && <Navbar history={history} />}
            {this.state.blogRoute === '/blog' && <BlogNavbar />}
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/Loader" component={CustomLoader} />

                {/* about routes */}
                <Route exact path="/about" component={About} />
                <Route exact path="/about/about-profile/:id" component={AboutProfile} />

                {/* Learn routes starts */}
                <Route exact path="/learn/terms-glossary" component={TermsGlossary} />
                <Route exact path="/learn/terms-glossary/:alphabates" component={TermsGlossary} />
                    {/* Basics routes */}
                <Route exact path="/learn/money-101" component={Money101} />
                <Route exact path="/learn/bitcoin-101" component={Bitcoin101} />
                <Route exact path="/learn/blockchain-101" component={Blockchain101} />
                <Route exact path="/learn/ethereum-101" component={Ethereum101} />
                <Route exact path="/learn/future-101" component={Future101} />
                    {/* In Depth routes */}
                <Route exact path="/learn/mining" component={Mining} />
                <Route exact path="/learn/smart-contracts" component={SmartContracts} />
                <Route exact path="/learn/history" component={HistoryPage} />
                <Route exact path="/learn/proof-of" component={ProofOf} />
                <Route exact path="/learn/scalability" component={Scalability} />
                <Route exact path="/learn/digital-assets" component={DigitalAssets} />
                <Route exact path="/learn/privacy" component={Privacy} />
                <Route exact path="/learn/nodes" component={Nodes} />
                <Route exact path="/learn/forks" component={Forks} />
                <Route exact path="/learn/fiat-currency" component={FiatCurrency} />
                <Route exact path="/learn/icos" component={ICOS} />
                <Route exact path="/learn/cryptography" component={Cryptography} />
                {/* Learn routes ends */}
                {/* Invest Routes start */}
                <Route exact path="/invest/buy-by-coin" component={BuyByCoin} />
                {/* <Route exact path="/invest/buy-by-coin" component={ComingSoon} /> */}

                {/* Invest Routes end */}

                <Route exact path="/wallets" component={Wallets} />
                <Route exact path="/wallets/find-wallets" component={FindWallets} />
                <Route exact path="/ask-us-anything" component={AskusAnything} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/blog/:category" component={Blog} />
                <Route exact path="/blog/by-author/:authorId" component={AuthorBlog} />
                <Route exact path="/blog-detail/:slug" component={Blogdetail} />

                <Route exact path="/basics" component={Basics} />
                <Route exact path="/start-here" component={StartHere} />
                <Route exact path="/thank-you" component={ThankYou} />

                <Route exact path="/invest/buy-crypto" component={BuyCrypto} />
                <Route exact path="/wallets/send-receive-crypto" component={SendReceiveCrypto} />
                <Route exact path="/wallets/what-is-wallet" component={WhatIsWallet} />
                <Route exact path="/search-result/:query" component={SearchResult} />

                <Route exact path="/terms-of-services" component={TermsOfServices} />
                <Route exact path="/privacy-policy" component={PrivacyPolicy} />

                <Route exact path="/learn/terms-glossary/terms-glossary-detail/:term" component={TermsGlossaryDetail} />

                <Route exact path="/license-content" component={LicenseContent} />

                <Route component={NotFound404} />
            </Switch>
            <Footer />
        </React.Fragment>
      </Router>
    );
  }
componentWillMount(){
    this.getAllGlossary();
}
  componentDidMount() {

    this.unlisten = history.listen((location, action) => {
        // location is an object like window.location
        // console.log(action, location);
        document.body.classList.remove('gb-open-mobile-menu');
        let path;
        let blogPath;
        if (location.pathname.includes('/about/about-profile')) {
            path = '/about/about-profile';
        }
        if(location.pathname === "/blog" || location.pathname.includes('/blog/') ){
            blogPath = '/blog';
        }
        this.setState({blogRoute :blogPath});
        this.setState({routeName :path});
        this.onChangeRoute();
    });

    // console.log('componentDidMount => gone');
    this.toastUnlisten = document.addEventListener("showToast", (e) => {
        // console.log('addEventListener' ,e.detail);

        let toasterObj = JSON.parse(JSON.stringify(this.state.toaster));
        toasterObj.type = e.detail.type
        toasterObj.msg = e.detail.msg
        toasterObj.isShowToast = e.detail.isShowToast;
        this.setState({toaster:toasterObj});

        setTimeout(() => {
            // toasterObj.type = '';
            // toasterObj.msg = '';
            toasterObj.isShowToast = false;
            this.setState({toaster:toasterObj});
        }, 3000);
    });

  }
  componentWillUnmount() {
      this.unlisten();
      this.toastUnlisten();
  }
  getAllGlossary(){
    GlossaryService.getGlossaryData();
  }

  onChangeRoute() {
    // setTimeout(() => {
        window.scrollTo(0,0);
    // }, 1);
  }
  showToast() {
    CommanService.showToaster('success','wow');
  }

}

export default App;
