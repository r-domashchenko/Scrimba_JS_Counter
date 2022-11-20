// document.getElementById('number').innerText = 2;
let number = 0;

function increment() {
    console.log('click');
    number++;
    console.log(number);
    document.getElementById('number').innerText = number;
    return number;
};