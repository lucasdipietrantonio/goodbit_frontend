import React, { Component } from "react";
import './LicenseContent.scss';
import * as ContactusService from '../../services/ContactusService';
import * as CommanService from '../../services/CommanService';

class LicenseContent extends Component {
  render() {
    return (
        <section className="gb-license-content">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="gb-license-content-inner">
                            <div className="gb-license-detail">
                                <h1>License our <br></br> content</h1>
                                <p>Cryptocurrency and Blockchain is confusing. It may be tough to sell your customers on your product if they don’t even know what Blockchain is in the first place. To increase your sales and empower your current users, it’s important that you provide education guides and videos. Good news is, we’ve already done all the work so you don’t have to.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 offset-md-3">
                    <div className="gb-license-form-block">
                        <h3>Want to use our content native on your site? <span>Contact us using the form below.</span></h3>
                        <form className="gb-license-form" onSubmit={(e) => this.onClickAboutContactSubmit(e)} id="contactForm">
                            <div className="form-group">
                                <label htmlFor="">Name <span>*</span></label>
                                <input type="text" required ref="contactName" className="form-control" placeholder="e.g.,Satoshi Nakamoto" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email <span>*</span></label>
                                <input type="email" required ref="contactEmail" className="form-control" placeholder="name@email.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">What would you like to discuss? <span>*</span></label>
                                <textarea required ref="contactDescription" className="form-control" placeholder="Please be detailed & concise."></textarea>
                            </div>
                            <div className="form-group">
                                {/* <Recaptcha />  */}
                                <div className="d-inline-block border-danger" id="greCaptcha" data-sitekey=""></div>
                            </div>
                            <div className="gb-sendbtn-block">
                                <button className="gb-sendbtn" type="submit">Send <i className="gb-right-arrow"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
  }
    componentDidMount() {
        document.title = "License Content | Goodbit101";
        this.reCaptcha();
    }
    componentWillUnmount() {
        clearTimeout(this.clearreCaptchaTimout)
    }
    reCaptcha(){
        if ((window.grecaptcha) && (window.grecaptcha.render)) {
            window.grecaptcha.render('greCaptcha', {
                'sitekey' : '6LdjnHAUAAAAAGle3SM_k7e2LBZFkzydSavW0Zjq',
                // 'callback' : this.correctCaptcha()
            });
        }else{
        this.clearreCaptchaTimout =  setTimeout(() => {
                this.reCaptcha();
            }, 500);
        }
    }
    onClickAboutContactSubmit(e){
        e.preventDefault();
        let contactDetail = {
            name:this.refs.contactName.value,
            email:this.refs.contactEmail.value,
            description:this.refs.contactDescription.value
        }

        if (window.grecaptcha.getResponse() === ""){
            let element = document.getElementById('greCaptcha');
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
            CommanService.showToaster('success',"Your Request Successfully Submit");
            // console.log('this.submitQuestion then => ', res);
            document.getElementById("contactForm").reset();
            window.grecaptcha.reset();
        })
        .catch((error) => {
            this.setState({contactFormLoader:false});
            console.error('contactRequest =>', error)
        });
    }
}

export default LicenseContent;
