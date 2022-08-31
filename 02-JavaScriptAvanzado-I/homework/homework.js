x = 1;
var a = 5;
var b = 10;
            //   8  9  10
var c = function(a, b, c) {
  var x = 10;
  console.log(x);  //10
  console.log(a);   //8
  var f = function(a, b, c) {
    b = a;      //9 = 8                                                 
    console.log(b);  // 8
    b = c;    // 8 = 10
    var x = 5;  // nueva variable x  = 5
  }
  f(a,b,c);
  console.log(b);  //  9
}
c(8,9,10);
console.log(b);         //10
console.log(x);       //1

//*************************************************************************************************** */

console.log(bar); 
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
//***************************************************************************************************** */
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);// franco

//**************************************************************************************************** */

var instructor = "Tony";
console.log(instructor);//tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // franco
   }
})();
console.log(instructor);// tony

//*************************************************************************************************************** */

var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // the flash
    console.log(pm);// reverse flash
}
console.log(instructor); //the flash
console.log(pm); // franco

//************************************************************************************************************** */

console.log(6 / "3")//== 2
console.log("2" * "3") // =6
console.log(4 + 5 + "px") // ='9px'
console.log("$" + 4 + 5) // "$45"
console.log("4" - 2 ) // 2
console.log("4px" - 2) //   NaN
console.log(7 / 0 )// Infinity
console.log({}[0]) //undefined
console.log(parseInt("09")) //9
console.log(5 && 2) // 2
console.log(2 && 5) //5
console.log(5 || 0) //5
0 || 5 //
console.log([3]+[3]-[10]) 
console.log(3>2>1)
//[] == ![]

//********************************************************************************************************** */
//var a
function test() {
    console.log(a); // undefined
    console.log(foo()); //2
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();

 //**************************************************************************************************************** */
 var snack = 'Meow Mix';

 function getFood(food) {
     if (food) {
         var snack = 'Friskies';
         return snack;
     }
     return snack;  //'Meow Mix'
    
 }
 
 getFood(false);

 //********************************************************************************************************** */

 var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // aurelio

var test = obj.prop.getFullname;

console.log(test()); // undefined


//***************************************************************************************************** */
 