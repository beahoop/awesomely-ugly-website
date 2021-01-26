console.log("hey");

const image1 = document.querySelector('.image1');
function changeImage1() {
  // if (image1.src = "./images/Puppy1.jpg") {
    image1.src = "./images/Puppy3.JGP"
  // } else if(image1.src = "./images/Puppy1.jpg") {
  //   image1.src = "./images/Puppy1.jpg";
  // }
};
image1.addEventListener('click', changeImage1);

const imageBtn = document.querySelector('.imagebtn');
const image2 = document.querySelector('.image2');
function changeImage2() {
  image2.src = "./images/dog1.gif";
}

imageBtn.addEventListener('click', changeImage2);

const image3 = document.querySelector('.image3');
function changeImage3() {
  image3.src = "./images/Puppy1.JGP";
}
image3.addEventListener('click', changeImage3);
