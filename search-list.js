const inStock = ['garlic', 'coriander', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'dill', 'carrots', 'yogurt', 'potatoes', 'crackers', 'onions', 'tofu', 'lemons', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if (inStock.includes(search) ) {
message=`Yes, we have <strong>${search}</strong> in the house`}
else {
message=`No we do not have <strong>${search}</strong> . Please add to grocery list`
}

document.querySelector('main').innerHTML = `<p>${message} </p>`
