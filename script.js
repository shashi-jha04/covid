"use strict"

function gethistory() {
    return document.getElementById("history-value").innerHTML;
}
function printhistory(num){
    document.getElementById("history-value").innerText=num;
}
function getoutput(){
    return document.getElementById("output-value").innerText;
}
function printoutput(num){
    document.getElementById("output-value").innerText=num;
}

var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="C"){
            printhistory("");
            printoutput("");
        }
        else if(this.id=="CE"){
            var output=getoutput().toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printoutput(output);
        }
        }
        else{
            var history=gethistory();
            var output=getoutput();
            if(output!=""){
                history=history+output;
            if(this.id=="="){
               output=eval(history);
               printoutput(output);
               printhistory("");
            }
            else{
                history=history+this.id;
                printhistory(history);
                printoutput("");
            }
        }
        }
    });
}

var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
      var output=getoutput();
      if(output!=NaN){
          output=output+this.id;
          printoutput(output);
      }
    })
}
