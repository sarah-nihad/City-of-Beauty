import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';
import ScrollUpButton from "react-scroll-up-button";
import Footer from '../common/Footer';

import Panels from '../common/Panels';



class RhinoHair extends React.Component {
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
                                    <img src={require('../../assets/img/rhino.png')}  style={{height:100}}  alt='img' />

                                </div>



                                <div id='section1_s'>






                                    <div id='OurProdectContiners1'>


                                        <div style={{ width: '100%' }} id='rhino1_backgroundimg' >

                                        </div>

                           
                                        <Row style={{ marginRight: 0, width: '100%',marginBottom:'5%',marginTop:'8%' }}>
                                            <Col xs={12} md={7} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                                                <div className='heading mt20'>RHINO FULL REPAIR HAIR CARE MOUSSE</div>
                                                <div className='mt30'>SHINE EFFECT FOR ALL HAIR TYPE </div>
                                                {/* <p className='mt10'>A soap free cleanser that provides safe, effective and
                                                 gentle cleansing for all skin types in all
                                                   skin conditions. This pH balanced cleanser will prevent essential oils and moisture being
                                                        stripped from your skin while cleansing.</p> */}

                                                  <div style={{width:'70%'}}>
                                                  <Panels benefit='Mousse-Relives and moisturines hair 
                                                                      ends with its light formula while adding extra 
                                                                      setnes and ensuring more shine without making  scent!.'
                                                  ingred=' Aqua, Octyldodecanol, Butne Behentino
                                                  Oieride, PEG-12 Dimethicone, Parfum, CeyAlol Sd
                                                  Cocamphoacetate, Phenoxyethanol, Hydlyd Mik P
                                                  Panthenal, Propylene Glycol, Propane Eyhel
                                                  butane,Tocopheryl Acetate, Amyl ly Aa
                                                  elll, Hexyl Cinnamal, Limonene,
                                                  ALMAOSAD'
                                                  direction='Hold the bottle 
                                                  and shake really well before use, spray some from in
                                                  pai of your hands and distribute it into in your
                                                  evenly, use it on wet hair for best results. You may
                                                  Blow-dryer to shape your hair locks afterwards.' />
                                                  </div>


                                            </Col>

                                            <Col xs={12} md={5}>
                                                <img src={require('../../assets/img/rhino.JPG')} alt='img' style={{width:'100%'}} />
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
export default withController(RhinoHair);