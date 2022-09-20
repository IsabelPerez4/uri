import React from 'react';
import '../CSS/slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let fotos = {
  Foto_1: {
    singer: 'Lunay',
    src: 'https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/lunay_2.jpg',
  },
  Foto_2: {
    singer: 'Cali y el Dandee',
    src: 'https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/cyed-1.jpeg',
  },

  Foto_3: {
    singer: 'Gigolo y la Exce',
    src: 'https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/gigolo-y-la%20exce-3.jpg',
  },

  Foto_4: {
    singer: 'Sebastian Yatra',
    src: 'https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/sb2.jpg',
  },

  Foto_5: {
    singer: 'Omar Montes',
    src: 'https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/omar-montes.jpg',
  },

  Foto_6: {
    singer: 'Camilo',
    src: 'https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/camilo.jpg',
  },
  Foto_7: {
    singer: 'Lunay',
    src: 'https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/lunay_1.jpg',
  },

  Foto_8: {
    singer: 'Ozuna',
    src: 'https://isabelprojects.s3.amazonaws.com/proyectouri/Fotos/ozuna.jpg',
  },
};

const gallerySingers = ({ singer, src }) => {
  return (
    <div className="slider">
      {fotos.map((fotos) => (
        <div className="position-relative">
          <figure className="img-fluid">{src}</figure>
          <figcaption>{singer}</figcaption>
        </div>
      ))}
    </div>
  );
};

export default gallerySingers;
