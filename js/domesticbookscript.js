/*LOGIN POPUP*/
function loGin()
{
  var uname = document.getElementById('email').value;
  var pwd = document.getElementById('mk').value;
 
  if(pwd == '' && uname == '')
    alert("Hãy nhập mật khẩu và số điện thoại/email của bạn !");
  else if(pwd == '' || uname == '')
    alert("Hãy nhập đủ thông tin vào ô trống !");
  else if(pwd.length < 8)
    alert("Mật khẩu phải chứa ít nhất 8 ký tự !");
  else
    alert("Bạn đã đăng nhập thành công. Chào mừng bạn đến với HHbook !");
}
/*REGISTER*/
function reGister()
{
  var pnumber = document.getElementById('phone').value;
  var nopt = document.getElementById('otp').value;
  var pwd1 = document.getElementById('mk1').value;

  if(pnumber == '' && nopt == '' && pwd1 == '')
    alert("Hãy nhập Số điện thoại, Mã OTP và Mật Khẩu của bạn !");
  else if(pnumber == '' || nopt == '' || pwd1 == '') 
    alert("Hãy nhập đủ thông tin vào ô trống !");
  else if(pnumber.length < 10 || pnumber.length > 10)
    alert("Số điện thoại phải chứa 10 chữ số !");
  else if(nopt.length < 6 || nopt.length > 6)
    alert("Mã OTP phải chứa 6 chữ số !");
  else if(pwd1.length < 8)
    alert("Mật khẩu phải chứa tối thiểu 8 ký tự !");
  else
    alert("Bạn đã đăng ký thành công. Hãy bấm Trở lại để đăng nhập !");
}

function openForm()
{
  document.getElementById("id1").style.display = "block";  
}
function closeForm()
{
  document.getElementById("id1").style.display = "none";
}
function openForm1()
{
  document.getElementById("id2").style.display = "block";
}
function closeForm1()
{
  document.getElementById("id2").style.display = "none";
}
/*end*/
$(document).ready(function(){
  $('#scrollTop').on('click', function(){
      $('html, body').animate({scrollTop:0},3000);
  });
  $(document).on('click','buy-now', function(e){
 e.preventDefault();
 alert('a');
});
  var totop = 500;
$(window).scroll(function() {
if($(this).scrollTop() >= totop)
{
$('#scrollTop').fadeIn();
}else{
$('#scrollTop').fadeOut();
}
});
} );


