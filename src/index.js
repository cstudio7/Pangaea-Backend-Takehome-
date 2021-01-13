import { config } from 'dotenv';
import app from './app';


config();

// This enables dotenv configurations
const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log('info', `Magic runs  on http://localhost:${port}`));

export default app;
