import { NextApiHandler } from 'next';

const hello: NextApiHandler = async (req, res) => {
  res.status(200).json({
    isHealthy: true,
  });
};

export default hello;
