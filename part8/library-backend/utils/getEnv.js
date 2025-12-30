import dotenv from 'dotenv';
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const env = process.env.NODE_ENV;

if (env === 'development') {
    dotenv.config({ path: resolve(__dirname, '..', '.env.dev') });
} else if (env === 'test') {
    dotenv.config({ path: resolve(__dirname, '..', '.env.test') });
} else if (env === 'production') {
    dotenv.config({ path: resolve(__dirname, '..', '.env.prod') });
} else {
    dotenv.config(); 
}

const requiredEnvVars = ['MONGODB_URI', 'MONGODB_DB_NAME', 'JWTSECRET'];
requiredEnvVars.forEach(varName => {
    if (!process.env[varName]) {
        console.error(`Not Vars: ${varName}`);
        process.exit(1);
    }
});

const config = {
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_DB_NAME: process.env.MONGODB_DB_NAME,
    PORT: process.env.PORT || 4000, 
    JWTSECRET: process.env.JWTSECRET,
    NODE_ENV: env,
};

export default config;