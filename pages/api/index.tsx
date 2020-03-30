import { NextApiHandler } from 'next';

const hello: NextApiHandler = (req, res) => {
  res.status(200).json({
    isHealthy: true
  });
};

export default hello;
