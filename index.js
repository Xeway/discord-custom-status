require("dotenv").config();
const axios = require("axios");

// executes every minute
setInterval(() => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();

    axios({
        method: "patch",
        url: "https://discordapp.com/api/users/@me/settings",
        headers: {
            "Authorization": process.env.DISCORD_TOKEN
        },
        data: {
            custom_status: {
                text: `${hours > 4 && hours < 21 ? "gm" : "gn"} it's ${hours % 12 || 12}:${minutes} ${hours >= 12 ? "pm" : "am"}`,
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
}, 1000 * 60);
