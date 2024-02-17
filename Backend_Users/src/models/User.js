const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("User", {
    user_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profile_uri: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
  });
};
