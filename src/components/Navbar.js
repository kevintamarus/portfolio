import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-materialize';
import $ from 'jquery';

export default class Navbar extends Component {

  render() {
    console.log(this.refs, 'refs')
    const {history} = this.props;
    return (
      <div className="navbar-fixed">
        <nav style={{background: 'linear-gradient(to right, #3399ff 0%, #339933 100%)'}}>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo right" style={{cursor:'pointer'}} onClick={() => history.push('/')}>Home</a>
            <Modal
              id='foo'
              trigger={
                <a href="#foo" 
                  className="button-collapse" 
                  onClick={() => history.push('/modal')}
                ><i className="material-icons">menu</i></a>
              }
              header='Modal Header'>
              <div>
                <div><a onClick={() => history.push('/projects')}>Projects</a></div>
                <div><a onClick={() => history.push('/skills')}>Technical Skills</a></div>
                <div><a onClick={() => history.push('/volunteer')}>Volunteer Work</a></div>
                <div><a onClick={() => history.push('/music')}>Music</a></div>
                <div><a onClick={() => history.push('/running')}>Running</a></div>
              </div>
            </Modal>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a onClick={() => history.push('/projects')}>Projects</a></li>
              <li><a onClick={() => history.push('/skills')}>Technical Skills</a></li>
              <li><a onClick={() => history.push('/volunteer')}>Volunteer Work</a></li>
              <li><a onClick={() => history.push('/music')}>Music</a></li>
              <li><a onClick={() => history.push('/running')}>Running</a></li>
            </ul>
          </div>
        </nav>
        
      </div>
    );
  }
}