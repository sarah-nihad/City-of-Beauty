import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';
import { Pane, Dialog, Button } from 'evergreen-ui';
import Footer from '../common/Footer';
import Component from '@reactions/component';
import { Link } from 'react-router-dom';


import Lottie from 'lottie-react-web'
// import animation from '../../assets/json/heart.json';

class Nutredirm extends React.Component {
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


                                <div style={{ width: '100%', boxShadow: '#e0ddddd6 2px 5px 6px 1px', height: '150px',display:'flex',alignItems:'center',justifyContent:'center' }}>
                                    <img src={require('../../assets/img/nutre_logo.jpg')} />

                                </div>



                                <div id='section1_s'>






                                    <div id='OurProdectContiners1'>

                                        <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 0 }} >
                                            <div id='nutre_divleft' >
                                                <img src={require('../../assets/img/nutre.png')} id='img_leftnut' />
                                                <div className='slider' style={{ backgroundColor: '#9E9E9E', minHeight: '320px', padding: '50px 30px 30px 20px', marginTop: '-19px' }} >
                                                    <ul>
                                                        <li> Non-prescription & Hydroquinone free </li>
                                                        <li>Safe on all skin types</li>
                                                        <li>Optimal results</li>
                                                        <li> Reduces appearance of age spots, freckles, photoaging, natural aging, dark spots</li>
                                                        <li>Improves skin consistency, skin elasticity and skin luminosity </li>
                                                        <li> Immediate refreshing and lifting effect</li>
                                                        <li> Improves skin hydration</li>



                                                    </ul>



                                                </div>
                                            </div>






                                            <div id='nutre_divright'>
                                                <img src={require('../../assets/img/nutre4.png')} id='img_rifht' />
                                                <div className='main_content'>
                                                    <h1>For an extensive approach to skin brightening,
                                                       look no further than the effective, complete and comprehensive Neutriderm Brightening Range.</h1>
                                                    <p> Neutriderm Brightening Body Lotion and Neutriderm Brightening Bar combines ingredients that work together to help lighten,
                                                           whiten and brighten your skin giving you even skin tone and reducing the appearance of dark spots.</p>
                                                </div>
                                            </div>
                                        </Row>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>
                                            <Row style={{ marginRight: 0, marginTop: 5, width: '90%' }} >

                                                <Col xs={12} lg={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                                    <div className='main_service_image'>
                                                        <img src={require('../../assets/img/nutre3.jpg')} alt='img' />
                                                    </div>
                                                </Col>

                                                <Col xs={12} lg={4} id='col_imgnutre' >
                                                    <div className='service_box'>
                                                        <div className='image_box '>
                                                            <img src={require('../../assets/img/nutre5.jpg')} alt='img' />
                                                        </div>
                                                        <h2>NO MORE DARK UNDERARMS</h2>
                                                        <p> Forget the embarrassing moments of the past when your dark underarms made you self conscious. Your underarms no longer need to be dark.
                                                         Neutriderm Brightening Range is safe to use on sensitive skin. Be underarm shy no more.</p>

                                                    </div>

                                                    <div className='service_box' style={{ marginTop: '90px' }} >
                                                        <div className='image_box '>
                                                            <img src={require('../../assets/img/nutre6.jpg')} alt='img' />
                                                        </div>
                                                        <h2>ACNE SCARS -  A THING OF THE PAST</h2>
                                                        <p>Probably the only thing worse than the agony of acne is the scars they leave behind. Don't be held to ransom by acne anymore. Neutriderm Brightening
                                                        Range is effective in reducing the appearance of acne scars, giving you smooth skin you love.</p>

                                                    </div>


                                                </Col>
                                            </Row>
                                        </div>
                                        <div style={{ width: '100%' }} id='nutre_backgroundimg' >
                                            <div className='never_had_before'>
                                                <div>
                                                    Beautiful skin is
                                                    all about
                                                    GOOD SKIN CARE HABITS
                                                </div>

                                            </div>
                                        </div>

                                        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minHeight: '500px', backgroundColor: '#fff' }}  >
                                            <div className='bottom_txt_inner'  >
                                                <h1>
                                                    Healthy, bright, youthful skin with Neutriderm Brightening Range.
                                                Easy to use, long lasting results.</h1>
                                                <p>
                                                    A great combination of Neutriderm Brightening Bar and Brightening Lotion to make
                                                    your skin look and feel healthy and bright.
                                                </p>
                                            </div>

                                            <div id='bottomimgnutre'>

                                                <div className='bottom_image_box'>
                                                    <img src={require('../../assets/img/nutre2.jpg')} />

                                                </div>
                                                <div className='shampoo_bottle_image'>
                                                    <img src={require('../../assets/img/nutre1.png')} />


                                                </div>
                                            </div>

                                        </div>

                                        {/* <Row id='RowOurProdect' style={{ marginTop: '5%', marginRight: 0 }} >
                                        
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/sabon.JPG')} alt='img' style={{ position: 'relative', width: '100%', height: 253 }} />
                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/sabon1.JPG')} alt='img' style={{ position: 'relative', width: '100%', height: 253 }} />
                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/sabon2.JPG')} alt='img' style={{ position: 'relative', width: '100%', height: 253 }} />
                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/sabon3.JPG')} alt='img' style={{ position: 'relative', width: '100%', height: 253 }} />
                                                </div>

                                            </Col>
                                        </Row> */}
                                  
                                  
                                  
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
export default withController(Nutredirm);