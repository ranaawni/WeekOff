//Q1 

function arrayFor(array) {
  for(var i=0;i<array.length;i++){
  	console.log(array[i]);
  }
}


//Q2
function arrayWhile(array) {
   var i=0;
  while(i<array.length){
  	console.log(array[i]);
  	i++;
  }
}


//Q3
function sum(array){
    var i=0;
    var result =0;
    while(i<array.length){
        result = result+array[i];
      i = i+1;
    }
return result;
}

//Q4
function sumEveryOther(array){
var i=0;
var result=0;
while (i<array.length){
result = result+array[i];
i=i+2;
}
return result;
}

//Q5 
function sumStartAt(array,index){
	var i = index;
	var result = 0;
	while(i<array.length){
		result = result+array[i];
		i++;
	}
	return result;
}

//Q6
function sumUntil(array,index){
	var i = 0;
	var result = 0;
	while (i<=index){
		result = result + array[i];
		i++;
	}
	return result;
}


//Q7
function subtractReverse(array){
	var i = array.length-1;
	var x = array.length-2;
	//var result = 0;
	while(i>=0){
		var result = array[i]-array[x];
		if(x===0){
			i=i-2;
		}
		i--;
		x--;
		
	}
	return result;
}

//Q8
function product(array) {
  var i=0;
  var result=1;
  while(i<array.length){
  	result=result*array[i];
  	i++;
  }
return result;
}

//Q9
function average(array) {
  var i=0;
  var result=0;
  while(i<array.length){
  	result=result+array[i];
  	i++;
  }
return result/(array.length-1);
}

//Q10
function square(array) {
  var i=0;
  while(i<array.length){
  	array[i]=array[i]*array[i];
  	i++
  }
return array;
}

//Q11
function isArray(array){
    if(typeof array === 'array'){
return true;
    }
return false;
}


//Q12

function min (array) {
  var min=array[0];

  for (var i = 1 ; i<array.length ; i++){
           if(array[i]<min){
            min = array[i];
           }
  }
  return min;
  }


//Q13 

function max(array){
  var max = array[0];
   for (var i = 1 ; i<array.length ; i++){
           if(array[i]>max){
            max = array[i];
           }
  }
  return max;

}


//Q14 

function shortestString (array) {
  var short = array[0].length;

  for(var i=1; i<array.length ; i++)
    
    if (array[i].length < short) {
      short = array[i].length;
    }

    return short;

}

//Q15 

function longestString(array){
    var long = array[0].length;

  for(var i=1; i<array.length ; i++)
    
    if (array[i].length > long) {
      long = array[i].length;
    }

    return long;

}


//Q16 

function minMax (array) {
  var min = array[0];
  var max = array[0];
  var arr = [];

  for(var i = 1 ; array.length ; i++) {
    if(array[i] < min) {
      min = array[i];
      
    }
  
      max = array[i];
  
   
  }
   arr.push(min);
  arr.push(max);
  return arr;
}

//Q17 

function multiplyBy (array,num) {
  var arr = [];
  for(var i = 0 ; i<array.length ; i++) {
    arr.push(array[i]*num);
  }
  return arr;
}

//Q18 

function multiplyByIndex (array) {
  var arr = [];
  for(var i = 0 ; i<array.length ; i++) {
    arr.push(array[i]*i);
  }
  return arr;
}

function lengths(array) {
  var arr = [];
  for(var i =0 ; i<array.length ; i++){
    arr.push(array[i].length);
  }
  return arr;
}


//Q19 

function totalNumberOfCharacter (array){
  var result=0;
  for(var i=0;i<array.length ; i++) {
    result = result+array[i].length;
  }
  return result;
}

