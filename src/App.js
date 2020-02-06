import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, ButtonGroup, Navbar, Image, Container, Row, Col, Form} from 'react-bootstrap';
import Demo from './components/Demo';
import Home from './components/Home';
import Config from './components/Config';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {showHomeName: true};
    this.showHome = this.showHome.bind(this);
    this.state = {showDemoName: true};
    this.showDemo = this.showDemo.bind(this);
    this.state = {showConfigName: false};
    this.showConfig = this.showConfig.bind(this);
  }
  showHome(){
    this.setState(state => ({
      showHomeName: !state.showHomeName
    }));
    this.setState ({showDemoName: false});
    this.setState ({showConfigName: false});
  }
  showConfig(){
      this.setState(state => ({
        showConfigName: !state.showConfigName
      }));
      this.setState ({showDemoName: false});
      this.setState ({showHomeName: false});
    }
  showDemo() {
    this.setState(state => ({
      showDemoName: !state.showDemoName
    }));
    this.setState ({showHomeName: false});
    this.setState ({showConfigName: false});
  }
  render(){
    return (
      <div className='App'>
        <Form className="Main">
          <Button variant='primary'onClick={this.showHome}>Home</Button>
          <Button variant='primary'onClick={this.showConfig}>Configure</Button>
          <Button variant='primary'>App</Button>
          <Button variant='primary'>Database</Button>
          <Button variant='primary'onClick={this.showDemo}>{this.state.showDemoName ? 'Back' : 'Demo'}</Button>
        </Form>
          <Home isHome={this.state.showHomeName}/>
          <Config isConfig={this.state.showConfigName}/>
          <Demo isDemo={this.state.showDemoName}/>

      </div>
    )
  }
}

export default App;
