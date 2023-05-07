import {images} from '../res/ImagesPath';

function getImage(name: string) {
  for (let i = 0; i < images.length; i++) {
    if (images[i].name === name) {
      return images[i].image;
    }
  }
  return images[images.length - 1].image;
}

export default getImage;
