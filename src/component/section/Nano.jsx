import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';
import ScrollUpButton from "react-scroll-up-button";
import Footer from '../common/Footer';

import AngelMod from '../common/AngelMod';



class Nano extends React.Component {
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
                        <div  id='mainCont1' >
                        <div id='mainEquContiner_cate'  >
                            <div id='apfot'>
                                <Nav2 />


                                <div style={{ width: '100%', boxShadow: '#e0ddddd6 2px 5px 6px 1px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor:'#fff' }}>
                                    <img src={require('../../assets/img/4.png')} style={{height:'130px'}}  alt='img' />

                                </div>



                                <div id='section1_s'>
                                    <div id='OurProdectContiners1'>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>
                                        </div>
                                        <div style={{ width: '100%' }} id='nano_backgroundimg' >                                   
                                        </div>

                          

                                        <Row id='RowOurProdect' style={{ marginTop: '5%', marginRight: 0 }} >
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}>               
                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/nano.jpg')} alt='img' style={{ position: 'relative', width: '100%' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='AB-I Hayat Shampoo' img='nano.jpg' 
                                                        desciption='Nano Absolute Hair Care Shampoo, With Sesame Oil, Castor Oil, Wheat Seed Oil, Keratin Oil, Argan Oil, Walnut Oil, Aloe Vera Oil, Living Oil Strengthens Hair Structure The structure of damaged and split hair reduces shedding,
                                                         revitalizes dry and damaged hair, makes hair easy to control and comb, light on hair does not cause heaviness.'
                                                          usage='Apply to damp hair and massage in circular motions and then rinse hair with water.'
                                                        />
                                                    </div>
                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/nanop.jpg')} alt='img' style={{ position: 'relative', width: '100%' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Professional Shampoo ' img='nanop.jpg' 
                                                        desciption='Nano Absolute shampoo for dry and split hair, contains seven natural oils (argan, jojoba, coconut, live, keratin, flaxseed) and aloe vera, nourishes hair from root to tip, reduces hair loss,
                                                         prevents hair breakage, gives hair Softness and luster necessary, mild on the hair does not cause heaviness.'
                                                          usage='like any type of shampo.'
                                                        />
                                                    </div>
                                               
                                               
                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/nanomask.jpg')} alt='img' style={{ position: 'relative', width: '100%'}} />
                                               
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Professional Mask' img='nanomask.jpg' 
                                                        desciption='
                                                        Nano Absolute Dry & Split Hair Mask with Coconut Oil
                                                         Extract to protect hair from falling out and damage and helps to deeply moisturize hair'
                                                          usage='Apply to damp hair for 15 minutes, then rinse with warm water.'
                                                        />
                                                    </div>
                                               
                                                </div>

                                            </Col>
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/hairserom.jpg')} alt='img' style={{ position: 'relative', width: '100%' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Hair Care Serum' img='hairserom.jpg'
                                                         desciption='Nano Absolute Hair Care Serum, with Argan Oil Extract that provides double hydration and protects against breakage and keratin oil rich in fatty acids Provides hair with the necessary proteins Nourishes, strengthens and repairs damaged hair and live oil that repairs hair from roots to extremities, restores shine and vitality of hair, prevents frizz Hair,
                                                          gives the hair moisturizing and necessary strength, light on the hair does not cause him heaviness.' 
                                                         usage='Apply the right amount on the palm of the hand and then massage the hair and scalp in circular motions that do not rinse with water.'
                                                        />
                                                    </div>
                                               
                                                </div>

                                            </Col>
                         
                                      
                                
                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}>

    <div style={{ backgroundColor: '#fff' }} id='perfume121' >
        <img src={require('../../assets/img/eye.jpg')} alt='img' style={{ position: 'relative', width: '100%' }} />
        <div style={{ position: 'absolute' }} >
            <AngelMod name='Eyelash & Brow Care Oil' img='eye.jpg'
             desciption='Nano Absolute Eyelash & Eyebrow Serum, with Argan Oil, Keratin Oil, Castor Oil, Live Oil and Sesame Oil that provides the necessary moisture and strengthens the lashes follicles and protect them from falling out.It works to restore hair germination in eyelashes and eyebrows, increases the density of eyelashes and eyebrows Falling,
              gives immediate results after use, mild on the skin does not cause heaviness.' 
             usage='Apply to eyelashes and eyebrows by brush, used twice daily.'
            />
        </div>
   
    </div>

</Col>

<Col id='ColOurProdect' md={6} lg={4} xl={3}

>

