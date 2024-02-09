self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/modal-register.js":
/*!****************************************!*\
  !*** ./src/asset/js/modal-register.js ***!
  \****************************************/
/***/ (() => {

// console.log('ok contact!!!')

const form_register = document.querySelector('#form_register');
let params = new FormData(form_register);
params.append('action', 'get_register_data');
formRegister.addEventListener('submit', function (e) {
  e.preventDefault();
  params.append('pseudo', pseudo.value);
  params.append('mail', mail.value);
  params.append('password', password.value);
  getContactData();
});
async function getRegisterData() {
  let response = await fetch(MYSCRIPT.ajaxUrl, {
    method: 'post',
    body: params
  });
  let data = await response.json();
  console.log(data);
  pseudoError.innerText = data.errors['pseudo'];
  mailError.innerText = data.errors['mail'];

  // passwordError.innerText = data.errors['message'];

  if (data.success === 'true') {
    formContact.innerHTML = "<h1>Super !!</h1>";
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("46478365b23b53c04d72")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjY5ZGQ5MTRmMjZmNGRkNzk0ODljLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBRTlELElBQUlDLE1BQU0sR0FBRyxJQUFJQyxRQUFRLENBQUNKLGFBQWEsQ0FBQztBQUN4Q0csTUFBTSxDQUFDRSxNQUFNLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDO0FBRzVDQyxZQUFZLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFTQyxDQUFDLEVBQUU7RUFDaERBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFFbEJOLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRUssTUFBTSxDQUFDQyxLQUFLLENBQUM7RUFDckNSLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sRUFBRU8sSUFBSSxDQUFDRCxLQUFLLENBQUM7RUFDakNSLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFVBQVUsRUFBRVEsUUFBUSxDQUFDRixLQUFLLENBQUM7RUFHekNHLGNBQWMsQ0FBQyxDQUFDO0FBRXBCLENBQUMsQ0FBQztBQUVGLGVBQWVDLGVBQWVBLENBQUEsRUFBRTtFQUM1QixJQUFJQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sRUFBQztJQUN4Q0MsTUFBTSxFQUFHLE1BQU07SUFDZkMsSUFBSSxFQUFFbEI7RUFDVixDQUFDLENBQUM7RUFDRixJQUFJbUIsSUFBSSxHQUFHLE1BQU1OLFFBQVEsQ0FBQ08sSUFBSSxDQUFDLENBQUM7RUFDaENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUM7RUFFakJJLFdBQVcsQ0FBQ0MsU0FBUyxHQUFHTCxJQUFJLENBQUNNLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFFN0NDLFNBQVMsQ0FBQ0YsU0FBUyxHQUFHTCxJQUFJLENBQUNNLE1BQU0sQ0FBQyxNQUFNLENBQUM7O0VBRXpDOztFQUVBLElBQUlOLElBQUksQ0FBQ1EsT0FBTyxLQUFLLE1BQU0sRUFBRTtJQUN6QkMsV0FBVyxDQUFDQyxTQUFTLEdBQUcsbUJBQW1CO0VBQy9DO0FBRUo7Ozs7Ozs7O1VDdENBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL21vZGFsLXJlZ2lzdGVyLmpzIiwid2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc29sZS5sb2coJ29rIGNvbnRhY3QhISEnKVxuXG5jb25zdCBmb3JtX3JlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXInKTtcblxubGV0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtX3JlZ2lzdGVyKTtcbnBhcmFtcy5hcHBlbmQoJ2FjdGlvbicsICdnZXRfcmVnaXN0ZXJfZGF0YScpXG5cblxuZm9ybVJlZ2lzdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBwYXJhbXMuYXBwZW5kKCdwc2V1ZG8nLCBwc2V1ZG8udmFsdWUpXG4gICAgcGFyYW1zLmFwcGVuZCgnbWFpbCcsIG1haWwudmFsdWUpXG4gICAgcGFyYW1zLmFwcGVuZCgncGFzc3dvcmQnLCBwYXNzd29yZC52YWx1ZSlcblxuXG4gICAgZ2V0Q29udGFjdERhdGEoKTtcblxufSlcblxuYXN5bmMgZnVuY3Rpb24gZ2V0UmVnaXN0ZXJEYXRhKCl7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTVlTQ1JJUFQuYWpheFVybCx7XG4gICAgICAgIG1ldGhvZCA6ICdwb3N0JyxcbiAgICAgICAgYm9keTogcGFyYW1zLFxuICAgIH0pO1xuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgcHNldWRvRXJyb3IuaW5uZXJUZXh0ID0gZGF0YS5lcnJvcnNbJ3BzZXVkbyddO1xuXG4gICAgbWFpbEVycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydtYWlsJ107XG5cbiAgICAvLyBwYXNzd29yZEVycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydtZXNzYWdlJ107XG5cbiAgICBpZiAoZGF0YS5zdWNjZXNzID09PSAndHJ1ZScpIHtcbiAgICAgICAgZm9ybUNvbnRhY3QuaW5uZXJIVE1MID0gXCI8aDE+U3VwZXIgISE8L2gxPlwiO1xuICAgIH1cblxufVxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ2NDc4MzY1YjIzYjUzYzA0ZDcyXCIpIl0sIm5hbWVzIjpbImZvcm1fcmVnaXN0ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJhbXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZvcm1SZWdpc3RlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwc2V1ZG8iLCJ2YWx1ZSIsIm1haWwiLCJwYXNzd29yZCIsImdldENvbnRhY3REYXRhIiwiZ2V0UmVnaXN0ZXJEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIk1ZU0NSSVBUIiwiYWpheFVybCIsIm1ldGhvZCIsImJvZHkiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwc2V1ZG9FcnJvciIsImlubmVyVGV4dCIsImVycm9ycyIsIm1haWxFcnJvciIsInN1Y2Nlc3MiLCJmb3JtQ29udGFjdCIsImlubmVySFRNTCJdLCJzb3VyY2VSb290IjoiIn0=