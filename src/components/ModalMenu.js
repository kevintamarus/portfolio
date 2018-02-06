import React, {Component} from 'react';
import {Modal} from 'react-materialize';

export default class ModalMenu extends Component {

  render() {
    const {history} = this.props;
    return (
      <Modal
        style={{backgroundColor: 'rgba(0,0,0,0.1)'}}
        fixedFooter={false}
        id='foo'
        trigger={
          <a href="#foo" 
            className="button-collapse"
          ><i className="material-icons">menu</i></a>
        }>
        <div className="center-align">
          <div className="modal-action modal-close" style={styles.selectors} onClick={() => {
            history.push('/projects');
            this.props.changeNavColor('Projects');
          }}>Projects</div>
          <div className="modal-action modal-close" style={styles.selectors} onClick={() => {
            history.push('/skills');
            this.props.changeNavColor('Skills');
          }}>Technical Skills</div>
          <div className="modal-action modal-close" style={styles.selectors} onClick={() => {
            history.push('/volunteer');
            this.props.changeNavColor('Volunteer');
          }}>Volunteer Work</div>
          <div className="modal-action modal-close" style={styles.selectors} onClick={() => {
            history.push('/music');
            this.props.changeNavColor('Music');
          }}>Music</div>
          <div className="modal-action modal-close" style={styles.selectors} onClick={() => {
            history.push('/running');
            this.props.changeNavColor('Running');
          }}>Running</div>
        </div>
      </Modal>
    )
  }
}

const styles = {
  selectors: {
    cursor: 'pointer',
    fontSize: 35,
    color: 'yellow'
  }
}