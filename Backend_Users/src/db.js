require("dotenv").config();
const { Client } = require("pg");
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);
const basename = path.basename(__filename);
const modelDefiniers = [];

fs.readdirSync(path.join(__dirname, "./models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiniers.push(require(path.join(__dirname, "/models", file)));
  });
modelDefiniers.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Usuario,Tarea,Sprint,Sala,ProyectoScrum,ProductBacklog,Mensaje,HistoriaUsuario } = sequelize.models;

Usuario.belongsToMany(Sala, { through: 'SalaUsuario' });
Sala.belongsToMany(Usuario, { through: 'SalaUsuario' });

Sala.hasMany(Mensaje,{foreignKey:'sala_id'});
Mensaje.belongsTo(Sala,{foreignKey:'sala_id'});

Usuario.hasMany(Mensaje, { foreignKey: 'usuario_id' });
Mensaje.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Usuario.hasMany(ProyectoScrum);
ProyectoScrum.belongsTo(Usuario);

ProyectoScrum.hasMany(Sprint);
Sprint.belongsTo(ProyectoScrum);

ProyectoScrum.hasMany(ProductBacklog);
ProductBacklog.belongsTo(ProyectoScrum);

ProductBacklog.hasMany(HistoriaUsuario);
HistoriaUsuario.belongsTo(ProductBacklog);

HistoriaUsuario.hasMany(Tarea);
Tarea.belongsTo(HistoriaUsuario);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
