document.getElementById("myButton").onclick = function(){

    var myName = document.getElementById("myText").value;
    let = newName = confirm(`${myName} would you like to generate your own randomized password?`);

    // randomized password
    var passWord = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var string_length = 8;
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * passWord.length);
        randomstring += passWord.substring(rnum,rnum+1);
    }

console.log(newName); //
if (newName === true) {
    console.log(window.alert(`${myName} your passcode is ${randomstring}`));
} else if (newName === false) {
    console.log(window.alert(`${myName} you declined to generate a randomized password`));
}

};