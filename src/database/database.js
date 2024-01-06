// const { pool } = require("pg");

const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
});

module.exports = pool;

// async function connect() {
//   if (global.connection) return global.connection.connect();

//   const { Pool } = require("pg");
//   const pool = new Pool({
//     connectionString: process.env.CONNECTION_STRING,
//   });

//   const dados_agricultor = await pool.connect();
//   console.log("Conexão feita");

//   const res = await dados_agricultor.query("select now()");
//   console.log(res.rows[0]);
//   dados_agricultor.release();

//   global.connection = pool;
//   return pool.connect();
// }

// connect();

// module.exports = pool;

// async function selectFarmers() {
//   const dados_agricultor = await connect();
//   const res = await dados_agricultor.query("SELECT * FROM dados_agricultor");
//   return res.rows;
// }

// async function selectFarmer(id) {
//   const dados_agricultor = await connect();
//   const res = await dados_agricultor.query(
//     "SELECT * FROM dados_agricultor WHERE id =$1",
//     [id]
//   );
//   return res.rows;
// }

// async function insertFarmer(produtor) {
//   const dados_agricultor = await connect();

//   const res =
//     "INSERT INTO dados_agricultor (cpf_cnpj, nome_produtor, nome_fazenda, cidade, estado,area_total_hectares, area_agricultavel_hectares, area_vegetacao_hectares, culturas_plantadas) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
//   const value = [
//     produtor.cpf_cnpj,
//     produtor.nome_produtor,
//     produtor.nome_fazenda,
//     produtor.cidade,
//     produtor.estado,
//     produtor.area_total_hectares,
//     produtor.area_agricultavel_hectares,
//     produtor.area_vegetacao_hectares,
//     produtor.culturas_plantadas,
//   ];

//   await dados_agricultor.query(res, value);
// }

// async function updateFarmer(produtor) {
//   const dados_agricultor = await connect();

//   const res =
//     "UPDATE dados_agricultor SET cpf_cnpj = $1,nome_produtor = $2,nome_fazenda = $3,cidade = $4,estado = $5,area_total_hectares = $6,area_agricultavel_hectares = $7,area_vegetacao_hectares = $8,culturas_plantadas = $9 WHERE id = $10";
//   const value = [
//     produtor.cpf_cnpj,
//     produtor.nome_produtor,
//     produtor.nome_fazenda,
//     produtor.cidade,
//     produtor.estado,
//     produtor.area_total_hectares,
//     produtor.area_agricultavel_hectares,
//     produtor.area_vegetacao_hectares,
//     produtor.culturas_plantadas,
//     id,
//   ];

//   await dados_agricultor.query(res, value);
// }

// async function deleteFarmer(id) {
//   const dados_agricultor = await connect();
//   const res = "DELETE FROM dados_agricultor WHERE id = $1";
//   const value = [id];
//   await dados_agricultor.query(res, value);
// }

// module.exports = {
//   selectFarmers,
//   selectFarmer,
//   insertFarmer,
//   updateFarmer,
//   deleteFarmer,
// };
