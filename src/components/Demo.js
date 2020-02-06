import React from 'react';
import {Button, Image, Container, Row, Col, Form} from 'react-bootstrap';
function Demo(props) {
  const items = [
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
  const elmImage = items.map((item, index) =>
    <Col key={index}>
      <h2>{item.name}</h2>
      <Image src={item.src} onClick={()=>{ alert('Excellent'); }} rounded />
      <hr/>
      <Button variant ='success'>{item.name}</Button>

    </Col>
  );

  if(!props.isDemo){
    return null;
  }
  return (
    <div>
        <Container fluid className='App-header'>
          <h1 className = 'App-transition'>KÍNH CHÀO QUÝ KHÁCH</h1>
          <Form>
            <Button variant='success'>Edit text</Button>
            <Form.Control size='lg' type='text' placeholder='Edit Text' />
          </Form>
          <Row>
            {elmImage}
          </Row>
        </Container>


    </div>
  );
}

export default Demo;
