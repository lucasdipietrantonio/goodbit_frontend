import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./SearchResult.scss";
import * as GlossaryService from '../../services/GlossaryService'

class SearchResult extends Component {
    state = {
        search_term : this.props.match.params.query,
        search_results : {
            results : []
        }
     }
    render() {
        return (
            <React.Fragment>
                 <section className="gb-search-block">
                    <div className="container">
                        <div className="gb-search-content">
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    <div className="gb-search-inner-box">
                                        <div className="gb-search-form">
                                            <div className="form-group">
                                                <input className="form-control" type="search" placeholder="Search Goodbit" id="result-search-box"  value={this.state.search_term} onChange={(event) => this.onChangeSearchResult(event)}/>
                                                <button className="gb-search-close" type="button"></button>
                                            </div>
                                        </div>
                                        <div className="gb-search-result">
                                            {this.showSearchPage()}
                                            {this.showSearchBlog()}
                                            {/* <Link to="{null}" className="gb-search-result-row">
                                                <div className="gb-search-result-left">
                                                    <img src={require('../../assets/images/dollar-icon.svg')} className="gb-left" alt="Money" />
                                                </div>
                                                <div className="gb-search-result-detail">
                                                    <label className="money-text" htmlFor="">MONEY 101</label>
                                                    <h2>The Future of Money</h2>
                                                    <span className="gb-breadcrumb">LEARN / BASICS / MONEY 101</span>
                                                </div>
                                            </Link> */}
                                            {/* <Link to="{null}" className="gb-search-result-row">
                                                <div className="gb-search-result-left">
                                                    <img src={require('../../assets/images/money/future-icon-menu.svg')} className="gb-left" alt="Future" />
                                                </div>
                                                <div className="gb-search-result-detail">
                                                    <label className="future-text" htmlFor="">the future 101</label>
                                                    <h2>Should we continue down this road?</h2>
                                                    <span className="gb-breadcrumb">LEARN / BASICS / MONEY 101</span>
                                                </div>
                                            </Link> */}
                                        </div>
                                        <div className="gb-invention-block">
                                            <div className="gb-invention-title">
                                                <img src={require('../../assets/images/terms-glossary.svg')} className="gb-left" alt="terms-glossary" />
                                                <span>TERMS GLOSSARY</span>
                                            </div>
                                            {this.showSearchGlossary()}
                                            {/* <div className="gb-invention-detail">
                                                <h2>Invention</h2>
                                                <p>noun<br></br> a digital ledger in which transactions made in bitcoin or another cryptocurrency are recorded chronologically and publicly.</p>
                                                <span className="gb-breadcrumb">LEARN / TERMS GLOSSARY</span>
                                            </div> */}
                                        </div>
                                        <div className="gb-nosearch-found text-left">
                                            <span> <img src={require('../../assets/images/smile-icon.png')} className="gb-left gb-nerd-img" alt="no-result" /> That’s it! <Link to="{null}">Search for something else</Link></span>
                                        </div>
                                        <div className="gb-nosearch-found d-none text-center">
                                            <span> <img src={require('../../assets/images/no-result.svg')} className="gb-left" alt="no-result" /> No results found!  <Link to="{null}">Search for something else</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </section>
            </React.Fragment>
         );
    }
    componentWillMount(){
        this.setState({search_term:this.props.match.params.query});
    }
    componentDidMount(){
        document.title = "SearchResults | Goodbit101";
        let body = {
            search : this.state.search_term
        }
            this.getSearchResult(body);
    }
    componentDidUpdate(){
        //
        document.onkeydown = (e) => {
            if(e.keyCode === 13 && this.state.search_term){
                this.props.history.push({
                    pathname: '/search-result/'+this.state.search_term
                });
            }
        };
    }
    onChangeSearchResult(event){
        this.eventValue = event.target.value;
        this.setState({search_term:event.target.value});
        event.target.onkeydown = (e) => {
            if(e.keyCode === 13 && this.eventValue){
                let body = {
                    search : this.state.search_term
                }
                this.getSearchResult(body)
            }
        };
    }
    getSearchResult(body){
        // console.log(body);
        GlossaryService
        .searchGlossaryData(body)
        .then((res) => {
            if (res && res.data && res.data.result) {
                let objSearch = {
                    results: res.data.result,
                    total : res.data.total
                }
                this.setState({search_results: objSearch});
            }
        })
        .catch((error) => {
            console.error('searchGlossaryData =>', error)
        })
    }
    showSearchGlossary(){
        if(this.state.search_results.results && this.state.search_results.results.glossary){
            return  this.state.search_results.results.glossary.map((result, i) => {
                return (
                    <div className="gb-invention-detail" key={i}>
                        <h2>{result.title}</h2>
                        <p>{result.type}<br></br> {result.description}</p>
                        { result.link  && <span className="gb-breadcrumb"> <a href={result.link} target="_blank" rel="noopener noreferrer" >Learn More </a></span>}
                    </div>
                )
            });
        }
    }
    showSearchBlog(){
        if(this.state.search_results.results && this.state.search_results.results.blog){
            return  this.state.search_results.results.blog.map((result, i) => {
                return (
                    <Link to={'/blog-detail/'+result.slug} className="gb-search-result-row" key={i}>
                        <div className="gb-search-result-left">
                        <img src={""+this.state.url+result.landscape_image}  onError={(e)=>{e.target.onerror = null; e.target.src=require('../../assets/images/blogs/blog2.png')}}  alt="blog-img"></img>
                        </div>
                        <div className="gb-search-result-detail">
                            <label className="future-text" htmlFor="">{result.category}</label>
                            <h2>{result.title}</h2>
                            <span className="gb-breadcrumb"> BLOG </span>
                        </div>
                    </Link>
                )
            });
        }
    }
    showSearchPage(){
        if(this.state.search_results.results && this.state.search_results.results.pages){
            return  this.state.search_results.results.pages.map((result, i) => {
                return (
                    <Link to={result.link} className="gb-search-result-row" key={i}>
                        <div className="gb-search-result-left">
                        <img src={""+this.state.url+result.landscape_image}  onError={(e)=>{e.target.onerror = null; e.target.src=require('../../assets/images/blogs/blog2.png')}}  alt="blog-img"></img>
                        </div>
                        <div className="gb-search-result-detail">
                            <label className={result.page.replace(' 101','').toLowerCase()+"-text"} htmlFor="">{result.page}</label>
                            <h2>{result.value}</h2>
                            <span className="gb-breadcrumb"> {result.path.toUpperCase()} </span>
                        </div>
                    </Link>
                )
            });
        }
    }
}

export default SearchResult;