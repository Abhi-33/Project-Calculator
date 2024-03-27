function askOperation(){
  let user = prompt('which Operation you want to perform : ');
  user == 'Addition' ? add() : user == 'Subtraction' ? Sub() : user == 'Multiplication' ? multi() : Div() ;
}
// askOperation();
// Addition FUnction 
function add(){
    let num1 = parseFloat(prompt("Enter the First number : "));
    let num2 = parseFloat(prompt("Enter the Second number : "));
    let result = num1 + num2;
    console.log('The' + ' Sum' + ' of ' + num1 +' and ' + num2 + ' is : ' + result);
}
// add();
//Multiplication Function
async function multi(){
    let num1 =  parseFloat(prompt("Enter the Number  : "));
    let num2 =  parseFloat(prompt("Enter the Number  : "));
    let result = num1*num2;
  console.log('The Multiplication of the ' + num1 + ' and '+  num2 +' is: ' + result  );
}
// multi();
//Divison Function
async function Div(){
    let num1 = parseFloat(prompt("Enter the Number  : "));
    let num2 = parseFloat(prompt("Enter the Number  : "));
    let result = num1/num2;
  console.log('The Divison of the ' + num1 + ' and '+  num2 +' is: ' + result  );
}
// Div();
// Subtraction Function 
async function Sub(){
    let num1 = parseFloat(prompt("Enter the Number  : "));
    let num2 = parseFloat(prompt("Enter the Number  : "));
    let result = num1 - num2;
  console.log('The Subtraction of the ' + num1 + ' and '+  num2 +' is: ' + result  );
}
// Sub();

// i am making a better version foir this calculator 
