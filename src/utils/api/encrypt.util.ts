import { pbkdf2 } from 'crypto';

interface Identifiable {
  id: string;
  [x: string]: any;
}

interface EncryptedObject {
  id: string;
  encrypted: string;
}

const key = process.env.ENC_KEY as string;

export async function encrypt(str: string): Promise<string> {
  return new Promise((resolve, reject) => pbkdf2(str, key, 100000, 64, 'sha512', (err, result) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(result.toString('base64'));
  }));
}
