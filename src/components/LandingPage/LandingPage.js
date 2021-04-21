import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search";
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import flickrLogo from '../../photos/flickrLogo.svg'

import './LandingPage.scss'
import './LandingFooterPopUp.scss'


class LandingPage extends Component {
    constructor() {
        super()
        this.state = {
            searchBar: false,
        }
    }


    toggleSearchBar = () => {
        this.setState({ searchBar: !this.state.searchBar })
    }

    render() {
        const footerStrings = ['About', "Jobs", "Blog", "Developers", "Guidelines", "Privacy", "Terms", "Cookies", "English"]
        return (
            <div id="landingPage-container">
                <div id="dim-overlay" className="flex-column-center-center">

                    <section className="landing-nav flex-row-start-center">
                        <span className="site-logo">
                            <img src={flickrLogo} alt='' />
                        </span>

                        <span className="search-container">
                            <SearchIcon className='search-icon' onClick={() => this.toggleSearchBar()} />

                            {this.state.searchBar ?
                                <InputBase className='search-bar' placeholder='Find your inspiration' /> 
                                : null
                            }
                        </span>

                        <span className="nav-actions">
                            <Button className="nav-button" variant="text"  component={Link} to='/Signin'>
                                Log In
                            </Button>

                            <Button className='nav-button filled' variant='contained' component={Link} to='/Signup'>
                                Sign up
                            </Button>
                        </span>
                    </section>

                    <section className="landing-body flex-column-center-center">
                        <h1> Find your inspiration </h1>
                        <h3> Join the Flick community, home to tens of billions of photos and 2 million groups. </h3>
                        <Link className="start-button pointer" to='/Signup'> Start for free </Link>
                    </section>

                    <section className="landing-footer">
                        <div>
                            {footerStrings.map((ele, ind) => (
                                <p className="pointer" key={ind}> {ele} </p>
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        )
    }
}

export default LandingPage




