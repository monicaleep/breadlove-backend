'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const allergenData = [{
        name: 'Eggs'
      },
      {
        name: 'Milk'
      },
      {
        name: 'Tree Nuts'
      },
      {
        name: 'Peanuts'
      },
      {
        name: 'Soy'
      },
      {
        name: 'Wheat'
      },
      {
        name: 'Other'
      }
    ]
    const newAllergenData = allergenData.map(allergen => {
      return {
        ...allergen,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    })
    await queryInterface.bulkInsert('allergens', newAllergenData, {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('allergens', null, {});

  }
};
