import axios from 'axios';

const slackBotToken = process.env.SLACK_BOT_TOKEN;

export function getUsers() {
  return axios.get(`https://slack.com/api/users.list?token=${slackBotToken}`);
}
