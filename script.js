'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let image;

createImage('img/img-1.jpg')
  .then((res) => {
    console.log(`Loaded image 1`);
    image = res;
    return wait(2);
  })
  .then(() => {
    image.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then((res) => {
    console.log(`Loaded image 2`);
    image = res;
    return wait(2);
  })
  .then(() => {
    image.style.display = 'none';
  })
  .catch((err) => console.log(err));
