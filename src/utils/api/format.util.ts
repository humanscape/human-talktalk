const standardNames = [
  {
    name: 'Zake',
    to: 'Jake',
  },
  {
    name: 'Hj',
    to: 'HJ',
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

  return users.filter(filterUser).map(mapToMember);
}

export function formatSlackUsersResponse(data: any) {
  if (!data.ok || data.error || !data.members) {
    throw new Error();
  }
  return formatSlackUsers(data.members);
}
