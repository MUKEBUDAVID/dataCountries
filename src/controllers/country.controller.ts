import { Request, Response }from "express";
import{countriesCache} from"../middlewares/ checkCache.middleware";

// import { CountryModel } from '../models/country.model';
// import {CountryQueryParams} from"../interfaces/country.interface";
// import{ ApiResponse } from'../utils/apiResponse';






export  const getCountries=(req: Request, res: Response):void=> {

try {

 
    if (!countriesCache) {
         res.status(500).json({ message: "Erreur de chargement des données" });
    }
    
    res.status(200).json(countriesCache)
        
  
} catch (error) {
        res.status(404).json(error)
    }
  }



// export const  getCountryByCode=(req: Request, res: Response): Promise<Response>=> {
//     try {
//       const { code } = req.params;
//       const country = await CountryModel.findOne({ isoCode: code.toUpperCase() });

//       if (!country) {
//         return ApiResponse.error(res, 'Country not found', 404);
//       }

//       return ApiResponse.success(res, country);
//     } catch (error) {
//       return ApiResponse.error(res, error.message, 500);
//     }
//   }



