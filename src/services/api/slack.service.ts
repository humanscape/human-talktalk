import axios from 'axios';

const slackBotToken = process.env.SLACK_BOT_TOKEN;

export async function getUsers() {
  const { data } = await axios.get(`https://slack.com/api/users.list?token=${slackBotToken}`);
  if (!data.ok || data.error || !data.members) {
    throw new Error();
  }
  return data.members as SlackAPI.User[];
}
