require("dotenv").config();
const axios = require("axios");

(async () => {
    await axios({
        method: "patch",
        url: "https://discordapp.com/api/users/@me/settings",
        headers: {
            "Authorization": process.env.DISCORD_TOKEN
        },
        data: {
            custom_status: {
                text: "yikes",
                expires_at: null
            }
        }
    })
    .then(res => {
        console.log(res.data, res.status);
    })
    .catch(err => {
        console.log(err);
    });
})();
