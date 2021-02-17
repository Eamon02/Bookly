module.exports = (sequelize, DataTypes) => {
    const bookTable = sequelize.define("BookTable", {
      // Giving the Book Table model a name of type STRING
      name: DataTypes.STRING,
    });
  
    bookTable.associate = (models) => {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Author.hasMany(models.category, {
        onDelete: "cascade",
      });
    };
  
    return bookTable;
  };