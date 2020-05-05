import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Contact.scss';
import * as ContactusService from '../../services/ContactusService';
import * as CommanService from '../../services/CommanService';

class Contact extends Component {
    state = {
        contactFormLoader : false
    };
    contact_reCaptcha;
    render() {
      return (
        <div className="gb-contact-block">
            <div className="gb-contact-right">
                <div className="gb-contact-title">
                    <h1>Contact Us</h1>
                    <button onClick={()=> this.closeContact()} type="button" className="gb-close-btn">Close</button>
                </div>
                <div className="gb-contact-desc clearfix">
                    <div className="gb-contact-inner-block">
                        <p>Please submit your info and a Goodbit team member will follow up with you as soon as possible. Have a simple question? <Link to="/ask-us-anything" onClick={()=> this.closeContact()}>Check out our FAQ</Link></p>
                    </div>
                </div>
                <form className="gb-contact-form" id="contactForm" onSubmit={(e) => this.onClickContactSubmit(e)}>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="">Name <span>*</span></label>
                                <input type="text" required ref="contactName" className="form-control" placeholder="e.g.,Satoshi Nakamoto" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="">Email <span>*</span></label>
                                <input type="email" required ref="contactEmail" className="form-control" placeholder="name@email.com" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">What's up? <span>*</span></label>
                        <textarea className="form-control" required ref="contactDescription" placeholder="What's up?"></textarea>
                    </div>
                    <div className="form-group">
                        {/* <Recaptcha />  */}
                        <div className="d-inline-block border-danger" id="contact-gRecaptcha" data-sitekey=""></div>
                    </div>
                    <div className="gb-contact-send-block">
                        <button className="gb-contact-sendbtn" type="submit">Send <i className="gb-right-arrow" disabled={this.state.contactFormLoader}></i>
                            {this.state.contactFormLoader && <i className="ml-2 fa fa-spinner fa-spin"></i>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
      );
    }

    componentDidMount() {
      // console.log(this.props);
      this.reCaptcha()
    }

    componentWillReceiveProps() {
      // console.log("componentWillReceiveProps =>", this.props.toaster);
    }

    componentWillUnmount() {
        clearTimeout(this.clearcontactRecaptchaTimout)
    }

    componentDidUpdate(prevProps, prevState) {
      // console.log(prevProps, prevState);
    }
    reCaptcha(){
        if ((window.grecaptcha) && (window.grecaptcha.render)) {
            this.contact_reCaptcha = window.grecaptcha.render('contact-gRecaptcha', {
                'sitekey' : '6LdjnHAUAAAAAGle3SM_k7e2LBZFkzydSavW0Zjq',
                // 'callback' : this.correctCaptcha()
            });
        }else{
           this.clearcontactRecaptchaTimout =  setTimeout(() => {
                this.reCaptcha();
            }, 500);
        }
    }
    onClickContactSubmit(e){
        e.preventDefault();
        let contactDetail = {
            name:this.refs.contactName.value,
            email:this.refs.contactEmail.value,
            description:this.refs.contactDescription.value
        }

        if (window.grecaptcha.getResponse(this.contact_reCaptcha) === ""){
            let element = document.getElementById('contact-gRecaptcha');
            element.classList.add('border');
            setTimeout(() => {
                element.classList.remove('border');
            }, 500);
            return;
        }
        this.submitContactReaquest(contactDetail);
    }
    submitContactReaquest(contactDetail) {
        // console.log(question);
        this.setState({contactFormLoader:true});

        ContactusService
        .contactRequest(contactDetail)
        .then((res) => {
            this.setState({contactFormLoader:false});
            CommanService.showToaster('success',"Thank you. Your request has been submitted");
            // console.log('this.submitQuestion then => ', res);
            document.getElementById("contactForm").reset();
            window.grecaptcha.reset(this.contact_reCaptcha);
        })
        .catch((error) => {
            this.setState({contactFormLoader:false});
            console.error('contactRequest =>', error)
        });
    }
    closeContact(){
        document.body.classList.remove("gb-contact-overlay");
        setTimeout(() => {
            document.body.classList.remove("gb-contact-body");
        }, 300);
    }
  }

  export default Contact;