// array of names for freelancers
const names = ["Alice", "Bob", "Carol"]
//Array of occupationns for freelancers
const occupations =["Writer","Teacher", "Programmer" ]
const freelancers = [
    {name: "Alice", occupation: "Writer", startingPrice: 30},
    {name: "Bob", occupation: "Teacher", startingPrice: 50},
    {name: "Carol", occupation: "Programmer", startingPrice: 70}
];
// render the list of freelancers and update the average starting

function render() {
  
    // get the element with the Id "freelancer-list" from the html
const avaliableFreelancers = document.getElementById("Avaliable-Freelancers");

    // clear the elemnt inside the "freelancer-list" element
freelancerList.innerHTML = "";

//loop through each freelancer and create a list with freelancer information
  freelancers.forEach((freelancer) => {
   
    // create a new list item element
    const itemList = document.createElement("li");
   
    // set the text content of the list item with  freelancer information 
    itemList.textContent = `${freelancers.name}, ${freelancers.occupation}, starting price: $ ${freelancer.startingPrice}`;

    // Each time the function is called, clear the existing list anf render it again with updated frelancers.
     freeLancerList.appendChild(itemList);
});
// After rendering the average starting price display
updateAveragePrice();
}
// function to generate random freelancer and add it to the array. only consists of names specified in "names"
 function randomFreeLancers() {
    
 }