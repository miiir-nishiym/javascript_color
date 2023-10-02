// JavaScript

const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');

//console.log(document.getElementById('myColor').value);
text.textContent = color.value;

// カラーピッカーで色が選択されたら、changeColorを動作させる
color.addEventListener('input', changeColor);

function changeColor(){
    // カラーコードを表示
    //document.getElementById('bodyText').textContent = 
    //document.getElementById('myColor').value;
      text.textContent = color.value;
    

    // 背景色を変更
  document.body.style.backgroundColor = color.value;
  
  //カラーコードを表示
if (color.value === '#ffffff') {
  text.textContent = 'コード：' + color.value + '(white)';
} else if (color.value === '#000000') {
  text.textContent = 'コード：' + color.value + '(black)';
} else {
  text.textContent = 'コード：' + color.value;
}


}
