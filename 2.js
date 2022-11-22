let arr = [{
  value: "Russia",
  label: 'Russia',
},
{
  value: "Germany",
  label: "Germany",
},
{
  value: "France",
  label: "France",
}
]

function createSelectEl(arr, str) {
const body = document.body;
const select = body.appendChild(document.createElement('select'));

arr.forEach(function(el) {
  const option = document.createElement('option');
  option.value = el.value;
  option.innerHTML = el.label;

  select.appendChild(option)
  if (option.value === str) {
    option.setAttribute('selected', true);
  }
});

return select
}


createSelectEl(arr, 'Germany')