import React from 'react';
import '../styles/Photos.css';
import Photo from './Photo.js';

class Photos extends React.Component {
  render(){
    return (
      <div className="tile-container">
        {
          this.props.loaded && this.props.results.photos.map( (photo) => {
            return (
              <Photo key={ photo.id } photo={ photo } />
            )
          })
        }
      </div>
    )
  }
}

export default Photos
