// Model for the Fonts table
module.exports = (sequelize, DataTypes) => {
    const Font = sequelize.define(
        'Font',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            link: {
                type: DataTypes.STRING,
                allowNull: false
            },
            css: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            timestamps: false
        });
    return Font;
};
