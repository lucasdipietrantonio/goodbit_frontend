import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AboutProfile.scss";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import * as AboutProfileService from '../../../services/AboutProfileService';
class AboutProfile extends Component {
    state = {
        profile : '',
        url : ''
    };
  render() {
    return (
      <div className="gb-about-profile-page">
        <div className="container">
          <div className="bg-about-logo-logo">
            <div className="gb-right-sticky">
              <img
                alt="bitcoin"
                className="gb-about-close"
                src={require("../../../assets/images/about-close.svg")}
                onClick={() => this.onClickClose()}
              />
              <div onClick={()=> this.changeSlide('prev')} className="swiper-button-prev gb-about-swiper-prev" />
              <div onClick={()=> this.changeSlide('next')} className="swiper-button-next gb-about-swiper-next" />
            </div>
          </div>
            <div className="row">
              <div className="col-2">
                <div className="bg-about-logo">
                    <a href="{null}"><img
                    alt="bitcoin"
                    className="gb-color-img"
                    src={require("../../../assets/images/about-logo.svg")}
                  /></a>
                </div>
              </div>
             {/* <div className="col-6">
                 <div className="bg-about-logo">
                  <img
                    alt="bitcoin"
                    className="gb-color"
                    src={require("../../../assets/images/linkdin.png")}
                  />
                  <img
                    alt="bitcoin"
                    className="gb-color-color"
                    src={require("../../../assets/images/twitter.png")}
                  />
                </div>
              </div>*/}
            </div>
          <div className="gb-about-profile-swiper-container swiper-container">
            <div className="swiper-wrapper">
              {/* slide 1 */}
                {this.slideData()}
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentWillMount(){
      this.aboutProfiles();
  }
  componentDidMount() {
    document.title = 'About Profile | Goodbit101'

    // aboutProfileSwiper.activeIndex = 2
  }
  initSwiper(index){
    //   console.log(index);
      // eslint-disable-next-line
    let aboutProfileSwiper = new Swiper(".gb-about-profile-swiper-container", {
        slidesPerView: 1,
        initialSlide:index,
        navigation: {
          nextEl: ".gb-about-swiper-next",
          prevEl: ".gb-about-swiper-prev"
        },
        on: {
          init: function () {
              setTimeout(() => {
                  window.dispatchEvent(new Event('resize'));
              }, 100);
          },
        }
      });
  }
  onClickClose() {
    // console.log("this.props.history => ", this.props.history);

    if (this.props.history.length > 1) {
        this.props.history.goBack();
    } else {
        this.props.history.replace('/about');
    }
  }
  changeSlide(type){
        // console.log(this.props.history);
        let id = this.props.match.params.id;
        if(type === 'prev' && id > 0)
        {
            id = --id;
        }
        if(type === 'next')
        {
            id = ++id;
        }
        // window.location.href = '/about/about-profile/'+id;
        // this.props.history.location.pathname=';
  }
    aboutProfiles(){
        AboutProfileService.getProfiles()
        .then((res) => {
        //  console.log('getProfiles response',res.data);
        let objProfile = [];
        let index = 0;
            if (res && res.data && res.data.results) {
                for(let i=0;res.data.results.length > i ;i++)
                {
                    if(res.data.results[i].profile != null){
                        objProfile.push(res.data.results[i]);
                        // eslint-disable-next-line
                        if(this.props.match.params.id == res.data.results[i].id){
                            index = i;
                        }
                    }
                }
                // console.log(this.props.match.params.id);
                this.setState({profile: objProfile});
                this.setState({url: res.data.displayUrl});
                this.initSwiper(index);
                // console.log("pops",this.props);
            }
        })
        .catch((error) => {
            console.error('About Profile =>', error)
        })
    }
  slideData(){
    if(this.state.profile){
        return  this.state.profile.map((about, i) => {
            return(
                <div className="swiper-slide" id={"about_"+about.id} key={about.id}>
                    <div className="gb-about-social-block">
                        <div className="container'">
                            <div className="row">
                                <div className="col-md-6 offset-md-2">
                                    <div className="gb-about-social-inner">
                                        {this.link(about.links)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gb-detals">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <div className="row">
                                <div className="col-md-8 order">
                                    <div className="gb-box">
                                    <h3>
                                        <span className="gb-span">{about.name}</span> {about.profile.title}
                                    </h3>
                                    </div>
                                    <div className="gb-details-details">
                                    <h4>
                                        {about.profile.description}
                                    </h4>
                                    </div>
                                    <div className="gb-blog">
                                    <Link to={"/blog/by-author/"+about.id}>
                                        <img
                                        alt="bitcoin"
                                        className="gb-color-color-color "
                                        src={require("../../../assets/images/right-arrow.svg")}
                                        />
                                        View blog post
                                    </Link>
                                    </div>
                                </div>
                                <div className="col-md-4 gb-profile-img-main">
                                    <div className="gb-box-box">
                                    <div className="gb-about-img">
                                        <img
                                        alt={about.name}
                                        src={this.state.url+about.profile.image}
                                        />
                                    </div>
                                    <div className="gb-box-details">
                                        <h3>{about.name}</h3>
                                        <h2>{about.profile.designation}</h2>
                                    </div>
                                    <div className="gb-link">
                                        {/* <a href="{null}"> */}
                                        <a href={"mailto:"+about.email}>
                                        <img
                                            alt="contact"
                                            className="gb-color-color-color"
                                            src={require("../../../assets/images/right-arrow.svg")}
                                        />
                                        Contact
                                        </a>
                                        {/* </a> */}
                                    </div>
                                    </div>
                                </div>
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
  link(links){
    if(links.length > 0){
        // eslint-disable-next-line
        return  links.map((link, i) => {
            if(link.name === 'linkedin'){
                return (
                    <a href={link.link} key={i}>
                        <img alt="Linkedin" className="gb-color-linkdin" src={require("../../../assets/images/social/linkedin-icon.svg")} />
                    </a>
                )
            }
            if(link.name === "twitter"){
                return (
                    <a href={link.link} key={i}>
                        <img alt="twitter" className="gb-color-color" src={require("../../../assets/images/social/twitter-icon.svg")} />
                    </a>
                )
            }
        });
    }
    // else{
    //    return (
    //        <React.Fragment>
    //            <a>
    //                 <img alt="twitter" className="gb-color-color" src={require("../../../assets/images/twitter.png")} />
    //             </a>
    //             <a>
    //                 <img alt="Linkedin" className="gb-color-linkdin" src={require("../../../assets/images/member-linkdin.png")} />
    //             </a>
    //        </React.Fragment>
    //    )
    // }
}
}

export default AboutProfile;
