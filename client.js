const net = require("net");

// establishes a connection with the game server
// CLIENT

const connect = function() {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541,// PORT number here,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("successfully connected to game server");
  });
  
  conn.on("data", (data) => {
    // code that handle incoming data and console.log it for the player.
    console.log("Server says: ", data);
  });
  
  return conn;
};

module.exports = {connect};