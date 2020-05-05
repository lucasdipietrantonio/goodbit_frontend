import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./About.scss";
import * as AboutProfileService from '../../services/AboutProfileService';
import * as ContactusService from '../../services/ContactusService';
import * as CommanService from '../../services/CommanService';
class About extends Component {
  state = {
            profile : '',
            url : '',
            contactFormLoader : false
        };
  clearAboutRecaptchaTimout;
    render() {
        return (
            <div>
                <section className="gb-about-page">
                <div className="container">
                    <div className="gb-about-details">
                    {/* <a href="{null}" className="gb-playbtn">why start goodbit?</a> */}
                    {/* <Link to="#" className="gb-playbtn">why start goodbit?</Link> */}
                    </div>
                    <div className="gb-about-title">
                    <h2>The barriers for entry to cryptocurrency are huge</h2>
                    </div>
                    <div className="gb-about-paregraph">
                    <h3>Do a Google search for "Bitcoin", and suddenly you're hit with terms like "cryptographic hashing function" and "Byzantine fault tolerance"</h3>
                    </div>
                    <div className="gb-profile">
                    <img alt="bitcoin" className="gb-color-img" src={require("../../assets/images/about-banner.svg")} />
                    <img alt="bitcoin" className="gb-color-img-mobile" src={require("../../assets/images/about-1-mobile.svg")} />
                    </div>
                </div>
                </section>
                <section className="gb-about-desc">
                <div className="gb-main1">
                <img alt="bitcoin" className="gb-color-img1" src={require("../../assets/images/about-main-top-mobile.svg")} />
                </div>
                <div className="gb-main-main">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-1">
                        <div className="gb-about-desc-details">
                            <p>This is a problem we, the founders of Goodbit, experienced too. We were friends and undergraduates at Brown University. We got together one night to discuss cryptocurrency and realized there was a lack of clear, engaging, educational content in the crypto-space.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 offset-md-7">
                        <div className="gb-about-desc-details">
                            <div className="gb-desc-details">
                            <h2>So we decided to make a change.</h2>
                            <p>We created <span className="godbit-span">Goodbit</span> with the goal of being the resource we wish we'd had when we were learning about cryptocurrency and blockchain.
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="gb-main">
                    <img alt="bitcoin" className="gb-color-img" src={require("../../assets/images/about-2.png")} />
                    <img alt="bitcoin" className="gb-color-img2" src={require("../../assets/images/about-main-mobile.svg")} />
                </div>
                <div className="gb-gray-bg">
                    <div className="gb-team">
                    <div className="container">
                        <div className="gb-member">
                        <h2>Meet the Team</h2>
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                            <p>We are three undergraduate students from Brown University who are passionate about decentralized technologies. We have been interested (and invested) in various cryptocurrencies since early 2013.
                        </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="gb-member-pic">
                    <div className="container">
                        <div className="gb-member-image">
                        <div className="row">
                            <div className="col-md-3 offset-md-3 col-6">
                                {this.profileLeftData()}
                            </div>
                            <div className="col-md-3 col-6 gb-right-member-blk">
                                {this.profileRightData()}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section className="gb-contect">
                <div className="container">
                    <div className="gb-content-form">
                        <div className="row">
                            <div className="col-md-4 offset-md-3">
                            <h3>CONTACT US</h3>
                            <h2>Questions, comments, or concerns?</h2>
                            <h4>Please submit your info and a Goodbit team member will follow up with you as soon as possible. Have a simple question? <Link className="check" to="/ask-us-anything">Check out our FAQ</Link></h4>
                            </div>
                        </div>
                        <form onSubmit={(e) => this.onClickAboutContactSubmit(e)} id="contactForm">
                            <div className="row">
                            <div className="form-group col-md-3 offset-md-3">
                                <label>Name <span>*</span></label>
                                <input type="text" required ref="contactName" className="form-control" placeholder="eg., Satoshi Nakamoto"/>
                            </div>
                            </div>
                            <div className="row">
                            <div className="form-group col-md-3 offset-md-3">
                                <label>Email <span>*</span></label>
                                <input type="email" required ref="contactEmail" className="form-control" placeholder="eg.,email@email.com"/>
                            </div>
                            </div>
                            <div className="row">
                            <div className="form-group col-md-6 offset-md-3">
                                <label>What's up?<span>*</span></label>
                                <textarea required ref="contactDescription" placeholder="What's up?"></textarea>
                            </div>
                            </div>
                            <div className="row">
                            <div className="form-group col-md-6 offset-md-3">

                                {/* <Recaptcha />  */}
                                <div className="d-inline-block border-danger" id="gAboutRecaptcha" data-sitekey=""></div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="form-group col-md-6 offset-md-3">
                                <button type="submit" className="gb-ask-submit" disabled={this.state.contactFormLoader}>
                                    Submit
                                    {this.state.contactFormLoader && <i className="ml-2 fa fa-spinner fa-spin"></i>}
                                </button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
                </section>
            </div>
        );
    }
    componentDidMount() {
        document.title = 'About Us | Goodbit101'
        this.aboutReCaptcha();
        this.aboutProfiles();
    }
    componentWillUnmount() {
        clearTimeout(this.clearAboutRecaptchaTimout)
    }
    aboutReCaptcha(){
        if ((window.grecaptcha) && (window.grecaptcha.render)) {
            window.grecaptcha.render('gAboutRecaptcha', {
                'sitekey' : '6LdjnHAUAAAAAGle3SM_k7e2LBZFkzydSavW0Zjq',
                // 'callback' : this.correctCaptcha()
            });
        }else{
           this.clearAboutRecaptchaTimout =  setTimeout(() => {
                this.aboutReCaptcha();
            }, 500);
        }
    }
    aboutProfiles(){
        AboutProfileService.getProfiles()
        .then((res) => {
        //  console.log('getProfiles response',res.data);
         let objProfile = [];
            if (res && res.data && res.data.results) {
                let objRight =[];
                let objLeft = []
                for(let i=0;res.data.results.length > i ;i++)
                {
                    if(res.data.results[i].profile != null){
                        if(i % 2 === 0){
                            objRight.push(
                                res.data.results[i],
                            )
                        }
                        else{
                            objLeft.push(
                                res.data.results[i]
                            )
                        }
                    }
                }
                objProfile.push(objLeft);
                objProfile.push(objRight);
                if(objProfile[0].length < objProfile[1].length){
                    objProfile[0].push(
                        "joinus"
                    )
                }else{
                    objProfile[1].push(
                        "joinus"
                    )
                }

                this.setState({profile: objProfile});
                this.setState({url: res.data.displayUrl});
                // console.log(this.state);
            }
        })
        .catch((error) => {
            console.error('getCQ =>', error)
        })
    }

