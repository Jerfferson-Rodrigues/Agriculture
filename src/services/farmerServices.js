const pool = require("../database/database.js");

async function selectFarmers() {
  const dados_agricultor = await pool.connect();
  const res = await dados_agricultor.query("SELECT * FROM dados_agricultor");

  return res.rows;
}

async function selectFarmer(id) {
  const dados_agricultor = await pool.connect();
  const res = await dados_agricultor.query(
    "SELECT * FROM dados_agricultor WHERE id =$1",
    [id]
  );
  return res.rows;
}

async function insertFarmer(produtor) {
  const dados_agricultor = await pool.connect();

  if (
    produtor.area_agricultavel_hectares + produtor.area_vegetacao_hectares >
    produtor.area_total_hectares
  ) {
    throw new Error(
      "A soma de área agrícultável e vegetação, não deverá ser maior que a área total da fazenda."
    );
  }

  const res =
    "INSERT INTO dados_agricultor (cpf_cnpj, nome_produtor, nome_fazenda, cidade, estado,area_total_hectares, area_agricultavel_hectares, area_vegetacao_hectares, culturas_plantadas) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
  const value = [
    produtor.cpf_cnpj,
    produtor.nome_produtor,
    produtor.nome_fazenda,
    produtor.cidade,
    produtor.estado,
    produtor.area_total_hectares,
    produtor.area_agricultavel_hectares,
    produtor.area_vegetacao_hectares,
    produtor.culturas_plantadas,
  ];

  await dados_agricultor.query(res, value);
}

async function updateFarmer(id, produtor) {
  const dados_agricultor = await pool.connect();

  if (
    produtor.area_agricultavel_hectares + produtor.area_vegetacao_hectares >
    produtor.area_total_hectares
  ) {
    throw new Error(
      "A soma de área agrícultável e vegetação, não deverá ser maior que a área total da fazenda."
    );
  }

  const res =
    "UPDATE dados_agricultor SET cpf_cnpj = $1,nome_produtor = $2,nome_fazenda = $3,cidade = $4,estado = $5,area_total_hectares = $6,area_agricultavel_hectares = $7,area_vegetacao_hectares = $8,culturas_plantadas = $9 WHERE id = $10";
  const value = [
    produtor.cpf_cnpj,
    produtor.nome_produtor,
    produtor.nome_fazenda,
    produtor.cidade,
    produtor.estado,
    produtor.area_total_hectares,
    produtor.area_agricultavel_hectares,
    produtor.area_vegetacao_hectares,
    produtor.culturas_plantadas,
    id,
  ];

  await dados_agricultor.query(res, value);
}

async function deleteFarmer(id) {
  const dados_agricultor = await pool.connect();
  const res = "DELETE FROM dados_agricultor WHERE id = $1";
  const value = [id];
  await dados_agricultor.query(res, value);
}

async function getTotalStats() {
  const dados_agricultor = await pool.connect();
  const res = await dados_agricultor.query(
    "SELECT COUNT(*) AS total_fazendas, SUM(area_total_hectares) AS total_fazendas_hectares, SUM(area_agricultavel_hectares) AS total_area_agricultavel, SUM(area_vegetacao_hectares) AS total_area_vegetacao FROM dados_agricultor"
  );

  const estado = await dados_agricultor.query(
    // "SELECT estado, COUNT(*) AS TotalFazendasPorEstado FROM dados_agricultor GROUP BY estado"
    "SELECT UPPER(estado) AS estado, COUNT(*) AS total_fazendas_por_estado FROM dados_agricultor GROUP BY UPPER(estado)"
  );
  console.log("Resposta TotalFazendasPorEstado:", estado.rows);

  const culturas = await dados_agricultor.query(
    "SELECT culturas_plantadas, COUNT(*) AS total_cultura FROM dados_agricultor GROUP BY culturas_plantadas"
  );

  const totalDashboard = {
    total_fazendas: res.rows[0].total_fazendas,
    // TotalFazendasPorEstado: estado.rows[0].TotalFazendasPorEstado,

    fazendas_por_estado: estado.rows.map((row) => ({
      estado: row.estado,
      total_fazendas_por_estado: row.total_fazendas_por_estado,
    })),
    culturas: culturas.rows.map((row) => ({
      cultura_plantada: row.culturas_plantadas,
      total_cultura: row.total_cultura,
    })),
    total_fazendas_hectares: res.rows[0].total_fazendas_hectares,
    total_area_agricultavel: res.rows[0].total_area_agricultavel,
    total_area_vegetacao: res.rows[0].total_area_vegetacao,
  };

  return totalDashboard;
}

module.exports = {
  selectFarmers,
  selectFarmer,
  insertFarmer,
  updateFarmer,
  deleteFarmer,
  getTotalStats,
};
