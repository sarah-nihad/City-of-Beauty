import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';
import Footer from '../common/Footer';
import ScrollUpButton from "react-scroll-up-button";
import Panels from '../common/Panels';


class RhinoSkin extends React.Component {
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
                                    <img src={require('../../assets/img/rhino.png')} alt='img' style={{height:100}} />

                                </div>



                                <div id='section1_s'>






                                    <div id='OurProdectContiners1'>


                                        <div style={{ width: '100%' }}  >
<img src ={require('../../assets/img/roll.jpg')}  style={{ width: '100%',position:'relative' }} alt='img'  />

<div style={{position:'absolute'}} id='text_rhino' >Everyone should be able to enjoy the good things in life without having to worry 
about small problems like white marks on black clothes and yellow stains on white
     clothes and that’s why we have designed Rhino to protect you and your clothes</div>

                                        </div>

                           
                                        <Row style={{ marginRight: 0, width: '100%',marginBottom:'5%',marginTop:'8%' }}>
                                            <Col xs={12} md={7} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                                                <div className='heading mt20' style={{color:'#af0893'}}  >RHINO STRENGTHENED FORMULATION</div>
                                                <div className='mt30'>48 HOURS ANTI-TRANSPIRANT </div>
                                            

                                                  <div style={{width:'70%'}}>
                                                  <Panels benefit='Anti-shivering and refreshing formula that eliminates sweat and odor leaving you confident and refreshed all day long.'
                                                  ingred='Aqua,Alcohol Denat,Parfum,PEG-40, HydrogennatedCastor Oil, Trideceth-9, Hydroxyethyl Cellosize, PPG-20 Methyl Glucose Ether, Ethythexylglicerin, DMDM Hydantion.'
                                                  direction='Allow to dry before dressing. do not apply on sore or damaged skin' />
                                                  </div>


                                            </Col>

                                            <Col xs={12} md={5}>
                                                <img src={require('../../assets/img/rh.jpg')} alt='img' style={{width:'100%'}} />
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
export default withController(RhinoSkin);