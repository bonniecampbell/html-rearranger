var $h1 = $('<h1>');
var $h12 = $('<h1>');
var $ulAbove = $('ul');
var $ulBelow = $('ul');

$h1.html('Below ground veggies');
$('body').append('<h1>Below ground veggies</h1>');
$('body').append($ulBelow);

$h12.html('Above ground veggies');
$('body').append('<h1>Above ground veggies</h1>');
$('body').append($ulAbove);

$('ul li').each(function () {
  if ($(this).hasClass('below')) {
    $ulAbove.append($(this));
  } else {
    $ulBelow.append($(this));
  }
});
