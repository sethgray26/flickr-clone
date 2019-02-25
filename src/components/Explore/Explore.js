import React, { Component } from 'react'
import MediaGallery from '../MediaGallery/MediaGallery'
import Navbar from '../Navbar/Navbar'
export default class Explore extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>

                <Navbar />
                <MediaGallery />
            </div>
        )
    }
}