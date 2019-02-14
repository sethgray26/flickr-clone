import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavbarDrops.css'


export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {

        }
    }


    render() {
        return (
            <div>
                <div class="you-dropdown">
                    <button class="you-drop-btn"> You </button>
                    <div class="you-drop-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>
        )
    }
}