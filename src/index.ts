import { app } from './app';
const notifier = require('node-notifier');
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
const port: number = parseInt(process.env.PORT || '0') || 8080;
app.listen(port, () => {
  const message = `API available on http://localhost:${port} and You should visit http://localhost:${port}/graphql to use GrapQL`;
  console.log(message);
  notifier.notify(message);
});
