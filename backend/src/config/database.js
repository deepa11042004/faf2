import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbName = process.env.DB_NAME || "family_anchor_db";
const dbUser = process.env.DB_USER || "root";
const dbPassword = process.env.DB_PASSWORD || "";
const dbPort = parseInt(process.env.DB_PORT || "3306", 10);

const candidateHosts = [
  process.env.DB_HOST,
  "vv4p7dwcrq5z13vddfmv71a8",
  "mysql-database-vv4p7dwcrq5z13vddfmv71a8",
  "mysql-database-vv4p7dwcrq5z13v",
  "172.17.0.1",
  "host.docker.internal",
  "localhost"
].filter(Boolean);

const hostsToTry = [...new Set(candidateHosts)];

let sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: hostsToTry[0] || "localhost",
  port: dbPort,
  dialect: "mysql",
  logging: process.env.NODE_ENV === "development" ? console.log : false,
  pool: { max: 10, min: 0, acquire: 30000, idle: 10000 },
  define: { timestamps: true, underscored: true }
});

export const connectDB = async () => {
  let connected = false;
  let lastError = null;

  for (const host of hostsToTry) {
    try {
      console.log(`Attempting MySQL connection to host '${host}:${dbPort}' (DB: '${dbName}', User: '${dbUser}')...`);
      const testInstance = new Sequelize(dbName, dbUser, dbPassword, {
        host: host,
        port: dbPort,
        dialect: "mysql",
        logging: false,
        pool: { max: 10, min: 0, acquire: 30000, idle: 10000 },
        define: { timestamps: true, underscored: true }
      });
      await testInstance.authenticate();
      console.log(`✔ Connected successfully to MySQL at host '${host}:${dbPort}'!`);
      sequelize = testInstance;
      connected = true;
      break;
    } catch (err) {
      console.warn(`Connection failed for host '${host}:${dbPort}': ${err.message}`);
      lastError = err;
    }
  }

  if (!connected) {
    console.error("❌ All attempted database host connections failed:", lastError?.message);
    process.exit(1);
  }
};

export { sequelize };
export default sequelize;
