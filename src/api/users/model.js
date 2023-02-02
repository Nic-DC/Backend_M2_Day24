import { DataTypes } from "sequelize";
import sequelize from "../../db.js";

const UsersModel = sequelize.define("user", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
  /* {timestamps: true} TIMESTAMPS HERE ARE TRUE BY DEFAULT */
});

export default UsersModel;
