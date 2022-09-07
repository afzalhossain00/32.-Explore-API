const user = { id: 1, name: 'goriber amir', job: 'actor' }
//JavaScript Object Notation (JASON)
const stringified = JSON.stringify(user);
console.log(user)
console.log(stringified)

const shop = {
    owner: 'sumon',
    address: {
        street: 'rajendrapur er pashe',
        city: 'Gazipur',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}

console.log(shop);
const shopJSON = JSON.stringify(shop)
console.log(shopJSON)
const shopObj = JSON.parse(shopJSON);
console.log(shopObj)