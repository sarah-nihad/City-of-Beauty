import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';
import { Pane, Dialog, Button } from 'evergreen-ui';
import Footer from '../common/Footer';
import Component from '@reactions/component';
import { Link } from 'react-router-dom';
import host from '../../assets/js/Host';

import axios from 'axios';

import Lottie from 'lottie-react-web'
// import animation from '../../assets/json/heart.json';

class Hair extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: [],
            name: ''
        }


    }
    handleLoad = () => {
        this.props.parallaxController.update();
    };









    render() {
        return (
            <Context.Consumer>
                {ctx => {
                    //    if (ctx.value.auth ==='lgoin' ||  ctx.value.auth ==='notlogin' ){
                    return (
                        <div id='mainEquContiner_cate'  >
                            <div id='apfot'>
                                <Nav2 />






                                <div id='section1_s'>






                                    <div id='OurProdectContiners1'>




                                        <Row id='RowOurProdect' style={{ marginTop: '5%' }} >

                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}   >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <Link to='/Angel' style={{ display: 'flex', justifyContent: 'center' }}  ><img src={require('../../assets/img/angel_logo.png')} alt='img' style={{ position: 'relative', width: '90%' }} /></Link>

                                                </div>

                                            </Col>

                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}   >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <Link to='/Angel' style={{ display: 'flex', justifyContent: 'center' }}  ><img src={require('../../assets/img/4.png')} alt='img' style={{ position: 'relative', width: '90%' }} /></Link>

                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}   >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <Link to='/RhinoHair' style={{ display: 'flex', justifyContent: 'center' }}  ><img src={require('../../assets/img/rhino.png')} alt='img' style={{ position: 'relative', width: '90%' }} /></Link>

                                                </div>

                                            </Col>




                                        </Row>
                                    </div>





                                </div>






                            </div>
                            <Footer />
                        </div>



                    )
                    // }




                }}
            </Context.Consumer>
        )
    }
}
export default withController(Hair);