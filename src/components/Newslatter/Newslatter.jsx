import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import './Newslatter.scss';
import * as CommanService from '../../services/CommanService';

class Newslatter extends Component {
    state = {
        newsLatterFormLoader :false
    };
    render() {
      return (
        <React.Fragment>
            <section className="gb-update">
                <div className="container">
                    <div className="gb-text">
                        <h3>Want the latest update & tips? <span className="gb-font-color">Join our newsletter.</span></h3>
                    </div>
                    {/* <div className="gb-btn">
                        <Link to="#" className="btn btn-default" data-toggle="modal" data-target="#emailModal">Your email</Link>
                    </div> */}
                    <div className="row">
                        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                            <form id="newsLatterFormEmail" onSubmit={(e) => this.onSubmitNewsletterForm(e)} className="gb-newslatter-form">
                                <div className="form-group">
                                    {/* <label htmlFor="newsLatterFormEmail">Email <span>*</span></label> */}
                                    <input type="email" ref="newsLatterFormEmail" className="form-control" required name="newsLatterFormEmail" aria-describedby="emailHelp" placeholder="Your Email" />
                                    <button type="submit" className="gb-ask-submit" disabled={this.state.questionFormLoader}>
                                        Submit
                                        {/* {this.state.newsLatterFormLoader && <i className="ml-2 fa fa-spinner fa-spin"></i>} */}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="modal fade gb-email-modal" id="emailModal" tabIndex="-1" role="dialog" aria-labelledby="emailModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"></button>
                            <form id="newsLatterFormEmail" onSubmit={(e) => this.onSubmitNewsletterForm(e)}>
                                <div className="form-group">
                                    <label htmlFor="newsLatterFormEmail">Email <span>*</span></label>
                                    <input type="email" ref="newsLatterFormEmail" className="form-control" required name="newsLatterFormEmail" aria-describedby="emailHelp" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="gb-ask-submit" disabled={this.state.questionFormLoader}>
                                        Submit
                                        {this.state.newsLatterFormLoader && <i className="ml-2 fa fa-spinner fa-spin"></i>}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}
        </React.Fragment>
      );
    }

    componentDidMount() {
      // console.log(this.props);
    }

    componentWillReceiveProps() {
      // console.log("componentWillReceiveProps =>", this.props.toaster);
    }

    componentDidUpdate(prevProps, prevState) {
      // console.log(prevProps, prevState);
    }
    onSubmitNewsletterForm(e) {
        e.preventDefault();
        // console.log(this.refs.newsLatterFormEmail.value);
        let body = {
            email:this.refs.newsLatterFormEmail.value
        }

        this.setState({newsLatterFormLoader: true});
        CommanService.saveNewsLatterEmail(body)
            .then((res) => {
                // console.log(res.data.message);
                if (res && res.data && res.data.message) {
                    CommanService.showToaster('success',res.data.message);
                }
                this.setState({newsLatterFormLoader: false });
            })
            .catch((error) => {
                // console.log(error.response.data.message);
                if (error && error.response.data && error.response.data.message) {
                    CommanService.showToaster('error',error.response.data.message);
                }
                // console.log(error);
                this.setState({newsLatterFormLoader: false });
            });
    }
  }

  export default Newslatter;