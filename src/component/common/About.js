import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';
import ScrollUpButton from "react-scroll-up-button";
import Footer from '../common/Footer';


class About extends React.Component {
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
                        <div >
                            <div >


                                <Nav2 />


                                <div id='main_about1'  style={{
                                    paddingBottom: '5%', width: '100%', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', flexDirection: 'column',
                                }}  >
                                    <div  id='ab_out' style={{
                                        marginTop: '2%', height: '100px', width: '85%', color: '#A60023', borderRadius: '10px',lineHeight:'40px'
                                       ,fontSize: '40px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        // backgroundColor: '#00bcd1',
                                    }}  >
                                        ABOUT US
</div>


                                </div>


                                <div >

                                    <div id='OurProdectContiner_about'  >
                                        <p id='OurProdectTitle1'>Who We Are</p>
                                        <Row style={{ display: 'flex', flexDirection: 'column', paddingLeft: '8%', width: '85%', marginRight: 0 }}  >
                                            <div style={{ width: '100%', borderLeft: '5px solid #EEEEEE', paddingLeft: '2%' }}  >
                                                <div id='text_abouts' >City of Beauty(COB) is an Iraqi incorporated company that offers a wide range of branded genuine perfumes, skincare, haircare, and lenses to retails end consumers at greatly discounted prices. started with E-Commerce operation, 
                                                by choosing top 10 Iraqi fashion bloggers and models to present our brands.</div>
                                                {/* <div id='text_abouts' >We have supplied all around Iraqi province. Our staff has many Experience in medical equipment. www.almayariq.com</div>
                                                <div id='text_abouts'  > Committed to the highest standards of service and quality. </div> */}

                                                <div id='text_abouts' style={{ paddingTop: '2%' }} >
                                                City of Beauty (COB) has established the main outlet in Iraq, Baghdad since 2017, and has conducted many sale
                                                 and roadshow in various shopping malls. Due to the modern marketing strategy by engaging marketing expert.     </div>
                                                 <p id='OurProdectTitle1' style={{paddingLeft:0}}  >Why Choose Us?</p>

                                                <div id='text_abouts' style={{ paddingTop: '2%' }}  >
                                                City of Beauty(COB), we only deliver 100% authentic perfumes، skincare & cosmetics to our customers. 
                                         </div>

                                                <div id='text_abouts' style={{ paddingTop: '1%' }}  >
                                                We are a genuine perfume, skincare, haircare, and lenses retailer that have work hard over the years to earn the trust and support from our customers. Currently, 
                                                we have close to 7500 Instagram Followers.
                                         </div>
                                                <div id='text_abouts' style={{ paddingTop: '1%' }}  >
                                                We pride ourselves in delivering outstanding service to our customers, whether they choose to shop in one of 500 stores, or online over the phone our friendly team ready to help and guide the customer the perfect product.
                                         </div>
                                            </div>
                                        </Row>
                                    </div>




                                    <div style={{ width: '100%' }} >

                                        <Row id='About_row' style={{
                                            display: 'flex', backgroundColor: 'rgb(45, 48, 48)'
                                            , marginRight: 0,marginBottom:50
                                        }}  >

                                            <Col xs={12} md={6} id='about_col1' >
                                                <div id='about_div1' >
                                                   <i className="fab fa-telegram-plane" style={{ fontSize: '60px', color: '#fff', lineHeight: '100px' }}  ></i>  
                                                    <p style={{ fontSize: '30px', lineHeight: '40px' }}  >Our Mission</p>
                                                    <div style={{ textAlign: 'center', padding: '10px' }} >


                                                        To become a market leader and always consider that almayar core inspiration is
                                                         to have a positive impact toward patients’ life.
                                                        We are extremely attentive towards our clients’ needs and patients’ suggestions
                                                        Care for a healthy and beautiful life. And develop healthcare equipment which are beneficial to the user and ultimately to the patient by the way of advancement in technology at optional price.
                                                        
                                                                    </div>
                                                       </div>

                                                      </Col>


                                            <Col xs={12} md={6} id='about_col1' >
                                                <div id='about_div1' >
                                                 <i className="far fa-eye" style={{ fontSize: '60px', color: '#fff', lineHeight: '100px' }}  ></i>  
                                                    <p style={{ fontSize: '30px', lineHeight: '40px' }}  >Our Vision</p>
                                                    <div style={{ textAlign: 'center', padding: '10px' }} >


                                                        Reaching the top is one thing, staying on top is the challenge and we
                                                        know the key factor of reaching the climax and sating on it.
                                                        To continue planning, in advance, to raise the level of our services in future.To build long term and value added customer base.
                                                        We are expanding our horizon to seek new markets and long term business relationship at national and international level
                                                        
</div>
                                                </div>

                                            </Col>



                                        </Row>
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
export default withController(About);