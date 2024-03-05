const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Sprint", {
    sprint_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4,
    },
    fecha_inicio:{
        type:DataTypes.DATE,
        allowNull:false
    },
    fecha_fin:{
        type:DataTypes.DATE,
        allowNull:false
    },
    objetivo_sprint:{
        type:DataTypes.STRING,
        allowNull:false
    },
    estado:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true
    }
  });
};
