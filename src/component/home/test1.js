import React from 'react';
import Context from '../../assets/js/Context';
import Nav2 from '../common/Nav2';
import { withController } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';
import Footer from '../common/Footer';
import { TextInput, Textarea, FilePicker } from 'evergreen-ui';
import axios from 'axios';
import Host from '../../assets/js/Host';
import { ToastContainer, toast } from 'react-toastify';
class test1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      body: '',
      to: '',
      data: [],
      department: [],
      dep_name: '',
      file: [],
      username: ''
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/v1/users/getUsers`, {

    })
      .then(response => {
        console.log(response.data);
        this.setState({ data: response.data })

      })
      .catch(function (message) {
      });

    axios.get(`http://localhost:5000/api/v1/department/getDep`, {

    })
      .then(response => {
        console.log(response.data);
        this.setState({ department: response.data })

      })
      .catch(function (message) {
      });
  }
  add_dep() {
    axios.post(`http://localhost:5000/api/v1/department/add`, {
      'dep_name': 'this.state.dep_name',

    })
      .then(response => {
        console.log(response.data);
        toast.success('name has been send successfully');
      })
      .catch(function (message) {
      });
  }
  Add() {
    let formData = new FormData();
    formData.append("username", 'this.state.username');
    formData.append("file", this.state.file);

    axios({
      url: `http://localhost:5000/api/v1/users/insert`,
      method: "POST",
      data: formData,

    })
      .then(response => {
        console.log(response.data);
      })
      .catch(function (message) {
      });
  }

  edit(data) {
    axios.put(`http://localhost:5000/api/v1/users/edit`, {
      'username': 'sara_nihad_hadi',
      'id': data
    })
      .then(response => {
        console.log(response.data);
        this.componentDidMount();
      })
      .catch(function (message) {
        console.log(message);
      });
  }

  edit_dep(data) {
    axios.put(`http://localhost:5000/api/v1/department/edit`, {
      'dep_name': 'sara_nihad_hadi',
      'id': data
    })
      .then(response => {
        console.log(response.data);
        this.componentDidMount();
      })
      .catch(function (message) {
        console.log(message);
      });
  }

  delete(data) {
    axios.post(`http://localhost:5000/api/v1/users/delete`, {

      'id': data
    })
      .then(response => {
        console.log(response.data);
        this.componentDidMount();
      })
      .catch(function (message) {
        console.log(message);
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

                  <div id='sss'>
                    <Row style={{ marginRight: 0, width: '90%', paddingTop: '3%' }} id='sss1'>
                      <Col>
                        <div id='s1s1'>
                          <p style={{ fontSize: '26px', fontWeight: '500', lineHeight: '30px', color: '#000 ' }}>For More Inquiry Please Send as Email:</p>

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
                            value={this.state.dep_name} onChange={(e) => {
                              this.setState({ dep_name: e.target.value })
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
                        <div id='BtnContactUSHome' onClick={() => this.add_dep()}>Send</div>
                      </Col>
                    </Row>
                  </div>

                </div>

                <div>
                  <FilePicker type='file' onChange={files =>
                    this.setState({ file: files[0] })} />


                  {this.state.data.map(((item, i) =>
                    <div key={i} >
                      <img src={Host + item.image} style={{ height: 200 }} alt='img' />
                      <p>{item.userName}
                        <button onClick={() => {
                          this.edit(item._id)
                        }} >edit</button>
                        <button onClick={() => {
                          this.delete(item._id)
                        }} >delete</button>
                      </p>,


  </div>
                  ))}
                </div>

                <div>

                  {this.state.department.map(((item, i) =>
                    <div key={i} >
                      <p>{item.dep_name} ,
      <button onClick={() => {
                          this.edit_dep(item._id)
                        }} >edit</button>
                        <button onClick={() => {
                          axios.post(`http://localhost:5000/api/v1/department/delete`, {

                            'id': item._id
                          })
                            .then(response => {
                              console.log(response.data);
                              this.componentDidMount();
                            })
                            .catch(function (message) {
                              console.log(message);
                            });
                        }} >delete</button>
                      </p>,


  </div>
                  ))}
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
export default withController(test1);