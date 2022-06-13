const inStock = ['garlic', 'coriander', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'dill', 'carrots', 'yogurt', 'potatoes', 'crackers', 'onions', 'tofu', 'lemons', 'cucumbers'];
const search = prompt('Search for a product.');
let message;
if(!search) {
  message= `<strong>In stock:</strong> ${inStock.join(', ')} `;
}else if (inStock.includes(search.toLowerCase()) ) {
message=`Yes, we have <strong>${search.toLowerCase()}</strong> in the house`}
else {
message=`No we do not have <strong>${search.toLowerCase()}</strong> . Please add to grocery list`
}

document.querySelector('main').innerHTML = `<p>${message} </p>`
