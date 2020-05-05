function isSlackBot(user: SlackAPI.User) {
  return user.id === 'USLACKBOT';
}

function isBot(user: SlackAPI.User) {
  return user.is_bot;
}

function isDeleted(user: SlackAPI.User) {
  return user.deleted;
}

export function filterSlackUsers(users: SlackAPI.User[]) {
  function filterUser(user: SlackAPI.User): boolean {
    return !isSlackBot(user) && !isDeleted(user) && !isBot(user);
  }

  return users.filter(filterUser);
}

export function filterSlackUsersResponse(data: any) {
  if (!data.ok || data.error || !data.members) {
    throw new Error();
  }
  return filterSlackUsers(data.members);
}
