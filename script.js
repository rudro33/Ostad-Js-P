
function appendTodisplay(value){
    let data = document.getElementById('display');
    data.value = data.value + value;    
    console.log(value);
    
}

function clearDisplay(){
    let data = document.getElementById('display');
    data.value = "";

}
function deleteLast(){
    let data = document.getElementById('display');
    display.value = display.value.slice(0, -1)


}
function calculatorResult(){
    try{
        let result = eval (document.getElementById('display').value)
    console.log(result);

    document.getElementById('display').value = result;
    }catch(error){
        console.log(error);
        
    }
    

}