console.log('hello from homepage');
import './homepage.css'
import ImageSrc from './S7E21.188_Cheezers_at_Night.png'

export default function () {
    console.log('running homepage function')

    const homepageDiv = document.createElement('div');
    homepageDiv.classList.add('homepage');

    const title = document.createElement('h1');
    title.innerText = 'Cheezer\'s';
    title.classList.add('title')

    const subtitle = document.createElement('p');
    subtitle.innerText = 'Serving astronauts since 2010'
    subtitle.classList.add('subtitle')

    const image = new Image();
    image.src = ImageSrc;
    image.classList.add('image');

    homepageDiv.append(image, title, subtitle);
    document.querySelector('#content').appendChild(homepageDiv);
}
