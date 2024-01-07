# Agro-backend 🚜🌾🌱

## Instalação

1. Baixe o projeto após baixar abra o terminal do Visual Studio Code.
2. Execute o seguinte comando para instalar todas as dependências:

   ```bash
   npm install
   ```

## Banco de Dados

1. Na pasta `dba`, há um backup do banco de dados com a tabela `dados_agricultor`
2. Abra o pgAdmin4 e importe o backup (Restore...). tem os passos a passos na pasta tambem
3. No arquivo `.env` do projeto, altere o nome do banco de dados se o nome do seu banco for diferente de "postgres", por exemplo caso seu banco for agro altere para `CONNECTION_STRING=postgresql://agro:1234@localhost:5432/` se caso não tiver senha utilize o que está comentado.

## Teste com Postman/Insomnia

Na pasta `collection`, você encontrará o arquivo `agriculture.json` com os endpoints para testar🧪.

👨‍💻🧠🚜
