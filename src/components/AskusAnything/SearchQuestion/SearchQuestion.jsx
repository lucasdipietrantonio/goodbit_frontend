import React, { Component } from "react";

class SearchQuestion extends Component {
//   constructor(props) {
//     super(props);
//     // console.log(props);
//   }
  render() {
    const { search, onClickSearchQuestion,onClickSearchClose } = this.props;
    return search.results.map((data, index) => {
      return (
        <div key={data.id}>
          <div className={data.isOpacity ? 'gb-chat' : 'gb-chat gb-chat-opacity'} >
            <div className="gb-close-chat" >
              <p onClick={() => onClickSearchQuestion(index,data)}>{data.question}</p>
              <i className={ data.isVisible ? 'close-icon' :  'd-none'}  onClick={() => onClickSearchClose(index,data)}/>
            </div>
          </div>
          <div className={data.isVisible ? 'gb-chat gb-chat-receive' :  'd-none'}>
            <div className="gb-close-chat-mobile clearfix " >
              <p>{data.answer}</p>
              <i className={ data.isVisible ? 'close-icon' :  'd-none'}  onClick={() => onClickSearchClose(index,data)}/>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default SearchQuestion;
