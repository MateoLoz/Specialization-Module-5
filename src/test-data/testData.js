export const validUser = {
    email: 'customer@practicesoftwaretesting.com',
    password: 'welcome01',
};

export const validRegistration = {
    firstName: 'Sergio',
    lastName: 'Perez',
    bday: '2004-08-31',
    address: 'Main St',
    postalCode: '4107',
    city: 'Yerba Buena',
    state: 'Tucuman',
    country: 'AR',
    phone: '543813015875',
    email: `testeo${new Date().getMinutes()}mateo${new Date().getSeconds()}@example.com`,
    password: 'Mateo1423_',
};

export const invalidRegistration = {
    lastName: 'Perez',
    bday: '2004-08-31',
    address: 'Main St',
    postalCode: '4107',
    city: 'Yerba Buena',
    state: 'Tucuman',
    country: 'AR',
    phone: '543813015875',
    email: `testeo${new Date().getMinutes()}mateo${new Date().getSeconds()}@example.com`,
    password: 'Mateo1423_',
};

export const filterScenarios = [
    { filter: 'name,asc', field: 'name', order: 'asc' },
    { filter: 'name,desc', field: 'name', order: 'desc' },
    { filter: 'price,asc', field: 'price', order: 'asc' },
    { filter: 'price,desc', field: 'price', order: 'desc' },
    { filter: 'co2_rating,asc', field: 'co2', order: 'asc' },
    { filter: 'co2_rating,desc', field: 'co2', order: 'desc' },
];

export const filterAscScenario = { filter: 'name,asc', field: 'name', order: 'asc' }

export const fnameMissing = "First name is required"