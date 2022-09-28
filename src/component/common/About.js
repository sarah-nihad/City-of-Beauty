import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row,Col  } from 'react-bootstrap';
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
                        <div  id='min1_home1' >
                        <div  id='mainCont1' >
                        <div style={{backgroundColor:'#fff'}} >
                            <div  >


                                <Nav2 />


                                <div id='main_about1'  style={{
                                    paddingBottom: '5%', width: '100%', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', flexDirection: 'column',
                                }}  >
                                    <div  id='ab_out' style={{marginTop: '2%', height: '100px', width: '85%', color: '#A60023', borderRadius: '10px',lineHeight:'40px'
                                       ,fontSize: '40px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontFamily:'Playball'
                                      }}  >
                                        ABOUT US
                                     </div>


                                </div>


                                <div >

                                    <div id='OurProdectContiner_about'  >
                                    
                                        <Row style={{ display: 'flex', flexDirection: 'column', paddingLeft: '8%', width: '85%', marginRight: 0,marginBottom:'5%' }}  >
                                            <div style={{ width: '100%', borderLeft: '5px solid #EEEEEE', paddingLeft: '2%' }}  >
                                            <p id='OurProdectTitle1'  style={{paddingLeft:0,paddingTop:0,fontFamily:'Playball'}}   >Who We Are</p>
                                                <div id='text_abouts' >City of Beauty(COB) is an Iraqi incorporated company that offers a wide range of branded genuine perfumes, skincare, haircare, and lenses to retails end consumers at greatly discounted prices. started with E-Commerce operation,
                                                 by choosing the top 10 Iraqi fashion bloggers and models to present our brands.</div>
                     

                                                <div id='text_abouts' style={{ paddingTop: '2%' }} >
                                                City of Beauty (COB) has established the main outlet in Iraq, Baghdad since 2017, and has conducted many sales and roadshows in various shopping malls.
                                                 Due to the modern marketing strategy by engaging a marketing expert.         </div>
                                                 <p id='OurProdectTitle1' style={{paddingLeft:0,fontFamily:'Playball'}}  >Why Choose Us?</p>

                                                <div id='text_abouts' style={{ paddingTop: '2%' }}  >
                                                City of Beauty(COB), we only deliver 100% authentic perfumes، skincare & cosmetics to our customers. 
                                         </div>

                                                <div id='text_abouts' style={{ paddingTop: '1%' }}  >
                                                We are a genuine perfume, skincare, haircare, and lens retailer that has work hard over the years to earn the trust and support from our customers. 
                                                Currently, we have close to 7500 Instagram Followers.
                                         </div>
                                                <div id='text_abouts' style={{ paddingTop: '1%' }}  >
                                                We pride ourselves in delivering outstanding service to our customers, whether they choose to shop in one of 500 stores, or online over the phone our friendly team ready to help and guide the customer the perfect product.
                                         </div>
                                            </div>
                                        </Row>
                                    </div>




                                    <div style={{ width: '100%' }} >

                                    <Row id='About_row' style={{
                                            display: 'flex'
                                            , marginRight: 0,marginBottom:50,padding:'30px'
                                        }}  >

                                            <Col xs={12} md={6} id='about_col1' >
                                                <div id='about_div1' >
                                                   <i className="fab fa-telegram-plane" style={{ fontSize: '60px', color: 'rgb(166, 0, 35)', lineHeight: '100px' }}  ></i>  
                                                    <p style={{ fontSize: '30px', lineHeight: '40px',fontFamily:'Playball' }}  >Our Mission</p>
                                                    <div style={{ textAlign: 'center', padding: '25px' }} >
                                                      To continuously grow our knowledge and experience in the application of the beauty world, share creative solutions, 

                                                      To develop cosmetic products that help the customer meet the highest quality standards

                                                      To ensure the complete satisfaction and well-being of our clients, introducing high-performance cosmetics and promoting innovation, maximum efficiency.


                                                        
                                                    </div>
                                                </div>

                                                      </Col>


                                            <Col xs={12} md={6} id='about_col1' >
                                                <div id='about_div1' >
                                                 <i className="far fa-eye" style={{ fontSize: '60px', color: 'rgb(166, 0, 35)', lineHeight: '100px' }}  ></i>  
                                                    <p style={{ fontSize: '30px', lineHeight: '40px' ,fontFamily:'Playball'}}  >Our Vision</p>
                                                    <div style={{ textAlign: 'center', padding: '25px' }} >
                                                  To be the most influential cosmetic company in middle east
                                                  What drives us is sharing the knowledge to make great products getting greater.
	                                              To be a company recognized by the quality of our beauty products
                                                  And women shine their beauty from inside out.
                                                  To be the obvious choice and preferred suppliers of top quality Beauty technology.
                                                     
                                                </div>
                                                </div>

                                            </Col>
                                        </Row>




                                        <div id='OurProdectContiner_about'  >
                                      
                                        <Row style={{ display: 'flex', flexDirection: 'column', paddingLeft: '8%', width: '85%', marginRight: 0 }}  >
     
                                            <div style={{ width: '100%', borderLeft: '5px solid #EEEEEE', paddingLeft: '2%' }}  >
                                            <p id='OurProdectTitle1' style={{paddingLeft:0,paddingTop:0,fontFamily:'Playball'}}   >Youth Beauty is committed to showing you how to:</p>
                                                <div id='text_abouts' >Work Smarter - earning greater levels of income in a shorter period of time
