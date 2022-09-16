const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
    'images/image7.jpg',
    'images/image8.jpg',
    'images/image9.jpg',
    'images/image10.jpg',
]
let count = 0
const image = document.getElementById('slider-img')

setInterval(() =>{
   const imageURL = images[count]
   image.setAttribute('src',imageURL)
    count++
    if(count >= images.length){
        count = 0
    }
}, 2000)