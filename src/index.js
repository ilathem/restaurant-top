import './index.css'
import Homepage from './homepage/homepage';
import Menupage from './menu/menu';
import Aboutpage from './about/about';
import ImageSrc from '../assets/S7E21.188_Cheezers_at_Night.png'

const loadInitialPage = () => {
    document.querySelector('#homePageBtn').classList.add('currentPage');
    generateBackground();
    Homepage();
}

const generateBackground = () => {
    const image = new Image();
    image.src = ImageSrc;
    image.classList.add('image');
    document.querySelector('#content').appendChild(image);
}

document.querySelector('#homePageBtn').addEventListener('click', () => {
    document.querySelector('#content').innerHTML = '';
    document.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('currentPage');
    })
    document.querySelector('#homePageBtn').classList.add('currentPage');
    generateBackground();
    Homepage();
})

document.querySelector('#menuPageBtn').addEventListener('click', () => {
    document.querySelector('#content').innerHTML = '';
    document.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('currentPage');
    })
    document.querySelector('#menuPageBtn').classList.add('currentPage');
    generateBackground();
    Menupage();
})

document.querySelector('#aboutPageBtn').addEventListener('click', () => {
    document.querySelector('#content').innerHTML = '';
    document.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('currentPage');
    })
    document.querySelector('#aboutPageBtn').classList.add('currentPage');
    generateBackground();
    Aboutpage();
})

loadInitialPage();