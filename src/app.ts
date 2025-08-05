const  express= require('express');
const  cors= require('cors');
const helmet= require('helmet') ;
const swaggerUi=require('swagger-ui-express');
const { CountryController } = require('./controllers/country.controller') ;
const authMiddleware= require('./middlewares/auth.middleware') ;
const YAML= require('yamljs') ;
const dotenv=require('dotenv');
const  { rateLimiter }=require('./middlewares/rateLimiter.middleware');

const app = express();

dotenv.config();




// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(rateLimiter);

// Documentation Swagger
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



// Routes
const countryController = new CountryController();

app.get('/api/v1/countries', authMiddleware, countryController.getCountries);
app.get('/api/v1/countries/:code', authMiddleware, countryController.getCountryByCode);



module.exports=app