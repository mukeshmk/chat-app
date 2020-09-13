const env = process.env;
// connect to mango db
const dbURI = 'mongodb+srv://test:test@cluster0.hbcf6.mongodb.net/nodeapp';

export const nodeEnv = env.NODE_ENV || 'dev';
export default {
    port: env.port || 8080,
    dbURI: dbURI,
    secret: 'secret!'
};
