import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as GlossaryService from '../../../../services/GlossaryService';
import "./TermsGlossaryDetail.scss";
class TermsGlossaryDetail extends Component {
    state = {
        result : ''
     }
    render() {
        return (
            <h1>
                <section className="gb-glossary-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <h1>Terms Glossary Detail</h1>
                                <div className="gb-tag-button-list">
                                    <Link className="btn gb-tag-button" to="/learn/terms-glossary/A-B">A-B</Link>
                                    <Link className="btn gb-tag-button" to="/learn/terms-glossary/C-D">C-D</Link>
                                    <Link className="btn gb-tag-button" to="/learn/terms-glossary/E-G">E-G</Link>
                                    <Link className="btn gb-tag-button" to="/learn/terms-glossary/H-K">H-K</Link>
                                    <Link className="btn gb-tag-button" to="/learn/terms-glossary/L-N">L-N</Link>
                                    <Link className="btn gb-tag-button" to="/learn/terms-glossary/O-Q">O-Q</Link>
                                    <Link className="btn gb-tag-button" to="/learn/terms-glossary/R-T">R-T</Link>
                                    <Link className="btn gb-tag-button" to="/learn/terms-glossary/U-Z">U-Z</Link>
                                    <Link className="btn gb-tag-button" to="/learn/terms-glossary/0-9">0-9</Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7 offset-lg-1">
                                {this.displyDescription()}
                                {/* <div className="gb-glossary-detail">
                                    <h3>Abstraction</h3>
                                    <h4>noun</h4>
                                    <p>An abstraction is something that you can't directly experience using your five senses. Love. War. Culture. If you know it exists, but you can't see it, smell it, taste it, touch it, or hear it, that's an abstraction. (And, really—who wants to smell culture, anyway?)</p>
                                    <Link to="{null}">Abstraction</Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </h1>
         );
    }
    componentWillMount(){
        document.title = "Terms Detail | Goodbit101";
        this.getAllGlossary();
    }
    componentDidMount(){
    //    console.log(this.props.match.params.term);
    }
    getAllGlossary(){
        GlossaryService.getGlossary().then((res) => {
            this.setState({result:res.data.result});
           })
           .catch((error) => {
               console.error('getGlossaryData =>', error)
           });
      }
    displyDescription(){
        let term = this.props.match.params.term;
        if(this.state.result[term.replace(/-/g, ' ').toLowerCase()]){
            return(
                <div className="gb-glossary-detail">
                    <h3>{term}</h3>
                    <h4>{this.state.result[term.replace(/-/g, ' ').toLowerCase()].type}</h4>
                    <p>{this.state.result[term.replace(/-/g, ' ').toLowerCase()].description}</p>
                    {
                        (this.state.result[term.replace(/-/g, ' ').toLowerCase()].link) && <a href={this.state.result[term.replace(/-/g, ' ').toLowerCase()].link}>Learn about {this.props.content}</a>}
                </div>
            )
        }
    }
}

export default TermsGlossaryDetail;