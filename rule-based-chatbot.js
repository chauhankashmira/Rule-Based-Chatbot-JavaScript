
function getResponse(input) {
  const text = input.toLowerCase();

  if (text.includes("opening hours")) {
    return "We are open from 9am to 5pm.";

  } else if (text.includes("price")) {
    return "Our prices start at £10.";
  
  } else {
    return "Sorry, I don't understand.";
  }

}


console.log(getResponse("What are your opening hours?")); //pass
console.log(getResponse("Tell me the price")); //pass
console.log(getResponse("When do you open?")); // fails
