import React from 'react';
import Component from 'react-component';
import '../CSS/slider.css';

export default class GalleryImage extends Component {
  render() {
    return (
      <img
        className={this.props.className}
        src={this.props.src}
        alt={this.props.alt}
      />
    );
  }
}
