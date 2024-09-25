
const populateFlavors = (webInput) => {
  const flavors = {};

  for (let i = 0; i < webInput.length; i++) {
    let flavor = webInput[i].replace(/\s/g, '');
    
    if (Object.keys(flavors).includes(flavor)){
      flavors[flavor] = flavors[flavor] + 1;
    } else {
      flavors[flavor] = 1;
    }
  }
  return flavors;
}

const userInputString = prompt(
  "Please enter the FroYO flavors you would like separated by commas.",
  "strawberry, lime, chocolate, chocolate, strawberry, vanilla, vanilla, vanilla, lime, lime, lime"
);

// Split the string of flavors into an array of flavors
const stringArray = userInputString.split(",");


// Log the function and pass the array in
console.log(populateFlavors(stringArray));

