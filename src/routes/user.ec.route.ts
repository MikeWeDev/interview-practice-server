import {Router} from 'express';
import {createuser,createproductController,getproductController} from '../controllers/user.ec.controller';
 const route = Router();

 route.post('/',createuser);
 route.post('/product',createproductController);
route.get('/product',getproductController);


 export default route;