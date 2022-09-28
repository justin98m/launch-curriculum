/* building off the inventory-items problems
Determine if an item is available  based on the movement and qty property

Meaning there is a positve quantity associated with 'in'
A negative value associated with 'out'
if there is 1 or more qty after all ids have been parsed the item is available
otherwise not
*/
function transactionsFor(id,transactionList){
  let matchedTransactions = transactionList.filter((transction) =>{
    return transction.id === id;
  })
  return matchedTransactions;
}
function isItemAvailable(id,transactions){
  //get all the transactions matching the specified id
  let idTransactions = transactionsFor(id,transactions);
  //accumulate the qty of inventory of this transaction id
  let qty = idTransactions.reduce((count,transction)=>{
    //if the movement was in add the quantity to count otherwise do the opposite
      return transction.movement === 'in' ?
         count + transction.quantity :
         count - transction.quantity;
  },0);
  return qty > 0;
}

let transactions = [
                     { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }
                   ];
 console.log(isItemAvailable(101, transactions));     // false
 console.log(isItemAvailable(103, transactions));     // false
 console.log(isItemAvailable(105, transactions));     // true
