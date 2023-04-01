
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
    
*/