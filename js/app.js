/*
    replace dom element
*/

function replaceDOM() {
    const listItem = document.querySelector('li:last-child');

    const newItem = document.createElement('li');
    newItem.innerHTML = '<h3>Hello world!</h3>';

    listItem.parentNode.replaceChild(newItem, listItem);
}

/*
    create a dom element
*/

function createDOM() {
    const element = document.createElement('div');
    element.innerHTML = `
        <h1>List to do</h1>
        <ul>
            <li>Learn javascript and practice</li>
            <li>Learn python and practice</li>
        </ul>
    `;
    document.body.appendChild(element);
}
createDOM();

