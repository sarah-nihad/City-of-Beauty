import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';
import Footer from '../common/Footer';
import ScrollUpButton from "react-scroll-up-button";
import AngelMod from '../common/AngelMod';


class Angel extends React.Component {
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
                                


                                <div style={{ width: '100%', boxShadow: '#e0ddddd6 2px 5px 6px 1px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={require('../../assets/img/angel_logo.png')} alt='img' />

                                </div>



                                <div id='section1_s'>






                                    <div id='OurProdectContiners1'>


                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>

                                        </div>
                                        <div style={{ width: '100%' }} id='angel_backgroundimg' >
                                            <div className='never_had_beforeangel' style={{marginTop:0}} >
                                                <div>
                                                    Treat yourself to award-winning, luxury hair care at an affordable price. Angel products combine quality
                                                    ingredients and the latest technology to ensure top performance and flawless results with every style.
                                                </div>

                                            </div>
                                        </div>

                                        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minHeight: '500px', backgroundColor: '#fff' }}  >
                                            <div className='bottom_txt_inner'  >
                                                <h1>
                                                    It is very easy to produce High quality products at High cost;
                                                     Our challenge is to produce High quality products at Low cost.</h1>
                                                <p style={{padding:10}}>
                                                    Our mission statement has placed 'Angel Haircare' as one of the most growing brands of professional cosmetics.
                                                </p>
                                                <p style={{padding:10}}>All our stakeholders are astound by the positive results obtained by this price/quality oriented brand.
                                                    It is not just the big number of hairdressing salons that make us amongst the best,
                                                     but also by top hair-stylists who use and recommend Angel Haircare internationally.</p>
                                                <p style={{padding:10}} > We currently supply the full range of Angel Professional Hair Products. All our products, are tested by our team of professionals, before being put in our product portfolio,
                                                         so our customers can put their mind at rest about the quality of the product. </p>
                                            </div>



                                        </div>

                                        <Row id='RowOurProdect' style={{ marginTop: '5%', marginRight: 0 }} >

                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >
                
                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/angel1.jpg')} alt='img' style={{ position: 'relative', width: '100%' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Helichrysum revitalizing shampoo' img='angel1.jpg' desciption='Professionally formulated for dry, damaged or frizzy hair,
                                                         this shampoo contains helichrysum essence and vitamin A, E which can effectively prevent UVA and UVB damage while repairing the damaged areas of hair shaft.
                                                          Helichrysum moisturizing essence penetrates into the hair shaft to create a barrier for repairing dry,
                                                         colored or chemically treated hair, reviving the hair back to its natural shine and elasticity' usage='Wet hair and apply shampoo, gently working lather into scalp and hair. Rinse thoroughly.
                                                          For best results, follow with Helichrysum Revitalizing Conditioner.'
                                                        />
                                                    </div>
                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/angel2.jpg')} alt='img' style={{ position: 'relative', width: '100%' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Helichrysum pure nourishing hair mask' img='angel2.jpg' desciption='Enriched with helichrysum active ingredient with antistatic properties to thoroughly alleviate the irritation to scalp while rejuvenating and revitalizing damaged hair caused by hot styling tools and environmental elements leaving hair refreshing, lustrous and easy for styling. 
                                                        Containing shea butter to deep condition and nourish each hair for a vibrant and healthy look.'
                                                          usage='After shampooing, apply an appropriate amount on to palm. Rub hand together and massage evenly from roots to ends. For the best results, use steam or cover hair with a hot towel.
                                                           Leave in for 5-10 minutes. Rinse thoroughly.'
                                                        />
                                                    </div>
                                               
                                               
                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/angel3.jpg')} alt='img' style={{ position: 'relative', width: '100%'}} />
                                               
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Helichrysum revitalizing shampoo' img='angel3.jpg' desciption='Professionally formulated for dry, damaged or frizzy hair, this shampoo contains helichrysum essence and vitamin A, E which can effectively prevent UVA and UVB damage while repairing the damaged areas of hair shaft. Helichrysum moisturizing essence penetrates into the hair shaft to create a barrier for repairing dry, colored or
                                                         chemically treated hair, reviving the hair back to its natural shine and elasticity.'
                                                          usage='Wet hair and apply shampoo, gently working lather into scalp and hair. Rinse thoroughly. For best results, follow with Helichrysum Revitalizing Conditioner'
                                                        />
                                                    </div>
                                               
                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/angel4.jpg')} alt='img' style={{ position: 'relative', width: '100%' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Rosemary hair activating conditioner' img='angel4.jpg' desciption='Containing rosemary essence to effectively help improve the microcirculation of scalp, enhancing the penetrating ability of hair follicles to supplement sufficient nutrients and improve activity of hair follicles. Reconstructs hair cells and supplies essential protein to hair, deeply nourishing roots 
                                                        to prevent hair loss while repairing damaged hair, leaving hair strong, vibrant and healthy.' 
                                                         usage='Work conditioner thoroughly through wet hair, for deeper conditioning, leave in for 3-5minutes.  Rinse out.'
                                                        />
                                                    </div>
                                               
                                                </div>

                                            </Col>
                
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}>
                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/angel6.jpg')} alt='img' style={{ position: 'relative', width: '100%'}} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Rosemary activating regrowth essence' img='angel6.jpg' desciption='Enriched with rosemary essence, ginger and perilla extract to effectively activate the microcirculation of the scalp, enhancing the penetrating ability of hair follicles to supplement nutrients and improve follicle activity. Helps reconstruct hair cells and nourish roots to prevent hair loss while effectively 
                                                        repairing damaged follicles, giving a dense, healthy and vigorous head of hair.'
                                                          usage='Towel dry the scalp after cleansing, take 2-3 pumps of this essence and evenly apply onto the scalp and hair. Gently message with fingertips using spiral movement for 3-5. It is suggested
                                                           to use once every two days and keep using for 8 weeks.minutes. Leave in.'
                                                        />
                                                    </div>
                                                </div>

                                            </Col>

                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}>
                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/angel7.jpg')} alt='img' style={{ position: 'relative', width: '100%'}} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Rosemary hair activating Shampoo' img='angel7.jpg' desciption= 'Containing rosemary essence to effectively help improve the microcirculation of scalp, enhancing the penetrating ability of hair follicles to supplement sufficient nutrients and improve activity of hair follicles. Reconstructs hair cells and supplies essential protein to hair, deeply nourishing roots to prevent hair loss while repairing damaged hair, leaving hair strong, vibrant and healthy.'
                                                          usage='Wet hair and apply shampoo, gently working lather into scalp and hair. Rinse thoroughly. 
                                                          For best results, follow with Rosemary Hair Activating Conditioner.'
                                                        />
                                                    </div>
                                                </div>

                                            </Col>
                                          
                                           
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/angel10.jpg')} alt='img' style={{ position: 'relative', width: '100%' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Grapefruit straighten treatment cream' img='angel10.jpg' desciption='Specially designed for frequently bleached, colored and chemically treated hair. Containing grapefruit extract, this treatment can restore hair back to its healthy PH value, maintaining hair color and straight feel. Vitamin C added to deeply nourish and repair damaged hair,
                                                         leaving hair soft, delicate, straight and with a natural glow.' usage='After shampooing, apply an appropriate amount on to palm. Rub hand together and massage evenly from roots to ends. For the best results, 
                                                         use steam or cover hair with a hot towel. Leave in for 5-10 minutes. Rinse thoroughly.'
                                                        />
                                                    </div>
                                                
                                                
                                                </div>

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
export default withController(Angel);