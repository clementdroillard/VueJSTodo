let xhr = new XMLHttpRequest();
let todos;
xhr.open("GET", "http://127.0.0.1:8000/api/todo/", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send(null);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
      todos = JSON.parse(xhr.responseText); 
      const app = new Vue({
      el: '#app',
      data: {
        todo: todos,
      }
    });
  }
};