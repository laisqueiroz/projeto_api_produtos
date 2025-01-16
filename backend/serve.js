const app = require('./index');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  await sequelize.sync({ force: false });
  console.log('Banco de dados sincronizado');
});
