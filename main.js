const userInput = document.getElementById("user_input")
const button = document.getElementById("button")
const result = document.getElementById("result")

button.addEventListener("click", () => {
  if (checkLength(userInput.value) === false) {
    alert("Please enter five characters")
    return //stop executing function
  }

  if (letterCase(userInput.value) === false) {
    alert("Please enter lowercase and uppercase letters")
    return //stop executing function
  }

  if (twoNumbers(userInput.value) === false) {
    alert("Please enter at least two numbers")
    return //stop executing function
  }

  if (passed(userInput.value) === true) {
    return //stop executing function
  }
})

// Function 1 - Check length of string function

const checkLength = (userInput) => {
  //console.log(userInput.length)
  return userInput.length >= 5 ? true : false
}

//Function 2 - Check for Upper and Lowercase Letters

const letterCase = (userInput) => {
  const uppercase = /[A-Z]/.test(userInput) //tests for uppercase - returns true/false
  const lowercase = /[a-z]/.test(userInput) // tests for lowercase - returns true/false
  //console.log(uppercase)
  //console.log(lowercase)

  return uppercase && lowercase ? true : false
}

//Function 3 - Checks for two numbers

const twoNumbers = (userInput) => {
  return /(\d.*){2,}/.test(userInput) ? true : false

  // if userInput contains two nums (Regex) pass otherwise alert.
  // https://regexr.com/ - to find regex
}

// Function 4 if all checks passed, alerts user.

function passed(userInput) {
  if (
    checkLength(userInput) === true &&
    letterCase(userInput) === true &&
    twoNumbers(userInput) === true
  ) {
    result.textContent = `Codename ${userInput} Accepted! 🥳`
  }
}
