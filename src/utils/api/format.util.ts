import { compareMember } from '../common/compare.util';

const standardNames = [
  {
    name: 'Hj',
    to: 'HJ',
  },
];

const standardEmojis = [
  {
    name: 'vincent',
    to: 'vincent2',
  },
];

function isSlackBot(user: SlackAPI.User) {
  return user.id === 'USLACKBOT';
}

function isBot(user: SlackAPI.User) {
  return user.is_bot;
}

function isDeleted(user: SlackAPI.User) {
  return user.deleted;
}

function capitalizeName(name: string) {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

function standardizeName(name: string) {
  const capitalized = capitalizeName(name.toLowerCase());
  const target = standardNames.find((standardName) => standardName.name === capitalized);
  return target ? target.to : capitalized;
}

function mapToMember(user: SlackAPI.User): Member {
  return {
    id: user.id,
    name: user.profile.display_name.length
      ? standardizeName(user.profile.display_name)
      : standardizeName(user.profile.real_name),
    avatar: user.profile.image_72,
  };
}

export function formatSlackUsers(users: SlackAPI.User[]) {
  function filterUser(user: SlackAPI.User): boolean {
    return !isSlackBot(user) && !isDeleted(user) && !isBot(user);
  }

  return users
    .filter(filterUser)
    .map(mapToMember)
    .sort(compareMember);
}

function getMemberEmoji(name: string) {
  const lowercased = name.toLowerCase();
  const target = standardEmojis.find((standardEmoji) => standardEmoji.name === lowercased);
  return `:${target ? target.to : lowercased}:`;
}

export function mapToSlackMessageBlock(result: Result) {
  return {
    blocks: [
      {
        type: 'section',
        text: {
          type: 'plain_text',
          text: '오늘의 휴먼톡톡 파트너입니다. 마음에 드시나요? :blob-tongue:',
          emoji: true,
        },
      },
      ...result.payload.map(({ groupName, members }) => ({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*${groupName}* ${members.map(({ name }) => `${getMemberEmoji(name)} ${name}`).join(' ')}`,
        },
      })),
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: '휴먼톡톡 by Henry, https://human-talktalk.now.sh',
          },
        ],
      },
    ],
  };
}
