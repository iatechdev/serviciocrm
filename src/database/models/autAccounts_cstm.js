/* jshint indent: 1 */

export default function (sequelize, DataTypes) {
    const autAccounts_cstm = sequelize.define('autAccounts_cstm', {
        id_c: {
            type: DataTypes.STRING(36),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id_c'
        },
        direccion_c: {
            type: DataTypes.STRING(150),
            allowNull: false,
            field: 'direccion_c'
        },


    }, {
        tableName: 'accounts_cstm'
    });
    autAccounts_cstm.associate = function (models) {
        autAccounts_cstm.belongsTo(models.autAccounts, {
            foreignKey: 'id_c',
            as: 'autAccounts'
        });
    }
    return autAccounts_cstm;
};