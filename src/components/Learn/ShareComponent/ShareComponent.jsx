import React, { Component } from "react";
import './ShareComponent.scss';
import { Link } from "react-router-dom";

class ShareComponent extends Component {
    render() {
      return (
        <ul>
            <li>
                {/* <a href="{null}"> */}
                <a href={"http://www.facebook.com/sharer.php?u="+this.props.share} target="_blank" rel="noopener noreferrer">
                    <i className="gb-fb-icon"></i>
                </a>
                {/* </a> */}
            </li>
            <li>
                {/* <a href="{null}"> */}
                <a href={"https://twitter.com/share?url="+this.props.share+"&amp;text=&amp;hashtags=goodbit"} target="_blank" rel="noopener noreferrer">
                    <i className="gb-twitter-icon"></i>
                </a>
                {/* </a> */}
            </li>
            <li>
                {/* <a href="{null}"> */}
                <a href={"http://www.linkedin.com/shareArticle?mini=true&amp;url="+this.props.share}target="_blank" rel="noopener noreferrer">
                    <i className="gb-linked-icon"></i>
                </a>
                {/* </a> */}
            </li>
            <li>
                {/* <a href="{null}"> */}
                <a href={"https://plus.google.com/share?url="+this.props.share} target="_blank" rel="noopener noreferrer">
                    <i className="gb-gplus-icon"></i>
                </a>
                {/* </a> */}
            </li>
            <li>
                {/* <a href="{null}" className="gb-help-menu"><i className="gb-help-icon"></i><span>Help</span></a></li> */}
                <Link to="/ask-us-anything" className="gb-help-menu">
                    <i className="gb-help-icon"></i>
                    <span>Help</span>
                </Link>
            </li>
        </ul>
      );
    }

    componentDidMount() {
    //   console.log();
    }

    componentWillReceiveProps() {
      // console.log("componentWillReceiveProps =>", this.props);
    }

    componentDidUpdate(prevProps, prevState) {
      // console.log(prevProps, prevState);
    }
  }

  export default ShareComponent;

