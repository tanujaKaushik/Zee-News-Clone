// import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react';
import NavBar from './components/NavBar';
import FirstContainer from './components/FirstContainer';
import NewsContainer from './components/NewsContainer';
// import SecondContainer from './components/SecondContainer';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render(){
    return (
      <div>
        {/* <Router> */}
          <NavBar/>
          <FirstContainer/>
          {/* <Routes>
          <Route exact path="/business" element={<NewsContainer key="business" category='business'/>}/> 
            <Route exact path="/entertainment" element={<NewsContainer key="entertainment" country='in' category='entertainment'/>}/>
            <Route exact path="/general" element={<NewsContainer key="general" country='in' category='general'/>}/>
            <Route exact path="/health" element={<NewsContainer key="health" country='in' category='health'/>}/>
            <Route exact path="/sports" element={<NewsContainer key="sports" country='in' category='sports'/>}/> 
            <Route exact path="/science" element={<NewsContainer key="science" country='in' category='science'/>}/> 
            <Route exact path="/technology" element={<NewsContainer key="technology" country='in' category='technology'/>}/>
          </Routes> */}
        {/* </Router> */}
        {/* <SecondContainer/> */}
      </div>
    );
  }
}