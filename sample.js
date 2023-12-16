var str = "webcamp"

function foo(){
  // 関数冒頭では変数を宣言しているだけなので、
  // 出力値は「undefined」となる。
  // ただしletおよびconst使用時はエラーが発生する
  console.log(str)
  // 変数の巻き上げ
  // 7行目に変数を宣言しているが、実際は関数冒頭で変数を宣言したことになる
  var str = "dmm webcamp"
  console.log(str)
}

foo()