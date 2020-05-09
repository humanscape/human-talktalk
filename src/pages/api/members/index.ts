import { NextApiHandler } from 'next';

import { getUsers } from '../../../services/api/slack.service';

import { makeStandardError, MethodNotAllowedError } from '../../../utils/common/error.util';
import { formatSlackUsers } from '../../../utils/api/format.util';

const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method !== 'GET') {
      throw new MethodNotAllowedError();
    }

    const users = await getUsers();
    const formatted = formatSlackUsers(users);

    res.status(200).json(formatted);
  } catch (err) {
    const error = makeStandardError(err);

    res.status(500).json(error);
  }
};

export default handler;
