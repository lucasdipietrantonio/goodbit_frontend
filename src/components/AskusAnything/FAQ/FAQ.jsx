import React, { Component } from "react";

class FAQ extends Component {
//   constructor(props) {
//     super(props);
//     // console.log(props);
//   }
  render() {
    const { faq, onClickFaqQuestion,onClickFaqClose } = this.props;
    return faq.results.map((data, index) => {
      return (
        <div key={data.id}>
          <div className={data.isOpacity ? 'gb-chat' : 'gb-chat gb-chat-opacity'} >
            <div className="gb-close-chat" >
              <p onClick={() => onClickFaqQuestion(index,data)}>{data.question}</p>
              <i className={ data.isVisible ? 'close-icon' :  'd-none'}  onClick={() => onClickFaqClose(index,data)}/>
            </div>
          </div>
          <div className={data.isVisible ? 'gb-chat gb-chat-receive' :  'd-none'}>
            <div className="gb-close-chat-mobile clearfix " >
              <p>{data.answer}</p>
              <i className={ data.isVisible ? 'close-icon' :  'd-none'}  onClick={() => onClickFaqClose(index,data)}/>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default FAQ;
