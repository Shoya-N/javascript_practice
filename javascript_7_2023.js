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


//フロントエンド08課題
//関数名がある場合
function add(p1, p2){
    let p = (p1 * p2) / 2;
    return p;
}
console.log(add(4, 6));

//関数名がない場合
var add = function(p1, p2){
    let p = (p1 * p2) / 2;
    return p;
}
console.log(add(4, 5));


//フロントエンド09課題
//3の倍数
let a = [...Array(100)].map((_, i) => i + 1)//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
let b3 = a.filter(function(e) {
    return e % 3 == 0;
});
console.log(b3);

//5の倍数
let b5 = a.filter(function(e) {
    return e % 5 == 0;
});
console.log(b5);


//フロントエンド10課題
let apple = {        // 「apple」オブジェクト
    name: 'りんご',
    size: 5,
    weight: 10,
    colour: 'あか'
};

let orange = {        // 「orange」オブジェクト
    name: 'オレンジ',
    size: 10,
    weight: 20,
    colour: 'だいだい'
};

let grape = {      // 「grape」オブジェクト
    name: 'ぶどう',
    size: 15,
    weight: 30,
    colour: 'むらさき'
};

let fruits1 = [apple, orange, grape];

const total = fruits1.map(e => e.weight).reduce((x, y) => x + y, 0);

console.log(total);


//フロントエンド11課題
console.log(document);
let e1 = document.getElementById('p1');
e1.outerHTML = '<input type="text">変更したタグ</input>';
let e2 = document.getElementById('p2');
e2.innerText = 'テキスト文字列';
let e3 = document.getElementById('p3');
e3.id = 'p5'; 