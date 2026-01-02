import  express from "express";
import  cors from "cors";
import helmet from "helmet" ;
// import swaggerUi from "swagger-ui-express";
import countriesRouter from "./routes/countries.route"

// import authMiddleware from"./middlewares/auth.middleware" ;
// import  YAML from "yamljs" ;
// import dotenv from"dotenv";
// import { rateLimiter } from"./middlewares/rateLimiter.middleware";

const app = express();

// dotenv.config();




// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
// app.use(rateLimiter);

// Documentation Swagger
// const swaggerDocument = YAML.load("../swagger.yaml");
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



// Routes

app.use("/api/v1/countries", countriesRouter);




export default app;