    <div style={{ backgroundColor: '#fff' }} id='perfume121' >
        <img src={require('../../assets/img/nano2.jpg')} alt='img' style={{ position: 'relative', width: '100%' }} />
        <div style={{ position: 'absolute' }} >
            <AngelMod name='Organic Coconut Oil' img='nano2.jpg'
             desciption='Organic coconut oil from Nano Absolute, promotes hair growth and gives it shine and vitality, deeply moisturizes hair and be a layer of protection from harmful external factors, stimulates the hair follicles, traps moisture inside the hair and protects it from brittleness,
              restores the health and strength of the hair, light on the hair does not cause heaviness.' 
             usage='Apply the appropriate amount on the hair and massage in circular movements and leave for two hours and then wash with shampoo.'
            />
        </div>
   
    </div>

</Col>

<Col id='ColOurProdect' md={6} lg={4} xl={3}

>

    <div style={{ backgroundColor: '#fff' }} id='perfume121' >
        <img src={require('../../assets/img/nano3.jpg')} alt='img' style={{ position: 'relative', width: '100%' }} />
        <div style={{ position: 'absolute' }} >
            <AngelMod name='Organic Moisturizing Conditioner' img='nano3.jpg'
             desciption='Nano Absolute Moisturizing Conditioner, with Argan Oil Extract that provides double moisturizing and protects against breakage, gives hair moisturizing and nourishment and reduces frizz and brittle hair, 
             makes hair easy to comb and gives the necessary softness Greasy effect, ideal for all hair types.' 
             usage='Apply in appropriate amount to wet hair, massage in circular motions, leave 2-3 minutes on hair, then rinse with water.'
            />
        </div>
   
    </div>

</Col>

<Col id='ColOurProdect' md={6} lg={4} xl={3}

>

    <div style={{ backgroundColor: '#fff' }} id='perfume121' >
        <img src={require('../../assets/img/nano4.jpg')} alt='img' style={{ position: 'relative', width: '100%' }} />
        <div style={{ position: 'absolute' }} >
            <AngelMod name='Garlic Hair Care Shampoo' img='nano4.jpg'
             desciption='Nano Absolute Organic Hair Care Shampoo, with black garlic extract that contains antioxidant elements,
              combats hair loss, stimulates lost hair growth and fills in voids Does not cause heaviness.' 
             usage='Apply in appropriate amount to wet hair, massage in circular motions and rinse with water.'
            />
        </div>
   
    </div>

</Col>


    <Col id='ColOurProdect' md={6} lg={4} xl={3}

                                            >

                                                <div style={{ backgroundColor: '#fff' }} id='perfume121' >
                                                    <img src={require('../../assets/img/nano5.jpg')} alt='img' style={{ position: 'relative', width: '100%' }} />
                                                    <div style={{ position: 'absolute' }} >
                                                        <AngelMod name='Organic Menthol Shampoo' img='nano5.jpg'
                                                         desciption='Nano Absolute Revitalizing Organic Shampoo, with a refreshing menthol extract that helps soothe the irritated and sensitized scalp because it contains antimicrobial-rich substances, fights dandruff, prevents hair loss, gently cleanses the hair, 
                                                         fights dandruff, soothes irritated scalp Cold and refreshing, light on hair does not cause heaviness.' 
                                                         usage='Apply appropriate amount to wet hair, massage in circular motions and rinse with water.'
                                                        />
                                                    </div>
                                               
                                                </div>

                                            </Col>

                                            <Col id='ColOurProdect' md={6} lg={4} xl={3}

>

    <div style={{ backgroundColor: '#fff' }} id='perfume121' >
        <img src={require('../../assets/img/nano6.jpg')} alt='img' style={{ position: 'relative', width: '100%' }} />
        <div style={{ position: 'absolute' }} >
            <AngelMod name='Organic Argan & Keratin Shampoo' img='nano6.jpg'
             desciption='Nano Absolute Moisturizing Organic Shampoo, with Argan Oil and Keratin Extract that gives hair and scalp moisturizing and nourishing, cleanses the hair gently and provides double moisturizing and restores elasticity and shine to the hair damaged by chemicals and thirsts, 
             enhances the structure and density of hair, treats split ends, mild On hair, paraben-free.' 
             usage='Apply in appropriate amount to wet hair, massage in circular motions and rinse with water.'
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
</div></div>


                    )
                    // }




                }}
            </Context.Consumer>
        )
    }
}
export default withController(Nano);