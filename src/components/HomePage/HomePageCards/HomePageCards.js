import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import devmtnLogo from '../../../photos/devmtnLogo.png';
// import UserPictures from '../../../components/Profile/UserPictures.Modals/UserPictures';


const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class HomePageCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
            open: false,
        };
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
        // const { info } = this.props;
        // console.log(image)
        const { picture_pic, picture_description, picture_name } = image;
        // const { first_name } = info
        return (
            <Card className={classes.card}>
                <p>
                    {/* {first_name} */}
                </p>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar} src={devmtnLogo}>
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={picture_name}
                />
                {/* <CardMedia
                    className={classes.media}
                    image="https://www.petmd.com/sites/default/files/petmd-kitten-development.jpg"
                    title="Paella dish"
                >
                </CardMedia> */}
                <img className="profile-gallery-thumbnails-img" onClick={() => this.handleOpen('open')} src={picture_pic} alt=''></img>

                <CardContent >
                    <Typography component="p">
                        {picture_description}
                    </Typography>
                </CardContent>

                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>

                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>

                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                </Collapse>
            </Card>
        );
    }
}

HomePageCards.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePageCards);