import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';
import { Pane, Dialog, Button } from 'evergreen-ui';
import Footer from '../common/Footer';
import Component from '@reactions/component';
import { Link } from 'react-router-dom';
import Panels from '../common/Panels';

import Lottie from 'lottie-react-web'
// import animation from '../../assets/json/heart.json';

class Dermavive extends React.Component {
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


                                <div style={{ backgroundColor: '#e4a258', width: '100%', boxShadow: '#e0ddddd6 2px 5px 6px 1px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={require('../../assets/img/derma_logo.jpg')} />

                                </div>



                                <div id='section1_s'>






                                    <div id='OurProdectContiners1'>


                                        <div style={{ width: '100%' }} id='derma_backgroundimg' >

                                        </div>

                           
                                        <Row style={{ marginRight: 0, width: '100%',marginBottom:'5%',marginTop:'8%' }}>
                                            <Col xs={12} md={7} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                                                <div className='heading mt20'>DERMAVIVE HYDRA CLEANSER</div>
                                                <div className='mt30'>Soap free cleanser for all skin types </div>
                                                <p className='mt10'>A soap free cleanser that provides safe, effective and
                                                 gentle cleansing for all skin types in all
                                                   skin conditions. This pH balanced cleanser will prevent essential oils and moisture being
                                                        stripped from your skin while cleansing.</p>

                                                  <div style={{width:'70%'}}>
                                                  <Panels />
                                                  </div>


                                            </Col>

                                            <Col xs={12} md={5}>
                                                <img src={require('../../assets/img/dermaviv1.jpg')} alt='img' />
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
export default withController(Dermavive);