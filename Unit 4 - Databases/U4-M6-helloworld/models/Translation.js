module.exports = (sequelize, DataTypes) => {
    const Translation = sequelize.define(
        'Translation',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            language: {
                type: DataTypes.STRING,
                allowNull: false
            },
            languageCode: {
                type: DataTypes.STRING,
                allowNull: false
            },
            translation: {
                type: DataTypes.STRING,
            }
        }, {
            timestamps: false
        });
    return Translation;
};
