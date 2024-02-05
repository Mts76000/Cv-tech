self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/modal-register.js":
/*!****************************************!*\
  !*** ./src/asset/js/modal-register.js ***!
  \****************************************/
/***/ (() => {

console.log('ok contact!!!');
const form_register = document.querySelector('#form_register');
let params = new FormData(form_register);
params.append('action', 'get_register_data');
form_register.addEventListener('submit', function (e) {
  e.preventDefault();
  params.append('pseudo', pseudo.value);
  params.append('mail', mail.value);
  params.append('password', register_password.value);
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
/******/ 	__webpack_require__.h = () => ("9f5e4706f1860403f0ea")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjk0ZjkwOTNmMjU1ODliN2Y1NmI4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBRTVCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFFOUQsSUFBSUMsTUFBTSxHQUFHLElBQUlDLFFBQVEsQ0FBQ0osYUFBYSxDQUFDO0FBQ3hDRyxNQUFNLENBQUNFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7QUFHNUNMLGFBQWEsQ0FBQ00sZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVNDLENBQUMsRUFBRTtFQUNqREEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUVsQkwsTUFBTSxDQUFDRSxNQUFNLENBQUMsUUFBUSxFQUFFSSxNQUFNLENBQUNDLEtBQUssQ0FBQztFQUNyQ1AsTUFBTSxDQUFDRSxNQUFNLENBQUMsTUFBTSxFQUFFTSxJQUFJLENBQUNELEtBQUssQ0FBQztFQUNqQ1AsTUFBTSxDQUFDRSxNQUFNLENBQUMsVUFBVSxFQUFFTyxpQkFBaUIsQ0FBQ0YsS0FBSyxDQUFDO0VBSWxERyxjQUFjLENBQUMsQ0FBQztBQUVwQixDQUFDLENBQUM7QUFFRixlQUFlQyxlQUFlQSxDQUFBLEVBQUU7RUFDNUIsSUFBSUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLEVBQUM7SUFDeENDLE1BQU0sRUFBRyxNQUFNO0lBQ2ZDLElBQUksRUFBRWpCO0VBQ1YsQ0FBQyxDQUFDO0VBQ0YsSUFBSWtCLElBQUksR0FBRyxNQUFNTixRQUFRLENBQUNPLElBQUksQ0FBQyxDQUFDO0VBQ2hDeEIsT0FBTyxDQUFDQyxHQUFHLENBQUNzQixJQUFJLENBQUM7RUFFakJFLFdBQVcsQ0FBQ0MsU0FBUyxHQUFHSCxJQUFJLENBQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFFN0NDLFNBQVMsQ0FBQ0YsU0FBUyxHQUFHSCxJQUFJLENBQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUM7O0VBRXpDOztFQUVBLElBQUlKLElBQUksQ0FBQ00sT0FBTyxLQUFLLE1BQU0sRUFBRTtJQUN6QkMsV0FBVyxDQUFDQyxTQUFTLEdBQUcsbUJBQW1CO0VBQy9DO0FBRUo7Ozs7Ozs7O1VDdkNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL21vZGFsLXJlZ2lzdGVyLmpzIiwid2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ29rIGNvbnRhY3QhISEnKVxuXG5jb25zdCBmb3JtX3JlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXInKTtcblxubGV0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtX3JlZ2lzdGVyKTtcbnBhcmFtcy5hcHBlbmQoJ2FjdGlvbicsICdnZXRfcmVnaXN0ZXJfZGF0YScpXG5cblxuZm9ybV9yZWdpc3Rlci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcGFyYW1zLmFwcGVuZCgncHNldWRvJywgcHNldWRvLnZhbHVlKVxuICAgIHBhcmFtcy5hcHBlbmQoJ21haWwnLCBtYWlsLnZhbHVlKVxuICAgIHBhcmFtcy5hcHBlbmQoJ3Bhc3N3b3JkJywgcmVnaXN0ZXJfcGFzc3dvcmQudmFsdWUpXG5cblxuXG4gICAgZ2V0Q29udGFjdERhdGEoKTtcblxufSlcblxuYXN5bmMgZnVuY3Rpb24gZ2V0UmVnaXN0ZXJEYXRhKCl7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goTVlTQ1JJUFQuYWpheFVybCx7XG4gICAgICAgIG1ldGhvZCA6ICdwb3N0JyxcbiAgICAgICAgYm9keTogcGFyYW1zLFxuICAgIH0pO1xuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgcHNldWRvRXJyb3IuaW5uZXJUZXh0ID0gZGF0YS5lcnJvcnNbJ3BzZXVkbyddO1xuXG4gICAgbWFpbEVycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydtYWlsJ107XG5cbiAgICAvLyBwYXNzd29yZEVycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydtZXNzYWdlJ107XG5cbiAgICBpZiAoZGF0YS5zdWNjZXNzID09PSAndHJ1ZScpIHtcbiAgICAgICAgZm9ybUNvbnRhY3QuaW5uZXJIVE1MID0gXCI8aDE+U3VwZXIgISE8L2gxPlwiO1xuICAgIH1cblxufVxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjlmNWU0NzA2ZjE4NjA0MDNmMGVhXCIpIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJmb3JtX3JlZ2lzdGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyYW1zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHNldWRvIiwidmFsdWUiLCJtYWlsIiwicmVnaXN0ZXJfcGFzc3dvcmQiLCJnZXRDb250YWN0RGF0YSIsImdldFJlZ2lzdGVyRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJNWVNDUklQVCIsImFqYXhVcmwiLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJwc2V1ZG9FcnJvciIsImlubmVyVGV4dCIsImVycm9ycyIsIm1haWxFcnJvciIsInN1Y2Nlc3MiLCJmb3JtQ29udGFjdCIsImlubmVySFRNTCJdLCJzb3VyY2VSb290IjoiIn0=