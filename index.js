//document.getElementById("count-el").innerText = count + 1;

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el"); //document = {objet} ; (Document Objet Model "DOM")


//Initialize our count to zero

let count = 0;

//Listen for clicks in the increment button --> onclick = "increment()"

//Increment the count variable when the button is clicked

//Change the count-el in the HTML to reflect the new count

function increment() {
    count += 1;  //count = count + 1
    countEl.textContent = count;
};

//Create a function, save() which logs out the count when it is called --> create a save button on the HTML document

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
};