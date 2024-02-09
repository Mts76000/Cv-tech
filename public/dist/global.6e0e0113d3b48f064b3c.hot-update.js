self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/modal-register.js":
/*!****************************************!*\
  !*** ./src/asset/js/modal-register.js ***!
  \****************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('ok contact!!!');
  const form_register = document.querySelector('#form_register');
  const pseudo = document.querySelector('#form_register #identifiant');
  const mail = document.querySelector('#form_register #email');
  const password = document.querySelector('#form_register #password');
  const pseudoError = document.querySelector('#form_register#error_register');
  if (form_register) {
    form_register.addEventListener('submit', async e => {
      e.preventDefault();
      const params = new FormData(form_register);
      params.append('action', 'get_register_form');
      console.log('ok');
      await getRegisterData(params);
    });
  }
  async function getRegisterData(params) {
    let response = await fetch(MYSCRIPT.ajaxUrl, {
      method: 'post',
      body: params
    });
    let data = await response.json();
    console.log(data);
    if (data.success === true) {
      form_register.innerHTML = "<h1>Super !!</h1>";
    }
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dafe93aa948a74f067fd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjZlMGUwMTEzZDNiNDhmMDY0YjNjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVQyxDQUFDLEVBQUU7RUFDdkRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztFQUU1QixNQUFNQyxhQUFhLEdBQUdMLFFBQVEsQ0FBQ00sYUFBYSxDQUFDLGdCQUFnQixDQUFDO0VBQzlELE1BQU1DLE1BQU0sR0FBR1AsUUFBUSxDQUFDTSxhQUFhLENBQUMsNkJBQTZCLENBQUM7RUFDcEUsTUFBTUUsSUFBSSxHQUFHUixRQUFRLENBQUNNLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztFQUM1RCxNQUFNRyxRQUFRLEdBQUdULFFBQVEsQ0FBQ00sYUFBYSxDQUFDLDBCQUEwQixDQUFDO0VBQ25FLE1BQU1JLFdBQVcsR0FBR1YsUUFBUSxDQUFDTSxhQUFhLENBQUMsK0JBQStCLENBQUM7RUFFM0UsSUFBSUQsYUFBYSxFQUFFO0lBQ2ZBLGFBQWEsQ0FBQ0osZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQU9DLENBQUMsSUFBSztNQUNsREEsQ0FBQyxDQUFDUyxjQUFjLENBQUMsQ0FBQztNQUVsQixNQUFNQyxNQUFNLEdBQUcsSUFBSUMsUUFBUSxDQUFDUixhQUFhLENBQUM7TUFDMUNPLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQztNQUU1Q1gsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDO01BQ2pCLE1BQU1XLGVBQWUsQ0FBQ0gsTUFBTSxDQUFDO0lBQ2pDLENBQUMsQ0FBQztFQUNOO0VBRUEsZUFBZUcsZUFBZUEsQ0FBQ0gsTUFBTSxFQUFFO0lBQ25DLElBQUlJLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxFQUFFO01BQ3pDQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxJQUFJLEVBQUVUO0lBQ1YsQ0FBQyxDQUFDO0lBQ0YsSUFBSVUsSUFBSSxHQUFHLE1BQU1OLFFBQVEsQ0FBQ08sSUFBSSxDQUFDLENBQUM7SUFDaENwQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2tCLElBQUksQ0FBQztJQUVqQixJQUFJQSxJQUFJLENBQUNFLE9BQU8sS0FBSyxJQUFJLEVBQUU7TUFDdkJuQixhQUFhLENBQUNvQixTQUFTLEdBQUcsbUJBQW1CO0lBQ2pEO0VBQ0o7QUFDSixDQUFDLENBQUM7Ozs7Ozs7O1VDakNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL21vZGFsLXJlZ2lzdGVyLmpzIiwid2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc29sZS5sb2coJ29rIGNvbnRhY3QhISEnKTtcblxuICAgIGNvbnN0IGZvcm1fcmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlcicpO1xuICAgIGNvbnN0IHBzZXVkbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyICNpZGVudGlmaWFudCcpO1xuICAgIGNvbnN0IG1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlciAjZW1haWwnKTtcbiAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyICNwYXNzd29yZCcpO1xuICAgIGNvbnN0IHBzZXVkb0Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXIjZXJyb3JfcmVnaXN0ZXInKTtcblxuICAgIGlmIChmb3JtX3JlZ2lzdGVyKSB7XG4gICAgICAgIGZvcm1fcmVnaXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1fcmVnaXN0ZXIpO1xuICAgICAgICAgICAgcGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ2dldF9yZWdpc3Rlcl9mb3JtJyk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvaycpO1xuICAgICAgICAgICAgYXdhaXQgZ2V0UmVnaXN0ZXJEYXRhKHBhcmFtcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFJlZ2lzdGVyRGF0YShwYXJhbXMpIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTVlTQ1JJUFQuYWpheFVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBib2R5OiBwYXJhbXMsXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm9ybV9yZWdpc3Rlci5pbm5lckhUTUwgPSBcIjxoMT5TdXBlciAhITwvaDE+XCI7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRhZmU5M2FhOTQ4YTc0ZjA2N2ZkXCIpIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb25zb2xlIiwibG9nIiwiZm9ybV9yZWdpc3RlciIsInF1ZXJ5U2VsZWN0b3IiLCJwc2V1ZG8iLCJtYWlsIiwicGFzc3dvcmQiLCJwc2V1ZG9FcnJvciIsInByZXZlbnREZWZhdWx0IiwicGFyYW1zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJnZXRSZWdpc3RlckRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiTVlTQ1JJUFQiLCJhamF4VXJsIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwic3VjY2VzcyIsImlubmVySFRNTCJdLCJzb3VyY2VSb290IjoiIn0=