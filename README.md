# Rando Slackrisian
> A _super quick_ CLI hack to get a random member of your Slack Team. :game_die:

1. Obtain a full-access token for your Slack Team at:
   https://api.slack.com/web#authentication
2. Install this script via NPM, `npm install -g rando-slackrisian`
3. Run the script with your token set as an environment variable:
   `SLACK_TOKEN=[foo] rando-slackrisian`

## Why?!
When playing videogames like Darkest Dungeon or XCOM with large rosters of
characters, it can be quite amusing to name all your adventurers after friends
or coworkers.

![screenshot](http://f.cl.ly/items/432C0L3g272w1O0i441I/dd_remote_channel.jpg)

I like to do this :100: randomly to avoid bias (and thinking too hard about what
someone would think about my selection of them for a particular character).

## TODO
Built-in filtering by channel membership (e.g. only names from `#teamname`).
