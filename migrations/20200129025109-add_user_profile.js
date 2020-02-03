'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // return queryInterface.addColumn('users', 'jenis_kelamin', {
    //   type: Sequelize.STRING,
    //   defaultValue: null
    // });

    return Promise.all([
      queryInterface.addColumn(
        'users',
        'jenis_kelamin',
        {
          type: Sequelize.STRING,
          defaultValue: null
        }
      ),

      queryInterface.addColumn(
        'users',
        'tanggalLahir',
        {
          type: Sequelize.STRING,
          defaultValue: null
        }
      ),

      queryInterface.addColumn(
        'users',
        'alamat',
        {
          type: Sequelize.TEXT,
          defaultValue: null
        }
      ),

      queryInterface.addColumn(
        'users',
        'perusahaan',
        {
          type: Sequelize.STRING,
          defaultValue: null
        }
      ),

      queryInterface.addColumn(
        'users',
        'domisili',
        {
          type: Sequelize.STRING,
          defaultValue: null
        }
      ),
      

    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'jenis_kelamin'),
      queryInterface.removeColumn('users', 'tanggalLahir'),
      queryInterface.removeColumn('users', 'alamat'),
      queryInterface.removeColumn('users', 'perusahaan'),
      queryInterface.removeColumn('users', 'domisili'),
    ]);
  }
};
