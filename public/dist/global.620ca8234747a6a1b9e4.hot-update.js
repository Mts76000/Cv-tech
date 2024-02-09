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
  params = new FormData(form_register);
  params.append('action', 'get_register_form');
  // params.append('pseudo', pseudo.value)
  // params.append('mail', mail.value)
  // params.append('password', password.value)
  console.log('ok');
  l;
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
  if (data.success === 'true') {
    form_register.innerHTML = "<h1>Super !!</h1>";
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c461d4649880962608a9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjYyMGNhODIzNDc0N2E2YTFiOWU0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBQzVCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOUQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQztBQUNwRSxNQUFNRSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBQzVELE1BQU1HLFFBQVEsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsMEJBQTBCLENBQUM7QUFDbkUsTUFBTUksV0FBVyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQztBQUMzRTtBQUNBRixhQUFhLENBQUNPLGdCQUFnQixDQUFDLFFBQVEsRUFBRUMsQ0FBQyxJQUFJO0VBQzFDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBRWxCQyxNQUFNLEdBQUcsSUFBSUMsUUFBUSxDQUFDWCxhQUFhLENBQUM7RUFDcENVLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQztFQUM1QztFQUNBO0VBQ0E7RUFDQWQsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDO0VBRWpCYyxDQUFDO0VBRURDLGlCQUFpQixDQUFDSixNQUFNLENBQUM7QUFDN0IsQ0FBQyxDQUFDO0FBRUYsZUFBZUksaUJBQWlCQSxDQUFDSixNQUFNLEVBQUU7RUFDckMsSUFBSUssUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLEVBQUU7SUFDekNDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLElBQUksRUFBRVY7RUFDVixDQUFDLENBQUM7RUFDRixJQUFJVyxJQUFJLEdBQUcsTUFBTU4sUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBQztFQUNoQ3hCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDc0IsSUFBSSxDQUFDOztFQUVqQjtFQUNBO0VBQ0E7O0VBRUEsSUFBSUEsSUFBSSxDQUFDRSxPQUFPLEtBQUssSUFBSSxFQUFFO0lBQUU7SUFDekJ2QixhQUFhLENBQUN3QixTQUFTLEdBQUcsbUJBQW1CLENBQUMsQ0FBQztFQUNuRDtBQUNKO0FBRUEsZUFBZUMsZUFBZUEsQ0FBQSxFQUFFO0VBQzVCLElBQUlWLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxFQUFDO0lBQ3hDQyxNQUFNLEVBQUcsTUFBTTtJQUNmQyxJQUFJLEVBQUVWO0VBQ1YsQ0FBQyxDQUFDO0VBQ0YsSUFBSVcsSUFBSSxHQUFHLE1BQU1OLFFBQVEsQ0FBQ08sSUFBSSxDQUFDLENBQUM7RUFDaEN4QixPQUFPLENBQUNDLEdBQUcsQ0FBQ3NCLElBQUksQ0FBQztFQUdqQixJQUFJQSxJQUFJLENBQUNFLE9BQU8sS0FBSyxNQUFNLEVBQUU7SUFDekJ2QixhQUFhLENBQUN3QixTQUFTLEdBQUcsbUJBQW1CO0VBQ2pEO0FBRUo7Ozs7Ozs7O1VDcERBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL21vZGFsLXJlZ2lzdGVyLmpzIiwid2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ29rIGNvbnRhY3QhISEnKVxuY29uc3QgZm9ybV9yZWdpc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyJyk7XG5jb25zdCBwc2V1ZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlciAjaWRlbnRpZmlhbnQnKTtcbmNvbnN0IG1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlciAjZW1haWwnKTtcbmNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXIgI3Bhc3N3b3JkJyk7XG5jb25zdCBwc2V1ZG9FcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyI2Vycm9yX3JlZ2lzdGVyJyk7XG4vL1xuZm9ybV9yZWdpc3Rlci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChlKT0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybV9yZWdpc3Rlcik7XG4gICAgcGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ2dldF9yZWdpc3Rlcl9mb3JtJyk7XG4gICAgLy8gcGFyYW1zLmFwcGVuZCgncHNldWRvJywgcHNldWRvLnZhbHVlKVxuICAgIC8vIHBhcmFtcy5hcHBlbmQoJ21haWwnLCBtYWlsLnZhbHVlKVxuICAgIC8vIHBhcmFtcy5hcHBlbmQoJ3Bhc3N3b3JkJywgcGFzc3dvcmQudmFsdWUpXG4gICAgY29uc29sZS5sb2coJ29rJyk7XG5cbiAgICBsXG5cbiAgICBnZXRfUmVnaXN0ZXJfRGF0YShwYXJhbXMpO1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldF9SZWdpc3Rlcl9EYXRhKHBhcmFtcykge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwsIHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGJvZHk6IHBhcmFtcyxcbiAgICB9KTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIC8vIHBzZXVkb0Vycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydsb2dpbiddOyAvLyBVdGlsaXNleiAnbG9naW4nIGF1IGxpZXUgZGUgJ3BzZXVkbydcbiAgICAvL1xuICAgIC8vIG1haWxFcnJvci5pbm5lclRleHQgPSBkYXRhLmVycm9yc1snbWFpbCddO1xuXG4gICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkgeyAvLyBDaGFuZ2V6ICd0cnVlJyDDoCB0cnVlXG4gICAgICAgIGZvcm1fcmVnaXN0ZXIuaW5uZXJIVE1MID0gXCI8aDE+U3VwZXIgISE8L2gxPlwiOyAvLyBVdGlsaXNleiBmb3JtX3JlZ2lzdGVyLmlubmVySFRNTCBhdSBsaWV1IGRlIGZvcm1Db250YWN0LmlubmVySFRNTFxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0UmVnaXN0ZXJEYXRhKCl7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTVlTQ1JJUFQuYWpheFVybCx7XG4gICAgICAgIG1ldGhvZCA6ICdwb3N0JyxcbiAgICAgICAgYm9keTogcGFyYW1zLFxuICAgIH0pO1xuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG5cbiAgICBpZiAoZGF0YS5zdWNjZXNzID09PSAndHJ1ZScpIHtcbiAgICAgICAgZm9ybV9yZWdpc3Rlci5pbm5lckhUTUwgPSBcIjxoMT5TdXBlciAhITwvaDE+XCI7XG4gICAgfVxuXG59XG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzQ2MWQ0NjQ5ODgwOTYyNjA4YTlcIikiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImZvcm1fcmVnaXN0ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwc2V1ZG8iLCJtYWlsIiwicGFzc3dvcmQiLCJwc2V1ZG9FcnJvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXJhbXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImwiLCJnZXRfUmVnaXN0ZXJfRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJNWVNDUklQVCIsImFqYXhVcmwiLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJzdWNjZXNzIiwiaW5uZXJIVE1MIiwiZ2V0UmVnaXN0ZXJEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==