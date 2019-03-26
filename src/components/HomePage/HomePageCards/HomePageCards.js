import React, { Component } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import devmtnLogo from '../../../photos/devmtnLogo.png';
import './HomePageCards.scss'


class HomePageCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
            open: false,
            userInfo: []
        };
    }

    componentDidMount() {
        this.getUserInfo()
    }

    getUserInfo = () => {
        axios.get(`/api/profile`).then(res => {
            this.setState({ userInfo: res.data })
        })
    }


    handleOpen = () => {
        this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({ open: false })
    }




    render() {
        const { image } = this.props;
        const { picture_pic, picture_description, picture_name } = image;
        return (
            <Card className='home-card'
            >
                <CardHeader
                    title={picture_name}
                    avatar={
                        <Avatar aria-label="Recipe" className='avatar-icon' src={devmtnLogo}>
                        </Avatar>
                    }

                    className='card-header'

                />
                <img className="profile-thumbnails-img" onClick={() => this.handleOpen('open')} src={picture_pic} alt=''></img>

                <Typography
                    className='card-footer'
                    component="p"
                >
                    {picture_description}
                </Typography>

                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                </Collapse>
            </Card>
        );
    }
}

HomePageCards.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default (HomePageCards);
