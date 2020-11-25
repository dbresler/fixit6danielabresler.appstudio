let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']

// create a new array variable
let withMarmaduke = []
withMarmaduke.push(pets)
withMarmaduke.push('Marmaduke')

let userChoice = prompt("Enter 1 to remove Vinny, enter 2 to remove Marty, enter 3 to add Nancy, enter 4 to add your name, enter 5 to find index of Riley, enter 6 to find index of Cindy, enter 7 to show the withMarmaduke array.")
switch (true) {

  case (userChoice == '1'):
    let postVinny = petNames.indexOf('Vinny')
    petNames.splice(postVinny, 1)
    console.log(`The action taken was: Remove Vinny\nThe remaining data that is :\n[${petNames}]`)
    break
  case (userChoice == '2'):
    let postMarty = petNames.indexOf('Marty')
    petNames.splice(postMarty, 1)
    console.log(`The action taken was: Remove Marty\nThe remaining data is:\n[${petNames}]`)
    break
  case (userChoice == '3'):
    petNames.unshift('Nancy')
    console.log(`The action taken was: Add Nancy to the front of the array\nThe remaining data is:\n[${petNames}]`)
    break
  case (userChoice == '4'):
    let name = prompt('Enter your first name. ')
    petNames.push(name)
    console.log(`The action taken was: Add ${name} to the end of the array\nThe remaining data is:\n[${petNames}]`)
    break
case (userChoice == '5'):  
    let postRiley = petNames.indexOf('Riley')
    console.log(`The action taken was: find the array index of Riley\nThe array index of Riley is ${postRiley}.\nThe remaining data is:\n[${petNames}]`)
    break
  case (userChoice == '6'):
    let postCindy = petNames.indexOf('Cindy')
    console.log(`The action taken was: find the array index of Cindy\nThe array index of Cindy is ${postCindy}.\nThe remaining data is: \n[${petNames}]`)
    break
case (userChoice == '7'):
    console.log(`The action taken was:show the withMarmaduke array data\n${withMarmaduke}\nThe remaining data is:\n[${petNames}]`)
    break
  default:
    console.log('That was not one of the options for this program')
}
