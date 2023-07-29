console.clear();


axios.put("https://jsonplaceholder.typicode.com/posts/1",{

method: 'delete',
body: JSON.stringify({
  title: 'fogerger',
  body: 'bar',
  userId: 1,
}),
headers: {
  'Content-type': 'application/json; charset=UTF-8',
},

})
.then((res)=> console.log(res.data))
.catch((err) => console.log(err))