import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NotFound404.scss";
class NotFound404 extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>Page Not Found</h2>
              <div className="error-details">
                Should've put it on the blockchain...
              </div>
              <div className="error-actions">
                <Link
                  className="btn btn-primary btn-lg nav-link"
                  to="/"
                >
                  <span className="glyphicon glyphicon-home">I hate meta 404 pages, just Take Me Home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount(){
      document.title = "Not Found | Goodbit101";
  }
}

export default NotFound404;
