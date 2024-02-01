self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/modal-register.js":
/*!****************************************!*\
  !*** ./src/asset/js/modal-register.js ***!
  \****************************************/
/***/ (() => {

console.log('ok contact!!!');
const form_register = document.querySelector('#form_register');
const pseudo = document.querySelector('#form_register #identifiant');
const mail = document.querySelector('#form_register #email');
const password = document.querySelector('#form_register #password');
const pseudoError = document.querySelector('#form_register#error_register');
//
form_register.addEventListener('submit', e => {
  e.preventDefault();
  params.append('pseudo', pseudo.value);
  params.append('mail', mail.value);
  params.append('password', password.value);
  console.log('ok');
  let params = new FormData(form_register);
  params.append('action', 'get_register_form');
  get_Register_Data(params);
});
async function get_Register_Data(params) {
  let response = await fetch(MYSCRIPT.ajaxUrl, {
    method: 'post',
    body: params
  });
  let data = await response.json();
  console.log(data);

  // pseudoError.innerText = data.errors['login']; // Utilisez 'login' au lieu de 'pseudo'
  //
  // mailError.innerText = data.errors['mail'];

  if (data.success === true) {
    // Changez 'true' à true
    form_register.innerHTML = "<h1>Super !!</h1>"; // Utilisez form_register.innerHTML au lieu de formContact.innerHTML
  }
}
async function getRegisterData() {
  let response = await fetch(MYSCRIPT.ajaxUrl, {
    method: 'post',
    body: params
  });
  let data = await response.json();
  console.log(data);

  // pseudoError.innerText = data.errors['pseudo'];
  //
  // mailError.innerText = data.errors['mail'];

  // passwordError.innerText = data.errors['message'];

  if (data.success === 'true') {
    form_register.innerHTML = "<h1>Super !!</h1>";
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7b6676821ad39c637d6b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjc5ZGY5OGY1YmQ0YTk0ZWNlMWFmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBQzVCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOUQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQztBQUNwRSxNQUFNRSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBQzVELE1BQU1HLFFBQVEsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsMEJBQTBCLENBQUM7QUFDbkUsTUFBTUksV0FBVyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQztBQUMzRTtBQUNBRixhQUFhLENBQUNPLGdCQUFnQixDQUFDLFFBQVEsRUFBRUMsQ0FBQyxJQUFJO0VBQzFDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBRWxCQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxRQUFRLEVBQUVSLE1BQU0sQ0FBQ1MsS0FBSyxDQUFDO0VBQ3JDRixNQUFNLENBQUNDLE1BQU0sQ0FBQyxNQUFNLEVBQUVQLElBQUksQ0FBQ1EsS0FBSyxDQUFDO0VBQ2pDRixNQUFNLENBQUNDLE1BQU0sQ0FBQyxVQUFVLEVBQUVOLFFBQVEsQ0FBQ08sS0FBSyxDQUFDO0VBQ3pDZCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM7RUFFakIsSUFBSVcsTUFBTSxHQUFHLElBQUlHLFFBQVEsQ0FBQ2IsYUFBYSxDQUFDO0VBQ3hDVSxNQUFNLENBQUNDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7RUFFNUNHLGlCQUFpQixDQUFDSixNQUFNLENBQUM7QUFDN0IsQ0FBQyxDQUFDO0FBRUYsZUFBZUksaUJBQWlCQSxDQUFDSixNQUFNLEVBQUU7RUFDckMsSUFBSUssUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLEVBQUU7SUFDekNDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLElBQUksRUFBRVY7RUFDVixDQUFDLENBQUM7RUFDRixJQUFJVyxJQUFJLEdBQUcsTUFBTU4sUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBQztFQUNoQ3hCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDc0IsSUFBSSxDQUFDOztFQUVqQjtFQUNBO0VBQ0E7O0VBRUEsSUFBSUEsSUFBSSxDQUFDRSxPQUFPLEtBQUssSUFBSSxFQUFFO0lBQUU7SUFDekJ2QixhQUFhLENBQUN3QixTQUFTLEdBQUcsbUJBQW1CLENBQUMsQ0FBQztFQUNuRDtBQUNKO0FBRUEsZUFBZUMsZUFBZUEsQ0FBQSxFQUFFO0VBQzVCLElBQUlWLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxFQUFDO0lBQ3hDQyxNQUFNLEVBQUcsTUFBTTtJQUNmQyxJQUFJLEVBQUVWO0VBQ1YsQ0FBQyxDQUFDO0VBQ0YsSUFBSVcsSUFBSSxHQUFHLE1BQU1OLFFBQVEsQ0FBQ08sSUFBSSxDQUFDLENBQUM7RUFDaEN4QixPQUFPLENBQUNDLEdBQUcsQ0FBQ3NCLElBQUksQ0FBQzs7RUFFakI7RUFDQTtFQUNBOztFQUVBOztFQUVBLElBQUlBLElBQUksQ0FBQ0UsT0FBTyxLQUFLLE1BQU0sRUFBRTtJQUN6QnZCLGFBQWEsQ0FBQ3dCLFNBQVMsR0FBRyxtQkFBbUI7RUFDakQ7QUFFSjs7Ozs7Ozs7VUN4REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvbW9kYWwtcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VibGlwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnb2sgY29udGFjdCEhIScpXG5jb25zdCBmb3JtX3JlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXInKTtcbmNvbnN0IHBzZXVkbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyICNpZGVudGlmaWFudCcpO1xuY29uc3QgbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyICNlbWFpbCcpO1xuY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlciAjcGFzc3dvcmQnKTtcbmNvbnN0IHBzZXVkb0Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXIjZXJyb3JfcmVnaXN0ZXInKTtcbi8vXG5mb3JtX3JlZ2lzdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKGUpPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICBwYXJhbXMuYXBwZW5kKCdwc2V1ZG8nLCBwc2V1ZG8udmFsdWUpXG4gICAgcGFyYW1zLmFwcGVuZCgnbWFpbCcsIG1haWwudmFsdWUpXG4gICAgcGFyYW1zLmFwcGVuZCgncGFzc3dvcmQnLCBwYXNzd29yZC52YWx1ZSlcbiAgICBjb25zb2xlLmxvZygnb2snKTtcblxuICAgIGxldCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybV9yZWdpc3Rlcik7XG4gICAgcGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ2dldF9yZWdpc3Rlcl9mb3JtJyk7XG5cbiAgICBnZXRfUmVnaXN0ZXJfRGF0YShwYXJhbXMpO1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldF9SZWdpc3Rlcl9EYXRhKHBhcmFtcykge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwsIHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGJvZHk6IHBhcmFtcyxcbiAgICB9KTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIC8vIHBzZXVkb0Vycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydsb2dpbiddOyAvLyBVdGlsaXNleiAnbG9naW4nIGF1IGxpZXUgZGUgJ3BzZXVkbydcbiAgICAvL1xuICAgIC8vIG1haWxFcnJvci5pbm5lclRleHQgPSBkYXRhLmVycm9yc1snbWFpbCddO1xuXG4gICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkgeyAvLyBDaGFuZ2V6ICd0cnVlJyDDoCB0cnVlXG4gICAgICAgIGZvcm1fcmVnaXN0ZXIuaW5uZXJIVE1MID0gXCI8aDE+U3VwZXIgISE8L2gxPlwiOyAvLyBVdGlsaXNleiBmb3JtX3JlZ2lzdGVyLmlubmVySFRNTCBhdSBsaWV1IGRlIGZvcm1Db250YWN0LmlubmVySFRNTFxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0UmVnaXN0ZXJEYXRhKCl7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTVlTQ1JJUFQuYWpheFVybCx7XG4gICAgICAgIG1ldGhvZCA6ICdwb3N0JyxcbiAgICAgICAgYm9keTogcGFyYW1zLFxuICAgIH0pO1xuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgLy8gcHNldWRvRXJyb3IuaW5uZXJUZXh0ID0gZGF0YS5lcnJvcnNbJ3BzZXVkbyddO1xuICAgIC8vXG4gICAgLy8gbWFpbEVycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydtYWlsJ107XG5cbiAgICAvLyBwYXNzd29yZEVycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydtZXNzYWdlJ107XG5cbiAgICBpZiAoZGF0YS5zdWNjZXNzID09PSAndHJ1ZScpIHtcbiAgICAgICAgZm9ybV9yZWdpc3Rlci5pbm5lckhUTUwgPSBcIjxoMT5TdXBlciAhITwvaDE+XCI7XG4gICAgfVxuXG59XG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2I2Njc2ODIxYWQzOWM2MzdkNmJcIikiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImZvcm1fcmVnaXN0ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwc2V1ZG8iLCJtYWlsIiwicGFzc3dvcmQiLCJwc2V1ZG9FcnJvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXJhbXMiLCJhcHBlbmQiLCJ2YWx1ZSIsIkZvcm1EYXRhIiwiZ2V0X1JlZ2lzdGVyX0RhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiTVlTQ1JJUFQiLCJhamF4VXJsIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwic3VjY2VzcyIsImlubmVySFRNTCIsImdldFJlZ2lzdGVyRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=