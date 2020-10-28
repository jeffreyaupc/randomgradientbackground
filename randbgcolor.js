const body = document.querySelector('body');
const color1 = ['salmon', 'green', 'aqua', 'violet', 'hotpink', 'orchid', 'grey', 'darkblue', 'palegoldenrod', 'peru', 'slateblue', 'thistle', 'teal'];
const color2 = ['salmon', 'green', 'aqua', 'violet', 'hotpink', 'orchid', 'grey', 'darkblue', 'palegoldenrod', 'peru', 'slateblue', 'thistle', 'teal'];
const color3 = ['firebrick']

const colorVar1 = parseInt(Math.random()*color1.length);
const colorVar2 = parseInt(Math.random()*color2.length);

if (color1[colorVar1] != color2[colorVar2]){
    body.style.background = 'linear-gradient(to left,' + color1[colorVar1] + ', ' + color2[colorVar2] + ')';
} else{
    body.style.background = 'linear-gradient(to left,' + color1[colorVar1] + ', ' + color3[0] + ')';
}
