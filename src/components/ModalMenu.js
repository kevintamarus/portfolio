import React, {Component} from 'react';
import {Modal} from 'react-materialize';

export default class ModalMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedIndex: null
    }
  }

  handleHighlightedLink = (highlightedIndex, action) => {
    if(action === 'enter') {
      this.setState({highlightedIndex});
    } else {
      this.setState({highlightedIndex: null});
    }
  }

  render() {
    const {history} = this.props;
    const {highlightedIndex} = this.state;
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
          <div className="modal-action modal-close" style={highlightedIndex === 0 ? styles.highlighted : styles.selectors} 
            onClick={() => {
              history.push('/projects');
              this.props.changeNavColor('Projects');
            }}
            onMouseEnter={() => this.handleHighlightedLink(0, 'enter')}
            onMouseLeave={() => this.handleHighlightedLink(0, 'leave')}
          >Projects</div>
          <div className="modal-action modal-close" style={highlightedIndex === 1 ? styles.highlighted : styles.selectors}
            onClick={() => {
              history.push('/skills');
              this.props.changeNavColor('Skills');
            }}
            onMouseEnter={() => this.handleHighlightedLink(1, 'enter')}
            onMouseLeave={() => this.handleHighlightedLink(1, 'leave')}
          >Technical Skills</div>
          <div className="modal-action modal-close" style={highlightedIndex === 2 ? styles.highlighted : styles.selectors}
            onClick={() => {
              history.push('/volunteer');
              this.props.changeNavColor('Volunteer');
            }}
            onMouseEnter={() => this.handleHighlightedLink(2, 'enter')}
            onMouseLeave={() => this.handleHighlightedLink(2, 'leave')}
          >Volunteer Work</div>
          <div className="modal-action modal-close" style={highlightedIndex === 3 ? styles.highlighted : styles.selectors}
            onClick={() => {
              history.push('/music');
              this.props.changeNavColor('Music');
            }}
            onMouseEnter={() => this.handleHighlightedLink(3, 'enter')}
            onMouseLeave={() => this.handleHighlightedLink(3, 'leave')}
          >Music</div>
          <div className="modal-action modal-close" style={highlightedIndex === 4 ? styles.highlighted : styles.selectors}
            onClick={() => {
              history.push('/running');
              this.props.changeNavColor('Running');
            }}
            onMouseEnter={() => this.handleHighlightedLink(4, 'enter')}
            onMouseLeave={() => this.handleHighlightedLink(4, 'leave')}
          >Running</div>
        </div>
      </Modal>
    )
  }
}

const styles = {
  selectors: {
    cursor: 'pointer',
    fontFamily: 'Georgia',
    fontSize: 35,
    color: 'white'
  },
  highlighted: {
    cursor: 'pointer',
    fontFamily: 'Georgia',
    fontSize: 35,
    color: 'yellow'
  }
}