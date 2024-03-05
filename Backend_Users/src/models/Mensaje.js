const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Mensaje", {
    mensaje_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4,
    }, 
    text_content:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    urls_multimedia:{
        type:DataTypes.ARRAY(DataTypes.TEXT),
        allowNull:true
    },
    estado: {
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true
    }
  });
};
