import express from 'express';
import subscribeRoute from './subscribe.router'
import publishRoute from './publish.router'

const Router = express.Router();
Router.use('/', subscribeRoute);
Router.use('/', publishRoute);

export default Router;