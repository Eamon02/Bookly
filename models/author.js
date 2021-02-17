module.exports = (sequelize, DataTypes) => {
    const author = sequelize.define("Author", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING,
    });
  
    author.associate = (models) => {
      // Associating Author with bookTable
      // When an Author is deleted, also delete any associated Posts
      author.hasMany(models.bookTable, {
        onDelete: "cascade",
      });
    };
  
    return author;
  };
  
  