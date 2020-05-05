import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './AskusAnything.scss';
import FAQ from './FAQ/FAQ';
import CommunityQuestions from './CommunityQuestions/CommunityQuestions';
import SearchQuestion from './SearchQuestion/SearchQuestion';
import * as AskUsAnythingService from '../../services/AskUsAnythingService';
import * as SearchQuestionService from '../../services/SearchQuestionService';
import * as CommanService from '../../services/CommanService';
import CustomLoader from '../CustomLoader/CustomLoader';
class AskusAnything extends Component {
    searchBox;
    clearRecaptchaTimout;
     state = {
            faq:{
                results:[],
                isShowMore: true
            },
            cq:{
                results:[],
                isShowMore: true
            },
            search:{
                results:[],
                isShowMore: true
            },
            filter:{
                cq:{
                    order:"newest",
                    orderText:"Sort By"
                },
                search:{
                    topic:"all",
                    topicText:"All Topics",
                    order:"newest",
                    orderText:"Sort By",
                    query:''
                }
            },
            isLoading:true,
            msgCount:300,
            questionFormLoader:false
        }

    render() {
        return (
            <React.Fragment>
                <section className="gb-ask-detail-main text-center">
                    <div className="container">
                        <h1>Answers</h1>
                        <p>Get answers to your questions for free — from the <span>Goodbit</span> team.</p>
                    </div>
                </section>
                <section className="gb-faq-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="gb-faq-left">
                                            <h2>Frequently Asked Questions</h2>
                                            <div className="gb-scroll-blk">
                                                <div className="gb-chat-main clearfix">
                                                    <h3>Click to open</h3>
                                                    <FAQ faq = {this.state.faq}  onClickFaqQuestion={(index,type) => this.onClickFaqQuestion(index,type)}  onClickFaqClose={(index,type) => this.onClickFaqClose(index,type)}/>

                                                    {/* <div className="gb-chat gb-chat-opacity">
                                                        <p>Should I use Blockchain?</p>
                                                    </div> */}
                                                </div>
                                                {this.state.faq.isShowMore && <button className="gb-show-more-btn" onClick={() => this.onClickShowMoreFAQ()}>Show more<i></i></button>}
                                            </div>
                                            <h2 className="second-title">Community Questions</h2>
                                            <div className="btn-group gb-ask-dropdown">
                                                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                   {this.state.filter.cq.orderText}
                                                </button>
                                                <div className="dropdown-menu">
                                                    <ul>
                                                        <li>
                                                            <a onClick={(event) => this.changeFilter('newest','','cq')}>Newest</a>
                                                            {/* <Link to="#">Lorem</Link> */}
                                                        </li>
                                                        <li>
                                                            <a onClick={(event) => this.changeFilter('oldest','','cq')}>Oldest</a>
                                                            {/* <Link to="#">Lorem</Link> */}
                                                        </li>
                                                        {/* <li> */}
                                                            {/* <a href="{null}">Lorem</a> */}
                                                            {/* <Link to="#">Lorem</Link> */}
                                                        {/* </li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="gb-scroll-blk">
                                                <div className="gb-chat-main gb-chat-comm-main clearfix">
                                                    <h3>Click to open</h3>
                                                    <CommunityQuestions cq = {this.state.cq}  onClickCqQuestion={(index,type) => this.onClickCqQuestion(index,type)}  onClickCqClose={(index,type) => this.onClickCqClose(index,type)}/>
                                                    {/* <div className="gb-chat">
                                                        <div className="gb-like-chat">
                                                            <p>Who invented Blockchain and why?</p>
                                                            <div className="gb-like-blk">10<i></i></div>
                                                        </div>
                                                    </div> */}
                                                </div>
                                                {this.state.cq.isShowMore && <button className="gb-show-more-btn" onClick={() => this.onClickShowMoreCQ()}>Show more<i></i></button>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="gb-faq-right">
                                            <div className="gb-faq-right-blk">
                                                <form>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="searchBox" onKeyPress={(event) => this.onKeyPressSearchBox(event)}  placeholder="Search questions"></input>
                                                    </div>
                                                </form>
                                                <div className="btn-group gb-ask-dropdown">
                                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false">
                                                        {this.state.filter.search.orderText}
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <ul>
                                                            <li>
                                                                <a onClick={(event) => this.changeFilter('newest',this.state.filter.search.topic,'search')}>Newest</a>
                                                                {/* <Link to="#">Lorem</Link> */}
                                                            </li>
                                                            <li>
                                                                <a onClick={(event) => this.changeFilter('oldest',this.state.filter.search.topic,'search')}>Oldest</a>
                                                                {/* <Link to="#">Lorem</Link> */}
                                                            </li>
                                                            {/* <li> */}
                                                                {/* <a href="{null}">Lorem</a> */}
                                                                {/* <Link to="#">Lorem</Link> */}
                                                            {/* </li> */}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="btn-group gb-ask-dropdown gb-alltopics-dropdown">
                                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false">
                                                        {this.state.filter.search.topicText}
                                                        {/* All topics 'blockchain', 'cryptocurrency', 'wallets','mining' */}
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <ul>
                                                            <li>
                                                                <a onClick={(event) => this.changeFilter(this.state.filter.search.order,'all','search')}>All topics</a>
                                                                {/* <Link to="#">Lorem</Link> */}
                                                            </li>
                                                            <li>
                                                                <a onClick={(event) => this.changeFilter(this.state.filter.search.order,'blockchain','search')}>Blockchain</a>
                                                                {/* <Link to="#">Lorem</Link> */}
                                                            </li>
                                                            <li>
                                                                <a onClick={(event) => this.changeFilter(this.state.filter.search.order,'cryptocurrency','search')}>Cryptocurrency</a>
                                                                {/* <Link to="#">Lorem</Link> */}
                                                            </li>
                                                            <li>
                                                                <a onClick={(event) => this.changeFilter(this.state.filter.search.order,'wallets','search')}>Wallets</a>
                                                                {/* <Link to="#">Lorem</Link> */}
                                                            </li>
                                                            <li>
                                                                <a onClick={(event) => this.changeFilter(this.state.filter.search.order,'mining','search')}>Mining</a>
                                                                {/* <Link to="#">Lorem</Link> */}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="gb-scroll-blk">
                                                <div className="gb-chat-main gb-chat-main-search clearfix">
                                                    {/* <h3>Click to open</h3> */}
                                                        <SearchQuestion search = {this.state.search}  onClickSearchQuestion={(index,type) => this.onClickSearchQuestion(index,type)}  onClickSearchClose={(index,type) => this.onClickSearchClose(index,type)}/>
                                                    </div>
                                                </div>
                                                {/* <div className="gb-line-blk"></div> */}
                                                <div className="gb-dont-see-blk">
                                                    <h2>Don’t see your question?</h2>
                                                    {/* <a href="#gb-ask-form-main"><i></i>Write one!</a> */}
                                                    <button onClick={()=>this.scrollToForm()}><i></i>Write one!</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="gb-ask-main" id="gb-ask-form-main">
                    <div className="container">
                        <div className="gb-ask-form-blk">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <h1>Don’t see your question?<span>Just ask!</span></h1>
                                </div>
                            </div>
                            <form className="row" onSubmit={(e) => this.onClickSubmitQuestion(e)} id="questionForm">
                                <div className="form-group col-md-3 offset-md-3">
                                    <label htmlFor="questionFormName">Name <span>*</span></label>
                                    <input type="text" className="form-control" id="questionFormName" name="questionFormName" aria-describedby="emailHelp" placeholder="Your name" required ref="questionFormName" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="questionFormEmail">Email <span>*</span></label>
                                    <input type="email" className="form-control" id="questionFormEmail" name="questionFormEmail" aria-describedby="emailHelp" placeholder="name@gmail.com" required ref="questionFormEmail" />
                                </div>
                                <div className="form-group col-md-6 offset-md-3">
                                    <input type="text" className="form-control" id="questionFormSubject" name="questionFormSubject" aria-describedby="emailHelp" placeholder="Subject" required ref="questionFormSubject" />
                                </div>
                                <div className="form-group col-md-6 offset-md-3">
                                    <textarea className="form-control" onChange ={(e) => this.onChangeQuestionTextArea(e)} name="questionFormText" style={{resize: 'none'}} placeholder="Type your question" required ref="questionFormText"></textarea>
                                    <h2>{this.state.msgCount}</h2>
                                </div>
                                <div className="form-group col-md-6 offset-md-3">

                                {/* <Recaptcha />  */}
                                   <div className=" d-inline-block border-danger" id="gRecaptcha" data-sitekey=""></div>
                                 </div>
                                <div className="form-group col-md-6 offset-md-3">
                                    <button type="submit" className="gb-ask-submit" disabled={this.state.questionFormLoader}>
                                        Submit
                                        {this.state.questionFormLoader && <i className="ml-2 fa fa-spinner fa-spin"></i>}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <ReactCSSTransitionGroup
                    transitionName="customloader"
                    transitionEnterTimeout={1}
                    transitionLeaveTimeout={300}>
                {this.state.isLoading && <CustomLoader />}
                </ReactCSSTransitionGroup>
            </React.Fragment>
        );
    }

    componentDidMount() {
        // console.log('gone');
        document.title = 'Ask Us Anything | Goodbit101'
        this.reCaptcha();
        this.getAllQuestionAns();
        this.searchBox = document.getElementById('searchBox');

        document.getElementById('searchBox').addEventListener('keyup', this.debounce(() => {
            this.searchForResult(this.searchBox.value);
        }, 500));
    }
    // correctCaptcha (response) {
    //     console.log(response);

    // };
    scrollToForm(){
        let element = document.getElementById('gb-ask-form-main');
        element.scrollIntoView({behavior: 'smooth',block:'start'});
    }
    reCaptcha(){
        if ((window.grecaptcha) && (window.grecaptcha.render)) {
            window.grecaptcha.render('gRecaptcha', {
                'sitekey' : '6LdjnHAUAAAAAGle3SM_k7e2LBZFkzydSavW0Zjq',
                // 'callback' : this.correctCaptcha()
            });
        }else{
           this.clearRecaptchaTimout =  setTimeout(() => {
                this.reCaptcha();
            }, 500);
        }
    }
    componentWillUnmount() {
        clearTimeout(this.clearRecaptchaTimout)
        // if(document.getElementById('searchBox')) {
            document.getElementById('searchBox').removeEventListener('keyup',this.searchForResult);
        // }
    }
    //Change Filter
    changeFilter(order,topic,origin){
        let filterCopy = JSON.parse(JSON.stringify(this.state.filter));

        if(origin === "search") {
            filterCopy.search.order = order;
            filterCopy.search.topic = topic;
            if(topic === "all"){
                filterCopy.search.topicText = "All Topics"
            }
            else{
                filterCopy.search.topicText = topic.replace(/\b\w/g, function(l){ return l.toUpperCase() })
            }
            filterCopy.search.orderText = order.replace(/\b\w/g, function(l){ return l.toUpperCase() })
            this.setState({filter:filterCopy},function(){
                this.searchForResult(this.state.filter.search.query)
            });
        }
        if(origin === "cq"){
            filterCopy.cq.order = order;
            filterCopy.cq.orderText = order.replace(/\b\w/g, function(l){ return l.toUpperCase() })
            this.setState({filter:filterCopy},() =>{
                let body = {
                    start:0,
                    size:this.state.cq.results.length,
                    order: this.state.filter.cq.order
                };
                this.orderCq(body);
            });
        }
    }
    orderCq(body){

        AskUsAnythingService.getCQ(body)
        .then((res) => {
         // console.log('getCQ response',res);
            if (res && res.data && res.data.results) {
                let objCq = {
                    results: res.data.results,
                    start : res.data.start,
                    size : res.data.size,
                    total : res.data.total
                }

                objCq.isShowMore = (objCq.results.length >= objCq.total ? false : true);
                this.setState({cq: objCq});
            }
        })
        .catch((error) => {
            console.error('getCQ =>', error)
        })
    }
    onKeyPressSearchBox(event){
        if(event.charCode === 13) {
            event.preventDefault()
        }
    }

    searchForResult(query) {
        let body = {
            start  : 0,
            size   : 10,
            search : query,
            order  : this.state.filter.search.order,
            topic  : this.state.filter.search.topic
        };
        let filter= JSON.parse(JSON.stringify(this.state.filter))
        filter.search.query = query;
        this.setState({filter:filter})

        SearchQuestionService
        .getSearch(body)
        .then((res) => {
            if (res && res.data && res.data.results) {
                let objSearch = {
                    results: res.data.results,
                    start : res.data.start,
                    size : res.data.size,
                    total : res.data.total
                }

                objSearch.isShowMore = (objSearch.results.length >= objSearch.total ? false : true);
                // console.log(res.data.results);
                this.setState({search: objSearch});
            }
        })
        .catch((error) => {
            // console.error('searchForResult =>', error)
        })
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

    getAllQuestionAns() {
        let body = {
            start:0,
            size:5,
            order: this.state.filter.cq.order

        };
        this.getFAQ(body);
        this.getCQ(body);
    }

    onClickShowMoreFAQ() {
        let body = {
            start: this.state.faq.results.length + 1,
            size:5
        };
        this.getFAQ(body);
    }

    onClickShowMoreCQ() {
        let body = {
            start: this.state.cq.results.length + 1,
            size:5,
            order: this.state.filter.cq.order
        };
        this.getCQ(body);
    }

    getFAQ(body) {
        this.setState({isLoading:true});
        AskUsAnythingService
        .getFAQ(body)
        .then((res) => {
            if (res && res.data && res.data.results) {
                let objFaq = {
                    results: [...this.state.faq.results,...res.data.results],
                    start : res.data.start,
                    size : res.data.size,
                    total : res.data.total
                }

                objFaq.isShowMore = (objFaq.results.length >= objFaq.total ? false : true);
                // console.log(objFaq);
                this.setState({faq: objFaq});
            }
            this.setState({isLoading:false});
        })
        .catch((error) => {
            console.error('getFAQ =>', error)
            this.setState({isLoading:false});
        })
    }

    getCQ(body) {
        this.setState({isLoading:true});
        AskUsAnythingService
        .getCQ(body)
        .then((res) => {
            // console.log('getCQ response',res);
            if (res && res.data && res.data.results) {
                let objCq = {
                    results: [...this.state.cq.results,...res.data.results],
                    start : res.data.start,
                    size : res.data.size,
                    total : res.data.total
                }

                objCq.isShowMore = (objCq.results.length >= objCq.total ? false : true);
                // console.log(objCq);
                this.setState({cq: objCq});
                this.setState({isLoading:false});
            }
        })
        .catch((error) => {
            console.error('getCQ =>', error)
            this.setState({isLoading:false});
        })
    }

    onClickSubmitQuestion(e) {
        e.preventDefault();
        // console.log(e);
        let question = {
            email:this.refs.questionFormEmail.value,
            question:this.refs.questionFormText.value,
            name:this.refs.questionFormName.value,
            subject:this.refs.questionFormSubject.value
            // _method:'POST'
        }

        if (window.grecaptcha.getResponse() === ""){
            let element = document.getElementById('gRecaptcha');
            element.classList.add('border');
            setTimeout(() => {
                element.classList.remove('border');
            }, 500);
            return;
        }
        this.submitQuestion(question);
    }

    submitQuestion(question) {
        // console.log(question);
        this.setState({questionFormLoader:true});
        this.setState({isLoading:true});

        AskUsAnythingService
        .submitQuestion(question)
        .then((res) => {
            this.setState({questionFormLoader:false});
            // console.log('this.submitQuestion then => ', res);
            CommanService.showToaster('success',"Thank you. Your question has been submitted");
            document.getElementById("questionForm").reset();
            window.grecaptcha.reset();
            this.setState({isLoading:false});

        })
        .catch((error) => {
            this.setState({questionFormLoader:false});
            this.setState({isLoading:false});

            console.error('getFAQ =>', error)
        });
    }

    onChangeQuestionTextArea(event) {
        // console.log(event.target.value);
        this.setState({msgCount: 300 - (event.target.value).length})

    }
    // faq questions functions
    onClickFaqQuestion = (index,type) => {
        // console.log(index,type);
        this.state.faq.results.map((question) => {
            question.isOpacity = false;
            question.isVisible = false;
            return question;
        });
        // eslint-disable-next-line
        this.state.faq.results[index].isVisible = true;
        // eslint-disable-next-line
        this.state.faq.results[index].isOpacity = true;
        this.setState({faq: this.state.faq});
    }

    onClickFaqClose = (index,type) => {
        // eslint-disable-next-line
        this.state.faq.results[index].isVisible = false;
        // eslint-disable-next-line
        this.state.faq.results[index].isOpacity = false;
        this.setState({faq: this.state.faq});
        // console.log(this.state.faq.results);
    }
    // Search questions functions
    onClickSearchQuestion = (index,type) => {
        // console.log(index,type);
        this.state.search.results.map((question) => {
            question.isOpacity = false;
            question.isVisible = false;
            return question;
        });
        // eslint-disable-next-line
        this.state.search.results[index].isVisible = true;
        // eslint-disable-next-line
        this.state.search.results[index].isOpacity = true;
        this.setState({search: this.state.search});
    }

    onClickSearchClose = (index,type) => {
        // eslint-disable-next-line
        this.state.search.results[index].isVisible = false;
        // eslint-disable-next-line
        this.state.search.results[index].isOpacity = false;
        this.setState({search: this.state.search});
        // console.log(this.state.faq.results);
    }

    // community questions functions
    onClickCqQuestion = (index,type) => {
        // console.log(index,type);
        this.state.cq.results.map((question) => {
            question.isOpacity = false;
            question.isVisible = false;
            return question;
        });
        // eslint-disable-next-line
        this.state.cq.results[index].isVisible = true;
        // eslint-disable-next-line
        this.state.cq.results[index].isOpacity = true;
        this.setState({cq: this.state.cq});
    }

    onClickCqClose = (index,type) => {
        // eslint-disable-next-line
        this.state.cq.results[index].isVisible = false;
        // eslint-disable-next-line
        this.state.cq.results[index].isOpacity = false;
        this.setState({cq: this.state.cq});
        // console.log(this.state.faq.results);
    }

}

export default AskusAnything;