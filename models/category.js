module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define("Category", {
      // I know that these and other options in the other tables need to be drop down selections, which I will update tomorrow, just getting the general structure in place
      sciFi: {
        allowNull: false,
        type: DataTypes.STRING
      },
      drama: {
        allowNull: false,
        type: DataTypes.STRING
      },
      mystery: {
        allowNull: false,
        type: DataTypes.STRING
      },
      comedy: {
        allowNull: false,
        type: DataTypes.STRING
      },
      history: {
        allowNull: false,
        type: DataTypes.STRING
      },
      biography: {
        allowNull: false,
        type: DataTypes.STRING
      },
      instructional: {
        allowNull: false,
        type: DataTypes.STRING
      },
      });
  
    category.associate = (models) => {
      category.hasMany(models.bookTable, {
        onDelete: "cascade",
      });
    };
  
    return category;
  };
  