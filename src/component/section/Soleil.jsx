import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';
import Footer from '../common/Footer';
import ScrollUpButton from "react-scroll-up-button";
import Panels from '../common/Panels';


class Soleil extends React.Component {
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


                                <div style={{ backgroundColor: '#fff', width: '100%', boxShadow: '#e0ddddd6 2px 5px 6px 1px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={require('../../assets/img/6.png')} alt='img'  style={{ height: '100px' }} />

                                </div>



                                <div id='section1_s'>






                                    <div id='OurProdectContiners1'>


                                        <div style={{ width: '100%' }} id='sol_backgroundimg' >

                                        </div>


                                        <Row style={{ marginRight: 0, width: '100%', marginBottom: '5%', marginTop: '8%' }}>
                                            <Col xs={12} md={7} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                                                <div className='heading mt20' style={{color:'#fea505'}} >SOLEIL SUN SCREEN CREAM </div>
                                                <div className='mt30'>FACE AND BODY VERY HIGH PROTECTION </div>
                                                <p className='mt10'>Aqua, Laurus Nobills Leal
                                                Olycerin Maris Aqua, Sodium Benoe
                                                aytne Glycol, Potassium Sorbate OMOM
                                                         y Eucommia Ulmoides
                                                       Edact Panthenol, Citric
                                                                  NGen</p>


                                                <div style={{ width: '70%' }}>
                                                    <Panels benefit='FACE AND BODY VERY HIGH PROTECTION' ingred=' Aqua, Laurus Nobills Leal
Olycerin Maris Aqua, Sodium Benoe
aytne Glycol, Potassium Sorbate OMOM
y Eucommia Ulmoides
Edact Panthenol, Citric
NGen' direction=' Apply plenty of product to the skin before sun
exposure. Wait until the product is absorbed. In order o
maintain the sun prolection, especially ater sweat, swim or
towel usage, repeat the application process again. Protect
your skin without leaving a greasy effect or an unwarted
color cast while maintaining a radiant skin.' />
                                                </div>


                                            </Col>

                                            <Col xs={12} md={5}>
                                                <img src={require('../../assets/img/sol.png')} alt='img' style={{width:'100%'}} />
                                            </Col>

                                        </Row>
                                        
                                        <Row style={{ marginRight: 0, width: '100%', marginBottom: '5%', marginTop: '8%' }}>
                                            <Col xs={12} md={7} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                                                <div className='heading mt20'>SOLEIL FACE THERMAL WATER </div>
                                                <div className='mt30'> ALL SKIN TYPES </div>
                                                <p className='mt10'> REVITALIZES & NOURISHES WITH LAUREL LEAF WATER  ULTRA HEAT PROTECTION  </p>


                                                <div style={{ width: '70%' }}>
                                                    <Panels benefit='revitalizes & nourishes with laurel leaf water ulter heat protection' ingred='Aqua, Laurus Nobills Leal Olycerin Maris Aqua, Sodium Benoe aytne Glycol, Potassium Sorbate OMOMy Eucommia Ulmoides Edact Panthenol, Citric NGen'
                                                     direction='Spray *
                                                     aroximately 20 cm from the skin. Wait for a
                                                     seconds to dry'  />
                                                </div>


                                            </Col>

                                            <Col xs={12} md={5}>
                                                <img src={require('../../assets/img/sara.png')} alt='img' style={{width:'100%'}} />
                                            </Col>

                                        </Row>











                                        <Row style={{ marginRight: 0, width: '100%', marginBottom: '5%', marginTop: '8%' }}>
                                            <Col xs={12} md={6} >
                                                <div style={{ width: '100%', display: 'flex' }} >
                                                    <div style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                                                        <img src={require('../../assets/img/solel2.webp')} alt='img' style={{ width: '70%' }} />
                                                        <p style={{ fontSize: '13px', color: '#1c1b1b', lineHeight: '21px', padding: 20 }}  >RED ALGAE helps the skin defend against environmental
                                                         damage and increases moisture-retention, creating a fresh and dewy complexion.</p>
                                                    </div>

                                                    <div style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                                                        <img src={require('../../assets/img/solel3.webp')} alt='img' style={{ width: '70%' }} />
                                                        <p style={{ fontSize: '13px', color: '#1c1b1b', lineHeight: '21px', padding: 20 }}  >ASCORBYL PALMITATE this form of vitamin C is readily
                                                         absorbed into the skin, delivering potent antioxidant protection that promotes a more even skin tone.</p>
                                                    </div>



                                                </div>


                                                <div style={{ width: '100%', display: 'flex' }} >
                                                    <div style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                                                        <img src={require('../../assets/img/solel4.webp')} alt='img' style={{ width: '70%' }} />
                                                        <p style={{ fontSize: '13px', color: '#1c1b1b', lineHeight: '21px', padding: 20 }}  >BISABOLOL is a powerful extract from chamomile, this valuable
                                                        skin soother calms and moisturizes the skin.</p>
                                                    </div>

                                                    <div style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                                                        <img src={require('../../assets/img/solel5.webp')} alt='img' style={{ width: '70%' }} />
                                                        <p style={{ fontSize: '13px', color: '#1c1b1b', lineHeight: '21px', padding: 20 }}  >VITAMIN E is vital in protecting skin cells from ultra violet light,
                                                         pollution, and other elements that produce cell-damaging free radicals.</p>
                                                    </div>



                                                </div>


                                            </Col>


                                            <Col xs={12} md={6} >
                                                <img src={require('../../assets/img/solel1.webp')} alt='img' style={{ width: '100%' }} />

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
export default withController(Soleil);