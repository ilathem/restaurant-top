import './about.css'

export default function () {
    const div = document.createElement('div');
    div.classList.add('div');

    const title = document.createElement('h1');
    title.innerText = 'Cheezers';
    title.classList.add('aboutTitle')

    const text = document.createElement('p');
    text.innerText = 'Cheezers is a restaurant featured in the Regular Show, making multiple appearances throughout its lifetime, and exclusively allowing astronauts to cut in line. It has made appearances in seasons 1, 3, 4, 6, 7, 8, and has a mall version called Cheezers to go.'
    text.classList.add('text')

    div.append(title, text);
    document.querySelector('#content').appendChild(div);

}