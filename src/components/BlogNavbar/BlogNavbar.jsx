import React from 'react';
import { Link } from "react-router-dom";
import * as BlogService from '../../services/BlogService';
import './BlogNavbar.scss';
class BlogNavbar extends React.Component{
    state = {
        selectedCategory : "All Topics",
        category : {
            results:[],
            count:[]
        }
    }
    // const onClickToggleClass = (data) => {
    //     // console.log("handleKeyUp"data);
    //     if (data === 'show') {
    //         closeNavbar();
    //     document.getElementById('searchbox').classList.add('gb-search-box-open');
    //     } else {
    //         document.getElementById('searchbox').classList.remove('gb-search-box-open');
    //     }
    // }
    // const onClickToggleNavBar = () => {
    //     // console.log('test');
    //     closeNavbar();
    // }

    // const closeNavbar = () => {
    //     if (document.getElementById('navBarToggler').getAttribute('aria-expanded') === "true") {
    //         document.getElementById('navBarToggler').click();
    //     }
    // }
    // console.log(this);
    render(){
        return (
            <div className="gb-blog-header-bottom">
                <div className="container">
                    <div className="gb-blog-logo">
                        <Link to="/blog">
                            <img src={ require('../../assets/images/blogs/blog-logo.png') } alt='Blog-logo'/>
                        </Link>
                    </div>
                    <div className="gb-blog-menu">
                        <ul>
                            <li className="dropdown">
                                <a className="gb-topbic-btn dropdown-toggle" href="{null}" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.state.selectedCategory}
                                </a>

                                <div className="dropdown-menu gb-blog-dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8 offset-lg-2">
                                                <ul>
                                                    {this.listingCategory()}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        {/* <div className="gb-blog-search">
                            <form action="">
                                <div className="form-group m-0">
                                    <input type="search" placeholder="Search" className="form-control"/>
                                </div>
                            </form>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
    componentWillMount(){
        this.getCategory()
    }
    componentDidMount(){
        let category = window.location.pathname.split('/');
        this.setState({category:category[category.length-1].replace(/-/g," ")});
    }
    componentWillReceiveProps(){
        let category = window.location.pathname.split('/');
        this.setState({selectedCategory:category[category.length-1].replace(/-/g," ")});
    }
    getCategory(){
        BlogService
        .getCategory()
        .then((res) => {
            // console.log(res.data);
            if (res && res.data && res.data.results) {
               let objCategory = {
                   results : res.data.results,
                   count : res.data.count
                }
                this.setState({category: objCategory});
            }
        })
        .catch((error) => {
            console.error('getAllBlogs =>', error)
        })
    }
    listingCategory(){
        if(this.state.category.results){
            return  this.state.category.results.map((cat, i) => {
                return(
                    <li key={i}>
                        <Link className="dropdown-item" to={"/blog/"+cat.value}>
                            {cat.title}
                            <span>{this.state.category.count[i][cat.title]}</span>
                        </Link>
                    </li>
                )
            });
        }
    }
}

export default BlogNavbar;