import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-materialize';
import $ from 'jquery';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navColorProjects: 'white',
      navColorSkills: 'white',
      navColorVolunteer: 'white',
      navColorMusic: 'white',
      navColorRunning: 'white',
      update: false
    }
  }

  componentDidMount() {
    const path = this.props.history.location.pathname; 
    if (path !== '/') {
      const state = 'navColor' + path.charAt(1).toUpperCase() + path.slice(2);
      this.setState({[state]: 'yellow'});
    }
  }

  shouldComponentUpdate() {
    return this.state.update;
  }

  changeNavColor = (color) => {
    const state = 'navColor' + color;
    this.setState({
      navColorProjects: 'white',
      navColorSkills: 'white',
      navColorVolunteer: 'white',
      navColorMusic: 'white',
      navColorRunning: 'white'
    });
    this.setState({[state]: 'yellow', update: true});
    console.log('hitting');
  }

  render() {
    const {history} = this.props;
    const {navColorProjects, navColorSkills, navColorVolunteer, navColorMusic, navColorRunning} = this.state;
    console.log(history, 'history')
    return (
      <div className="navbar-fixed">
        <nav style={{background: 'linear-gradient(to right, #3399ff 0%, #339933 100%)'}}>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo" style={{cursor:'pointer'}} onClick={() => history.push('/')}>Home</a>
            <Modal
              style={{backgroundColor: 'rgba(0,0,0,0.1)'}}
              fixedFooter={false}
              bottomSheet={true}
              id='foo'
              trigger={
                <a href="#foo" 
                  className="button-collapse"
                ><i className="material-icons">menu</i></a>
              }>
              <div className="center-align">
                <div className="modal-action modal-close" style={{cursor:'pointer'}}><a onClick={() => history.push('/')}>Home</a></div>
                <div className="modal-action modal-close" style={{cursor:'pointer'}}><a onClick={() => {
                  history.push('/projects');
                  this.changeNavColor('Projects');
                  }}>Projects</a></div>
                <div className="modal-action modal-close" style={{cursor:'pointer'}}><a onClick={() => history.push('/skills')}>Technical Skills</a></div>
                <div className="modal-action modal-close" style={{cursor:'pointer'}}><a onClick={() => history.push('/volunteer')}>Volunteer Work</a></div>
                <div className="modal-action modal-close" style={{cursor:'pointer'}}><a onClick={() => history.push('/music')}>Music</a></div>
                <div className="modal-action modal-close" style={{cursor:'pointer'}}><a onClick={() => history.push('/running')}>Running</a></div>
              </div>
            </Modal>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a style={{color: navColorProjects}} onClick={() => history.push('/projects')}>Projects</a></li>
              <li><a style={{color: navColorSkills}} onClick={() => history.push('/skills')}>Technical Skills</a></li>
              <li><a style={{color: navColorVolunteer}} onClick={() => history.push('/volunteer')}>Volunteer Work</a></li>
              <li><a style={{color: navColorMusic}} onClick={() => history.push('/music')}>Music</a></li>
              <li><a style={{color: navColorRunning}} onClick={() => history.push('/running')}>Running</a></li>
            </ul>
          </div>
        </nav>
        
      </div>
    );
  }
}