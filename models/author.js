module.exports = (sequelize, DataTypes) => {

    const author = sequelize.define("author", {
      // Giving the Author model a name of type STRING
      author: {
        allowNull: false,
        type: DataTypes.STRING
      },
      bio: DataTypes.STRING,
    });
  
    // author.associate = (models) => {
      
<<<<<<< HEAD
      // Associating Author with bookTable
      // When an Author is deleted, also delete any associated Posts & add new authors to table
      author.hasMany(models.booktable, {
        // onDelete: "cascade"
      });
    };
=======
    //   // Associating Author with bookTable
    //   // When an Author is deleted, also delete any associated Posts & add new authors to table
    //   author.hasMany(models.book_table, {
    //     onDelete: "cascade",
    //     onUpdate: "cascade",
    //   });
    // };
>>>>>>> 97069b78a4585c2d373f1da62e8c2f62cd3aa198
  
    return author;
  };
  
  