    profileLeftData(){

        if(this.state.profile[1]){
            return  this.state.profile[1].map((about, i) => {
                if(about !== "joinus"){
                return(
                    <div className="box-1 box" key={i}>
                        <div className="gb-team-photo">
                            <img alt={about.name} className="gb-color-img" src={this.state.url+about.profile.image} />
                        </div>
                        <h3>{about.name}</h3>
                        <h4>{about.profile.designation}
                            {/* {this.link(about.links)} */}
                        </h4>
                        {/* <a href="{null}"> */}
                            <Link to={"/about/about-profile/"+about.id} className="gb-about-mebtn">
                            <img alt="bitcoin" className="gb-arrow" src={require("../../assets/images/_member-arrow.png")} />About me
                        </Link>
                        {/* </a> */}
                    </div>
                );
                }
                else{
                    return(
                        <div className="box-4 box" key={i}>
                            <div className="gb-team-photo">
                                <img alt="bitcoin" className="gb-color-img" src={require("../../assets/images/come-here.gif")} />
                            </div>
                            <h3>Do you align with our mission?</h3>
                            {/* <a href="{null}">Join us</a> */}
                            <Link to="#" onClick={() => this.openContact()}>Join us</Link>
                        </div>
                    )
                }
            });
        }


    }

    profileRightData(){
        if(this.state.profile[0]){
            return  this.state.profile[0].map((about, i) => {
                if(about !== "joinus"){
                return(
                    <div className="box-1 box" key={i}>
                        <div className="gb-team-photo">
                            <img alt="bitcoin" className="gb-color-img" src={this.state.url+about.profile.image} />
                        </div>
                        <h3>{about.name}</h3>
                        <h4>{about.profile.designation}
                            {/* {this.link(about.links)} */}
                        </h4>
                        {/* <a href="{null}"> */}
                            <Link to={"/about/about-profile/"+about.id} className="gb-about-mebtn">
                            <img alt={about.name} className="gb-arrow" src={require("../../assets/images/_member-arrow.png")} />About me
                        </Link>
                        {/* </a> */}
                    </div>
                );
                }
                else{
                    return(
                        <div className="box-4 box" key={i}>
                            <div className="gb-team-photo">
                                <img alt="bitcoin" className="gb-color-img" src={require("../../assets/images/come-here.gif")} />
                            </div>
                            <h3>Do you align with our mission?</h3>
                            {/* <a href="{null}">Join us</a> */}
                            <Link to="#" onClick={() => this.openContact()}>Join us</Link>
                        </div>
                    )
                }
            });
        }
    }
    openContact() {
        document.body.classList.add("gb-contact-body");
        setTimeout(() => {
            document.body.classList.add("gb-contact-overlay");
        }, 300);
    }
    onClickAboutContactSubmit(e){
        e.preventDefault();
        let contactDetail = {
            name:this.refs.contactName.value,
            email:this.refs.contactEmail.value,
            description:this.refs.contactDescription.value
        }

        if (window.grecaptcha.getResponse() === ""){
            let element = document.getElementById('gAboutRecaptcha');
            element.classList.add('border');
            setTimeout(() => {
                element.classList.remove('border');
            }, 500);
            return;
        }
        this.submitAboutContactReaquest(contactDetail);
    }
    submitAboutContactReaquest(contactDetail) {
        // console.log(question);
        this.setState({contactFormLoader:true});

        ContactusService
        .contactRequest(contactDetail)
        .then((res) => {
            this.setState({contactFormLoader:false});
            CommanService.showToaster('success',"Thank you. Your request has been submitted");
            // console.log('this.submitQuestion then => ', res);
            document.getElementById("contactForm").reset();
            window.grecaptcha.reset();
        })
        .catch((error) => {
            this.setState({contactFormLoader:false});
            console.error('contactRequest =>', error)
        });
    }
    link(links){
        // if(links.length > 0){
        //     // eslint-disable-next-line
        //     return  links.map((link, i) => {
        //         if(link.name === 'linkedin'){
        //             return (
        //                 <a href={'https://'+link.link} key={i}>
        //                     <img alt="Linkedin" className="gb-color-linkdin" src={require("../../assets/images/member-linkdin.png")} />
        //                 </a>
        //             )
        //         }
        //     });
        // }
        // else{
        //    return <img alt="Linkedin" className="gb-color-linkdin" src={require("../../assets/images/member-linkdin.png")} />
        // }
    }
}

export default About;
