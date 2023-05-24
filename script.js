const inputId = document.getElementById('inputId');
const buttonId = document.getElementById('buttonId');
const listId = document.getElementById('listId');

// https://www.w3schools.com/js/js_htmldom_eventlistener.asp
buttonId.addEventListener('click', () => {
  const inputValue = inputId.value;
  //check if inputValue is not empty
  if (!inputValue) {
    return alert("Todo value can't be empty");
  }
  //https://www.w3schools.com/js/js_htmldom_nodes.asp
  const para = document.createElement('p');
  let nodeText = document.createTextNode(inputValue);
  para.appendChild(nodeText);
  para.id = inputValue
  document.getElementById("changeList").onclick = newList;
  para.addEventListener('click', function () {

    let todoValue = prompt("please enter your edit text", inputValue);
    if (todoValue == null || todoValue == "") {
      return alert("Todo value can't be empty");
    } else {
      let name = document.getElementById(inputValue)
      name.innerHTML = todoValue
    }
  })
  para.addEventListener("dblclick", function () {
    if (confirm("Do you want Delete this text?")) {
    listId.removeChild(para)
    }
  })
  listId.appendChild(para);
  inputId.value = '';
});


//question are you sure you want to delete and are you sure you want to edit 