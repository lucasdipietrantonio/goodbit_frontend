import React, { Component } from "react";

class CommunityQuestions extends Component {
//   constructor(props) {
//     super(props);
//     // console.log(props);
//   }
  render() {
    const { cq, onClickCqQuestion, onClickCqClose } = this.props;
      return cq.results.map((data, index) => {
          return (
        <div key={data.id}>
          <div
            className={data.isOpacity ? "gb-chat" : "gb-chat gb-chat-opacity"}>
            <div className="gb-like-chat gb-close-chat">
              <p onClick={() => onClickCqQuestion(index, data)}>
                {data.question}
              </p>
              {/* <div className="gb-like-blk clearfix">1<i></i></div> */}
              <i
                className={data.isVisible ? "close-icon" : "d-none"}
                onClick={() => onClickCqClose(index, data)}
              />
            </div>
          </div>
          <div className={data.isVisible ? "gb-chat gb-chat-receive" : "d-none"}>
            <div className="gb-close-chat-mobile clearfix " >
              <p>{data.answer}</p>
              <i
                className={data.isVisible ? "close-icon" : "d-none"}
                onClick={() => onClickCqClose(index, data)}
              />
            </div>
          </div>
        </div>
      );
    });
  }
}

export default CommunityQuestions;
