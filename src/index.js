import './index.css'
import Homepage from './homepage/homepage';
import ImageSrc from '../assets/S7E21.188_Cheezers_at_Night.png'

console.log('hello from index.js');

const generateBackground = () => {
    const image = new Image();
    image.src = ImageSrc;
    image.classList.add('image');
    document.querySelector('#content').appendChild(image);
    const homePageNavBtn = document.querySelector('#homePageBtn');
    console.log(homePageNavBtn);
    homePageNavBtn.classList.add('currentPage');
}


generateBackground();
Homepage();
