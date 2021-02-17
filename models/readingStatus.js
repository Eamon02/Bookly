module.exports = (sequelize, DataTypes) => {
    const readingStatus = sequelize.define("Reading Status", {
      onList: {
        allowNull: false,
        type: DataTypes.STRING
      },
      reading: {
        allowNull: false,
        type: DataTypes.STRING
      },
      read: {
        allowNull: false,
        type: DataTypes.STRING
      }
      });

    // "Status": [
    //     "On List",
    //     "Reading",
    //     "Read"
    // ]
  
    readingStatus.associate = (models) => {
      readingStatus.hasMany(models.bookTable, {
        onDelete: "cascade",
      });
    };
  
    return readingStatus;
  };
  