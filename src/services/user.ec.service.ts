import user, { type UserRole } from '../models/user.ec';
import product from '../models/product'
import order from '../models/order'
interface CreateUserInput {
    username: string;
    password: string;
    role: UserRole;
}


export async function createuserService({username,password,role}: CreateUserInput) {

    const userexist = await user.findOne({
        username
    });

     if(userexist){
        throw new Error("Username already exists");
     }
   
     const createuser= await user.create({
        username,
        password,
        role
     })

     return createuser
}

export async function createproductService({title,description,price,id}:{title:string,description:string,price:number,id:string}){
    const createproduct = await product.findOne({
        _id:id
    })

    if(createproduct){
        throw new Error("product arady existed")
    }

    const createproducts= product.create({
        title,
        description,
        price,
    })

    return createproducts
}


export async function getproductService(){
    const getproducts=await product.find();
    if(!getproducts){
        throw new Error("dont have any product")
    }
    return getproducts
}

interface OrderProduct {
  productId: string;
  quantity: number;
  price: number;
}

export async function createorderService({
  customerId,
  products,
  totalAmount,
  status
}: {
  customerId: string;
  products: OrderProduct[];
  totalAmount: number;
  status: "PENDING" | "PAID" | "SHIPPED" | "DELIVERED" | "CANCELLED";
}) {
  const createOrder = await order.create({
    customerId,
    products,
    totalAmount,
    status
  });

  return createOrder;
}

export async function getorderService(customerId: string) {
  const orders = await order.find({
    customerId
  });

  return orders;
}