import React from 'react';
import '../styles/Photo.css';


class Photo extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      open: false
    }
  }

  handleClick = (e) => {
    let photoClicked = e.currentTarget;
    let currentPosition = photoClicked.getBoundingClientRect();
    let currentPositionObject = {
      top: currentPosition.top,
      left: currentPosition.left,
      width: currentPosition.width,
      height: currentPosition.height
    }

    if(!this.state.open){
      const openStyle = {
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%) scale(2)",
        position: "fixed",
        zIndex: 200
      }

      this.setState({
        style: openStyle,
        prevPosition: currentPositionObject,
        open: true
      })
    } else {
      const closedStyle = {}

      this.setState({
        style: closedStyle,
        prevPosition: currentPositionObject,
        open: false
      })
    }
  }

  componentDidUpdate = () => {
    const prevPositionObject = this.state.prevPosition;
    const thisComponent = this.el;
    const currentPosition = thisComponent.getBoundingClientRect();
    const currentPositionObject = {
      top: currentPosition.top,
      left: currentPosition.left,
      width: currentPosition.width,
      height: currentPosition.height
    }
    /*
    console.log(currentPositionObject);
    console.log(prevPositionObject);
    */
    const deltaX = prevPositionObject.left - currentPositionObject.left;
    const deltaY = prevPositionObject.top - currentPositionObject.top;
    const deltaW = prevPositionObject.width / currentPositionObject.width;
    const deltaH = prevPositionObject.height / currentPositionObject.height;

    console.log(`transform: translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH});`)
  }

  render() {
    let { open } = this.state;

    const thumbnailStyles = {
      background: "url(" + this.props.photo.src.portrait + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }

    return (
      <div className="photo-tile-container">
        <div className="photo-tile-wrapper" style={ this.state.style } ref={ el => this.el = el }>
          <div className={( open ? 'photo-tile open-photo-tile' : 'photo-tile closed-photo-tile' )} onClick={ this.handleClick }>
            <div className="photo" style={ thumbnailStyles }></div>
            <div className="caption">{ this.props.photo.photographer }</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Photo
