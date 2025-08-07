// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
// import { ApiKeyModel } from '../models/apiKey.model';
// import { ApiResponse } from '../utils/apiResponse';

// export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const apiKey = req.headers['x-api-key'] || req.query.apiKey;
    
//     if (!apiKey) {
//       return ApiResponse.error(res, 'API key is required', 401);
//     }

//     const keyDoc = await ApiKeyModel.findOne({ key: apiKey, active: true });
    
//     if (!keyDoc) {
//       return ApiResponse.error(res, 'Invalid API key', 401);
//     }

//     if (keyDoc.expiresAt < new Date()) {
//       return ApiResponse.error(res, 'API key has expired', 401);
//     }

//     // Vérifier les limites du plan
//     if (keyDoc.plan === 'free' && keyDoc.requests >= 1000) {
//       return ApiResponse.error(res, 'Monthly request limit exceeded', 429);
//     }

//     // Incrémenter le compteur de requêtes
//     keyDoc.requests += 1;
//     await keyDoc.save();

//     req.apiKey = keyDoc;
//     next();
//   } catch (error) {
//     return ApiResponse.error(res, 'Authentication failed', 401);
//   }
// };