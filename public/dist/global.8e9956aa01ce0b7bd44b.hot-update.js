self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/modal-register.js":
/*!****************************************!*\
  !*** ./src/asset/js/modal-register.js ***!
  \****************************************/
/***/ (() => {

// console.log('ok contact!!!')

let params = new FormData(formRegister);
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
/******/ 	__webpack_require__.h = () => ("90b2dd0e4c9d3d55c80d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjhlOTk1NmFhMDFjZTBiN2JkNDRiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFJQSxJQUFJQSxNQUFNLEdBQUcsSUFBSUMsUUFBUSxDQUFDQyxZQUFZLENBQUM7QUFDdkNGLE1BQU0sQ0FBQ0csTUFBTSxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQztBQUc1Q0QsWUFBWSxDQUFDRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0VBQ2hEQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBRWxCTixNQUFNLENBQUNHLE1BQU0sQ0FBQyxRQUFRLEVBQUVJLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0VBQ3JDUixNQUFNLENBQUNHLE1BQU0sQ0FBQyxNQUFNLEVBQUVNLElBQUksQ0FBQ0QsS0FBSyxDQUFDO0VBQ2pDUixNQUFNLENBQUNHLE1BQU0sQ0FBQyxVQUFVLEVBQUVPLFFBQVEsQ0FBQ0YsS0FBSyxDQUFDO0VBR3pDRyxjQUFjLENBQUMsQ0FBQztBQUVwQixDQUFDLENBQUM7QUFFRixlQUFlQyxlQUFlQSxDQUFBLEVBQUU7RUFDNUIsSUFBSUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLEVBQUM7SUFDeENDLE1BQU0sRUFBRyxNQUFNO0lBQ2ZDLElBQUksRUFBRWxCO0VBQ1YsQ0FBQyxDQUFDO0VBQ0YsSUFBSW1CLElBQUksR0FBRyxNQUFNTixRQUFRLENBQUNPLElBQUksQ0FBQyxDQUFDO0VBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDO0VBRWpCSSxXQUFXLENBQUNDLFNBQVMsR0FBR0wsSUFBSSxDQUFDTSxNQUFNLENBQUMsUUFBUSxDQUFDO0VBRTdDQyxTQUFTLENBQUNGLFNBQVMsR0FBR0wsSUFBSSxDQUFDTSxNQUFNLENBQUMsTUFBTSxDQUFDOztFQUV6Qzs7RUFFQSxJQUFJTixJQUFJLENBQUNRLE9BQU8sS0FBSyxNQUFNLEVBQUU7SUFDekJDLFdBQVcsQ0FBQ0MsU0FBUyxHQUFHLG1CQUFtQjtFQUMvQztBQUVKOzs7Ozs7OztVQ3RDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9tb2RhbC1yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnNvbGUubG9nKCdvayBjb250YWN0ISEhJylcblxuXG5cbmxldCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybVJlZ2lzdGVyKTtcbnBhcmFtcy5hcHBlbmQoJ2FjdGlvbicsICdnZXRfcmVnaXN0ZXJfZGF0YScpXG5cblxuZm9ybVJlZ2lzdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBwYXJhbXMuYXBwZW5kKCdwc2V1ZG8nLCBwc2V1ZG8udmFsdWUpXG4gICAgcGFyYW1zLmFwcGVuZCgnbWFpbCcsIG1haWwudmFsdWUpXG4gICAgcGFyYW1zLmFwcGVuZCgncGFzc3dvcmQnLCBwYXNzd29yZC52YWx1ZSlcblxuXG4gICAgZ2V0Q29udGFjdERhdGEoKTtcblxufSlcblxuYXN5bmMgZnVuY3Rpb24gZ2V0UmVnaXN0ZXJEYXRhKCl7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTVlTQ1JJUFQuYWpheFVybCx7XG4gICAgICAgIG1ldGhvZCA6ICdwb3N0JyxcbiAgICAgICAgYm9keTogcGFyYW1zLFxuICAgIH0pO1xuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgcHNldWRvRXJyb3IuaW5uZXJUZXh0ID0gZGF0YS5lcnJvcnNbJ3BzZXVkbyddO1xuXG4gICAgbWFpbEVycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydtYWlsJ107XG5cbiAgICAvLyBwYXNzd29yZEVycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydtZXNzYWdlJ107XG5cbiAgICBpZiAoZGF0YS5zdWNjZXNzID09PSAndHJ1ZScpIHtcbiAgICAgICAgZm9ybUNvbnRhY3QuaW5uZXJIVE1MID0gXCI8aDE+U3VwZXIgISE8L2gxPlwiO1xuICAgIH1cblxufVxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjkwYjJkZDBlNGM5ZDNkNTVjODBkXCIpIl0sIm5hbWVzIjpbInBhcmFtcyIsIkZvcm1EYXRhIiwiZm9ybVJlZ2lzdGVyIiwiYXBwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBzZXVkbyIsInZhbHVlIiwibWFpbCIsInBhc3N3b3JkIiwiZ2V0Q29udGFjdERhdGEiLCJnZXRSZWdpc3RlckRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiTVlTQ1JJUFQiLCJhamF4VXJsIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInBzZXVkb0Vycm9yIiwiaW5uZXJUZXh0IiwiZXJyb3JzIiwibWFpbEVycm9yIiwic3VjY2VzcyIsImZvcm1Db250YWN0IiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==