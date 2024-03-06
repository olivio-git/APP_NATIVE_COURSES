const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Usuario", {
    usuario_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4,
    },
    imagen_url:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    apellidos:{
        type:DataTypes.STRING,
        allowNull:false
    },
    descripcion_perfil:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    semestre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    correo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contraseña:{
        type:DataTypes.STRING,
        allowNull:false
    },
    estado:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true
    },
    telefono:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
  });
};
