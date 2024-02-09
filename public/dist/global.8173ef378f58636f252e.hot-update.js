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
form_register.addEventListener('submit', function (e) {
  e.preventDefault();
  params.append('pseudo', pseudo.value);
  params.append('mail', mail.value);
  params.append('password', password.value);
  console.log('ok');
  // Créez un nouvel objet FormData à l'intérieur de la fonction submit
  // let params = new FormData(form_register);
  // params.append('action', 'get_register_form');
  //
  // get_Register_Data(params);
});
//
// async function get_Register_Data(params) {
//     let response = await fetch(MYSCRIPT.ajaxUrl, {
//         method: 'post',
//         body: params,
//     });
//     let data = await response.json();
//     console.log(data);
//
//     // pseudoError.innerText = data.errors['login']; // Utilisez 'login' au lieu de 'pseudo'
//     //
//     // mailError.innerText = data.errors['mail'];
//
//     if (data.success === true) { // Changez 'true' à true
//         form_register.innerHTML = "<h1>Super !!</h1>"; // Utilisez form_register.innerHTML au lieu de formContact.innerHTML
//     }
// }
//
// async function getRegisterData(){
//     let response = await fetch(MYSCRIPT.ajaxUrl,{
//         method : 'post',
//         body: params,
//     });
//     let data = await response.json();
//     console.log(data);
//
//     // pseudoError.innerText = data.errors['pseudo'];
//     //
//     // mailError.innerText = data.errors['mail'];
//
//     // passwordError.innerText = data.errors['message'];
//
//     if (data.success === 'true') {
//         form_register.innerHTML = "<h1>Super !!</h1>";
//     }
//
// }

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8aa56652ee1b12b0f232")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjgxNzNlZjM3OGY1ODYzNmYyNTJlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBQzVCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOUQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQztBQUNwRSxNQUFNRSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBQzVELE1BQU1HLFFBQVEsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsMEJBQTBCLENBQUM7QUFDbkUsTUFBTUksV0FBVyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQztBQUMzRTtBQUNBRixhQUFhLENBQUNPLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFVQyxDQUFDLEVBQUU7RUFDbERBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFFbEJDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsRUFBRVIsTUFBTSxDQUFDUyxLQUFLLENBQUM7RUFDckNGLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sRUFBRVAsSUFBSSxDQUFDUSxLQUFLLENBQUM7RUFDakNGLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLFVBQVUsRUFBRU4sUUFBUSxDQUFDTyxLQUFLLENBQUM7RUFDekNkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztFQUNqQjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0osQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDeERBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL21vZGFsLXJlZ2lzdGVyLmpzIiwid2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ29rIGNvbnRhY3QhISEnKVxuY29uc3QgZm9ybV9yZWdpc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyJyk7XG5jb25zdCBwc2V1ZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlciAjaWRlbnRpZmlhbnQnKTtcbmNvbnN0IG1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlciAjZW1haWwnKTtcbmNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXIgI3Bhc3N3b3JkJyk7XG5jb25zdCBwc2V1ZG9FcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyI2Vycm9yX3JlZ2lzdGVyJyk7XG4vL1xuZm9ybV9yZWdpc3Rlci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHBhcmFtcy5hcHBlbmQoJ3BzZXVkbycsIHBzZXVkby52YWx1ZSlcbiAgICBwYXJhbXMuYXBwZW5kKCdtYWlsJywgbWFpbC52YWx1ZSlcbiAgICBwYXJhbXMuYXBwZW5kKCdwYXNzd29yZCcsIHBhc3N3b3JkLnZhbHVlKVxuICAgIGNvbnNvbGUubG9nKCdvaycpO1xuICAgIC8vIENyw6lleiB1biBub3V2ZWwgb2JqZXQgRm9ybURhdGEgw6AgbCdpbnTDqXJpZXVyIGRlIGxhIGZvbmN0aW9uIHN1Ym1pdFxuICAgIC8vIGxldCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybV9yZWdpc3Rlcik7XG4gICAgLy8gcGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ2dldF9yZWdpc3Rlcl9mb3JtJyk7XG4gICAgLy9cbiAgICAvLyBnZXRfUmVnaXN0ZXJfRGF0YShwYXJhbXMpO1xufSk7XG4vL1xuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0X1JlZ2lzdGVyX0RhdGEocGFyYW1zKSB7XG4vLyAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTVlTQ1JJUFQuYWpheFVybCwge1xuLy8gICAgICAgICBtZXRob2Q6ICdwb3N0Jyxcbi8vICAgICAgICAgYm9keTogcGFyYW1zLFxuLy8gICAgIH0pO1xuLy8gICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy9cbi8vICAgICAvLyBwc2V1ZG9FcnJvci5pbm5lclRleHQgPSBkYXRhLmVycm9yc1snbG9naW4nXTsgLy8gVXRpbGlzZXogJ2xvZ2luJyBhdSBsaWV1IGRlICdwc2V1ZG8nXG4vLyAgICAgLy9cbi8vICAgICAvLyBtYWlsRXJyb3IuaW5uZXJUZXh0ID0gZGF0YS5lcnJvcnNbJ21haWwnXTtcbi8vXG4vLyAgICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkgeyAvLyBDaGFuZ2V6ICd0cnVlJyDDoCB0cnVlXG4vLyAgICAgICAgIGZvcm1fcmVnaXN0ZXIuaW5uZXJIVE1MID0gXCI8aDE+U3VwZXIgISE8L2gxPlwiOyAvLyBVdGlsaXNleiBmb3JtX3JlZ2lzdGVyLmlubmVySFRNTCBhdSBsaWV1IGRlIGZvcm1Db250YWN0LmlubmVySFRNTFxuLy8gICAgIH1cbi8vIH1cbi8vXG4vLyBhc3luYyBmdW5jdGlvbiBnZXRSZWdpc3RlckRhdGEoKXtcbi8vICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChNWVNDUklQVC5hamF4VXJsLHtcbi8vICAgICAgICAgbWV0aG9kIDogJ3Bvc3QnLFxuLy8gICAgICAgICBib2R5OiBwYXJhbXMsXG4vLyAgICAgfSk7XG4vLyAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vL1xuLy8gICAgIC8vIHBzZXVkb0Vycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydwc2V1ZG8nXTtcbi8vICAgICAvL1xuLy8gICAgIC8vIG1haWxFcnJvci5pbm5lclRleHQgPSBkYXRhLmVycm9yc1snbWFpbCddO1xuLy9cbi8vICAgICAvLyBwYXNzd29yZEVycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydtZXNzYWdlJ107XG4vL1xuLy8gICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09ICd0cnVlJykge1xuLy8gICAgICAgICBmb3JtX3JlZ2lzdGVyLmlubmVySFRNTCA9IFwiPGgxPlN1cGVyICEhPC9oMT5cIjtcbi8vICAgICB9XG4vL1xuLy8gfVxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhhYTU2NjUyZWUxYjEyYjBmMjMyXCIpIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJmb3JtX3JlZ2lzdGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHNldWRvIiwibWFpbCIsInBhc3N3b3JkIiwicHNldWRvRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFyYW1zIiwiYXBwZW5kIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9