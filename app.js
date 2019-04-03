document.addEventListener("DOMContentLoaded", function() {
    console.log('JavaScript Ready');
    
});

const checkForFullName = () => {
  const nameInput = document.getElementById('nameInput').value;
  const nameSpan = document.getElementById('nameSpan');
  console.log('NameInput:', nameInput);
//check if the nameInput is greater than 3
  if(nameInput.length > 3) {
    //check the nameInout for space character
    console.log('NameInput is greater than 3 chars');
    //check if nameInput contains a whitespace
    if (nameInput.indexOf(' ') === -1) {
      console.log('No Spaces here dude');
      nameSpan.style.display = "block";
      return false;
    } else {
      nameSpan.style.display = "none";
      return true;
    }

  } else {
    //display the error span message
    console.log('NameInput is less than 3 chars');
    nameSpan.style.display = "block";
    return false;
  }
}