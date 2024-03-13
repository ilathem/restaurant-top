console.log('hello from homepage');
import './homepage.css'

export default function () {
    console.log('running homepage function')

    const homepageDiv = document.createElement('div');
    homepageDiv.classList.add('homepage');

    const title = document.createElement('h1');
    title.innerText = 'Cheezers';
    title.classList.add('title')

    const subtitle = document.createElement('p');
    subtitle.innerText = 'Serving astronauts since 2010'
    subtitle.classList.add('subtitle')

    homepageDiv.append(title, subtitle);
    document.querySelector('#content').appendChild(homepageDiv);
}
