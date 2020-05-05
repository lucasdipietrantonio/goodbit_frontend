import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as GlossaryService from '../../../services/GlossaryService'

import "./TermsGlossary.scss";
class TermsGlossary extends Component {
    state = {
        glossary : '',
        displayGlossary:''
     };
     alphabates = '';
    render() {
        return (
            <h1>
                <section className="gb-glossary-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <h1>Terms Glossary</h1>
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
                            <div className="col-lg-8 offset-lg-1">
                                <div className="gb-glossary-list">
                                    {this.displayAlpha()}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </h1>
         );
    }
    componentWillMount(){
        this.getAtoZGlossary();
    }
    componentDidMount(){
        document.title = "Terms & Glossary | Goodbit101";
        // console.log(this.props);
    }
    componentWillReceiveProps(nextProps){
       let alpha =  nextProps.match.params.alphabates.split("-");
        //console.log(nextProps);
                if(nextProps.match.params.alphabates){
                    this.getTerms(alpha[0],alpha[1]);
                }
                else{
                    this.getTerms('A','B')
                }

        // console.log(this.props);
    }
    componentWillUpdate(){
    }
    displayAlpha(){
        if ( this.state.displayGlossary ) {
            return  this.state.displayGlossary.map((terms,i) => {
                if(terms.result){
                    return(
                        <div className="gb-glossary-list-box" key={i}>
                            <label>{terms.title}</label>
                                {this.displayTerms(terms.result)}
                        </div>
                    )
                }else{
                    return('');
                }
            });
        }else{
            return ("");
        }
    }
    displayTerms(terms){
       return(
            <div className="row">
                {this.displayTerm(terms)}
            </div>
        )
    }
    displayTerm(terms){
        if(terms){

            return  terms.map((term, i) => {
                this.alphabates = String.fromCharCode(term.title.charCodeAt(0) + 1);
                return(
                    <div className="col-sm-3" key={i}>
                        <Link to={"/learn/terms-glossary/terms-glossary-detail/"+term.title.replace(/%/g, '%25')}>{term.title}</Link>
                    </div>
                )
            });
        }
    }
    getTerms(char1,char2){
        this.alphabates = char1;
        let first = char1.charCodeAt()
        let last = char2.charCodeAt()
        let objResult = [];
        for (first; first <= last; first++) {
            let data = {
                result : this.state.glossary[String.fromCharCode(first)],
                title : String.fromCharCode(first)
            }
            objResult.push(data);
        }
        this.setState({displayGlossary:objResult});
    }
    getAtoZGlossary(){
        GlossaryService.getGlossaryDataAtoZ().then((res) => {
            this.setState({glossary:res.data.result},function(){
                if(this.props.match.params.alphabates){
                    let alpha = this.props.match.params.alphabates.split("-");
                    this.getTerms(alpha[0],alpha[1]);
                }
                else{
                    this.getTerms('A','B')
                }
            });
        }).catch((error) => {
            console.error('getGlossaryData =>', error)
        });;;
    }
}

export default TermsGlossary;