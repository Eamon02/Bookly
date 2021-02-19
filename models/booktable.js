module.exports = (sequelize, DataTypes) => {
    const bookTable = sequelize.define("book_table", {
      // Giving the Book Table model a name of type STRING
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
     author: {
       allowNull: false,
       type: DataTypes.STRING
     },
     user_rating:{
       allowNull: true,
       type:DataTypes.STRING
     },
     reading_status: {
      allowNull: false,
      type: DataTypes.STRING
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING
    },
    });
  
    //no longer using comment section
    // book_table.associate = (models) => {
    //   // Associating Author with Posts
    //   // When an Author is deleted, also delete any associated Posts
    //   bookTable.belongsTo(models.Author, {
    //     onDelete: "cascade",
    //   });
    // };
    
 
    bookTable.sync();
  
    return bookTable;
  };

  