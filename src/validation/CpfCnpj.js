const { cpf, cnpj } = require("cpf-cnpj-validator");

function isValidCpfCnpj(cpfCnpj) {
  const cleanCpfCnpj = cpfCnpj.replace(/[^\d]/g, "");

  if (cleanCpfCnpj.length === 11) {
    cpf.isValid(cleanCpfCnpj);

    cpf.format(cleanCpfCnpj);
    return true;
  } else if (cleanCpfCnpj.length === 14) {
    cnpj.isValid(cleanCpfCnpj);

    cnpj.format(cleanCpfCnpj);
    return true;
  }

  return false;
}

module.exports = isValidCpfCnpj;
