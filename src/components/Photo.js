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

    this.setState({
      oldPosition: photoBounds,
      hidden: true
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
    const tileStyle = {
      display: ( this.state.hidden ? 'none' : 'block' )
    }

    return (
      <div className="photo-tile-container">
        <div className="photo-tile" style={ tileStyle } onClick={ this.handleClick }>
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
