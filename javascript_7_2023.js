//フロントエンド02課題
console.log('永井翔也'); // コンソール画面に「永井翔也」と出力する


//フロントエンド03課題
let inputValue = prompt();
let x = inputValue * 1.1;
alert(x);


//フロントエンド04課題
let mon = 11;
if (mon === 1) {
    console.log('January'); 
} else if (mon === 2) {
    console.log('February'); 
} else if (mon === 3) {
    console.log('March'); 
} else if (mon === 4) {
    console.log('April'); 
} else if (mon === 5) {
    console.log('May'); 
} else if (mon === 6) {
    console.log('June'); 
} else if (mon === 7) {
    console.log('July'); 
} else if (mon === 8) {
    console.log('August'); 
} else if (mon === 9) {
    console.log('September');
} else if (mon === 10) {
    console.log('October'); 
} else if (mon === 11) {
    console.log('November'); 
} else if (mon === 12) {
    console.log('December'); 
} else {
    console.log('default'); 
}


//フロントエンド05課題
for (let i = 10; i > 0; i--) {
    let s = '(' + i + '):';
    for (let j = 0; j < i; j++) {
        s = s + '*';
    }
    console.log(s);
}


//フロントエンド06課題
let fruit = ['apricot','strawberry'];
fruit.unshift('pear');
fruit.push('grape');
fruit[3] = 'lime';

console.log(fruit);


//フロントエンド07課題
var fruits = {apple:'りんご', strawberry:'いちご', grape:'ぶどう', lemon:'れもん'};

console.log(fruits["grape"]);

let keys = Object.keys(fruits);
console.log(keys);

let values = Object.values(fruits);
console.log(values);