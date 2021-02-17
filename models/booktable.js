module.exports = (sequelize, DataTypes) => {
    const bookTable = sequelize.define("BookTable", {
      // Giving the Book Table model a name of type STRING
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
     author: {
       allowNull: false,
       type: DataTypes.STRING
     },
     description: {
       allowNull: false,
       type: DataTypes.STRING
     },
     userRating:{
       allowNull: true,
       type:DataTypes.STRING
     },
     readingStatus: {
      allowNull: false,
      type: DataTypes.STRING
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING
    },
    });
  
    bookTable.associate = (models) => {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      bookTable.belongsTo(models.author, {
        onDelete: "cascade",
      });
    };
    bookTable.associate = (models) => {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      bookTable.belongsTo(models.description, {
        onDelete: "cascade",
      });
    };
    bookTable.associate = (models) => {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      bookTable.belongsTo(models.userRating, {
        onDelete: "cascade",
      });
    };
    bookTable.associate = (models) => {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      bookTable.belongsTo(models.readingStatus, {
        onDelete: "cascade",
      });
    };
 

    bookTable.sync();
  
    return bookTable;
  };

  