import {Router} from "express";
import {getCountries} from"../controllers/country.controller";
import {checkCache} from"../middlewares/ checkCache.middleware";



const router = Router();



// 4. Route utilisant le cache
router.get("/", checkCache, getCountries);


// router.get("/:",(req:Request,res:Response)=>{})



export default router