let counterValue=document.querySelector('#counter')
const increment= ()=>{
    let value=counterValue.innerText;
    value=parseInt(value);
    value=value+1;
    counterValue.innerText=value;
}
const decrement= ()=>{
    let value=counterValue.innerText;
    value=parseInt(value);
    value=value-1;
    counterValue.innerText=value;
}
let inc=document.getElementById('plus')
let dec=document.getElementById('minus');
inc.addEventListener('click',increment);
dec.addEventListener('click',decrement);