module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
    const booktable = sequelize.define("booktable", {
=======
    const bookTable = sequelize.define("book_table", {
>>>>>>> 97069b78a4585c2d373f1da62e8c2f62cd3aa198
      // Giving the Book Table model a name of type STRING
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
<<<<<<< HEAD
     userRating:{
=======
     author: {
       allowNull: false,
       type: DataTypes.STRING
     },
     user_rating:{
>>>>>>> 97069b78a4585c2d373f1da62e8c2f62cd3aa198
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
    }
    });
  
<<<<<<< HEAD
    booktable.associate = (models) => {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      booktable.belongsTo(models.author, {
        foreignKey: "author_id"
        // onDelete: "cascade"
      });
    };
=======
    //no longer using comment section
    // book_table.associate = (models) => {
    //   // Associating Author with Posts
    //   // When an Author is deleted, also delete any associated Posts
    //   bookTable.belongsTo(models.Author, {
    //     onDelete: "cascade",
    //   });
    // };
>>>>>>> 97069b78a4585c2d373f1da62e8c2f62cd3aa198
    
 
    booktable.sync();
  
    return booktable;
  };

  