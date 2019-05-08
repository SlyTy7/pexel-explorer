import React from 'react';
import '../styles/Photo.css';


class Photo extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hidden: false
    }
  }

  handleClick = (e) => {
    let photoClicked = e.currentTarget;
    let photoBounds = photoClicked.getBoundingClientRect();
    let newPositionStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      maxWidth: "500px"
    }

    this.setState({
      oldPosition: photoBounds,
      newPositionStyle: newPositionStyle,
      open: ( this.state.open ? false : true )
    })
  }

  render() {
    const imageStyle = {
      height: "150px",
      width: "100%",
      background: "url(" + this.props.photo.src.portrait + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }
    let { open, newPositionStyle, oldPosition } = this.state;

    console.log(oldPosition);

    return (
      <div className="photo-tile-container">
        <div className="photo-tile" style={( open ? newPositionStyle : {} )} onClick={ this.handleClick }>
          <div className="photo-container">
            <div className="photo" style={ imageStyle }>
            </div>
          </div>
          <div className="caption-container">
            <p className="caption">{ this.props.photo.photographer }</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Photo
