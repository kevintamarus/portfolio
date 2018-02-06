import React, {Component} from 'react';
import ModalMenu from './ModalMenu';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navColorProjects: 'white',
      navColorSkills: 'white',
      navColorVolunteer: 'white',
      navColorMusic: 'white',
      navColorRunning: 'white'
    }
  }

  componentDidMount() {
    const path = this.props.history.location.pathname; 
    if (path !== '/') {
      const state = 'navColor' + path.charAt(1).toUpperCase() + path.slice(2);
      this.setState({[state]: 'yellow'});
    }
  }

  changeNavColor = (color) => {
    this.setState({
      navColorProjects: 'white',
      navColorSkills: 'white',
      navColorVolunteer: 'white',
      navColorMusic: 'white',
      navColorRunning: 'white'
    });
    if(color) {
      const state = 'navColor' + color;
      this.setState({[state]: 'yellow'});
    }
  }

  render() {
    const {history} = this.props;
    const {navColorProjects, navColorSkills, navColorVolunteer, navColorMusic, navColorRunning} = this.state;
    return (
      <div className="navbar-fixed">
        <nav style={{background: 'linear-gradient(to right, #3399ff 0%, #339933 100%)'}}>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo" style={{cursor:'pointer'}} onClick={() => {
              history.push('/')
              this.changeNavColor();
              }}>Home</a>
            <ModalMenu changeNavColor={this.changeNavColor} history={history}/>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a style={{color: navColorProjects}} onClick={() => {
                history.push('/projects');
                this.changeNavColor('Projects');
                }}>Projects</a></li>
              <li><a style={{color: navColorSkills}} onClick={() => {
                history.push('/skills');
                this.changeNavColor('Skills');
                }}>Technical Skills</a></li>
              <li><a style={{color: navColorVolunteer}} onClick={() => {
                history.push('/volunteer');
                this.changeNavColor('Volunteer');
                }}>Volunteer Work</a></li>
              <li><a style={{color: navColorMusic}} onClick={() => {
                history.push('/music');
                this.changeNavColor('Music');
                }}>Music</a></li>
              <li><a style={{color: navColorRunning}} onClick={() => {
                history.push('/running')
                this.changeNavColor('Running');
                }}>Running</a></li>
            </ul>
          </div>
        </nav>
        
      </div>
    );
  }
}