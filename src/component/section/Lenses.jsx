import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';
import ScrollUpButton from "react-scroll-up-button";
import Footer from '../common/Footer';

import Mod from '../common/Mod';
import ReactPlayer from 'react-player';



class Lenses extends React.Component {
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
                        <div id='mainEquContiner_cate' style={{ backgroundColor: '#F8F6EA' }} >
                            <div id='apfot'>
                                <Nav2 />






                                <div id='section1_s'>






                                    <div id='OurProdectContiners1'>


                                        <Row style={{ width: '100%', marginTop: '5%', marginRight: 0 }} id='amara_row' >
                                            <Col xs={12} lg={6} id='amara_col' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                                <div style={{ borderRadius: '10px', width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }} >
                                                    <ReactPlayer width={'98%'} height={300} url='https://youtu.be/Iw5jTO2eU50' playsinline={true} controls style={{ borderRadius: '20px' }} />
                                                </div>
                                            </Col>
                                            <Col xs={12} lg={6} id='amara_col' >
                                                <div style={{ display: 'flex', flexDirection: 'column', width: '90%', backgroundColor: '#000', borderRadius: '10px', color: '#fff' }}>
                                                    <div style={{ height: '90px', justifyContent: 'center', alignItems: 'center', display: 'flex' }} >
                                                        <img src={require('../../assets/img/amara.png')} id='amara_img' alt='img'  /></div>
                                                    <p id='amara_text' style={{ padding: '20px' }}>
                                                        We are relentless in our pursuit of the latest optical innovations,
                                                         from contact lens technologies to breakthroughs in eyewear design.
                                                         The ever-evolving nature of our product inspires us, and will always drive us to find you your perfect fit.
                                                         No two eyes are alike, and we know that selecting the perfect pair of contact lenses is a delicate balance style and function.
                                                          We’re here every step of the way to make sure you get exactly what you want.
                                                  </p>
                                                </div>
                                            </Col>

                                        </Row>

                                        <Row id='RowOurProdect' style={{ marginTop: '5%' }} >

                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le1.jpg')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Mocca' img='le1.jpg' />
                                                    </div>


                                                </div>
                                            </Col>
                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le2.jpg')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Royal Blue' img='le2.jpg' />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le3.jpg')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Caramel Stone' img='le3.jpg' />
                                                    </div>

                                                </div>
                                            </Col>
                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le4.jpg')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Burned Cinnamon' img='le4.jpg' />
                                                    </div>

                                                </div>
                                            </Col>
                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le5.jpg')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Ash Gray' img='le5.jpg' />
                                                    </div>

                                                </div>
                                            </Col>
                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le6.jpg')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Warm Gray' img='le6.jpg' />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le7.jpg')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Olive Gray' img='le7.jpg' />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le8.jpg')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Panther Eye' img='le8.jpg' />
                                                    </div>

                                                </div>
                                            </Col>
                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le9.jpg')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Dark Sepia' img='le9.jpg' />
                                                    </div>

                                                </div>
                                            </Col>
                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le10.jpg')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Crocodile Green' img='le10.jpg' />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le11.jpg')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Brown Gold' img='le11.jpg' />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le12.jpg')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Sky Gray' img='le12.jpg' />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', marginBottom: '5%' }}   >

                                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                                <video muted autoPlay loop style={{ width: '100%', height: 400 }}  >
                                                    <source src={require('../../assets/maya.MP4')} type="video/MP4" />
                                                </video>



                                            </div>

                                        </div>



                                        <Row id='RowOurProdect'  >
                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le13.jpg')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Hazel Wood' img='le13.jpg' />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le14.jpg')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Spanish Late' img='le14.jpg'
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le15.jpg')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Desert Rose' img='le15.jpg'
                                                        />
                                                    </div>

                                                </div>
                                            </Col>


                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le16.JPG')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Smoke Gray' img='le16.JPG'
                                                        />
                                                    </div>

                                                </div>
                                            </Col>


                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le17.JPG')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Gentle Gray' img='le17.JPG'
                                                        />
                                                    </div>

                                                </div>
                                            </Col>


                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le19.JPG')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Horizon Gray' img='le19.JPG'
                                                        />
                                                    </div>

                                                </div>
                                            </Col>
                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le18.JPG')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Pearl' img='le18.JPG'
                                                        />
                                                    </div>

                                                </div>
                                            </Col>
                                            <Col id='ColOurProdect' xs={12} md={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le20.JPG')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Golden Sand ' img='le20.JPG'
                                                        />
                                                    </div>

                                                </div>
                                            </Col>




                                        </Row>

                                    </div>





                                </div>






                            </div>
                            <ScrollUpButton
                                        StopPosition={0}
                                        ShowAtPosition={150}
                                        EasingType='easeOutCubic'
                                        AnimationDuration={2000}
                                        ContainerClassName='ScrollUpButton__Container'
                                        TransitionClassName='ScrollUpButton__Toggled'
                                        style={{ backgroundColor: 'rgba(46, 48, 49, 0.7)' }}
                                        ToggledStyle={{}}
                                    />
                            <Footer />
                        </div>



                    )
                    // }




                }}
            </Context.Consumer>
        )
    }
}
export default withController(Lenses);