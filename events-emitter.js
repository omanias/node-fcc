const EventEmitter = require("events");

const CustomEmitter = new EventEmitter();

CustomEmitter.on("response", (name, id) => {
  console.log(`data recieved: ${name} with id: ${id}`);
});

CustomEmitter.emit("response", "John", 37);
