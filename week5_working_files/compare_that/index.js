function compareInputNumbers (){
  //get the value of input #a and input #b

  var a = $("#a").val();
  var b = $("#b").val();

  compareNumbers(a, b);
}

function compareNumbers(a, b){
  if(a && b){

    var comparison = $("#comparison");

    a = Number(a);
    b = Number(b);


    if ( a > b ) {
      //if a is greater than b
      comparison.html('>');
    }else if ( a < b ) {
      //if a is less than b
      comparison.html('<');
    }else if ( a === b) {
      //if a is equal to b
      comparison.html('===');
    }else{
      //something else that is not right
      comparison.html('NaN');
    }

  }else{
    alert ("Please input a number into both fields!")
  }

}

$("#submit").click(compareInputNumbers);
