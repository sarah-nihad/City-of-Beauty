import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';

import Footer from '../common/Footer';
import { TextInput, Textarea } from 'evergreen-ui';
import Lottie from 'lottie-react-web'

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      body: '',
      to: ''
    }


  }






  send() {


    axios.post(`https://api.almayariq.com/auth/sendEmail`, {
      'to': 'emperor.rasheed@gmail.com',
      'body': this.state.body,
      'subject': this.state.subject
    })

      .then(response => {

        console.log(response.data);
        toast.success('Email has been send successfully');
      })
      .catch(function (message) {


      });


  

  }

  handleLoad = () => {
    this.props.parallaxController.update();
  };
  render() {
    return (
      <Context.Consumer>
        {ctx => {
        
            return (
              <div>
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnVisibilityChange
                  draggable
                  pauseOnHover
                />
                <div id='apfot'>
                  <Nav2 />



                  <div id='contacthome'>
                    
                    <div id='p1ss'> CONTACT US </div>
                    <div id='contactpage'>

                      <Row style={{ marginRight: 0 }} id='maprow'><Col xs={12} >

                        <iframe id="gmap_canvas"
                          src="https://maps.google.com/maps?q=%D8%AD%D9%8A%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9&t=&z=13&ie=UTF8&iwloc=&output=embed"
                          frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title='map'></iframe>



                      </Col></Row>
                      <Row style={{ marginRight: 0 }} id='contactrow'>
                        <Col md={4}>
                          <p id='sarstylefont'>ADDRESS:</p>
                          <div>  <i className="fas fa-map-marker-alt"></i>    <span style={{ paddingLeft: '10px' }} > Baghdad - Hay-Aljama'a  </span></div>
                      
                        </Col>
                        <Col md={4}>
                          <p id='sarstylefont'> PHONES:</p>
                          <div><i className="fas fa-phone"></i> <span style={{ paddingLeft: '10px' }} > +964 7724656560    </span>   </div>
            
                        </Col>
                        <Col md={4}>
                          <p id='sarstylefont'> E-MAIL:</p>
                          <div> <i className="fas fa-envelope-open"></i> <span style={{ paddingLeft: '10px' }} > info@cityofbeauty.com  </span>
                          </div>

                        </Col>

                      </Row >

                    </div>


                    <div id='sss'>
                      <Row style={{ marginRight: 0, width: '90%', paddingTop: '3%' }} id='sss1'>
                        <Col>
                          <div id='s1s1'>
                            <p style={{ fontSize: '26px', fontWeight: '500', lineHeight: '30px',color:'#000 '}}>For More Inquiry Please Send as Email:</p>

                          </div>
                        </Col>
                      </Row>
                    </div>

                    <div id='sss'>

                    </div>
                    <div id='sss'>
                      <Row style={{ marginRight: 0, width: '90%' }} id='sss1'>
                        <Col lg={6} id='ww' >
                          <div id='area'>
                            <TextInput id='textstyle'
                              name="text-input-name" type='email'
                              placeholder="E-mail" height='40px' width='100%'
                              value={this.state.to} onChange={(e) => {
                                this.setState({ to: e.target.value })
                              }}
                            />
                          </div>
                        </Col>
                        <Col lg={6} id='ww'  >
                          <div id='area'>
                            <TextInput id='textstyle'
                              name="text-input-name"
                              placeholder="subject" height='40px' width='100%'
                              value={this.state.subject} onChange={(e) => {
                                this.setState({ subject: e.target.value })
                              }}
                            />
                          </div>
                        </Col>

                      </Row>
                      <Row style={{ marginRight: 0, width: '90%' }} id='sss1'>
                        <Col xs={12} id='ww' >
                          <div id='area'>
                            <Textarea id='ereaheight'
                              name="textarea-1"
                              placeholder="Message" value={this.state.body} onChange={(e) => {
                                this.setState({ body: e.target.value })
                              }}
                            />
                          </div>

                        </Col></Row>
                      <Row style={{ marginRight: '0px', width: '100%', marginBottom: '15px' }} >
                        <Col xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                          <div id='BtnContactUSHome' onClick={() => this.send()}>Send</div>
                        </Col>
                      </Row>
                    </div>

                  </div>




                </div>
                <Footer />
              </div>



            )

        
 

        }}
      </Context.Consumer>
    )
  }
}
export default withController(Contact);