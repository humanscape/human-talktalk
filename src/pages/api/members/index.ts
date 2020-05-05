import { NextApiHandler } from 'next';

import { getUsers } from '../../../services/api/slack.service';

import { makeStandardError, ErrorCode } from '../../../utils/common/error.util';
import { formatSlackUsers } from '../../../utils/api/format.util';

const handler: NextApiHandler = async (req, res) => {
  try {
    const users = await getUsers();
    const formatted = formatSlackUsers(users);

    res.status(200).json(formatted);
  } catch (err) {
    const error = makeStandardError(ErrorCode.SLACK_API_FAILED, 'An error occured when calling Slack API.');

    res.status(500).json(error);
  }
};

export default handler;
