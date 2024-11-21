import { Oso } from 'oso-cloud';

const apiKey = process.env.OSO_API_KEY;
if (!apiKey) {
  throw new Error('OSO_API_KEY is not set');
}
export const oso = new Oso('https://cloud.osohq.com', apiKey);
