import React, {Component} from 'react'
import {Modal} from 'react-materialize'

export default class ModalMenu extends Component {
  render() {
  const {history} = this.props;
    return (
      <Modal
        id='foo'
        header='Modal Header'>
        <div>
        <div><a onClick={() => history.push('/projects')}>Projects</a></div>
        <div><a onClick={() => history.push('/skills')}>Technical Skills</a></div>
        <div><a onClick={() => history.push('/volunteer')}>Volunteer Work</a></div>
        <div><a onClick={() => history.push('/music')}>Music</a></div>
        <div><a onClick={() => history.push('/running')}>Running</a></div>
        </div>
      </Modal>
    )
  }
}