import React, {Component} from 'react'
import {Modal} from 'react-materialize'

export default class ModalMenu extends Component {
  render() {
    return (
      <Modal
        id='foo'
        header='Modal Header'>
        Lorem ipsum dolor sit amet
      </Modal>
    )
  }
}