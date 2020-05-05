import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import './QuizModal.scss';
// import * as CommanService from '../../../services/CommanService';

class QuizModal extends Component {
    render() {
      return (
        <React.Fragment>
            <div className="gb-quiz-modal">
                <div className="gb-quiz-body">
                    <div className="container">
                        <div className="gb-quiz-header">
                            <div className="gb-quiz-head-left">
                                <i><img src={require('../../../assets/images/goodbit-icon.svg')} alt="Goodbit-icon" /></i>
                                <span>Money 101: Quiz</span>
                            </div>
                            <button type="button" className="btn btn-secondary" onClick={() => this.toggleQuestionModal('hide')}></button>
                        </div>

                        <div className="gb-quiz-modal-body">
                            <div className="row">
                                <div className="col-xl-4 offset-xl-4 col-md-6 offset-md-3">
                                    <div className="swiper-container gb-money-question-swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="gb-question-blk">
                                                    <span>QUESTION #1</span>
                                                    <h3>What is today’s paper money called?</h3>
                                                    <ul>
                                                        <li><input id="radio1" type="radio" name="radio" value="1" /><label htmlFor="radio1">“FIAT” Money</label></li>
                                                        <li><input id="radio2" type="radio" name="radio" value="2" /><label htmlFor="radio2">“Printed” Money</label></li>
                                                        <li><input id="radio3" type="radio" name="radio" value="3" /><label htmlFor="radio3">“New World” Currency</label></li>
                                                        <li><input id="radio4" type="radio" name="radio" value="4" /><label htmlFor="radio4">“Gold Weighted” Currency</label></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="gb-question-blk">
                                                    <span>QUESTION #1</span>
                                                    <h3>What is today’s paper money called?</h3>
                                                    <ul>
                                                        <li><input id="radio5" type="radio" name="radio" value="5" /><label htmlFor="radio5">“FIAT” Money</label></li>
                                                        <li><input id="radio6" type="radio" name="radio" value="6" /><label htmlFor="radio6">“Printed” Money</label></li>
                                                        <li><input id="radio7" type="radio" name="radio" value="7" /><label htmlFor="radio7">“New World” Currency</label></li>
                                                        <li><input id="radio8" type="radio" name="radio" value="8" /><label htmlFor="radio8">“Gold Weighted” Currency</label></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="gb-question-blk">
                                                    <span>QUESTION #1</span>
                                                    <h3>What is today’s paper money called?</h3>
                                                    <ul>
                                                        <li><input id="radio9" type="radio" name="radio" value="9" /><label htmlFor="radio9">“FIAT” Money</label></li>
                                                        <li><input id="radio10" type="radio" name="radio" value="10" /><label htmlFor="radio10">“Printed” Money</label></li>
                                                        <li><input id="radio11" type="radio" name="radio" value="11" /><label htmlFor="radio11">“New World” Currency</label></li>
                                                        <li><input id="radio12" type="radio" name="radio" value="12" /><label htmlFor="radio12">“Gold Weighted” Currency</label></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gb-quiz-slider">
                                        <div className="swiper-button-next gb-money-question-swiper-button-prev"><i className="gb-prev-icon"></i> Prev</div>
                                        <div className="swiper-button-prev gb-money-question-swiper-button-next">Next<i className="gb-next-icon"></i></div>
                                        <div className="swiper-button-next gb-money-question-swiper-button-prev gb-mobile-prev"><i className="gb-prev-icon"></i></div>
                                        <div className="swiper-button-prev gb-money-question-swiper-button-next gb-mobile-next"><i className="gb-next-icon"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    toggleQuestionModal = (type) => {
        //   console.log(type);
          if (type === 'hide') {
              document.body.classList.remove("gb-quiz-main-body");
        } else {
            document.body.classList.add("gb-quiz-main-body");
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 10);
        }
      }
  }

  export default QuizModal;