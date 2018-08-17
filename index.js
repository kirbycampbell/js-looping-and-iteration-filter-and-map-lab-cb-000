// Code your solution here:
function driversWithRevenueOver(collection, num){
  return collection.filter(function (item){
    return num < item.revenue;
  });
}
