import axios from 'axios';

/**
 * `GET /api/members`
 */
export async function getMembers() {
  const { data } = await axios.get<Member[]>('/api/members');
  return data;
}

/**
 * `GET /api/presets` (TODO)
 */
export async function getPresets() {
  const { data } = await axios.get('/api/presets');
  return data;
}

/**
 * `GET /api/histories` (TODO)
 */
export async function getHistories() {
  const { data } = await axios.get('/api/histories');
  return data;
}

/**
 * `POST /api/result/send`
 */
export async function sendResult({ result, password }: { result: Result, password: string }) {
  const { data } = await axios.post('/api/result/send', { result, password });
  return data;
}

/**
 * `POST /api/presets` (TODO)
 */
export async function savePreset(body: any) {
  const { data } = await axios.post('/api/presets', body);
  return data;
}

/**
 * `POST /api/histories` (TODO)
 */
export async function saveHistory(body: any) {
  // TODO
  const { data } = await axios.post('/api/histories', body);
  return data;
}
