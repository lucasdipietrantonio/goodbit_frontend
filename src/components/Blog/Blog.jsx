import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Blog.scss';
import * as BlogService from '../../services/BlogService';
import moment from 'moment';
import CustomLoader from '../CustomLoader/CustomLoader';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Blog extends Component {
    state = {
        blog:{
            results:[],
            isShowMore: true
        },
        isLoading:false
    }
    render() {
        return (
            <React.Fragment>
                <section className="gb-blog-blk">
                    <div className="container">
                        <div className="row">
                            {(this.state.blog.results.length !== 0) && this.showBlogs() }
                        </div>
                        <div className="gb-load-more-btn">
                            {this.state.blog.isShowMore &&<button  onClick={() => this.onClickLoadMore()}>Load more<i></i></button>}
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
    componentDidMount(){
        this.onClickLoadMore();
        document.title = "Blog | Goodbit101";
    }
    componentWillReceiveProps(nextProps){
        this.setState({isLoading:true});
        let objblog = {
            results:[],
            isShowMore: true
        };
        this.setState({blog:objblog},function(){
            let body = {
                start: this.state.blog.results.length + 1,
                category:nextProps.match.params.category,
                size:12,
            }
            this.getAllBlogs(body);
        });
    }
    onClickLoadMore(){
        this.setState({isLoading:true});
        let body = {
            start: this.state.blog.results.length + 1,
            category:this.props.match.params.category,
            size:12,
        }
        this.getAllBlogs(body);
    }
    getAllBlogs(body){
        BlogService
        .getAllBlogs(body)
        .then((res) => {
            // console.log(res.data.results);
            if (res && res.data && res.data.results) {
                let objBlog = {
                    results: [...this.state.blog.results,...res.data.results],
                    start : res.data.start,
                    size : res.data.size,
                    total : res.data.total
                }
                objBlog.isShowMore = (objBlog.results.length >= (objBlog.total/6)? false : true);
                this.setState({blog: objBlog});
                this.setState({url: res.data.displayUrl});
                // console.log(objBlog);
            }
            this.setState({isLoading:false});
        })
        .catch((error) => {
            console.error('getAllBlogs =>', error)
        this.setState({isLoading:false});
        })
    }
    showBlogs(){
        if(this.state.blog.results){
            // console.log(this.state.url+blog[0].landscape_image);

            return  this.state.blog.results.map((blog, i) => {
                return(
                    <React.Fragment  key={i}>
                        <div className="col-md-6">
                            <Link to={'/blog-detail/'+blog[0].slug}>
                                <div className="gb-blog-main gb-featured-blog">
                                    <div className="gb-blog-img">
                                        <img src={this.state.url+blog[0].landscape_image}  onError={(e)=>{e.target.onerror = null; e.target.src=require('../../assets/images/blogs/blog3.png')}}  alt="blog-img"></img>
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
                                                <img src={this.state.url+blog[1].landscape_image}  onError={(e)=>{e.target.onerror = null; e.target.src=require('../../assets/images/blogs/blog2.png')}}  alt="blog-img"></img>
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
                                                    <img src={this.state.url+blog[2].landscape_image}  onError={(e)=>{e.target.onerror = null; e.target.src=require('../../assets/images/blogs/blog2.png')}}  alt="blog-img"></img>
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
                                                <img src={this.state.url+blog[3].landscape_image}  onError={(e)=>{e.target.onerror = null; e.target.src=require('../../assets/images/blogs/blog2.png')}}  alt="blog-img"></img>
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
                                                    <img src={this.state.url+blog[4].landscape_image}  onError={(e)=>{e.target.onerror = null; e.target.src=require('../../assets/images/blogs/blog2.png')}}  alt="blog-img"></img>
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
                                            <img src={this.state.url+blog[5].landscape_image}  onError={(e)=>{e.target.onerror = null; e.target.src=require('../../assets/images/blogs/blog3.png')}}  alt="blog-img"></img>
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
                );
            });
        }

    }

    blogDetails(id){
        // console.log(id);
    }
}

export default Blog;