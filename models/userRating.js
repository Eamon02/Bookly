module.exports = (sequelize, DataTypes) => {
    const userRating = sequelize.define("User Rating", {
      notReadYet: {
        allowNull: false,
        type: DataTypes.STRING
      },
      poor: {
        allowNull: false,
        type: DataTypes.STRING
      },
      fair: {
        allowNull: false,
        type: DataTypes.STRING
      },
      average: {
        allowNull: false,
        type: DataTypes.STRING
      },
      nice: {
        allowNull: false,
        type: DataTypes.STRING
      },
      awesome: {
        allowNull: false,
        type: DataTypes.STRING
      }
      });
  
    userRating.associate = (models) => {
      userRating.hasMany(models.bookTable, {
        onDelete: "cascade",
      });
    };
  
    return userRating;
  };
  