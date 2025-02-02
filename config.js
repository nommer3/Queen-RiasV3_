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

    sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk95YzlseFQvbjIyeXZIQVJRay9TSUxpa1lMVUNlMjBPNit1dmhEY3lHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzBHcG1LNVVtWXpJRittWjRvN1ZSNGZvOVliUDd5enVnWEFmRmZkZlkyQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTEtmVWdVOW96MitGbU1TYkZseksrVWE1SkdTMkNjSWhnL3R0VXgxcGtzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTnFzTnNZYUc0ak9QMGhSMXAwZW43eW9DYnplWGlnN2E1Z2pUT0VCNkdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhNeE5tMUJBSjhMTW8xajRnaXc5UUxDT2JheHRWb09Da3dPRi9FZ0NRbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFITWZEUEk0UmtMSGtEdEJJQlN2MWtmdzdsMlRscjJsUDJkUHVqeGQ0RjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUQraHVneFVUT1RHcjhNTlRXMVpLeEkySHA3ZEV5dmlIMUk0VWdRVEQwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0FOYVlZdWREbDBXZzFxOWQ2UnhPOThoWTVzbkVDYlM1bTdjZGM5RXNnOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlU3YmZyMFJEUlRxU3lrU3BTT0thcXF3YkZ6aUU1ZFgyTUplbmtORVVGWU5vSTZKS3RwRlN4aWpRRVJNUHZMeXhMTTNoWkRINXNPeVFaUmlmd2hNZUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjksImFkdlNlY3JldEtleSI6ImpkaUxKbGhZT21TZ2tqbHg0QXhPakNBY0lWNFYyM2pNajFMNHh2R1hGQlE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjZEWVlOWDFRIiwibWUiOnsiaWQiOiIyNDEwNzE2NDczMjo1NEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE4NzkwNDgxOTIwODIxNzo1NEBsaWQiLCJuYW1lIjoi4pyf4Ly6SOKDpEpPUkRBTiDwnZeU8J2Xo/Cdl6cifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pYWXRhd0dFUHFhKzd3R0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVCbUhJcjhMRjBQMW1Rck1ZRjdneGFkUWtqakhTZ3cwM1VTemxsdE54bG89IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik51dG5LbXE4eU9aaGthQ0h2alpHZG9xdForVmQwQVMweUZkRlJnRG4zRUdlSFVwbWliSSttY0xVL3NNUFd6d3VocEZXcHRaSlg5V0g2bXArYWg5WkFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPc3ZkK1lRcmNUK2FtbEpxNy9OU2pteUdxeDZMVmxGdXhsbkNQSmI4dmVVc21BSngzcTYrQ2NLTzA5dXlGVWxuTHJtNkVUenRNelBxMVdLQmhDQ2lEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MTA3MTY0NzMyOjU0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZBWmh5Sy9DeGREOVprS3pHQmU0TVduVUpJNHgwb01OTjFFczVaYlRjWmEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczODQ2MDU1MSwibGFzdFByb3BIYXNoIjoibm0zQmIifQ==", // Add Your Session ID here

    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false", // Auto-reject calls feature (true or false)
};
