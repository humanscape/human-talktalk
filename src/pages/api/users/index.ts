import { NextApiHandler } from 'next';

import { getUsers } from '../../../services/slack.services';

import { makeStandardError, ErrorCode } from '../../../utils/common/error.util';
import { filterSlackUsersResponse } from '../../../utils/api/format.util';

const handler: NextApiHandler = async (req, res) => {
  try {
    const { data } = await getUsers();
    const filtered = filterSlackUsersResponse(data);

    res.status(200).json(filtered);
  } catch (err) {
    const error = makeStandardError(ErrorCode.SLACK_API_FAILED, 'An error occured when calling Slack API.');

    res.status(500).json(error);
  }
};

export default handler;
