
//Q1)
var myArray = [1,2,3];

//Q2
var Array = ['dog','cat','fox','monkey'];
//a. The index of dog is 0
var result = Array.indexOf('dog');
//b. The index of fox is 2
var result1 = Array.indexOf('fox');
//c. index of monkey is 3
var result2 = Array.indexOf('monkey');


//Q3 
//a. 
var numbers = [1, 2, 3, 4 ,5, 6, 7]
//b.
var animals = ['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the lazy', 'dog' ];

//c. 
var boolean = [true, false, true];

//Q4 
var array = [];
function emptyArray(){
	return array;
}

//Q5 

var number = [1,2,3,4,5];
function numbersArray(){
	return number;
}

//Q6
var boolean = [true , true , true];
function booleansArray(){
	return boolean;
}

//Q7
function stringsArray(){
	var name = ['Rana','Alhmoud'];
	return name;
}

//Q8

function arrayLength(array){
	var length = array.length;
	return length;
}

//Q9

function firstElement(array){
	var first=array[0];
	return first;
}


//Q10
function lastElement(array){
	var last=array[array.length-1];
	return last;
}



//Q11

function getNthElement(array,num){
var result=array[num];
return result;
}

//Q12
function push(array,n){
var result=array.push("n");
result=array;
return result;
}

//Q13
function pop(array){
	var result=array.pop();
	result=array;
	return result;
}

//Q14
function unshift(array,element){
	var result = array.unshift(element);
	result = array;
	return result;
}


//Q15
function shift(array){
	var result = array.shift();
	result = array;
	return result;
}

//Q16
function reassignLast(array,element){
	var index = array[array.length-1];
	array[index] = element;
	var result = array;
	return array;
}

//Q17

function reassignNthElement(array,num,element){
	array[num] = element;
	return array;
}


//Q18

function indexOf(array,element){
	var result = array.indexOf(element);
	return result;
}


//Q19

function slice(array,num1,num2){
	var result = array.slice(num1,num2);
	return result;
}


//Q20

function addElement(array,index,element) {
	array.splice(index,0,element);
	return array;
}

//Q21

function removeElement(array,index){
	array.splice(index,1);
	return array;
}


//Q22

function  concatArrays (array1,array2) {
	array1.push(...array2);
	return array1;

	//var arr = [...array1 , ...array2]
	//return arr;
}

//Q23 

function concatThreeArrays(array1,array2,array3) {
	array1.push(...array2);
	array1.push(...array3);
	return array1;
}

//Q24

function joinStrings(array,str){
	return array.join(str);
	
}

//Q25

function applySplit(str1,str2){
	var array = str1.split(str2);
	return array;
}

//Q26
function getElementsAfter(array,index){
	var arr = []
	var start = index+1;
	var result;
	debugger;
	for(var i = start ; i<array.length ; i++) {
		result = array[i];
		arr.push(result);
	}
	return arr;
}

//Q27

function getElementsBefore(array,index){
	var arr = [];
	var result;
	// debugger;
	for(var i = 0; i<index ; i++) {
		result = array[i];
		arr.push(result);
	}
	return arr;
}


//Q28

function getAllElementsButFirst(array) {
	var arr = [];
	var result;

	for(var i = 1; i<array.length ; i++) {
		result = array[i];
		arr.push(result);
	}
	return arr;
}


function getAllElementsButLast(array) {
	var arr = [];
	var result;

	for(var i = 0; i<array.length-1 ; i++) {
		result = array[i];
		arr.push(result);
	}
	return arr;
}