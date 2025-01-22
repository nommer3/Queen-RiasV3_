require("dotenv").config(); // Load environment variables

module.exports = {
    prefix: process.env.PREFIX || "¥", // Command prefix

    ownerName: process.env.OWNER_NAME || "jordan", // Owner name

    ownerNumber: process.env.OWNER_NUMBER || "24107164732", // Your WhatsApp number

    mode: process.env.MODE || "private", // Bot mode: 'public' or 'private'

    region: process.env.REGION || "gabon", // Region

    botName: process.env.BOT_NAME || "Rias Gremory V3", // Bot name

    exifPack: process.env.EXIF_PACK || "RIAS V3 LOVES", // Sticker pack name

    exifAuthor: process.env.EXIF_AUTHOR || "jordan", // Author of the sticker pack

    timeZone: process.env.TIME_ZONE || "Africa/Lagos", // Time zone

    presenceStatus: process.env.PRESENCE_STATUS || "available", // Bot presence status

    autoRead: process.env.AUTO_READ === "true", // Auto-read messages (true or false)

    autoViewStatus: process.env.AUTO_VIEW_STATUS === "true", // Auto-view statuses (true or false)

    autoReact: process.env.AUTO_REACT === "true", // Auto-react (true or false)

    sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0grYVlNaTNYSjJPUWRlaWlNR1VjRyttdWtlK2x3M3B3TTJIUWZSTDdXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHVRVFg5dDZPdkVkMzl4VkR4WFFvNHNMNVhJdGkybDZEdzhyaTZLZmlpUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJT0JmUFllMEFTNEFDSFRXYk1rOGNvazNyYkViM2FGTDJGdHBNWlMrRDFZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3NUpWV0FhVWI2SmxuLzdtbzlnMmU0d1plTThvMTErSXkyMWpDSjU1aEY4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVBcnh6QUdITUZ6d090MkdtUkVEUGg0azMrMGw4Rk13dFlwelJDREpYRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVKcllqL0ZoekgybXRZMm5mWVdCWWVtcGJuSFdVQWJMTGJhZXA0UUFwQTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUxRYmRIWHRObFRrOHR3aHk1TVUyVVFFYUkvQlpvZDkxcDdFVVNQSjhWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHBjcHJpOElZTzFNTDhhT3BMUE0vR0RJUE1SZlNJSXZYd0FjNDhKQTJIWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9xSXBNSlVPS1p3Z1VpRTFVUy9pU3BhUTZzWS9PZS9tRjF6bDMyU1ZnaTZ3Z1F4OFNKTTM0SUNtZXZJOXhza25JY3VuelE4VHNUMVRyNEtETC9odmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk1LCJhZHZTZWNyZXRLZXkiOiIyRkNrZzlFWWluRUlnU1pTSFN6dFJFMnpyOUdUbXBQdGs0aFFoZjNpa0gwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJKS0pLVDFSRyIsIm1lIjp7ImlkIjoiMjQxMDcxNjQ3MzI6MzVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxODc5MDQ4MTkyMDgyMTc6MzVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJbll0YXdHRUl1Znhid0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4SWpVSHduSzlFMzNoeUVWRUIySFp4Mit4VkNVSmo0ZS9hTVZFaDkwNFFvPSIsImFjY291bnRTaWduYXR1cmUiOiJDenlYeStObHQvT0x1eCtWcDhaK0RUWnk3ZHE2Q3dTWHdodDRBWXpZTXZZRSt2T29LeC9YbmtjOWxONDQwc0tocFZQenE5NXMzbkl1TmVrcnhhaW5EZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoib0hqUFpJVDk2K2VxejRJK3gvM0t6eXFiSWRpZjgwL3BLSXZVWHBlQ09tOUdjVVRqVGVwRTBtb3dtYUZ1R3VhLzZxaEpSTW03MVA2bC9uYnUwRFZZakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDEwNzE2NDczMjozNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmQ0kxQjhKeXZSTjk0Y2hGUkFkaDJjZHZzVlFsQ1krSHYyakZSSWZkT0VLIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzc1NzYzNDUsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOL1oifQ==", // Add Your Session ID here

    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false", // Auto-reject calls feature (true or false)
};
