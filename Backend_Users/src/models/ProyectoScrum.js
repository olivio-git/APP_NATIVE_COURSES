const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("ProyectoScrum", {
    proyecto_scrum_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4,
    }, 
    nombre_proyecto:{
        type:DataTypes.STRING,
        allowNull:false
    },
    imagen_url:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    fecha_inicio:{
        type:DataTypes.DATE,
        allowNull:false
    },
    fecha_fin:{
        type:DataTypes.DATE,
        allowNull:false
    },
    estado:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true
    }
  });
};