Maximize the use of their employee resources

                                                                           </div>
                     

                                                <div id='text_abouts' style={{ paddingTop: '1%' }} >
                                                Create an unforgettable and compelling experience for customers with indisputable results.    </div>
                                                
                                                
                                                 <p id='OurProdectTitle1' style={{paddingLeft:0,fontFamily:'Playball'}}  >Our Core Values</p>

                                                <div id='text_abouts' style={{ paddingTop: '2%' }}  >
                                                We have a passion for providing our customers with the very best products, 
                                         </div>

                                                <div id='text_abouts' style={{ paddingTop: '1%' }}  >
                                                We work hard to deliver excellence in everything we do 
                                         </div>
                                                <div id='text_abouts' style={{ paddingTop: '1%' }}  >
                                                We are always open to new brand that fits to our standards.
                                         </div>
                                            </div>
                                        </Row>
                                    </div>

<div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
    <div style={{color:'#A60023',textAlign:'center',fontWeight:'500',fontSize:'30px'}} >
    <p style={{fontFamily:'Playball'}} >SUCSESS FACTOR </p>
    <p style={{fontFamily:'Playball'}} >FOCUS ON SERVICE & RESULTS</p>
    </div>

    <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}} id='colbout'  >
        <p style={{width:'68%'}} >
            
        Understanding the needs and wants of our customers is an ongoing and ever-changing process,
         our reliable and dedicated field force are the key in this area. To ensure we cater to their needs and requirements,
          we are in regular
         touch with the medical fraternity, we have established a great team to handle excellent customer service.

        </p>
        <div style={{width:'20%',display:'flex',alignItems:'center',justifyContent:'center'}}  >
            <img src={require('../../assets/img/reliability.png')} alt='img' style={{height:'115px'}} />
        </div>


    </div>

</div>



<div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
    <div style={{color:'#A60023',textAlign:'center',fontWeight:'500',fontSize:'30px'}} >
    <p style={{fontFamily:'Playball'}} >ONE OF OUR STRENGTH AND OUR PASSION</p>
    <p style={{fontFamily:'Playball'}}>SKIN</p>
    </div>

    <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}} id='colbout'  >
    <div style={{width:'20%',display:'flex',alignItems:'center',justifyContent:'center'}}  >
            <img src={require('../../assets/img/icon3.png')} alt='img' style={{height:'115px'}} />
        </div>
       
       
        <div style={{width:'68%'}} >
            <p>
            Since our establishment in 2017, Iraq has strived to make products that make the skin happy because we believe healthy skin is happy skin.
We believe skincare products of creative freedom.


            </p>
            <p>The products that we choose are made with a purpose in mind, solving real needs for both patients and dermatologists. For the patients, the products are easy to use and are gentle to the skin but effective on the problem. For the dermatologist,
                 the products we focus on have non-toxic ingredients and are safe formulations that will cause no side effects.</p>
            
<p>The products that we carry solve real needs for both patients and dermatologist which leads
     to high patient satisfaction.</p>

        </div>
     


    </div>

</div>



<div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
    <div style={{color:'#A60023',textAlign:'center',fontWeight:'500',fontSize:'30px'}} >
    <p style={{fontFamily:'Playball'}}>HAIR </p>

    </div>

    <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}} id='colbout'  >
        <p style={{width:'68%'}} >
        We've searched high and low for the best hair care products on the market to make sure that every day is a good hair day. Our hair has to deal with a lot... The sun, coloring, and styling. Choosing a range of hair care
         products will help restore the hair’s natural health and the variety of brands that we carry a must-have product!

        </p>
        <div style={{width:'20%',display:'flex',alignItems:'center',justifyContent:'center'}}  >
            <img src={require('../../assets/img/icon1.png')} alt='img' style={{height:'115px'}} />
        </div>


    </div>

</div>




<div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
    <div style={{color:'#A60023',textAlign:'center',fontWeight:'500',fontSize:'30px'}} >
    <p style={{fontFamily:'Playball'}}>CONTAC LEANSE </p>

    </div>
   
    <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}} id='colbout'  >
    <div style={{width:'20%',display:'flex',alignItems:'center',justifyContent:'center'}}  >
            <img src={require('../../assets/img/icon2.png')} alt='img' style={{height:'115px'}} />
        </div>
        <p style={{width:'68%'}} >
        Comfort & Quality  
        When we talk about lenses we are talking about one of the exotic product in the fashion world 
(COB) select brands over the top and gain customer trust.   



        </p>
      


    </div>

</div>


<div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:'5%'}} >
    <div style={{color:'#A60023',textAlign:'center',fontWeight:'500',fontSize:'30px'}} >
    <p style={{fontFamily:'Playball'}}>Perfume </p>

    </div>

    <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}} id='colbout' >
        <p style={{width:'50%'}} >
        The brands talk and our smart way in marketing strategy and distribution take the place.

        </p>
        <div style={{width:'20%',display:'flex',alignItems:'center',justifyContent:'center'}}  >
            <img src={require('../../assets/img/icon4.png')} alt='img' style={{height:'115px'}} />
        </div>


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

                            </div>

</div></div>
                        </div>
                    )

                               
                            
                }}
            </Context.Consumer>
        )
    }
}
export default withController(About);