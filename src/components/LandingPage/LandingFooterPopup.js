import React, { Component } from 'react'
import Button from '@material-ui/core/Button'





export default class LandingFooterPopup extends Component {
    componentDidCatch() {
    }
    render() {
        return (
            <div className='footerPopUp-Container'>
                <h1> The Footer Tags Are For Display Only. To Help Better Clone The Site </h1>
                {/* <button onClick={this.props.closePopUp}> Close </button> */}
                <Button className='footer-popup' variant='contained' onClick={this.props.closePopUp}> Close </Button>
            </div>
        );
    }
}

