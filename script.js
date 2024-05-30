//Log out "Button clicked!" when the user clicks "SAVE INPUT" button
function saveLead() {
    console.log("Button clicked!")
}



//Refactor the code so that it uses .addEventListener()
//when you click the SAVE INPUT button



// Create two variable:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
   myLeads.push(inputEl.value)
    console.log(myLeads);
})
//Render the leads in the unordered
//Replace .textContent with .innerHTML and use <li> tags
//Wrap the code below in a renderLeads() function

function renderLeads(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++){
       listItems += "<li>" + myLeads[i] + "</li>"
       
}
ulEl.innerHTML = listItems
}





