import React, { Component } from "react";
import './ExplainationPopover.scss';
class ExplainationPopover extends Component {

    state = {
        isShow: false,
        popPosition:false
    }
  render() {
    return (
        <span className="gb-explaniation-popover" onMouseEnter={(e) => this.showPopup(e)} onMouseLeave={ (e) => this.hidePopup(e)}>
       <button className="gb-explaination-btn">Explanation</button>
            {(this.state.isShow?
                <span className={(this.state.popPosition) ? "gb-explaination-body gb-bottm-popover" :"gb-explaination-body"}>
                    <span dangerouslySetInnerHTML={{__html: this.props.content}}></span>
                </span>
             :'')
            }
        </span>
    );
  }
  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);

  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
}
handleScroll = (event) => {
    let position =  document.getElementsByClassName('gb-glossary-popover')[0].getBoundingClientRect()
    if(position.y < 250 ){
        this.setState({popPosition:true});
    }else{
        this.setState({popPosition:false});
    }
}

  showPopup(e){
      this.setState({isShow:true});
      let position =  e.target.getBoundingClientRect()
        if(position.y < 250 ){
            this.setState({popPosition:true});
        }else{
            this.setState({popPosition:false});
        }
  }
  hidePopup(e){
    // console.log('hide');
    this.setState({isShow:false});
  }
}
export default ExplainationPopover;
