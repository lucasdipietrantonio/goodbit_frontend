import React, { Component } from 'react';
import './Blogdetail.scss';
import { Link } from "react-router-dom";
import * as BlogService from '../../../services/BlogService';

import ShareComponentBlog from '../ShareComponentBlog/ShareComponentBlog';
import moment from 'moment';
import CustomLoader from '../../CustomLoader/CustomLoader';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Blogdetail extends Component {
    state = {
        blog:{
            results:'',
        },
        latest:{
            results:'',
        },
        isLoading:false
    }
    sharelink = window.location.href;

    render() {
        return (
            <React.Fragment>
                <section className="gb-blog-detail-blk">
                    <div className="container">
                            { this.state.blog.results && this.blogDetail()}
                        <div className="gb-latest-blog">
                            <h1 className="gb-latest-blog-title">The Latest</h1>
                            <div className="row">
                                {this.latestBlogShow(this.state.latest.results)}
                            </div>
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
    componentWillMount(){
        this.showBlogDetail(this.props.match.params.slug);
        this.setState({isLoading:true});
    }
    componentDidMount(){
        document.title = "Blog | Goodbit101";
        // this.showBlogDetail();
        this.referralRoute = window.location.href;

    }
    componentWillReceiveProps(nextprops){
        this.showBlogDetail(nextprops.match.params.slug)
    }
    showBlogDetail(slug){
        let body = {
            slug:slug
        }
        this.getBlog(body);
    }
    getBlog(body){
        BlogService
        .getBlog(body)
        .then((res) => {
        this.setState({isLoading:false});

            console.log(res);
            if (res && res.data && res.data.blog) {
                let objBlog = {
                    results: res.data.blog,
                }
                // console.log(objBlog);
                this.setState({blog: objBlog});
                this.setState({url: res.data.displayUrl});
                this.setState({urlProfile: res.data.profileImageUrl});
                this.setState({urlBlogText: res.data.displayUrlBlogText});
            }
            if (res && res.data && res.data.latest) {
                let objLatest = {
                    results: res.data.latest,
                }
                // console.log(objLatest);
                this.setState({latest: objLatest});
            }
        })
        .catch((error) => {
            console.error('getAllBlogs =>', error)
        })
    }
    blogDetail(){
        return(
            <div className="row">
                <div className="col-md-2">
                    <div className="gb-blog-author-main">
                        {/* <h2>{this.state.blog.results.name}<span>{this.state.blog.results.author_detail[0].name}</span></h2> */}
                        <Link to={this.state.blog.results.author_detail[0].isPublished ? '/about/about-profile/'+this.state.blog.results.author_detail[0].id : "#"} className="gb-author-block">
                            <div className="gb-auth-image">
                                <img alt="Author" src={ this.state.blog.results.profile ? this.state.urlProfile+this.state.blog.results.profile.image : ''} onError={(e)=>{e.target.onerror = null; e.target.src=require('../../../assets/images/avatar.png')}}/>
                            </div>
                            <div className="gb-auth-detail">
                                <h3>{this.state.blog.results.author_detail[0].name}</h3>
                                <span>{ moment(this.state.blog.results.updated_at).format("MMMM DD, YYYY")}</span>
                            </div>
                        </Link> 
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="gb-blog-main gb-featured-blog gb-blog-detail-top">
                                <div className="gb-blog-img">
                                <img src={this.state.url+this.state.blog.results.landscape_image}   onError={(e)=>{e.target.onerror = null; e.target.src=require('../../../assets/images/blogs/blog3.png')}}  alt="blog-img"></img>
                                </div>

                                <div className="row">
                                    <div className="col-md-11">
                                        <h1>{this.state.blog.results.title}</h1>
                                        <h2>{this.state.blog.results.category} <span>— { moment(this.state.blog.results.updated_at).format("MMM DD")}</span></h2>
                                        <p dangerouslySetInnerHTML={{__html: this.state.blog.results.overview}}></p>
                                    </div>
                                </div>
                                <div className="gb-blog-detail-bottom">
                                {/* {console.log(this.state.blog.results)}
                                {this.state.blog.results.description.forEach(element => {
                                        <p dangerouslySetInnerHTML={{__html: element.description}}></p>
                                })} */}
                                {this.blogPara(this.state.blog.results.description)}
                                </div>
                                <div className="gb-share-blk">
                                    <h3>Share URL<span id="copyLink">{this.sharelink}</span></h3>
                                    <div className="gb-share-btn">
                                        <button className="gb-blue-btn" onClick={this.onClickCopy} onMouseLeave={(e)=>this.changeText(e,'leave')} >Copy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gb-sticky-social-blk">
                            <div className="gb-sticky-blk">
                                {/* <button className="gb-close-blog"><i></i></button> */}
                                <a className="gb-comment">Comment<i></i></a>
                                <ShareComponentBlog share={this.referralRoute}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    blogPara(descriptions){

       return descriptions.map((blog, i) => {
            return (
                <React.Fragment key={i}>

                    <div dangerouslySetInnerHTML={{__html: blog.description}}></div>

                    { descriptions[i].image &&<img src={this.state.urlBlogText+blog.image}  onError={(e)=>{e.target.onerror = null; e.target.src=require('../../../assets/images/blogs/blog3.png')}}  alt="blog-img"></img>}
                    {/* <div className="gb-blog-img"> */}
                        {/* <h4><i></i>Image courtesy</h4> */}
                        {/* <Link to='/'><i></i>Bloomberg</Link> */}
                        {/* <a href={null}><i></i>Bloomberg</a> */}
                    {/* </div> */}
                </React.Fragment>
            )
        })
    }
latestBlogShow(blog){
    if (blog.length > 0) {
        return (
            <React.Fragment>
                <div className="col-md-6">
                    <Link to={'/blog-detail/'+blog[0].slug}>
                        <div className="gb-blog-main gb-featured-blog">
                            <div className="gb-blog-img">
                                <img src={this.state.url+blog[0].landscape_image}  onError={(e)=>{e.target.onerror = null; e.target.src=require('../../../assets/images/blogs/blog3.png')}}  alt="blog-img"></img>
                            </div>
                            <div className="row">
                                <div className="col-md-11">
                                    <h1>{blog[0].title}</h1>
                                    <h2>{blog[0].category} <span>— {moment(blog[0].created_at).format("MMM DD")}</span></h2>
                                    <p dangerouslySetInnerHTML={{__html: blog[0].overview}}></p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                { blog[1] &&
                    <div className="col-md-6">
                        <Link to={'/blog-detail/'+blog[1].slug}>
                            <div className="gb-blog-main gb-row-blog">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="gb-blog-img">
                                        <img src={this.state.url+blog[1].landscape_image}  onError={(e)=>{e.target.onerror = null; e.target.src=require('../../../assets/images/blogs/blog2.png')}}  alt="blog-img"></img>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-lg-7 offset-lg-1">
                                        <h1>{blog[1].title}</h1>
                                        <h2>{blog[1].category} <span>— {moment(blog[1].created_at).format("MMM DD")}</span></h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        { blog[2] &&
                            <Link to={'/blog-detail/'+blog[2].slug}>
                                <div className="gb-blog-main gb-row-blog">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="gb-blog-img">
                                            <img src={this.state.url+blog[2].landscape_image}  onError={(e)=>{e.target.onerror = null; e.target.src=require('../../../assets/images/blogs/blog2.png')}}  alt="blog-img"></img>
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-lg-7 offset-lg-1">
                                            <h1>{blog[2].title}</h1>
                                            <h2>{blog[2].category} <span>— {moment(blog[2].created_at).format("MMM DD")}</span></h2>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        }
                    </div>
                }
                { blog[3] &&
                    <div className="col-md-6">
                        <Link to={'/blog-detail/'+blog[3].slug}>
                            <div className="gb-blog-main gb-row-blog">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="gb-blog-img">
                                        <img src={this.state.url+blog[3].landscape_image}  onError={(e)=>{e.target.onerror = null; e.target.src=require('../../../assets/images/blogs/blog2.png')}}  alt="blog-img"></img>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-lg-7 offset-lg-1">
                                        <h1>{blog[3].title}</h1>
                                        <h2>{blog[3].category} <span>— {moment(blog[3].created_at).format("MMM DD")}</span></h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        { blog[4] &&
                            <Link to={'/blog-detail/'+blog[4].slug}>
                                <div className="gb-blog-main gb-row-blog">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="gb-blog-img">
                                            <img src={this.state.url+blog[4].landscape_image}  onError={(e)=>{e.target.onerror = null; e.target.src=require('../../../assets/images/blogs/blog2.png')}}  alt="blog-img"></img>
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-lg-7 offset-lg-1">
                                            <h1>{blog[4].title}</h1>
                                            <h2>{blog[4].category} <span>— {moment(blog[4].created_at).format("MMM DD")}</span></h2>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        }
                    </div>
                }
                { blog[5] &&
                    <div className="col-md-6">
                        <Link to={'/blog-detail/'+blog[5].slug}>
                            <div className="gb-blog-main gb-featured-blog">
                                <div className="gb-blog-img">
                                    <img src={this.state.url+blog[5].landscape_image}  onError={(e)=>{e.target.onerror = null; e.target.src=require('../../../assets/images/blogs/blog3.png')}}  alt="blog-img"></img>
                                </div>
                                <div className="row">
                                    <div className="col-md-11">
                                        <h1>{blog[5].title}</h1>
                                        <h2>{blog[5].category} <span>— {moment(blog[5].created_at).format("MMM DD")}</span></h2>
                                        <p dangerouslySetInnerHTML={{__html: blog[5].overview}}></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                }
            </React.Fragment>
        )
    }
    else{
        return (
            <div className="col-md-6">
                <div className="gb-blog-main gb-featured-blog">
                    <div className="row">
                        <div className="col-md-11">
                           <p>No Latest Blog Found</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
    onClickCopy = (event) => {
        var txt = document.getElementById('copyLink').innerText;
        this.copyStringToClipboard(txt);
        this.changeText(event,'click');
    }
    changeText(event,type){
        if(type === 'click'){
            event.target.innerText = "Copied";
        }
        if(type === 'leave'){
            event.target.innerText = "Copy";
        }
        console.log(event.target.innerText);
    }
    copyStringToClipboard = (string) => {
        function handler(event) {
            event.clipboardData.setData('text/plain', string);
            event.preventDefault();
            document.removeEventListener('copy', handler, true);
        }
        document.addEventListener('copy', handler, true);
        document.execCommand('copy');
    }
}

export default Blogdetail;