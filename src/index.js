//スプレッド構文...
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = [...arr2];
console.log(arr2);
console.log(num1);
console.log(num2);
console.log(arr3);
const arr5 = [...arr2];
console.log(arr5);
const arr6 = arr2;
console.log(arr2);
//スプレッド構文によるコピー
const arr7 = [...arr2];
arr6[0] = 100;
console.log(arr6);
//arr7は書き変わらない。単なる（コピー）のarr6は書き変わる。
console.log(arr7);
console.log(arr2);
//map　filterでの配列処理
//mapでの要素取り出し
//forの場合
arrName = ["影", "内田", "野村"];
console.log(arrName.length);
for (index = 0; index < arrName.length; index++) {
  console.log(arrName[index]);
}
//mapの場合
//配列をループして処理
arrName1 = ["大迫", "内田", "影"];
arrName1.map((name) => console.log(name));
//作り直し
arrName = arrName1.map((name) => {
  return name;
});
console.log(arrName);
//ちゃん　さん
NewArr1 = arrName1.map((name) => {
  if (name === "影") {
    return `${name}ちゃん`;
  } else return `${name}さん`;
});
console.log(NewArr1);
//filterを使って偶数と奇数の配列にする。
const numArr = [1, 2, 3, 4, 5, 6, 6, 7];
newNumArr = numArr.filter((num) => {
  return num % 2 === 0;
});
console.log(newNumArr);
newNumArr1 = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr1);
//filterをmapとしてみると。//エラー
// newNumArr2=numArr.map((num)=>{
//   console.log(num);
//   return num%2 ===0;
// })
// console.log(newNumArr2);
//三項演算子
//ある条件? 成立（true）:不正留津(false);
const checkSum = (num10, num20) => {
  return num10 + num20 > 10
    ? `${num10 + num20}は10越え`
    : `${num10 + num20}は10以下`;
};
console.log(checkSum(1, 9));
console.log(checkSum(2, 9));
//論理演算子&&と||
//通常の論理演算子&& ||の使用
const flag1 = true;
const flag2 = false;
if (flag1 || flag2) {
  console.log("1か２がtrueの時表示。");
}
flag3 = true;
if (flag1 && flag3) {
  console.log("1も２もtrueの時表示。");
}
//左がfalseなら右が実行される。
//条件||処理
const num = null;
const fee = "金額未設定です。";
console.log(num || fee);
//左がtrueなら右が実行される
//条件&&処理
const num12 = 1000;
const fee1 = "金額設定済です。";
console.log(num12 || fee1);
