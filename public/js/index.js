fetch('/api').then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
}).catch(function(err) {
  console.err(err);
});

console.log(Matter);
