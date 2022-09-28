import React from 'react';
import Context from './assets/js/Context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Home from './component/home/Home.jsx';

import './App.css';


import './assets/css/home.css';
import './assets/css/test.scss';
import'./assets/css/common.css';
import'./assets/css/ss.css';
import'./assets/css/task.css';

import test1 from './component/home/test1';
import Skin from './component/section/Skin';
import Admin from './component/common/Admin';
import Lenses from './component/section/Lenses';
import Nutredirm from './component/section/Nutredirm';
import Contact from './component/home/Contact';
import Hair from './component/section/Hair';
import Angel from './component/section/Angel';
import Dermavive from './component/section/Dermavive';
import About from './component/common/About';
import Soleil from './component/section/Soleil';
import RhinoSkin from './component/section/RhinoSkin';
import RhinoHair from './component/section/RhinoHair';
import Perfume from './component/section/Perfume';
import Nano from './component/section/Nano';


class App extends React.Component {
  constructor(props) {
    super(props);   

    this.state = {
data:[],
data1:[],
data2:[],
pro:[],
auth:''
    }
  }









  render() {
    return (
      <ParallaxProvider>
      <Context.Provider value={{
        value: this.state, action: {
     
        }
      }}>

        <div className="App">
     
          <BrowserRouter>
          {/* <ScrollToTop> */}
          <Route exact path='/' component={Home} />
          <Route exact path='/Contact' component={Contact} />
          <Route path ='/Skin' component={Skin} />
          <Route path ='/Hair' component={Hair} />
          <Route path ='/Angel' component={Angel} />
          <Route path ='/Nutredirm' component={Nutredirm} />
          <Route path ='/Lenses' component={Lenses} />
          <Route path ='/Dermavive' component={Dermavive} />  
          <Route path ='/Admin' component={Admin} />  
          <Route path ='/About' component={About} />  
          <Route path ='/RhinoSkin' component={RhinoSkin} />  
          <Route path ='/RhinoHair' component={RhinoHair} />  
          <Route path ='/Soleil' component={Soleil} />  
          <Route path ='/Nano' component={Nano} /> 
          <Route path ='/Perfume' component={Perfume} />  
          <Route path ='/test1' component={test1} />  
            {/* </ScrollToTop> */}
           <Switch>
         
           
            </Switch> 
         
          </BrowserRouter>
        </div>
      </Context.Provider>
      </ParallaxProvider>
    );
  }
}

export default App;
