const webhookUrl1 = document.getElementById("webhook-1").value;
const title1 = document.getElementById("title-1").value;
const message1 = document.getElementById("message-1").value;
const color1 = document.getElementById("color-1").value;

document.getElementById("send-button-1").addEventListener("click", function() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", webhookUrl1);

    xhr.setRequestHeader("Content-Type", "application/json");

    const data = {
        username: "Webhook Sender",
        embeds: [{
            title: title1,
            description: message1,
            color: color1
        }]
    };

    xhr.send(JSON.stringify(data));
});
