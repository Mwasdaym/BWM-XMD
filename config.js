const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUyZKjOBT8F13t6jIGsziiIgYwXsAL3peJPggQWGAECLG5wv8+QS3RdZjuqeGkkFC+VGa+9wpIgnNkoQYMX0FKcQkZapesSREYAq3wfURBF3iQQTAErkXmSzU8HY3QTw50yYtkWfDP50qTTteCTYrZ4KrXu6l7PL+ARxekhXPD7h8A01w7I2ItcKNvnflgao7VkF+60yCglrRH+T45bRCK6NSQX8CjRYSYYhIY6RXFiMKbhRobYvo9+sicF1puaqPDZi1FhhlOgvmGaGLBC7NCczqRyTS1r2Sisf4e/e3Wcc5kZHtpWC07kywLNZFDwWyH16g6Jgre4Mpkrrsg7jv9HAcEeTMPEYZZ823dJ2oNnYWwCNVG4QZCSVfreJYNvJWNo31Ec9txF5Yh9Rax/D3itWnG152+n48S3+ZviXTB5Pm8zjhk8np/bPjOFcqRYMRh9ZW4TT+zEv0f3bfm8lAdOgOb89Yuup7tZCY0N2yInWRKHGqipa0JdX0/G8L36Jf189UgetJ3hGKLdDnt0f351PhjfnsRDnKH2ErN1TKSR1/oQ1bQP7GcG3HmjXrkerhIS8najY9OZ7SSJtXz/SAPREXZ7mszW9rGrGykOJjBeUCay2Q7lWwSKuiKjk7dLAcdUVnJ2W2x3rNbb1S9vL0oQs3MA0Pu0QUUBThnFDKckHav3+O7AHrlFrkUsTd5gb5AJqpusiTTQhCD+CwElT+eFRedUCPflNVqvRLu9dI6CC+gC1KauCjPkTfFOUtos0B5DgOUg+HfP7uAoJq9G9eW47ku8DHN2Z4U6S2B3qern4fQdZOCsG1DXL1dIAqGvV/biDFMgrzVsSCQuldcIv0KWQ6GPrzl6NEFHiqxi1o8AM9+rNchWi9hhMo1U+6y4q1byteEvP/iyYMez7n9J9EbSE+CoHBPjudxT4LgDUTO9STZ6YEuwB890975rYV2sMLBAoWb3d3bn8cbNt2vbLy19qr6ZsO79ogiDwwZLVAXONCNinSXRIj8Afci9A+b0Wp8f3ZuJ+tYo0WyO2bOSJsuvuC+ewqGr7/mlJ54Ld58aU9tcXkAXRC/RRC3L+8PBEnui7yiiL3h4K/8R9XqCNP0B0Gshf3QvL3gIQbxLW+zsYTPZSZoxiokMa0mE3UfqHqggl8efYb9PUxS6hUMR0547GBpipWQv68jrMrZTs2ommXzQqi3BU6bIHr5FxAwBKp3K59tc26m99lO1/twZEu+OMkE2NemB/EeV4v+dDZP5cFd5Af3QyxaipPNJ2I14nwfhauLm52Ib0gFHiNpxlFvcRmtX9pq71n5WsxzsqAvpDhvJnvjRB101a2Ab2a9MlG8s0aSsKp3McuvGhFMklO56B0Iz5UdbWVZEpflRnS44JU8EUIYSPc9DG1B/2jDtzFw+xi/+K1BXj+S5WP0Ns0IbB36D2++Zrz36H6B+BiPv8mRhsSTQ8/pRODKpKiF8qzIPXMW2FZUWVllZVgqFnuaZG5igsfjZxekN8j8hMZtLxGPJtgDXXCDOVN/tekOxyhnME7BkJN4UZY5TuC6IG7UNN0yyD67G6jtZ7ISPP4BOCUVwPkHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

