import axios from 'axios';
import { SlackError, UnauthorizedError } from '../../utils/common/error.util';

const slackBotToken = process.env.SLACK_BOT_TOKEN as string;
const slackWebhookURL = process.env.SLACK_WEBHOOK_URL as string;
const slackWebhookPassword = process.env.SLACK_WEBHOOK_PASSWORD as string;

export async function getUsers() {
  const { data } = await axios.get(`https://slack.com/api/users.list?token=${slackBotToken}`);
  if (!data.ok || data.error || !data.members) {
    throw new SlackError();
  }
  return data.members as SlackAPI.User[];
}

export async function postWebhook(body: any, password: string) {
  if (password !== slackWebhookPassword) {
    throw new UnauthorizedError();
  }
  const { data } = await axios.post(slackWebhookURL, body);
  return data;
}
