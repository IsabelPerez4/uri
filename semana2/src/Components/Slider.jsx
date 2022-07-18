import React from 'react';
import Images from '../exports/Images';

import '../CSS/slider.css';

const Slider = () => {
  
  const GalleryImage = () => {
    return (
      <img
        className={this.props.className}
        src={this.props.src}
        alt={this.props.alt}
      />
    );
  };
};

const GalleryModal = () => {
  if (this.props.isOpen === false) {
    return null;
  }

  return (
    <div
      isOpen={this.props.isOpen}
      className="modal-overlay"
      onClick={this.props.onClick}
      name={this.props.name}
    >
      <div className="modal-body">
        <a className="modal-close" href="#" onClick={this.props.onClick}>
          <span className="fa fa-times"></span>
        </a>

        <img src={this.props.src} />
      </div>
    </div>
  );
};

 
const Gallery = () => {
  this.state = {
    showModal: false,
    url: '',
  };

  this.openModal = this.openModal.bind(this);

  this.closeModal = this.closeModal.bind(this);
};

  
  return (
    <div
      refs="gallery-container"
      className="container-fluid gallery-container"
    >
      <div className="row">
        {imgUrls.map((url, index) => {
          return (
            <div className="col-sm-6 col-md-3 col-xl-2">
              <div className="gallery-card">
                <GalleryImage
                  className="gallery-thumbnail"
                  src={url}
                  alt={'Image number ' + (index + 1)}
                />

                <span
                  className="card-icon-open fa fa-expand"
                  value={url}
                  onClick={(e) => this.openModal(url, e)}
                ></span>
              </div>
            </div>
          );
        })}
      </div>

      <GalleryModal
        isOpen={this.state.showModal}
        onClick={this.closeModal}
        src={this.state.url}
      />
    </div>
  );
};

  // Function for opening modal dialog
  openModal(url, e) {
    this.setState({
      showModal: true,
      url: url,
    });
};

  // Function for closing modal dialog
  closeModal() {
    this.setState({
      showModal: false,
      url: '',
    });
}


export default Slider;
