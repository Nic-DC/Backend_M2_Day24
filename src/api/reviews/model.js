import { DataTypes } from "sequelize";
import sequelize from "../../db.js";

const ReviewsModel = sequelize.define("review", {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  rate: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  /* {timestamps: true} TIMESTAMPS HERE ARE TRUE BY DEFAULT */
});

export default ReviewsModel;
