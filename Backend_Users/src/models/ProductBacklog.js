const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("ProductBacklog", {
    product_backlog_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4,
    }, 
    descripcion: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    prioridad:{
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue:1
    },
    puntos_historia:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:1
    },
    estado:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true
    }
  });
};
