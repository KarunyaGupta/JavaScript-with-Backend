// User story 1: Create a function print(data) to create a label and append it to the body of the document
function print(data) {
    const label = document.createElement("label");
    label.textContent = data;
    document.body.appendChild(label);
  }
  
  // User story 2: Create a function newLine() to create a break element
  function newLine() {
    const br = document.createElement("br");
    document.body.appendChild(br);
  }
  
  // User story 3: Declare a variable board_size
  let board_size = 8;
  
  // User story 4: Create a chessboard that represents a board_size x board_size grid
  for (let i = 0; i < board_size; i++) {
    for (let j = 0; j < board_size; j++) {
      const symbol = (i + j) % 2 === 0 ? "*" : "#";
      print(symbol);
    }
    newLine();
  }
  