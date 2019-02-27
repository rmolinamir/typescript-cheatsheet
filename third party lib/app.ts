// First alternative, not practical.
// declare var $: any;

// $('button').click(function() {
//   alert('Button was clicked!');
// });

// Second alternative, installing type definitions (in this case, @types/jquery package installed) or by using a d.ts file
$('button').click(function() {
  alert('Button was clicked!');
});