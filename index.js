const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");
const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");

  // Example: Send "I am here" message to the specified contact
  const hereMessage = "I am here!";
  sendMessageToId(hereMessage, "923259491349@c.us");
});

// ..........................
client.on("message", (message) => {
  console.log(message.from);

  if (
    message.from == "923224415667@c.us" ||
    message.from == "923316672962@c.us" ||
    message.from == "923047960450@c.us" ||
    message.from == "923214347376@c.us" ||
    message.from == "923261298633@c.us" ||
    message.from == "923454279694@c.us" ||
    message.from == "923230845073@c.us" ||
    message.from == "923208571658@c.us" ||
    message.from == "923004437090@c.us" ||
    message.from == "923214584156@c.us"
  ) {
    if (message.from.includes("g")) {
        message.reply("message Got From the Sir");
        sendMessageToId(message.body, "923215898897@c.us");
    }
  }

  if (message.body === ".work") {
    message.reply("Yes Working");
  }

});
// ..........................

async function sendMessageToId(messageContent, id) {
  try {
    // Send the message to the specified contact or group
    const message = await client.sendMessage(id, messageContent);

    console.log(`Message sent to ${id}. Message ID: ${message.id._serialized}`);
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

client.initialize();
