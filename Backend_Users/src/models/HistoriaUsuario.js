const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("HistoriaUsuario", {
    historia_usuario_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4,
    },
    descripcion:{
        type: DataTypes.TEXT,
        allowNull:false
    },
    prioridad: {
        type:DataTypes.INTEGER,
        allowNull:true
    }
  });
};
