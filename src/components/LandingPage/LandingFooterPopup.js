import React, { Component } from 'react'




export default class LandingFooterPopup extends Component {
    componentDidCatch() {
    }
    render() {
        return (
            <div className='footerPopUp-Container'>
                <h1> The Footer Text Has No Meaning And Is Only Mean To Display How A Footer Could Look. </h1>
                <button onClick={this.props.closePopUp}> Close </button>
            </div>
        );
    }
}

