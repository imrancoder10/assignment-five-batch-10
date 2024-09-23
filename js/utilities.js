
// for input field
function inputFieldValue(id){
    const inputField = document.getElementById(id).value;   
        const inputFieldNumber = parseFloat(inputField);
        return inputFieldNumber;
}

// for text 
function textValue(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumebr = parseFloat(textValue);
    return textValueNumebr;
}

// value inject 

function injectBlance(id, blance){
    document.getElementById(id).innerText= blance;
}
