import React, {Component} from 'react';
import {Modal} from 'react-materialize';

export default class ModalMenu extends Component {

  render() {
    const {history} = this.props;
    return (
      <Modal
        style={{backgroundColor: 'rgba(0,0,0,0.1)', height: 2000}}
        fixedFooter={false}
        id='foo'
        trigger={
          <a href="#foo" 
            className="button-collapse"
          ><i className="material-icons">menu</i></a>
        }>
        <div className="center-align">
          <div className="modal-action modal-close" style={{cursor:'pointer'}}><a onClick={() => {
            history.push('/');
            this.props.changeNavColor();
            }}>Home</a></div>
          <div className="modal-action modal-close" style={{cursor:'pointer'}}><a onClick={() => {
            history.push('/projects');
            this.props.changeNavColor('Projects');
            }}>Projects</a></div>
          <div className="modal-action modal-close" style={{cursor:'pointer'}}><a onClick={() => {
            history.push('/skills');
            this.props.changeNavColor('Skills');
          }}>Technical Skills</a></div>
          <div className="modal-action modal-close" style={{cursor:'pointer'}}><a onClick={() => {
            history.push('/volunteer');
            this.props.changeNavColor('Volunteer');
          }}>Volunteer Work</a></div>
          <div className="modal-action modal-close" style={{cursor:'pointer'}}><a onClick={() => {
            history.push('/music');
            this.props.changeNavColor('Music');
          }}>Music</a></div>
          <div className="modal-action modal-close" style={{cursor:'pointer'}}><a onClick={() => {
            history.push('/running');
            this.props.changeNavColor('Running');
          }}>Running</a></div>
        </div>
      </Modal>
    )
  }
}