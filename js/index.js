
/*
    remove all child node
 */

function removeNodes() {
    const container = document.querySelector('#container');
    removeAllChildNodes(container);
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    //or parent.innerHTML=''
}


/*

    SET AND GET TEXT CONTENT OF AN ELEMENT AND ITS DESCENDANT


*/

function getTextContent() {
    const el = document.querySelector('#container');
    console.log(el);
}

function setTextContent() {
    const el = document.querySelector('#container');
    el.textContent = "This is a new text content, quick test for fun!"
    /*
        or el.innerText = '';
    */
}

/*
    GET SET CONTENT HTML ELEMENT
*/

function getHTMLContent() {
    const el = document.querySelector('#container');
    console.log(el.innerHTML); //get html content
}

function setHTMLContent() {
    const el = document.querySelector('#container');
    el.innerHTML = `
        <h1>WELCOME TO THIS PAGE</h1>
    `;
}

/*
    iterate over seleted element
*/

function iterate_over() {
    const notes = document.querySelectorAll('#container');
    notes.forEach((note) => {
        note.style.backgroundColor = "green";
    })
    /*
        const notes = document.querySelectorAll('.note');
        const count = notes.length;

        for (let i = 0; i < count; i++) {
            notes[i].style.backgroundColor = "yellow";
        }
    */
}


/*
    CLONE AN ELEMENT
*/
function cloneElement() {
    const element = document.getElementById('new_body');
    //clone that element
    //const cloneElement = element.cloneNode();
    //clone  that element and its descendants
    const cloneElement = element.cloneNode(true);

    const new_ele = document.getElementById('clone_body');
    new_ele.innerHTML = cloneElement.innerHTML;

}

/*
    insert before and after selected node
*/
function insertBefore(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode);
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function showInsert() {
    let menu = document.getElementById('menu');

    let li = document.createElement('li');
    li.textContent = 'Hello world';

    menu.insertBefore(li, menu.firstElementChild);
}

/*
    remove dom element
*/
function removeElement() {
    // select the target element
    const e = document.querySelector("li:last-child");
    // remove the last list item
    e.parentElement.removeChild(e);
    //or e.remove();
    /*
        hide element:
        e.style.display = 'none';

    */
}
removeElement();