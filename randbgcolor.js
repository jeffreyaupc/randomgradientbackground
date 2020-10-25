const body = document.querySelector('body');
const color1 = ['salmon', 'green', 'aqua', 'violet', 'hotpink', 'red', 'grey', 'darkblue', 'palegoldenrod', 'peru', 'slateblue'];
const color2 = ['darkblue', 'palegoldenrod', 'peru', 'slateblue', 'salmon', 'green', 'aqua', 'violet', 'hotpink', 'red', 'grey'];

var i = color1.index;
var j = color2.index;
i != j;

const colorVar1 = parseInt(Math.random()*color1.length);
const colorVar2 = parseInt(Math.random()*color2.length);
body.style.background = 'linear-gradient(to left,' + color1[colorVar1] + ', ' + color2[colorVar2] + ')';