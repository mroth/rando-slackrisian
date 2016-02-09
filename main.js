#!/usr/bin/env node
"use strict";
const https = require('https');

const SLACK_TOKEN = process.env.SLACK_TOKEN;
if (SLACK_TOKEN === undefined) {
  console.error(`Token must be set for SLACK_TOKEN!`);
  process.exit(1);
}

const reqUrl = `https://slack.com/api/users.list?token=${SLACK_TOKEN}`;

function printRandomUser(userdb) {
  // disregard all bots and single-channel guests
  const validUsers = userdb.filter(u => !u.is_bot && !u.is_ultra_restricted);
  const recruit = validUsers[Math.floor(Math.random()*validUsers.length)];
  console.log(`${recruit.profile.real_name} (@${recruit.name})`);
}

https.get(reqUrl, response => {
  let body = "";
  response.on('data', d => { body += d;} );
  response.on('end', () => {
    const parsed = JSON.parse(body);
    if (parsed["ok"] === true) {
      printRandomUser(parsed.members);
    } else {
      console.error("Something went wrong talking to Slack!");
      console.error(parsed["error"]);
    }
  });
});
