import React, { Component } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import devmtnLogo from '../../../photos/devmtnLogo.png';
import './HomePageCards.scss'

// const styles = theme => ({
//     card: {
//         maxWidth: 400,
//         marginLeft: 10,
//         marginTop: 20,
//         margin: 'auto'
//     },
//     media: {
//         height: 0,
//         // paddingTop: '56.25%', // 16:9
//     },
//     actions: {
//         display: 'flex',
//     },
//     expand: {
//         transform: 'rotate(0deg)',
//         marginLeft: 'auto',
//         transition: theme.transitions.create('transform', {
//             duration: theme.transitions.duration.shortest,
//         }),
//     },
// });

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
        const { classes } = this.props;
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
// withStyles(styles)