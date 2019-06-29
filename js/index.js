var str="你好123";
var leng=0;
for (let i = 0; i <str.length ; i++) {
    if (str.charCodeAt(i)>255){
        leng+=2;
    } else {
        leng++;
    }
}
console.log(leng);
FFF.prototype.aaa="aaa";
function FFF() {
    this.aaa="bbb";
}
var fff=new FFF();

console.log();