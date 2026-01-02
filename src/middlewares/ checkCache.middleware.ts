import path from "path";
import fs from "fs";
import { Request,Response,NextFunction } from "express";

// 1. Cache en mémoire
export let countriesCache: any = null;
let lastCacheUpdate = 0;
const CACHE_TTL = 60 * 60 * 1000; // 60 minutes en millisecondes



// 2. Fonction pour charger/relancer le cache
const loadCountriesData = () => {
    try {
        const filePath = path.join(__dirname, "../data/dataCountries.json");
        const rawData = fs.readFileSync(filePath, 'utf-8');
        countriesCache = JSON.parse(rawData);
        lastCacheUpdate = Date.now();
    } catch (error) {
        console.error("Erreur de chargement du cache:", error);
        countriesCache = null;
    }
};


// 3. Middleware de vérification du cache
export const checkCache = (req: Request, res: Response, next: NextFunction) => {
    // Si le cache est vide ou expiré
    if (!countriesCache || (Date.now() - lastCacheUpdate) > CACHE_TTL) {
        loadCountriesData();
    }
    next();
};