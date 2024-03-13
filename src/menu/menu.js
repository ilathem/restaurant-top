import './menu.css'

const menu = [
    {
        food: 'Grilled Cheeze Deluxe',
        price: '4'
    },
    {
        food: 'Grilled Cheeze Sandwich',
        price: '2'
    },
    {
        food: 'Cheddargeddon',
        price: '3'
    },
    {
        food: 'Drink',
        price: '1'
    },
    {
        food: 'Cheeseburger',
        price: '2'
    },
    {
        food: 'Tomato Soup',
        price: '2'
    },
]

export default function () {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const title = document.createElement('h1');
    title.innerText = 'Menu';
    title.classList.add('menuTitle')

    const ul = document.createElement('ul');
    ul.classList.add('menuList');
    for (const menuItem of menu) {
        const li = document.createElement('li');
        li.innerText = `${menuItem.food}: `;
        const menuPrice = document.createElement('span');
        menuPrice.innerText = menuItem.price;
        menuPrice.classList.add('menuItemPrice');
        li.appendChild(menuPrice);
        li.classList.add('menuItem');
        ul.appendChild(li);
    }

    menuDiv.append(title, ul);
    document.querySelector('#content').appendChild(menuDiv);
}