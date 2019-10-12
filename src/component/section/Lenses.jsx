import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';
import { Pane, Dialog, Button } from 'evergreen-ui';
import Footer from '../common/Footer';
import Component from '@reactions/component';
import Mod from '../common/Mod';
import host from '../../assets/js/Host';
import ReactPlayer from 'react-player';
import axios from 'axios';

import Lottie from 'lottie-react-web'
// import animation from '../../assets/json/heart.json';

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


    componentDidMount() {

        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('id');
        const name = urlParams.get('name');
        this.setState({ name })
        axios.get(host + `item/category/${myParam}`)

            .then(res1 => {

                this.setState({
                    data1: res1.data.items
                })
                // console.log(res1.data)
            })
            .catch(err => {
                console.log('error:' + err);
            })
    }






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
                                                        <img src={require('../../assets/img/amara.png')} id='amara_img' /></div>
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
                                            {/* {this.state.data1.map(((item, i) => */}
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
                                            <Col id='ColOurProdect' xs={12} lg={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le15.jpg')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Desert Rose' img='le15.jpg'
                                                        />
                                                    </div>

                                                </div>
                                            </Col>


                                            <Col id='ColOurProdect' xs={12} lg={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le16.JPG')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Desert Rose' img='le16.JPG'
                                                        />
                                                    </div>

                                                </div>
                                            </Col>


                                            <Col id='ColOurProdect' xs={12} lg={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le17.JPG')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Desert Rose' img='le17.JPG'
                                                        />
                                                    </div>

                                                </div>
                                            </Col>


                                            <Col id='ColOurProdect' xs={12} lg={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le18.JPG')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Desert Rose' img='le18.JPG'
                                                        />
                                                    </div>

                                                </div>
                                            </Col>
                                            <Col id='ColOurProdect' xs={12} lg={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le18.JPG')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Desert Rose' img='le18.JPG'
                                                        />
                                                    </div>

                                                </div>
                                            </Col>
                                            <Col id='ColOurProdect' xs={12} lg={6} lg={4} xl={3}

                                            >
                                                <div id='perfume1' >
                                                    <img id='slid_imglense' src={require('../../assets/img/le20.JPG')} alt='img' style={{ position: 'relative' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <Mod name='Desert Rose' img='le20.JPG'
                                                        />
                                                    </div>

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
export default withController(Lenses);