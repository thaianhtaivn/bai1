import React, { Component } from 'react';
import {Button, ButtonGroup, Navbar, Image, Container, Row, Col} from 'react-bootstrap';

function Config(props) {
  if(!props.isConfig){
    return null;
  }
  return (
    <div className="Main">
      <h1>This function is under <code>development</code> </h1>
    </div>
  );
}

export default Config;
