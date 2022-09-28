/* eslint-disable react/prop-types */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring';
import { Row, Col } from 'react-bootstrap';
const useStyles = makeStyles(theme => ({
    modal: {

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fad: {

        width: '80%',
        // opacity: 0.9,
        // overflow:'scroll'

    },
    paper: {
        // width:'80%',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        borderRadius: 10,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        height: 500,
    overflow: 'auto',
    },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

export default function SpringModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div onClick={handleOpen} id='quik' >
            <img src={require('../../assets/img/eye.png')} style={{height:30}} alt='img' />
            </div>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open} className={classes.fad}>
                    <div className={classes.paper}>
                        <Row style={{ marginRight: 0, width: '100%' }}  >
                            <Col xs={12} md={6} style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
                                <img src={require(`../../assets/img/${props.img}`)} alt='img' id='img_model' />
                            </Col>
                            <Col xs={12} md={6} >
                                <div style={{ fontSize: '38px', fontWeight: '400', lineHeight: '48px', color: '#212121', paddingBottom: '65px' }}>  {props.name} </div>
                                Tired of the same eye color day after day? Now you can wear lenses that defy the imagination, as Cristal combines mint green and grey tones for a truly one of a kind style to achieve a gray green eyes. With darker color accents throughout and a subtle limbal ring, your eyes will look natural and soft yet will command attention with their unique shade.
                                 For those who like to push the boundaries of what fashion and beauty look like, Cristal is perfect for you.
                            </Col>
                        </Row>


                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
