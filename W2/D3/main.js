// W2 D3

//Q1)
var a ={firstName: 'Yan' , lastname:'Fan'}



var num = {
	a: 1,
    b: 2 ,
    c: 3 ,
    d: 4
}


var a ={

  animal: 'dog',

  noise: 'bark', 

  age: 3, 

  type :'Golden Retriever', 

  color: 'Yellow'

}


//Q2)

var me = {
	firstName : 'Rana',
	lastName  : 'Alhmoud',
	Age       : '28',
	homeTown  : 'Irbid',
	favoriteFood : 'Mansaf'
};


//Q3)

me.favoriteFood = 'Maqlobeh';

//Q4)
me ["Age"] = '33';

//Q5)
function emptyObject(){

  var empty = { };
  return empty;

}

//Q6)


function addProperty (object,key){
	 return object[key] = 'true';

}

var myObject={

   animal:'cat',

      food:'turkey',

         age:'3'

}

//Q7)
function deletePropert(object,key){

 return delete object[key];
  

}


var myObject={

         animal:'cat',

         food:'turkey',

         age:'3‌'

}


//Q8)
function addObjectProperty‌(object1,key,object2){
	return object1.key[object2];
}


var person1 = {
	name:'Ahmad',
	role:'Worker'
}

var person2 = {
	name : 'Fadi',
	role: 'Supervisor'
}

//Q9)

function addFullName(object){
	//if(('firstName' in object) && ('lastName' in object))
		if(object.firstName && object.lastName)
	{
		return object['fullName'] = object['firstName'] +' '+object['lastName'];
	}
	return false;
} 


var person = {
	firstName : 'Rana',
	lastName : 'Alhmoud'
}

//Q10)
function addArrayProperty(object,key,array){
	for(var i = 0; i<=array.length-1;i++){
		object['key'] = array[i];
	}

}

var myObject ={};
var myArray = [1,3]



//Q11)
var arr = [];
var person = {
	firstName : "Leena",
	lastName  : "Atia"
}
function printAllProperties(object){
	
	for(var key in object){
		arr.push(object[key]);
	}
}

arr;


//Q12)
var obj = {
	a : 8,
	b : 2,
	c : 'montana'
}

function removeNumbersLargerThan (num , object){
	for(var key in object){
		if (object[key]>num){
			return delete object[key];
		}
		
	}
	return object;
}


//Q13) 


var obj = {
	a : 9,
	b : 2,
	c : 'montana'
}

function removeAllEvenValues(object){
	for(var key in object) {
		if ((object[key])%2===0){
			return delete object[key];
		}

	}
	return object;
}

//Q14)

var obj = {
	a : 10,
	b : 2,
	c : 'montana',
	d : 10,
	e : 'ohio',
	f : 10
}


function removePropertiesNotEqualTo10(object){
	for (var key in object){
		if (object[key]!==10){
			return delete object[key];
		}
		
	}
	return object;
}

//Q15)

var obj = {
	a : 'Texas',
	b : 2,
	c : 'Montana'
}


function removeStringsLongerThan(object,num){
	for (var key in object){
		var a = typeof object[key];
		if((a === 'string') && (object[key].length>num)) {
			return delete object[key];
		}
	}
	return object;

}

//Q16)

var obj = {
	a : 9,
	b : 2,
	c : 'montana'
}

function removeAllNumbers(object){
	for(var key in object){
		
		if(typeof object[key] === 'number'){
		delete object[key];
		}
	}
	return object;
}


//Q17

var obj= {
	a : [1,3,4],
	b : 2,
	c :['hi','There']
}

function removeArrays(object){
	for(var key in object){

		if(typeof object[key] ==='Array'){
			delete object[key];
		}
	}
	return object;

}


//Q18)

var obj = {
	array : [1,2,3,4]
}

function getFirstElementOfProperty (object,key){
	var arr ;
if (key === 'array'){
	if(key.length>0){
		arr = object[key];
	return arr[0];
	}
	else {
		return undefined;
	}
	
}

else {
	return undefined;
}

}


//Q19)
var obj = {
	array : [1,2,3,4]
}
function getNthElementOfProperty(object,key,index) {
		var arr ;
if (key === 'array'){
	if(key.length>0){
		arr = object[key];
	return arr[index];
	}
	else {
		return undefined;
	}
	
}

else {
	return undefined;
}
}


//Q20 

function  isPropertyPresent(object,key) {
   var result;
	for(var prop in object ) {
		if (prop === key) {
			result = true;
		}
		else{
			result = false;
		}
		
	}
	return result;

	// if(key in object) { another solution "using in"
	// 	return true
	// }
}

//Q21

function getAllKeys(object){
	return Object.keys(object);
}


//Q22 
 
 function getAllValues (object){
 	return Object.values(object);
 }

 //Q23

 function transformFirstAndLast (array) {
 	var first = array[0];
 	// console.log(first);
 	first =String(first)
 	// console.log(first);
 	
 	var last = array.length-1;
 	var value = array[last];
 	var a = {};
   a= {
    first : value
   }
   return a;
 }