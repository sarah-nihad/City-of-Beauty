import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';
import Footer from '../common/Footer';
import ScrollUpButton from "react-scroll-up-button";
import Panels from '../common/Panels';


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
                        <div onLoad={this.handleLoad} id='min1_home1' >
                            <div id='mainCont1' >
                                <div id='mainEquContiner_cate'  >
                                    <div id='apfot'>
                                        <Nav2 />


                                        <div style={{ backgroundColor: '#e4a258', width: '100%', boxShadow: '#e0ddddd6 2px 5px 6px 1px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <img src={require('../../assets/img/derma_logo.jpg')} alt='img' />

                                        </div>



                                        <div id='section1_s'>






                                            <div id='OurProdectContiners1'>


                                                <div style={{ width: '100%' }} id='derma_backgroundimg' >

                                                </div>


                                                <Row style={{ marginRight: 0, width: '100%', marginBottom: '5%', marginTop: '8%' }}>
                                                    <Col xs={12} md={7} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                                                        <div className='heading mt20' style={{ color: '#249655' }}  >DERMAVIVE HYDRA CLEANSER</div>
                                                        <div className='mt30'>Soap free cleanser for all skin types </div>
                                                        <p className='mt10'>A soap free cleanser that provides safe, effective and
                                                        gentle cleansing for all skin types in all
                                                        skin conditions. This pH balanced cleanser will prevent essential oils and moisture being
                                                        stripped from your skin while cleansing.</p>

                                                        <div style={{ width: '70%' }}>
                                                            <Panels benefit='pH Balanced , 
Soap Free Formula 
 , Suitable for all skin types , 
Soothing and gentle on skin'  ingred='Natural Colloidal Oatmeal, Sodium PCA, Citric Acid, Glycerin' direction='Apply a sufficient amount onto wet skin and then gently massage covering entire face.
Rinse ensuring cleanser has been cleared.' />
                                                        </div>


                                                    </Col>

                                                    <Col xs={12} md={5}>
                                                        <img src={require('../../assets/img/dermaviv1.jpg')} alt='img' style={{ width: '85%' }} />
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
                            </div></div>


                    )
                    // }




                }}
            </Context.Consumer>
        )
    }
}
export default withController(Dermavive);