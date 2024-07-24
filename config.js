//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "+94762510493";
global.owner = process.env.OWNER_NUMBER || "+94762510493";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU1JRjZCeXdocC9Ea3VtUlVXamlkSXBFenkzNFVpTkRURG9TdUVzdmsyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1A5R2J5VEtQVnV4WFYxaytDQVN0U2xWbHRWamhkTHdhM0E4SjlKdFhoQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSjRtVlZmTkJicDVVaWsvYmk0V0hCUnIxbkZMd3IzYVh5WnhWV0FyNEU0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFb01WY01GMkYxVnBGcGFRYlB3NjZtVEkxdklPdGpnWXY5Y0xrYUR6ZHkwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1PN3VuWSsvZFl5K0dGMmlxYUNvWW1Uam9VY2hWT1FvRnJPU0ZqY1NsMU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN1aWVldURRSEhxeXphV2pFVitZd0w5Mmh0Zkp1UnM1SHArMlFtU2NzMm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU1vNUVxWHNwL1ZlSHhGOUZSV3ErVFExYmFwSlV1Sk13Y3FZRjFBaHRWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU5XSjF0UjhhdFpTTzd3aDMvNU1KM0ZmOHRiOUR0d1Y4SjV3b3piREZCRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im52OCtVRkU0TDBXQXNNMVBxRXl1RDB4ZlZ5Y1Vlc3QwQVpaR2hUWEF6SDBZWEZ3TWNFekFtNXY5NTNqWThhQzN2NzFSMXVsb0JQUHpneHRYdUNkWGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkwLCJhZHZTZWNyZXRLZXkiOiJGaVU1SFJMTkdIaFVEODVVR3d4ZnpPRUt0ekxRTE5KM0hXL1pjdk9GV2JFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYyNTEwNDkzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJBODg2MkFBRkU3MzBFRTdEN0ZFOENCMEMzMjcyNTZCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE4MDcyOTl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYyNTEwNDkzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjY3MEIyOEUwNjcxOUMxRTgzMDUzRjIxQkJERURDNkY5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE4MDcyOTl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IktDVWNfVXc0UVd5T1B2VldHQlQyTUEiLCJwaG9uZUlkIjoiNWFiM2NlMWItMDIzZC00ZDkzLWFlMGEtM2ViZDI4ZWUzNDQxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZUQ2t1dDB3V1U3R0NLTkxjVE03MUZ0VTJSOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiS1NSN0J5Qld5RkY3bVdoS1hZcjM2ZXV2Zm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV1paTjlCNVYiLCJtZSI6eyJpZCI6Ijk0NzYyNTEwNDkzOjI0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ii9Sw5hTMyBRVTMzw5EvIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNT21sdHdFRUxUamdyVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJtTVdqeG8zc245ZUNSZ0VqZnJQL0p0QVdFdWtMdG9IcmJtbmRzZ2pvdkVBPSIsImFjY291bnRTaWduYXR1cmUiOiJUVmYzVTlOVU00TWsvcTRGWkVhRnZPMFhxWWwxcUJLZlhLRzB5WFJqT2RQMlZyaDhCWXJpLy9jN0VqM0xScTdSektLY1ZpQ3hpV0V3MDZQMGdZdnlCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUnlsaDBQOGs2TmhDRmx2Rm8rOWRCaTFOWmF0cno0a1lFM0w3K2MwMm10Vk8xanVtZStxRlZiamdjcktjTVhjaSt5ZitZQmlWcWJLZWFaVVVXeGUzZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MjUxMDQ5MzoyNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaakZvOGFON0ovWGdrWUJJMzZ6L3liUUZoTHBDN2FCNjI1cDNiSUk2THhBIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxODA3Mjk3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1ZZSJ9"
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "᭧🦋⃟ʙ⃯ᴜ᷍ᴛͥ͢ᴛͣᴇ⃮ͫʀғꪲʟʏ̶᭄𝀋🌼",
  ownername: process.env.OWNER_NAME || "💃ғᴀͥᴛͣʜͫ͢ɪ💎͟͢͞͠Q̶͟͢͠ᵘᵉ̶͟ᵉ̶͟ⁿ̶̶᭄͟͢͢࿂ ⃔",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
