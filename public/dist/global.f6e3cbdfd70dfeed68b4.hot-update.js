self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/modal-register.js":
/*!****************************************!*\
  !*** ./src/asset/js/modal-register.js ***!
  \****************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
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
/******/ 	__webpack_require__.h = () => ("d5cb79a943189493d214")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmY2ZTNjYmRmZDcwZGZlZWQ2OGI0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0VBQ3REQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7RUFFNUIsTUFBTUMsYUFBYSxHQUFHSixRQUFRLENBQUNLLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUM5RCxNQUFNQyxNQUFNLEdBQUdOLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLDZCQUE2QixDQUFDO0VBQ3BFLE1BQU1FLElBQUksR0FBR1AsUUFBUSxDQUFDSyxhQUFhLENBQUMsdUJBQXVCLENBQUM7RUFDNUQsTUFBTUcsUUFBUSxHQUFHUixRQUFRLENBQUNLLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQztFQUNuRSxNQUFNSSxXQUFXLEdBQUdULFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLCtCQUErQixDQUFDO0VBRTNFLElBQUlELGFBQWEsRUFBRTtJQUNmQSxhQUFhLENBQUNILGdCQUFnQixDQUFDLFFBQVEsRUFBRSxNQUFPUyxDQUFDLElBQUs7TUFDbERBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFFbEIsTUFBTUMsTUFBTSxHQUFHLElBQUlDLFFBQVEsQ0FBQ1QsYUFBYSxDQUFDO01BQzFDUSxNQUFNLENBQUNFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7TUFFNUNaLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztNQUNqQixNQUFNWSxlQUFlLENBQUNILE1BQU0sQ0FBQztJQUNqQyxDQUFDLENBQUM7RUFDTjtFQUVBLGVBQWVHLGVBQWVBLENBQUNILE1BQU0sRUFBRTtJQUNuQyxJQUFJSSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sRUFBRTtNQUN6Q0MsTUFBTSxFQUFFLE1BQU07TUFDZEMsSUFBSSxFQUFFVDtJQUNWLENBQUMsQ0FBQztJQUNGLElBQUlVLElBQUksR0FBRyxNQUFNTixRQUFRLENBQUNPLElBQUksQ0FBQyxDQUFDO0lBQ2hDckIsT0FBTyxDQUFDQyxHQUFHLENBQUNtQixJQUFJLENBQUM7SUFFakIsSUFBSUEsSUFBSSxDQUFDRSxPQUFPLEtBQUssSUFBSSxFQUFFO01BQ3ZCcEIsYUFBYSxDQUFDcUIsU0FBUyxHQUFHLG1CQUFtQjtJQUNqRDtFQUNKO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7OztVQ2pDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9tb2RhbC1yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ29rIGNvbnRhY3QhISEnKTtcblxuICAgIGNvbnN0IGZvcm1fcmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlcicpO1xuICAgIGNvbnN0IHBzZXVkbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyICNpZGVudGlmaWFudCcpO1xuICAgIGNvbnN0IG1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlciAjZW1haWwnKTtcbiAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyICNwYXNzd29yZCcpO1xuICAgIGNvbnN0IHBzZXVkb0Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXIjZXJyb3JfcmVnaXN0ZXInKTtcblxuICAgIGlmIChmb3JtX3JlZ2lzdGVyKSB7XG4gICAgICAgIGZvcm1fcmVnaXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1fcmVnaXN0ZXIpO1xuICAgICAgICAgICAgcGFyYW1zLmFwcGVuZCgnYWN0aW9uJywgJ2dldF9yZWdpc3Rlcl9mb3JtJyk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvaycpO1xuICAgICAgICAgICAgYXdhaXQgZ2V0UmVnaXN0ZXJEYXRhKHBhcmFtcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFJlZ2lzdGVyRGF0YShwYXJhbXMpIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTVlTQ1JJUFQuYWpheFVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBib2R5OiBwYXJhbXMsXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm9ybV9yZWdpc3Rlci5pbm5lckhUTUwgPSBcIjxoMT5TdXBlciAhITwvaDE+XCI7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ1Y2I3OWE5NDMxODk0OTNkMjE0XCIpIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJmb3JtX3JlZ2lzdGVyIiwicXVlcnlTZWxlY3RvciIsInBzZXVkbyIsIm1haWwiLCJwYXNzd29yZCIsInBzZXVkb0Vycm9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFyYW1zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJnZXRSZWdpc3RlckRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiTVlTQ1JJUFQiLCJhamF4VXJsIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwic3VjY2VzcyIsImlubmVySFRNTCJdLCJzb3VyY2VSb290IjoiIn0=