let connection;

const setupInput = function(conn) {
  connection = conn; // set the connection object to the conn argument passed in
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput); // listen for the data event on stdin and pass the data to
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  switch (key) {
    case "\u0003":
      process.exit();
      break;
    case "w":
      connection.write("Move: up");
      break;
    case "a":
      connection.write("Move: left");
      break;
    case "s":
      connection.write("Move: down");
      break;
    case "d":
      connection.write("Move: right");
      break;
    case "1":
      connection.write("Say: Nhi is the best!");
  }
};

module.exports = {setupInput};