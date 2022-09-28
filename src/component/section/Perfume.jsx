import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';
import ScrollUpButton from "react-scroll-up-button";
import Footer from '../common/Footer';



class Perfume extends React.Component {
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
                
                    return (
                        <div onLoad={this.handleLoad} id='min1_home1' >
                        <div  id='mainCont1' >
                        <div id='mainEquContiner_cate'  >
                            <div id='apfot'>
                                <Nav2 />


                                <div style={{ backgroundColor: '#fff', width: '100%', boxShadow: '#e0ddddd6 2px 5px 6px 1px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={require('../../assets/img/5.png')} style={{ height: '100px' }} alt='img' />

                                </div>



                                <div id='section1_s'>






                                    <div id='OurProdectContiners1'>


                                        <div style={{ width: '100%' }} id='vesta_backgroundimg' >

                                        </div>


                                        <Row style={{ marginRight: 0, width: '100%', marginBottom: '5%', marginTop: '8%' }}>
                                            <Col xs={12} md={7} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                                                <div className='heading mt20' style={{color:'#d39325'}} >VESTA Sweet Vanilla Perfume </div>
                                                {/* <div className='mt30'>FACE AND BODY VERY HIGH PROTECTION </div> */}
                                                <p id='vest10'  > Wear your heart on your sleeve with every spritz of  vesta for women,
                                                Designed to capture the attention of everyone you encounter,designed for romantic, younger women,
                                                The gentle base notes complete this feminine fragrance with amber, musk and subtle vanilla.</p>


                                                


                                            </Col>

                                            <Col xs={12} md={5}>
                                                <img src={require('../../assets/img/vesta.jpg')} alt='img' style={{width:'100%'}} />
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
export default withController(Perfume);