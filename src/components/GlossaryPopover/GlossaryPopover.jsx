import React, { Component } from "react";
import { environment } from "../../environment";
import './GlossaryPopover.scss';
class GlossaryPopover extends Component {

    state = {
        isShow: false,
        popPosition:false,
        key : ''
    }
  render() {
    return (
        <span className="gb-glossary-popover" onMouseEnter={(e) => this.showPopup(e)} onMouseLeave={ (e) => this.hidePopup(e)}>
        {this.props.showAs ? this.props.showAs: this.props.content}
            {(this.state.isShow && environment.glossaryData && environment.glossaryData[this.state.key])?
                <span className={(this.state.popPosition) ? "gb-popover-body gb-bottm-popover" :"gb-popover-body"}>
                    <label className="gb-text-title">{this.props.content.replace(/"/g, '')}</label>
                    <label className="gb-sub-text-title">{environment.glossaryData[this.state.key].type}</label>
                    <span>{environment.glossaryData[this.state.key].description}</span>
                    {
                    (environment.glossaryData[this.state.key].link) && <a href={environment.glossaryData[this.state.key].link}>Learn about {this.props.content}</a>}
                </span>
            :''
            }
        </span>
    );
  }
  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
    let key = this.props.content.replace(/-/g, ' ').toLowerCase()
    this.setState({key:key.replace(/"/g, '')})

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
export default GlossaryPopover;
