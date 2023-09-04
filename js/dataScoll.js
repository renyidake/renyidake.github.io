 // 数字滚动 这段代码是用于实现数字滚动效果的脚本。通过这段代码，你可以将显示的数字从 0 平滑滚动到指定的目标值。
 function numInit() {
//     这部分代码遍历所有带有 counter-valueX 类名的元素，其中 X 可以是 0、1 或 2。
// 对于每个元素，它将当前元素的文本内容设置为初始值 0，然后使用动画逐渐增加到目标值。
  $('.counter-value').each(function(){
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  },{
      duration: 2500,
      easing: 'swing',
      step: function (now){
      $(this).text(now.toFixed(0));
      }
//       duration 定义了动画的持续时间，这里是 2500 毫秒（即 2.5 秒）。
// easing 定义了动画的缓动函数，这里使用了 'swing'。
// step 定义了每一步动画的回调函数，它会在动画每一帧更新时执行。
// 在 step 函数中，当前元素的文本内容会被设置为当前的 now 值，now 是动画逐渐增加的过程中的当前值。
  });
  });
//   这里使用 jQuery 的 .animate() 方法来实现数字滚动的动画效果。
// Counter 属性会在动画过程中逐渐增加到目标值。
}
function numInit1() {
  $('.counter-value1').each(function(){
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  },{
      duration: 2500,
      easing: 'swing',
      step: function (now){
      $(this).text(now.toFixed(1));
      }
  });
  });
}
function numInit2() {
  $('.counter-value2').each(function(){
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  },{
      duration: 2500,
      easing: 'swing',
      step: function (now){
      $(this).text(now.toFixed(2));
      }
  });
  });
}
numInit();
numInit1();
numInit2();
// 这三个函数分别用于不同精度的数字滚动效果：整数、保留一位小数、保留两位小数。
// 每个函数使用了 $('.counter-valueX') 选择器，选择带有 counter-valueX 类名的元素，这些元素将会包含需要滚动的数字。