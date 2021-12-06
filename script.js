var laskoArr = document.getElementsByClassName('lasko');


for(var i=0; i < laskoArr.length; i++){
var words = ['remote', 'keyboard', 'cable', 'bin', 'chair', 'box', 'wallet', 'controller', 'book', 'basket', 'balloon', 'keys', 'phone', 'television', 'monitor', 'shoe', 'bed', 'pillow', 'cupboard', 'coupon', 'voucher', 'free', 'sale', 'mall'];


var any = Math.floor(Math.random() * words.length);
  laskoArr[i].textContent = words[any];
}
