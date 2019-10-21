import React from 'react';
import Context from '../../assets/js/Context';
import NavBar from '../common/NavBar';
import { withController } from 'react-scroll-parallax';

import ScrollUpButton from "react-scroll-up-button";
import Footer from '../common/Footer';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Media from "react-media";

import Mod from '../common/Mod';




class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }


    }

    handleLoad = () => {
        this.props.parallaxController.update();
    };

    render() {



        return (

            <Context.Consumer>
                {ctx => {

                    return (

                        <div onLoad={this.handleLoad}>
                            <div id='headerHomeContiner'>

                                <div id='editBugHeader'>
                                    <div id='upNavBar' >
                                        <div id='upNavBar1'>
                                            <i className="fas fa-phone" id='IconHomeUP'> <span id='SPanUPNav'>+964 7724656560 </span></i>
                                            <i className="fas fa-map-marker-alt " id='IconHomeUP'><span id='SPanUPNav'>iraq / bahgdad</span></i>
                                        </div>
                                        <div id='upNavBar2'>
                                            {/* <i className="fas fa-facebook-f" style={{ color: '#fff',marginLeft:50 }}></i> */}
                                            <a href='https://www.facebook.com/103696084368620/'>   <i className="fab fa-facebook-f" id='IconHomeUP'></i> </a>
                                        
                                            <a href='https://instagram.com/city_of_beautyiq?igshid=13cvyt6fdyv3f'>   <i className="fab fa-instagram" id='IconHomeUP'></i></a>
                                        </div>
                                    </div>
                                    <NavBar />
                                </div>
                                <div id='downHeaderNavContiner'>

                                    <div id='OurProdectContinerss'>
                                        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >
                                            <Media queries={{
                                                small: "(max-width: 599px)",
                                                medium: "(min-width: 600px) and (max-width: 1199px)",
                                                large: "(min-width: 1200px)"
                                            }}>
                                                {matches => (
                                                    <React.Fragment>
                                                        {matches.small &&
                                                            <div style={{ width: '100%', backgroundColor: 'rgb(43, 43, 43)', height: '200px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}  >
                                                                <Carousel
                                                                    addArrowClickHandler
                                                                    slidesPerPage={1}
                                                                    slidesPerScroll={1}
                                                                    animationSpeed={1000}
                                                                    autoPlay={2000}
                                                                    stopAutoPlayOnHover
                                                                    clickToChange
                                                                    infinite={true}
                                                                >
                                                                    <img id='slid_img' src={require('../../assets/img/1.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/2.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/3.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/4.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/5.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/6.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/rhino.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/amara.png')} alt='img' />

                                                                </Carousel>
                                                            </div>
                                                        }

                                                        {matches.medium &&
                                                            <div style={{ width: '100%', backgroundColor: 'rgb(43, 43, 43)', height: '200px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}  >
                                                                <Carousel
                                                                    addArrowClickHandler
                                                                    slidesPerPage={3}
                                                                    slidesPerScroll={1}
                                                                    animationSpeed={1000}
                                                                    autoPlay={2000}
                                                                    stopAutoPlayOnHover
                                                                    clickToChange
                                                                    infinite={true}
                                                                >
                                                                    <img id='slid_img' src={require('../../assets/img/1.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/2.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/3.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/4.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/5.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/6.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/rhino.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/amara.png')} alt='img' />

                                                                </Carousel>
                                                            </div>
                                                        }

                                                        {matches.large &&
                                                            <div style={{ width: '100%', backgroundColor: 'rgb(43, 43, 43)', height: '200px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}  >
                                                                <Carousel
                                                                    addArrowClickHandler
                                                                    slidesPerPage={5}
                                                                    slidesPerScroll={1}
                                                                    animationSpeed={1000}
                                                                    autoPlay={2000}
                                                                    stopAutoPlayOnHover
                                                                    clickToChange
                                                                    infinite={true}
                                                                >
                                                                    <img id='slid_img' src={require('../../assets/img/1.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/2.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/3.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/4.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/5.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/6.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/rhino.png')} alt='img' />
                                                                    <img id='slid_img' src={require('../../assets/img/amara.png')} alt='img' />

                                                                </Carousel>
                                                            </div>
                                                        }


                                                    </React.Fragment>



                                                )}
                                            </Media>
                                        </div>

                                    </div>


                                    <div id='OurProdectContinerss' style={{ backgroundColor: '#F8F6EA', }}  >

                                        <div id='pop_main' >POPULAR PRODUCTS</div>

                                        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >
                                           
                                      
                                            <Media queries={{
                                                small: "(max-width: 599px)",
                                                medium: "(min-width: 600px) and (max-width: 1199px)",
                                                large: "(min-width: 1200px)"
                                            }}>
                                                {matches => (
                                                    <React.Fragment>
                                                        {matches.small &&
                                                              <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor:'#fff' }} >
                                                              <Carousel
                                                                  addArrowClickHandler
                                                                  slidesPerPage={1}
                                                                  slidesPerScroll={1}
                                                                  animationSpeed={1000}
                                                                  autoPlay={2000}
                                                                  stopAutoPlayOnHover
                                                                  clickToChange
                                                                  infinite={true}
                                                              >

<div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nutre.png')} alt='img' />
                                                                    
                                                                    </div>

                                                               
                                                              
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel2.jpg')} alt='img' />
                                                                  
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel1.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel10.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel9.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel4.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel5.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel6.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel7.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel8.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel3.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel11.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel12.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel13.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/rhino.JPG')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel14.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/dermaviv1.jpg')} alt='img' />
                                                                    </div>

                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/roll1.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/roll3.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/rhino2.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nanomask.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nanop.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nano.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/solmst.jpg')} alt='img' />
                                                                    </div>
                                                                  
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nano2.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nano3.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nano4.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nano5.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nano6.jpg')} alt='img' />
                                                                    </div>



                                                              </Carousel>

                                                          </div>
                                                        }

                                                        {matches.medium &&
                                                            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor:'#fff' }} >
                                                            <Carousel
                                                                addArrowClickHandler
                                                                slidesPerPage={4}
                                                                slidesPerScroll={1}
                                                                animationSpeed={1000}
                                                                autoPlay={2000}
                                                                stopAutoPlayOnHover
                                                                clickToChange
                                                                infinite={true}
                                                            >


<div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nutre.png')} alt='img' />
                                                                    
                                                                    </div>

                                                               
                                                              
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel2.jpg')} alt='img' />
                                                                  
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel1.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel10.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel9.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel4.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel5.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel6.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel7.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel8.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel3.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel11.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel12.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel13.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/rhino.JPG')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel14.jpg')} alt='img' />
                                                                    </div>

                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/dermaviv1.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/roll1.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/roll3.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/rhino2.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nanomask.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nanop.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nano.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/solmst.jpg')} alt='img' />
                                                                    </div>
                                                                  
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nano2.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nano3.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nano4.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nano5.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nano6.jpg')} alt='img' />
                                                                    </div>


                                                            </Carousel>

                                                        </div>
                                                        }

                                                        {matches.large &&
                                                            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor:'#fff' }} >
                                                                <Carousel
                                                                    addArrowClickHandler
                                                                    slidesPerPage={4}
                                                                    slidesPerScroll={1}
                                                                    animationSpeed={1000}
                                                                    autoPlay={2000}
                                                                    stopAutoPlayOnHover
                                                                    clickToChange
                                                                    infinite={true}
                                                                >


                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nutre.png')} alt='img' />
                                                                    
                                                                    </div>

                                                               
                                                              
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel2.jpg')} alt='img' />
                                                                  
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel1.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel10.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel9.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel4.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel5.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel6.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel7.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel8.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel3.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel11.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel12.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel13.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/rhino.JPG')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/angel14.jpg')} alt='img' />
                                                                    </div>

                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/dermaviv1.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/roll1.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/roll3.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/rhino2.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nanomask.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nanop.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nano.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/solmst.jpg')} alt='img' />
                                                                    </div>
                                                                
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nano2.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nano3.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nano4.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nano5.jpg')} alt='img' />
                                                                    </div>
                                                                    <div style={{ backgroundColor: '#fff' }} id='perfume1' >
                                                                        <img id='slid_img' src={require('../../assets/img/nano6.jpg')} alt='img' />
                                                                    </div>

                                                                </Carousel>

                                                            </div>

                                                        }
                                                    </React.Fragment>



                                                )}
                                            </Media>
                                     
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                     
                                        </div>

                                    </div>

                                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', marginBottom: '5%' }} id='video_mindiv'  >
                                        <div style={{ backgroundColor: '#F8F6EA', zIndex: '3', position: 'relative' }} id='whit_div' ></div>
                                        <div style={{ position: 'absolute', width: '100%' }} >
                                            <video id='vid_1' muted autoPlay loop style={{ position: 'relative' }} >
                                                <source src={require('../../assets/video.mp4')} type="video/mp4" />
                                            </video>

                                            <div style={{ width: '100%', position: 'absolute', color: '#fff', height: '150px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }} id='maintext_vid' >
                                                <p id='video_text' >ALL PRODUCTS ARE 100%</p>
                                                <p id='video_text' >AUTHENTIC ORIGINAL BRAND NAMES.</p>

                                            </div>

                                        </div>

                                    </div>

                                    <div id='OurProdectContinerss' style={{ backgroundColor: '#F8F6EA', }}  >

                                        {/* <div id='pop_main' >POPULAR PRODUCTS</div> */}

                                    



      
                                           
                                        <Media queries={{
                                                small: "(max-width: 599px)",
                                                medium: "(min-width: 600px) and (max-width: 1199px)",
                                                large: "(min-width: 1200px)"
                                            }}>
                                                {matches => (
                                                    <React.Fragment>
                                                        {matches.small &&
                                                            <div style={{ width: '100%' }} >
                                                                <Carousel
                                                                    addArrowClickHandler
                                                                    slidesPerPage={1}
                                                                    slidesPerScroll={1}
                                                                    animationSpeed={1000}
                                                                    autoPlay={2000}
                                                                    stopAutoPlayOnHover
                                                                    clickToChange
                                                                    infinite={true}


                                                                >


                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le1.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Mocca' img='le1.jpg' />
                                                                        </div>


                                                                    </div>

                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le2.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Royal Blue' img='le2.jpg' />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le3.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Caramel Stone' img='le3.jpg' />
                                                                        </div>

                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le4.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Burned Cinnamon' img='le4.jpg' />
                                                                        </div>

                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le5.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Ash Gray' img='le5.jpg' />
                                                                        </div>

                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le6.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Warm Gray' img='le6.jpg' />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le7.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Olive Gray' img='le7.jpg' />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le8.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Panther Eye' img='le8.jpg' />
                                                                        </div>

                                                                    </div>

                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le9.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Dark Sepia' img='le9.jpg' />
                                                                        </div>

                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le10.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Crocodile Green' img='le10.jpg' />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le11.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Brown Gold' img='le11.jpg' />
                                                                        </div>
                                                                    </div>

                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le12.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Sky Gray' img='le12.jpg' />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le13.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Hazel Wood' img='le13.jpg' />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le14.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Spanish Late' img='le14.jpg'
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le15.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Desert Rose' img='le15.jpg'
                                                                            />
                                                                        </div>

                                                                    </div>

                                                                </Carousel>

                                                            </div>
                                                        }

                                                        {matches.medium &&
                                                            <div style={{ width: '100%' }} >
                                                                <Carousel
                                                                    addArrowClickHandler
                                                                    slidesPerPage={2}
                                                                    slidesPerScroll={1}
                                                                    animationSpeed={1000}
                                                                    autoPlay={2000}
                                                                    // offset={50}
                                                                    stopAutoPlayOnHover
                                                                    clickToChange
                                                                    infinite={true}
                                                                    // itemWidth={330.5} 
                                                                    backgroundColor='red'

                                                                >


                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le1.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Mocca' img='le1.jpg' />
                                                                        </div>


                                                                    </div>

                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le2.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Royal Blue' img='le2.jpg' />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le3.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Caramel Stone' img='le3.jpg' />
                                                                        </div>

                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le4.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Burned Cinnamon' img='le4.jpg' />
                                                                        </div>

                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le5.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Ash Gray' img='le5.jpg' />
                                                                        </div>

                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le6.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Warm Gray' img='le6.jpg' />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le7.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Olive Gray' img='le7.jpg' />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le8.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Panther Eye' img='le8.jpg' />
                                                                        </div>

                                                                    </div>

                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le9.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Dark Sepia' img='le9.jpg' />
                                                                        </div>

                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le10.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Crocodile Green' img='le10.jpg' />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le11.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Brown Gold' img='le11.jpg' />
                                                                        </div>
                                                                    </div>

                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le12.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Sky Gray' img='le12.jpg' />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le13.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Hazel Wood' img='le13.jpg' />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le14.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Spanish Late' img='le14.jpg'
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le15.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Desert Rose' img='le15.jpg'
                                                                            />
                                                                        </div>

                                                                    </div>

                                                                </Carousel>

                                                            </div>
                                                        }

                                                        {matches.large &&
                                                            <div style={{ width: '100%' }} >
                                                                <Carousel
                                                                    addArrowClickHandler
                                                                    slidesPerPage={4}
                                                                    slidesPerScroll={1}
                                                                    animationSpeed={1000}
                                                                    autoPlay={2000}
                                                                    // offset={50}
                                                                    stopAutoPlayOnHover
                                                                    clickToChange
                                                                    infinite={true}
                                                                    // itemWidth={330.5} 
                                                                    backgroundColor='red'

                                                                >


                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le1.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Mocca' img='le1.jpg' />
                                                                        </div>


                                                                    </div>

                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le2.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Royal Blue' img='le2.jpg' />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le3.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Caramel Stone' img='le3.jpg' />
                                                                        </div>

                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le4.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Burned Cinnamon' img='le4.jpg' />
                                                                        </div>

                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le5.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Ash Gray' img='le5.jpg' />
                                                                        </div>

                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le6.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Warm Gray' img='le6.jpg' />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le7.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Olive Gray' img='le7.jpg' />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le8.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Panther Eye' img='le8.jpg' />
                                                                        </div>

                                                                    </div>

                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le9.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Dark Sepia' img='le9.jpg' />
                                                                        </div>

                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le10.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Crocodile Green' img='le10.jpg' />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le11.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Brown Gold' img='le11.jpg' />
                                                                        </div>
                                                                    </div>

                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le12.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Sky Gray' img='le12.jpg' />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le13.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Hazel Wood' img='le13.jpg' />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le14.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Spanish Late' img='le14.jpg'
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div id='perfume1' >
                                                                        <img id='slid_imglense' src={require('../../assets/img/le15.jpg')} alt='img' style={{ position: 'relative' }} />
                                                                        <div style={{ position: 'absolute' }} >
                                                                            <Mod name='Desert Rose' img='le15.jpg'
                                                                            />
                                                                        </div>

                                                                    </div>

                                                                </Carousel>

                                                            </div>

                                                        }



                                                    </React.Fragment>



                                                )}
                                            </Media>










                                    </div>

                                    <div id='HomeAboutUSContiner' style={{ backgroundColor: '#EDECE8' }}  >
                                        <div style={{ width: '60%', padding: '30px' }} id='te_homr'  >

                                            <div > ABOUT US :  </div>
                                            City of Beauty(COB) is an Iraqi incorporated company that offers a wide range of branded genuine perfumes, skincare, haircare, and lenses to retails end consumers at greatly discounted prices. started with E-Commerce operation,
                                             by choosing top 10 Iraqi fashion bloggers and models to present our brands.
                                            </div>


                                    </div>



                                    <div id='OurProdectContinerss' style={{ backgroundColor: '#F8F6EA', }}  >

                                       

                                       

                                    </div>


                                    <div id='ContactUsContiner'  >
                                        <div id='firstPartContactUs' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >
                                            <iframe id="gmap_canvas"
                                                src="https://maps.google.com/maps?q=%D8%AD%D9%8A%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9&t=&z=13&ie=UTF8&iwloc=&output=embed" style={{ width: '90%', height: '460px', padding: '20', boxShadow: '0px 0px 5px 1px rgba(153, 153, 153, 1)' }}
                                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title='map'></iframe>
                                        </div>
                                        <div id='secondPartContactUs'   >
                                            <input type='text' id='inputCOntactHome' placeholder='email' value={this.state.email} onChange={(e) => {
                                                this.setState({ email: e.target.value })
                                            }} />
                                            <input type='text' id='inputCOntactHome' placeholder='E-mail' value={this.state.subject} onChange={(e) => {
                                                this.setState({ subject: e.target.value })
                                            }} />
                                            <textarea id='areaCOntactHome' placeholder='Message' value={this.state.body} onChange={(e) => {
                                                this.setState({ body: e.target.value })
                                            }} />
                                            <div id='BtnContactUSHome' onClick={() => this.send()}  >Send</div>
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

                            </div>


                        </div>
                    )



                }}
            </Context.Consumer>
        )
    }
}
export default withController(Home);