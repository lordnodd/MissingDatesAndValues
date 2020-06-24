//Input D
var D = {
  '2019-01-10':10,
  '2019-01-11':20,
  '2019-01-15':10
};
// Create a a array of D to access data easily with index
var aD = Object.entries(D);
console.table(aD);

//fill the missing key and value to aD 
function fill(startDate,endDate,startValue,endValue,index){
  var day,newDate, newValue,dateString;
  var diff = (endValue-startValue)/(endDate-startDate);
  console.log(diff);
  for(var i=startDate+1;i<endDate;i++,index++){
    
    //date String from aD to object of Date
    day = new Date(aD[index][0]);
    //missing values
    newDate = new Date(day.setDate(calldate(aD[index][0]) + 1));
    newValue = aD[index][1]+diff;
    dateString = new Date(newDate.getTime() - (newDate.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];
    aD.splice(index+1,0,[dateString,newValue]);
    console.log(`new date: ${dateString} new value: ${newValue}`);
    console.log(i,index);
  }

}
//calculate the date from Date
function calldate(date){var d = new Date(date);return d.getDate();}

//main function
function solution(D){
  //traverse the aD
  for (var i = 0; i< aD.length; i++){
    
    if(aD[i][0] !== aD[aD.length-1][0]){
      var curr = calldate(aD[i][0]);
      var nxt = calldate(aD[i+1][0]);

      //check to difference between consecutive dates
      if( (curr+1) != nxt ){
        console.log(curr,nxt,aD[i][1],aD[i+1][1],i);
        fill(curr,nxt,aD[i][1],aD[i+1][1],i);
        console.table(aD);
      }
    }
  }
  dict = Object.assign(...aD.map(([k, v]) => ({ [k]: v })));
  console.log(dict);
}

solution(D);
