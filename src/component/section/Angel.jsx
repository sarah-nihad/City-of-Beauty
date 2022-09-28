import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row,  } from 'react-bootstrap';
import Footer from '../common/Footer';
import ScrollUpButton from "react-scroll-up-button";
import AngelMod from '../common/AngelMod';
import TreeItem from '@material-ui/lab/TreeItem';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';



class Angel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: [],
            name: '',
            activePage: 2
        }


    }

    handleLoad = () => {
        this.props.parallaxController.update();
    };
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }



    renderPage = (props) => {

        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('id');


        if (myParam === '1') {
            return (
                <div style={{ backgroundColor: '#fff' }} id='angelImage' >
                    <img src={require('../../assets/img/9angel.jpeg')} alt='img' style={{ position: 'relative', width: '100%',boxShadow:'0px 0px 8px -1px #c4c5c7' }} />

                    <div style={{ position: 'absolute' }} >
                        <AngelMod name='Helichrysum revitalizing shampoo' img='angel3.jpg' desciption='Professionally formulated for dry, damaged or frizzy hair, this shampoo contains helichrysum essence and vitamin A, E which can effectively prevent UVA and UVB damage while repairing the damaged areas of hair shaft. Helichrysum moisturizing essence penetrates into the hair shaft to create a barrier for repairing dry, colored or
                          chemically treated hair, reviving the hair back to its natural shine and elasticity.'
                            usage='Wet hair and apply shampoo, gently working lather into scalp and hair. Rinse thoroughly. For best results, follow with Helichrysum Revitalizing Conditioner'
                        />
                    </div>

                </div>
            )
        } else if (myParam === '2') {
            return (
                <div style={{ backgroundColor: '#fff' }} id='angelImage' >
                    <img src={require('../../assets/img/8angel.jpeg')} alt='img' style={{ position: 'relative', width: '100%',boxShadow:'0px 0px 8px -1px #c4c5c7' }} />
                    <div style={{ position: 'absolute' }} >
                        <AngelMod name='Helichrysum revitalizing Conditioner' img='angel1.jpg' desciption='Professionally formulated for dry, damaged or frizzy hair,
                                                         this shampoo contains helichrysum essence and vitamin A, E which can effectively prevent UVA and UVB damage while repairing the damaged areas of hair shaft.
                                                          Helichrysum moisturizing essence penetrates into the hair shaft to create a barrier for repairing dry,
                                                         colored or chemically treated hair, reviving the hair back to its natural shine and elasticity' usage='Wet hair and apply shampoo, gently working lather into scalp and hair. Rinse thoroughly.
                                                          For best results, follow with Helichrysum Revitalizing Conditioner.'
                        />
                    </div>

                </div>
            )
        } else if (myParam === '3') {
            return (
                <div style={{ backgroundColor: '#fff' }} id='angelImage' >
                    <img src={require('../../assets/img/6angel.jpeg')} alt='img' style={{ position: 'relative', width: '100%',boxShadow:'0px 0px 8px -1px #c4c5c7' }} />
                    <div style={{ position: 'absolute' }} >
                        <AngelMod name='Helichrysum pure nourishing hair mask' img='angel2.jpg' desciption='Enriched with helichrysum active ingredient with antistatic properties to thoroughly alleviate the irritation to scalp while rejuvenating and revitalizing damaged hair caused by hot styling tools and environmental elements leaving hair refreshing, lustrous and easy for styling. 
            Containing shea butter to deep condition and nourish each hair for a vibrant and healthy look.'
                            usage='After shampooing, apply an appropriate amount on to palm. Rub hand together and massage evenly from roots to ends. For the best results, use steam or cover hair with a hot towel.
               Leave in for 5-10 minutes. Rinse thoroughly.'
                        />
                    </div>
                </div>
            )
        } else if (myParam === '4') {
            return (
                <div style={{ backgroundColor: '#fff' }} id='angelImage' >
                    <img src={require('../../assets/img/7angel.jpeg')} alt='img' style={{ position: 'relative', width: '100%',boxShadow:'0px 0px 8px -1px #c4c5c7' }} />
                    <div style={{ position: 'absolute' }} >
                        <AngelMod name='Grapefruit straighten treatment cream' img='angel10.jpg' desciption='Specially designed for frequently bleached, colored and chemically treated hair. Containing grapefruit extract, this treatment can restore hair back to its healthy PH value, maintaining hair color and straight feel. Vitamin C added to deeply nourish and repair damaged hair,
             leaving hair soft, delicate, straight and with a natural glow.' usage='After shampooing, apply an appropriate amount on to palm. Rub hand together and massage evenly from roots to ends. For the best results, 
             use steam or cover hair with a hot towel. Leave in for 5-10 minutes. Rinse thoroughly.'
                        />
                    </div>
                </div>
            )
        } else if (myParam === '5') {
            return (
                <div style={{ backgroundColor: '#fff' }} id='angelImage' >
                    <img src={require('../../assets/img/2angel.jpeg')} alt='img' style={{ position: 'relative', width: '100%',boxShadow:'0px 0px 8px -1px #c4c5c7' }} />
                    <div style={{ position: 'absolute' }} >
                        <AngelMod name='Orange flower shining color shampoo' img='color1.jpg' desciption='Adding natural ingredients with special protein factor, this mild shampoo is professionally designed for colored hair to prevent fading, keeping color treated hair at its peak. Protects hair against environmental 
                    damages from sun and water leaving hair soft and vibrant with a lustrous shine.' usage='Wet hair and apply shampoo, gently working lather into scalp and hair. Rinse thoroughly. 
                    For best results, follow with Orange Flower Shining Color Conditioner..'
                        />
                    </div>
                </div>
            )
        } else if (myParam === '6') {
            return (
                <div style={{ backgroundColor: '#fff' }} id='angelImage' >
                    <img src={require('../../assets/img/12angel.jpeg')} alt='img' style={{ position: 'relative', width: '100%',boxShadow:'0px 0px 8px -1px #c4c5c7' }} />
                    <div style={{ position: 'absolute' }} >
                        <AngelMod name='Orange flower shining color conditioner' img='color2.jpg' desciption='This mild formula is specially designed for colored hair, adding natural ingredients with special protein factor to prevent fading, keeping color treated hair at its peak. Protects hair against environmental damages from sun and water,
                     leaving hair soft and vibrant with a lustrous shine..' usage='Work conditioner thoroughly through wet hair, for deeper conditioning, leave in for 3-5minutes.  Rinse out.'
                        />
                    </div>
                </div>
            )
        } else if (myParam === '7') {
            return (
                <div style={{ backgroundColor: '#fff' }} id='angelImage' >
                    <img src={require('../../assets/img/11angel.jpeg')} alt='img' style={{ position: 'relative', width: '100%',boxShadow:'0px 0px 8px -1px #c4c5c7' }} />
                    <div style={{ position: 'absolute' }} >
                        <AngelMod name='Grapefruit straighten treatment cream' img='3color.jpg' desciption='Specially designed for frequently bleached, colored and chemically treated hair. Containing grapefruit extract, this treatment can restore hair back to its healthy PH value, maintaining hair color and straight feel. Vitamin C added to deeply nourish and repair damaged hair,
             leaving hair soft, delicate, straight and with a natural glow.' usage='After shampooing, apply an appropriate amount on to palm. Rub hand together and massage evenly from roots to ends. For the best results, 
             use steam or cover hair with a hot towel. Leave in for 5-10 minutes. Rinse thoroughly.'
                        />
                    </div>
                </div>
            )
        } else if (myParam === '8') {
            return (
                <div style={{ backgroundColor: '#fff' }} id='angelImage' >
                    <img src={require('../../assets/img/10angel.jpeg')} alt='img' style={{ position: 'relative', width: '100%',boxShadow:'0px 0px 8px -1px #c4c5c7' }} />
                    <div style={{ position: 'absolute' }} >
                        <AngelMod name='Orange flower color protect hair Mask' img='4color.jpg' desciption='Containing orange flower oil and pelargonium graveolens extract to form a protective membrane to lock in color, this leaves the hair shining and vivacious. Specially formulated protein to strengthen hair from within while the naturally extracted sunscreen factor can protect hair color from fading caused by UV rays. 
                    Hair will look soft, vibrant and lustrous after coloring.' usage='After shampooing, apply an appropriate amount on to palm. Rub hand together and massage evenly from roots to ends. For the best results, 
             use steam or cover hair with a hot towel. Leave in for 5-10 minutes. Rinse thoroughly.'
                        />
                    </div>
                </div>
            )
        } else if (myParam === '9') {
            return (
                <div style={{ backgroundColor: '#fff' }} id='angelImage' >
                <img src={require('../../assets/img/14angel.jpeg')} alt='img' style={{ position: 'relative', width: '100%',boxShadow:'0px 0px 8px -1px #c4c5c7' }} />
                <div style={{ position: 'absolute' }} >
                    <AngelMod name='Rosemary hair activating Shampoo' img='angel7.jpg' desciption='Containing rosemary essence to effectively help improve the microcirculation of scalp, enhancing the penetrating ability of hair follicles to supplement sufficient nutrients and improve activity of hair follicles. Reconstructs hair cells and supplies essential protein to hair, deeply nourishing roots to prevent hair loss while repairing damaged hair, leaving hair strong, vibrant and healthy.'
                        usage='Wet hair and apply shampoo, gently working lather into scalp and hair. Rinse thoroughly. 
              For best results, follow with Rosemary Hair Activating Conditioner.'
                    />
                </div>             
            </div>
            )
        } else if (myParam === '10') {
            return (
                <div style={{ backgroundColor: '#fff' }} id='angelImage' >
                <img src={require('../../assets/img/15angel.jpeg')} alt='img' style={{ position: 'relative', width: '100%',boxShadow:'0px 0px 8px -1px #c4c5c7' }} />
                <div style={{ position: 'absolute' }} >
                    <AngelMod name='Rosemary hair activating conditioner' img='angel4.jpg' desciption='Containing rosemary essence to effectively help improve the microcirculation of scalp, enhancing the penetrating ability of hair follicles to supplement sufficient nutrients and improve activity of hair follicles. Reconstructs hair cells and supplies essential protein to hair, deeply nourishing roots 
            to prevent hair loss while repairing damaged hair, leaving hair strong, vibrant and healthy.'
                        usage='Work conditioner thoroughly through wet hair, for deeper conditioning, leave in for 3-5minutes.  Rinse out.'
                    />
                </div>
            </div>
            )
        } else if (myParam === '11') {
            return (
                <div style={{ backgroundColor: '#fff' }} id='angelImage' >
                <img src={require('../../assets/img/5angel.jpeg')} alt='img' style={{ position: 'relative', width: '100%',boxShadow:'0px 0px 8px -1px #c4c5c7' }} />
                <div style={{ position: 'absolute' }} >
                    <AngelMod name='Rosemary activating regrowth essence' img='angel6.jpg' desciption='Enriched with rosemary essence, ginger and perilla extract to effectively activate the microcirculation of the scalp, enhancing the penetrating ability of hair follicles to supplement nutrients and improve follicle activity. Helps reconstruct hair cells and nourish roots to prevent hair loss while effectively 
            repairing damaged follicles, giving a dense, healthy and vigorous head of hair.'
                        usage='Towel dry the scalp after cleansing, take 2-3 pumps of this essence and evenly apply onto the scalp and hair. Gently message with fingertips using spiral movement for 3-5. It is suggested
               to use once every two days and keep using for 8 weeks.minutes. Leave in.'
                    />
                </div>
            </div>
            )
        } else if (myParam === '12') {
            return (
                <div style={{ backgroundColor: '#fff' }} id='angelImage' >
                <img src={require('../../assets/img/4angel.jpeg')} alt='img' style={{ position: 'relative', width: '100%',boxShadow:'0px 0px 8px -1px #c4c5c7' }} />
                <div style={{ position: 'absolute' }} >
                    <AngelMod name='Green tea anti dandruff shampoo' img='oil1.jpg' desciption='Containing natural pure green tea extract effectively cleanses and purifies hair and scalp by removing excess oil while preventing bacterial infection and also can deodorize the hair. Specially added mint essence to relax 
                    the scalp and relieve your pressure. Leaves hair clean, refreshing and vibrant without dandruff.'
                        usage='Wet hair and apply shampoo, gently working lather into scalp and hair. Rinse thoroughly.
                         For best results, follow with Green Tea Anti Dandruff Conditioner.'
                    />
                </div>
            </div>
            )
        } else if (myParam === '13') {
            return (
                <div style={{ backgroundColor: '#fff' }} id='angelImage' >
                <img src={require('../../assets/img/13angel.jpeg')} alt='img' style={{ position: 'relative', width: '100%',boxShadow:'0px 0px 8px -1px #c4c5c7' }} />
                <div style={{ position: 'absolute' }} >
                    <AngelMod name='Green tea anti dandruff conditioner' img='oil2.jpg' desciption='Containing natural pure green tea extract can effectively regulate scalp sebaceous glands to control oil while preventing bacterial infection. Deep conditions and nourishes hair and scalp to prevent dryness and irritation. Specially added mint essence to
                     relax the scalp and relieve your pressure. Leaves hair extremely soft, smooth and lustrous..'
                        usage='Work conditioner thoroughly through wet hair, for deeper conditioning, leave in for 3-5minutes.  Rinse out..'
                    />
                </div>
            </div>
            )
        } else if (myParam === '14') {
            return (
                <div style={{ backgroundColor: '#fff' }} id='angelImage' >
                <img src={require('../../assets/img/3angel.jpeg')} alt='img' style={{ position: 'relative', width: '100%',boxShadow:'0px 0px 8px -1px #c4c5c7' }} />
                <div style={{ position: 'absolute' }} >
                    <AngelMod name='Green tea deep cleansing anti dandruff spray' img='oil3.jpg' desciption='With double green tea activating essences to instantly relax and cleanse the scalp by exfoliating and supplementing moisture to scalp. Boosts the scalp’s natural defenses to effectively prevent dandruff build-up and balance 
                    sebum secretion, restoring the scalp back to its soft, clean and healthy condition'
                        usage='Partition the hair and evenly spray this product onto the scalp and hair. Gently message with fingertips using spiral movement s for 3-5 minutes. 
                        Thoroughly rinse with scalpcleaner. It is suggested to use once every two days and keep using for 1 week.'
                    />
                </div>
            </div>
            )
        }







    }




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



                                        <div style={{ width: '100%', boxShadow: '#e0ddddd6 2px 5px 6px 1px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <img src={require('../../assets/img/angel_logo.png')} alt='img' />

                                        </div>



                                        <div id='section1_s'>






                                            <div id='OurProdectContiners1'>


                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>

                                                </div>
                                                <div style={{ width: '100%' }} id='angel_backgroundimg' >
                                                    <div className='never_had_beforeangel' style={{ marginTop: 0, maxWidth: 700 }} >
                                                        <div style={{ color: '#e3900f', fontFamily: 'Playball' }}>
                                                            Treat yourself to award-winning, luxury hair care at an affordable price. Angel products combine quality
                                                            ingredients and the latest technology to ensure top performance and flawless results with every style.
                                                </div>

                                                    </div>
                                                </div>


                                                <div className='rouProductmain'  >
                                                    <div className='rouProductInner' > PRODUCTS </div>
                                                    <div className='AngelContentmain'  >
                                                        <div className='leftSideAngel' >
                                                            <TreeView
                                                                defaultExpanded={['1']}
                                                                defaultCollapseIcon={<ExpandMoreIcon />}
                                                                defaultExpandIcon={<ChevronRightIcon />}
                                                                multiSelect
                                                            >
                                                                <TreeItem nodeId="1" label="For Dry & Damaged Hair" style={{ color: '#f39200' }} >
                                                                    <Link to='/Angel?id=1'>  <TreeItem nodeId="2" label="Helichrysum revitalizing shampoo" style={{ color: '#fff', marginBottom: 12 }} /></Link>
                                                                    <Divider />
                                                                    <Link to='/Angel?id=2'>  <TreeItem nodeId="3" label="Helichrysum revitalizing Conditioner" style={{ color: '#fff', marginBottom: 12 }} /></Link>
                                                                    <Divider />
                                                                    <Link to='/Angel?id=3'>   <TreeItem nodeId="4" label="Helichrysum pure nourishing hair mask"
                                                                        style={{ color: '#fff', marginBottom: 12 }} /></Link>
                                                                    <Divider />
                                                                    <Link to='/Angel?id=4'>   <TreeItem nodeId="5" label="Grapefruit straighten treatment cream"
                                                                        style={{ color: '#fff', marginBottom: 12 }} /></Link>

                                                                </TreeItem>
                                                            </TreeView>

                                                            <TreeView
                                                                defaultCollapseIcon={<ExpandMoreIcon />}
                                                                defaultExpandIcon={<ChevronRightIcon />}
                                                                multiSelect
                                                            >
                                                                <TreeItem nodeId="2" label="For Coloured Hair" style={{ color: '#f39200' }} >
                                                                    <Link to='/Angel?id=5'>   <TreeItem nodeId="3" label="Orange flower shining color shampoo"
                                                                        style={{ color: '#fff', marginBottom: 12 }} /></Link>
                                                                    <Divider />
                                                                    <Link to='/Angel?id=6'>   <TreeItem nodeId="4" label="Orange flower shining color conditioner"
                                                                        style={{ color: '#fff', marginBottom: 12 }} /></Link>
                                                                    <Divider />
                                                                    <Link to='/Angel?id=7'>    <TreeItem nodeId="5" label="Morocco color protect silky oil"
                                                                        style={{ color: '#fff', marginBottom: 12 }} /></Link>

                                                                    <Divider />
                                                                    <Link to='/Angel?id=8'>   <TreeItem nodeId="6" label="Orange flower color protect hair Mask"
                                                                        style={{ color: '#fff', marginBottom: 12 }} /></Link>
                                                                </TreeItem>
                                                            </TreeView>

                                                            <TreeView

                                                                defaultCollapseIcon={<ExpandMoreIcon />}
                                                                defaultExpandIcon={<ChevronRightIcon />}
                                                                multiSelect
                                                            >
                                                                <TreeItem nodeId="1" label="For Hair Falling" style={{ color: '#f39200' }} >
                                                                    <Link to='/Angel?id=9'>   <TreeItem nodeId="2" label="Rosemary hair activating Shampoo" style={{ color: '#fff', marginBottom: 12 }} /></Link>
                                                                    <Divider />
                                                                    <Link to='/Angel?id=10'>    <TreeItem nodeId="3" label="Rosemary hair activating conditioner" style={{ color: '#fff', marginBottom: 12 }} /></Link>
                                                                    <Divider />
                                                                    <Link to='/Angel?id=11'>   <TreeItem nodeId="4" label="Rosemary activating regrowth essence" style={{ color: '#fff', marginBottom: 12 }} /></Link>
                                                                    <Divider />

                                                                </TreeItem>
                                                            </TreeView>

                                                            <TreeView

                                                                defaultCollapseIcon={<ExpandMoreIcon />}
                                                                defaultExpandIcon={<ChevronRightIcon />}
                                                                multiSelect
                                                            >
                                                                <TreeItem nodeId="1" label="For Dandruff & Oil Hair" style={{ color: '#f39200' }} >
                                                                <Link to='/Angel?id=12'>   <TreeItem nodeId="2" label="Green tea anti dandruff shampoo" style={{ color: '#fff', marginBottom: 12 }} /></Link>
                                                                    <Divider />
                                                                    <Link to='/Angel?id=13'>    <TreeItem nodeId="3" label="Green tea anti dandruff conditioner" style={{ color: '#fff', marginBottom: 12 }} /></Link>
                                                                    <Divider />
                                                                    <Link to='/Angel?id=14'>   <TreeItem nodeId="4" label="Green tea deep cleansing anti dandruff spray" style={{ color: '#fff', marginBottom: 12 }} /></Link>
                                                                    <Divider />
                                                                </TreeItem>
                                                            </TreeView>
                                                        </div>
                                                        <div className='rightSideAngel'  >

                                                            {this.renderPage(this.props)}

                                                        </div>
                                                    </div>
                                                </div>

                                                <Row id='RowOurProdectAngel' style={{ marginTop: '5%', marginRight: 0 }} >



                                                    {/* 

                                                
                                                

                                                       
                                                
                      

                                                        <div style={{ backgroundColor: '#fff' }} id='angelImage' >
                                                            <img src={require('../../assets/img/9angel.jpeg')} alt='img' style={{ position: 'relative', width: '100%' }} />

                                                            <div style={{ position: 'absolute' }} >
                                                                <AngelMod name='Helichrysum revitalizing shampoo' img='angel3.jpg' desciption='Professionally formulated for dry, damaged or frizzy hair, this shampoo contains helichrysum essence and vitamin A, E which can effectively prevent UVA and UVB damage while repairing the damaged areas of hair shaft. Helichrysum moisturizing essence penetrates into the hair shaft to create a barrier for repairing dry, colored or
                                                         chemically treated hair, reviving the hair back to its natural shine and elasticity.'
                                                                    usage='Wet hair and apply shampoo, gently working lather into scalp and hair. Rinse thoroughly. For best results, follow with Helichrysum Revitalizing Conditioner'
                                                                />
                                                            </div>
                                                            <div id='angelText' >
                                                                Helichrysum revitalizing shampoo
                                                    </div>
                                                        </div>

                                                 
                                                  

                                                     

                                                   

                                                   
                                                    

                                                   

                                                 
                                                      

                                                  


                                     

                                                  

                                                  






 */}



                                                </Row>

                                                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minHeight: '500px', backgroundColor: '#fff' }}  >
                                                    <div className='bottom_txt_inner'  >
                                                        <h1>
                                                            It is very easy to produce High quality products at High cost;
                                                     Our challenge is to produce High quality products at Low cost.</h1>
                                                        <p style={{ padding: 10 }}>
                                                            Our mission statement has placed 'Angel Haircare' as one of the most growing brands of professional cosmetics.
                                                </p>
                                                        <p style={{ padding: 10 }}>All our stakeholders are astound by the positive results obtained by this price/quality oriented brand.
                                                        It is not just the big number of hairdressing salons that make us amongst the best,
                                                     but also by top hair-stylists who use and recommend Angel Haircare internationally.</p>
                                                        <p style={{ padding: 10 }} > We currently supply the full range of Angel Professional Hair Products. All our products, are tested by our team of professionals, before being put in our product portfolio,
                                                         so our customers can put their mind at rest about the quality of the product. </p>
                                                    </div>



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

                            </div></div>

                    )
                    // }




                }}
            </Context.Consumer>
        )
    }
}
export default withController(Angel);