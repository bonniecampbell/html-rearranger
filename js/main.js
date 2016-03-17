var $h1 = $('<h1>');
var $newUl = $('ul');

$h1.html('Below ground veggies');
$('body').append('<h1>Below ground veggies</h1>');

$newUl.html('below')


$h1.html('Above ground veggies');
$('body').append('<h1>Above ground veggies</h1>');

$newUl.html('above')


$('ul li').each(function () {          
  if$(this).hasClass('below')
  ('below');
} else
  ('above');
});
