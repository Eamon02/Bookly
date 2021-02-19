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
      bookTable.belongsTo(models.Author, {
        onDelete: "cascade",
      });
    };
    
 
    bookTable.sync();
  
    return bookTable;
  };

  