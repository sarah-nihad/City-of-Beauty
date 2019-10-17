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
                                                        <AngelMod name='Helichrysum wakening hydration cream' img='angel3.jpg' desciption='Enriched with helichrysum and other botanical extracts to nourish the hair from within, our unique leave-in formula can enhance UV ray protection of hair and prevent dryness, frizz and split ends caused by environmental damage. 
                                                        Easy to be applied and absorbed by hair from ends to roots.'
                                                          usage='Apply a small amount into palm, rub hands together and distribute evenly through towel-dried or dry hair. Leave-in.'
                                                        />
                                                    </div>
                                               
                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/angel4.jpg')} alt='img' style={{ position: 'relative', width: '100%' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Helichrysum shine styling wax' img='angel4.jpg' desciption='Creates versatile hairstyles with long lasting hold and distinct texture within seconds. Suitable for any type of hair,
                                                         you can instantly create the coolest hairstyle, expressing yourself with an all-day, sexy and flexible hold.' 
                                                         usage='Take a bean-size amount of this product onto fingertips and rub evenly. Apply onto hair and style as desired'
                                                        />
                                                    </div>
                                               
                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/angel5.jpg')} alt='img' style={{ position: 'relative', width: '100%'}} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Orange flower color protect hair Mask' img='angel5.jpg' desciption='Containing orange flower oil and pelargonium graveolens extract to form a protective membrane to lock in color, this leaves the hair shining and vivacious. Specially formulated protein to strengthen hair from within while the naturally extracted sunscreen factor
                                                         can protect hair color from fading caused by UV rays. Hair will look soft, vibrant and lustrous after coloring.'
                                                          usage='After shampooing, apply an appropriate amount on to palm. Rub hand together and massage evenly from roots to ends. 
                                                          For the best results, use steam or cover hair with a hot towel. Leave in for 5-10 minutes. Rinse thoroughly.'
                                                        />
                                                    </div>
                                                
                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/angel6.jpg')} alt='img' style={{ position: 'relative', width: '100%'}} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name=' Morocco color protect silky oil ' img='angel6.jpg' desciption='Enriched with morocco oil, orange flower oil, water soluble protein, rosemary and other micro-molecule plant essential oil, to supplement refining protein to hair while deeply repairing dry or damaged hair caused by coloring and chemical treatment.
                                                         Leaves hair vibrant and elastic. Suitable for dry, damaged, or frequently colored hair.'
                                                          usage='Apply a small amount into palm, rub hands together and distribute evenly through towel-dried or dry hair. Leave-in.'
                                                        />
                                                    </div>
                                               
                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/angel7.jpg')} alt='img' style={{ position: 'relative', width: '100%'}} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Green tea deep cleansing anti dandruff spray' img='angel7.jpg' desciption='With double green tea activating essences to 
                                                        instantly relax and cleanse the scalp by exfoliating and supplementing moisture to scalp. Boosts the scalp’s natural defenses to effectively prevent dandruff build-up and balance sebum secretion, restoring the scalp back to its soft, clean and healthy condition.'
                                                          usage='Partition the hair and evenly spray this product onto the scalp and hair. Gently message with fingertips using spiral movement s for 3-5 minutes.
                                                           Thoroughly rinse with scalpcleaner. It is suggested to use once every two days and keep using for 1 week.'
                                                        />
                                                    </div>
                                               
                                               
                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/angel8.jpg')} alt='img' style={{ position: 'relative', width: '100%'}} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Rose elastic volume cream' img='angel8.jpg' desciption='Rose extract enriched with vitamin C and keratin can promptly provide nutrients to permed hair, eliminating frizz, dryness and tousle. Protects hair from hot styling tools, 
                                                        this styling cream gives a comfortable touch, especially suitable for natural curly hair or permed hair.' 
                                                         usage='Apply product onto damp or dried hair and twist with fingers, style as desired.'
                                                        />
                                                    </div>
                                                
                                                
                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/angel9.jpg')} alt='img' style={{ position: 'relative', width: '100%' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Rose nourishing treatment cream' img='angel9.jpg' desciption='Specially added moisturizers and repairing nutrients to effectively repair damaged hair by
                                                         penetrating through the hair shaft and forming a nourishing layer around the hair, keeps hair soft supple, lustrous and easy to manage. Gives you a beautiful dazzling hair full of elasticity and shine.'
                                                          usage='After shampooing, apply an appropriate amount on to palm. Rub hand together and massage evenly from roots to ends. For the best results,
                                                           use steam or cover hair with a hot towel. Leave in for 5-10 minutes. Rinse thoroughly.'
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
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/angel11.jpg')} alt='img' style={{ position: 'relative', width: '100%' }} />
                                               
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Citrus scalp cuticle removing lotion' img='angel11.jpg' desciption='Enriched with citrus oil and bergamont essence can clarify and relax the scalp while preventing bacteria infection and irritation. Gently exfoliating and effectively promoting
                                                         sebum secretion of scalp to restore to its healthy balance, keeps the scalp relieved with prolonged refreshing feel'
                                                          usage='Sectoion the hair and apply 5ml of this product onto the scalp. Gently massage scalp with fingertips using spiral movement for 3-5 minutes. Thoroughly rinse with scalp cleanser.'
                                                        />
                                                    </div>
                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/angel12.jpg')} alt='img' style={{ position: 'relative', width: '100%' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Citrus scalp relaxing essence' img='angel12.jpg' desciption='Enriched with citrus oil and salvia extract to relax stressed scalp and supplement moisture to scalp, leaves the scalp revived and refreshed with healthy balance.'
                                                          usage='Towel dry scalp after cleansing and evenly apply this product onto scalp and hair. Gently massage and pat scalp with fingertips for 3-5 minutes. Leave in.'
                                                        />
                                                    </div>
                                               
                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/angel13.jpg')} alt='img' style={{ position: 'relative', width: '100%' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Mocha coffein perm liquid' img='angel13.jpg' desciption='Containing coffein effective ingredient to improve and enhance the self-protecting function of hair shaft. Quickly 
                                                        soften the hair without damaging it, leaving hair full of bounce and shining with natural glow. Pleasant fragance.' 
                                                        usage='1. Apply formula A thoroughly on the hair. Leave in for 15-20 mins (DO NOT USE STEAM).  Adjust time of treatment based on type and condition of hair. Thoroughly rinse hair. TIP: Hair care in ceramic perm: Rinse the hair with water after 1st formula treatment finished. Take proper amount of Morocca Nut Anti Heat Treatment Cream and apply onto the areas where to be permed. (This product is highly concentrated, so a thin layer is enough.). Put hot hair rollers in hair and heat up. After then apply 2nd formula, to create a natural,
                                                        elastic and alluring hair look. Protect hair from being damaged by overheat during ceramic perm.and then dry it.
                                                        2. Put hot hair rollers in hair (90% dried) and heat up for 25 minutes. Wait until the hair cools down.

3. Spray formula B evenly on hair rollers to ensure complete coverage, leave in for 15 minutes then remove hair rollers. Thoroughly rinse and condition the hair.'
                                                        />
                                                    </div>
                                               
                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/angel14.jpg')} alt='img' style={{ position: 'relative', width: '100%' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Mocha coffein cold wave (For normal/damaged hair)' img='angel14.jpg' desciption='Enriched with coffein effective ingredient and helichrysum essence with antistatic property, this wave can fully alleviate the irritation to scalp. Containing grape seed oil and avocado oil to deeply nourish and moisturize the hair from within, preventing split ends, leaves hair soft, vibrant and
                                                         healthy shining after wave. Suitable even for frizzy dry hair, hair will also look vivacious, vibrant and charming'
                                                         usage='1. Put hot hair rollers in hair to create desired curls. Then spread formula A thoroughly on hair. Leave in hair for 10-20 minutes depending on the type of hair. Rinse thoroughly.

                                                         2. Apply formula B thoroughly on hair. Leave in for about 15 minutes, rinse thoroughly and take out hair rollers.'
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