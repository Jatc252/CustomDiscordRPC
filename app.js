const DiscordRPC = require('discord-rpc');
const client = new DiscordRPC.Client({ transport: 'ipc' });
require('dotenv').config();

(async () => {
    client.on('ready', async () => {
        await client.setActivity({
            buttons: [{ label: process.env.firstButtonLabel, url: process.env.firstButtonWebsite }, { label: process.env.secondButtonLabel, url: process.env.secondButtonWebsite }],
            details: process.env.firstOption,
            state: process.env.secondOption,
            largeImageKey: process.env.largeImage,
            largeImageText: process.env.largeText,
            smallImageKey: process.env.smallImage,
            smallImageText: process.env.smallText
        }).catch(err => console.log(err));

        console.log("Custom Discord rich presence successfully enables.");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error); // Logging into our application.
})();