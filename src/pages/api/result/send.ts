import { NextApiHandler } from 'next';

import { postWebhook } from '../../../services/api/slack.service';

import { makeStandardError, MethodNotAllowedError } from '../../../utils/common/error.util';
import { mapToSlackMessageBlock } from '../../../utils/api/format.util';
import { encrypt } from '../../../utils/api/encrypt.util';

const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      throw new MethodNotAllowedError();
    }

    const { result, password } = req.body;
    const encrypted = await encrypt(password);

    await postWebhook(mapToSlackMessageBlock(result), encrypted);

    res.status(200).json({
      status: 0,
      message: 'Slack webhook posted successfully.',
    });
  } catch (err) {
    const error = makeStandardError(err);

    res.status(500).json(error);
  }
};

export default handler;
