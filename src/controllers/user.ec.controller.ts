import { Request, Response } from "express";
import {createuserService,createproductService,getproductService,createorderService,getorderService} from "../services/user.ec.service";
export async function createuser(req:Request,res:Response){
    try{
     const {username,password,role} = req.body;
     if (!username || !password) {
        return res.status(400).json({
            message:"Missing required fields"
        })
     }

     if (role !== 'admin' && role !== 'customer') {
        return res.status(400).json({
            message:"unknown role"
        })
     }

     const createUser= await createuserService({username,password,role})
     return res.status(201).json({
        message:"User created successfully",
        data:createUser
     })
    }catch(err){
        console.error(err)
       return  res.status(500).json({message:"failed to create a user"})
    }
}


export async function createproductController(req:Request,res:Response){
    try{
      const  {title,description,price,id} = req.body;
      
      if(!title || !description || !id){
        return res.status(400).json({
            message:"missing req filed"
        })
      }
      if(price !== 'number'){
         return res.status(400).json({
            message:"missing req filed"
        })
      }

      const createproduct= await createproductService({title,description,price,id})
      return res.status(201).json({message:"sucessfully created",data:createproduct})

    }
    catch(err){
        console.error(err)
        return res.status(500).json({
            message:"failed to create a product"
        })
    }
    

}

export async function getproductController(req:Request,res:Response){
     try{
      const getproducts= await getproductService()
    return res.status(200).json({message:"sucessfully fetched a product",data:getproducts})
     }
     catch(err){
        console.error(err)
        return res.status(500).json({
         message:"failed to fetch the product"
        })
     }
  

}

export async function createorderController(req: Request, res: Response) {
  try {
    const { customerId, products, totalAmount, status } = req.body;

    if (
      !customerId ||
      !products ||
      !totalAmount ||
      !status
    ) {
      return res.status(400).json({
        message: "Missing some fields"
      });
    }

    const createOrder = await createorderService({
      customerId,
      products,
      totalAmount,
      status
    });

    return res.status(201).json({
      message: "Order created successfully",
      data: createOrder
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: "Failed to create order"
    });
  }
}


export async function getorderController(req: Request, res: Response) {
  try {
    const { customerId } = req.query;

    if (!customerId || typeof customerId !== "string") {
      return res.status(400).json({
        message: "Customer ID is required"
      });
    }

    const orders = await getorderService(customerId);

    return res.status(200).json({
      message: "Successfully fetched orders",
      data: orders
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: "Failed to fetch orders"
    });
  }
}