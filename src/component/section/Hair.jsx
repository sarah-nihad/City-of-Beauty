import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';
import Footer from '../common/Footer';

import { Link } from 'react-router-dom';


class Hair extends React.Component {
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
                        <div  id='min1_home1' >
                        <div  id='mainCont1' >
                        <div id='mainEquContiner_cate'  >
                            <div id='apfot'>
                                <Nav2 />
                                <div id='section1_s'>
                                    <div id='OurProdectContiners1'>
                                        <Row id='RowOurProdect' style={{ marginTop: '5%' }} >
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}   >
                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' onClick={()=>window.location.href='/Angel?id=1' }   >
                                                    {/* <Link to='/Angel' style={{ display: 'flex', justifyContent: 'center' }}  > */}
                                                        <img src={require('../../assets/img/angel_logo.png')} alt='img' style={{ position: 'relative', width: '90%' }} />
                                                        {/* </Link> */}
                                                </div>
                                            </Col>

                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}   >
                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <Link to='/Nano' style={{ display: 'flex', justifyContent: 'center' }}  ><img src={require('../../assets/img/4.png')} alt='img' style={{ position: 'relative', height:150 }} /></Link>
                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}   >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <Link to='/RhinoHair' style={{ display: 'flex', justifyContent: 'center' }}  ><img src={require('../../assets/img/rhino.png')} alt='img' style={{ position: 'relative', width: '90%' }} /></Link>

                                                </div>

                                            </Col>




                                        </Row>
                                    </div>





                                </div>






                            </div>
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
export default withController(Hair);