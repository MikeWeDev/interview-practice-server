import {Router} from 'express';
import {createuser,createproductController,getproductController,createorderController,getorderController} from '../controllers/user.ec.controller';
 const route = Router();

 route.post('/',createuser);
 route.post('/product',createproductController);
route.get('/product',getproductController);
route.post('/order',createorderController);
route.get("/order", getorderController);



 export default route;