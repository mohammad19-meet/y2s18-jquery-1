// Write all your JavaScript and JQuery code in this file! :)
num = 0
$("#counter").on("click", function(){
	num ++
	$("#number").html(num)
})

num1 = 0
$("#reset").on("click", function(){
	num1 = 0
	$("#number").html(num1)
})