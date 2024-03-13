import './index.css'

const menu = [
    {
        food: 'Grilled Cheeze Deluxe',
        price: '$4'
    },
    {
        food: 'Grilled Cheeze Sandwich',
        price: '$2'
    },
    {
        food: 'Cheddargeddon',
        price: '$3'
    },
    {
        food: 'Drink',
        price: '$1'
    },
    {
        food: 'Cheeseburger',
        price: '$2'
    },
    {
        food: 'Tomato Soup',
        price: '$2'
    },
]

export default function () {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const title = document.createElement('h1');
    title.innerText = 'Menu';
    title.classList.add('title')

    const ul = document.createElement('ul');
    ul.classList.add('menuList');
    for (menuItem of menu) {
        const li = document.createElement('li');
        li.innerText = `${menuItem.food}: ${menuItem.price}`;
        li.classList.add('menuItem');
        ul.appendChild(li);
    }
    
    menuDiv.append(title, ul);
    document.querySelector('#content').appendChild(menuDiv);
}