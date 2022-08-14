require("dotenv").config();
const axios = require("axios");

let prevMinutes = 0;

// executes every minute
setInterval(() => {
    const time = new Date();
    const minutes = time.getMinutes();
    if (prevMinutes === minutes) return;
    prevMinutes = minutes;
    const hours = time.getHours();

    axios({
        method: "patch",
        url: "https://discordapp.com/api/users/@me/settings",
        headers: {
            "Authorization": process.env.DISCORD_TOKEN
        },
        data: {
            custom_status: {
                text: `${hours > 4 && hours < 21 ? "gm" : "gn"} it's ${hours % 12 || 12}:${(minutes < 10 ? "0" : "") + minutes} ${hours >= 12 ? "pm" : "am"}`,
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
}, 100);
