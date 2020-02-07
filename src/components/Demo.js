import React from 'react';
import {Button, Image, Container, Row, Col, Form} from 'react-bootstrap';
class Demo extends React.Component {
    constructor(props){
      super(props);
      this.state = {greeting: 'Welcome to my app'};
      this.onChangeGreeting = this.onChangeGreeting.bind(this);
      this.onClickDG = this.onClickDG.bind(this);
      this.state.items = [
        { name: 'Excellent',
          src: 'logo192.png'
        },
        { name: 'Good',
          src: 'logo192.png'
        },
        { name: 'Normal',
          src: 'logo192.png'
        },
        { name: 'Bad',
          src: 'logo192.png'
        }
      ];
      this.onChangeName = this.onChangeName.bind(this);
    }
    onChangeGreeting (event){
      this.setState({greeting: event.target.value.toUpperCase()});
    }
    onClickDG(content){
      alert(content);
    }
    onChangeName (event){
      // this.setState(state => {{item.name}: event.target.value});
      // console.log({item.name});
      // this.setState({(items.map((item)) => (item.name);): event.target.value});


    }
    render(){
      if(!this.props.isDemo){
        return null;
      }
      let elmImage = this.state.items.map((item, index) =>
        <Col key={index}>
          <h2>{item.name}</h2>
          <Image src={item.src} onClick={() => this.onClickDG(item.name)} rounded />
          <hr/>
          <Form.Control type='text' placeholder={item.name} onChange={this.onChangeName} />

        </Col>

      );

      return (

      <div>
          <Container fluid className='App-header'>
            <h1 className = 'App-transition'>{this.state.greeting}</h1>
            <Button variant='success'>Edit text</Button>
            <Form.Control type ='text' placeholder={this.state.greeting} onChange={this.onChangeGreeting}/>
            <Row>
              {elmImage}
            </Row>
          </Container>

      </div>
    );
 }
}

export default Demo;
