// Code your solution here:
function driversWithRevenueOver(collection, num){
  return collection.filter(function (item){
    return num < item.revenue;
  });
}
function driverNamesWithRevenueOver(collection, num){
  return driversWithRevenueOver(collection, num).map(function(item){

    return item.name
  });
}
