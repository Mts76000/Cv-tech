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
/******/ 	__webpack_require__.h = () => ("94f9093f25589b7f56b8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmNjNWNmMTdiMTdmNTY0YjgyYzJhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBRTVCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFFOUQsSUFBSUMsTUFBTSxHQUFHLElBQUlDLFFBQVEsQ0FBQ0osYUFBYSxDQUFDO0FBQ3hDRyxNQUFNLENBQUNFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7QUFHNUNMLGFBQWEsQ0FBQ00sZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVNDLENBQUMsRUFBRTtFQUNqREEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUVsQkwsTUFBTSxDQUFDRSxNQUFNLENBQUMsUUFBUSxFQUFFSSxNQUFNLENBQUNDLEtBQUssQ0FBQztFQUNyQ1AsTUFBTSxDQUFDRSxNQUFNLENBQUMsTUFBTSxFQUFFTSxJQUFJLENBQUNELEtBQUssQ0FBQztFQUNqQ1AsTUFBTSxDQUFDRSxNQUFNLENBQUMsVUFBVSxFQUFFTyxpQkFBaUIsQ0FBQ0YsS0FBSyxDQUFDO0VBSWxERyxjQUFjLENBQUMsQ0FBQztBQUVwQixDQUFDLENBQUM7QUFFRixlQUFlQyxlQUFlQSxDQUFBLEVBQUU7RUFDNUIsSUFBSUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLEVBQUM7SUFDeENDLE1BQU0sRUFBRyxNQUFNO0lBQ2ZDLElBQUksRUFBRWpCO0VBQ1YsQ0FBQyxDQUFDO0VBQ0YsSUFBSWtCLElBQUksR0FBRyxNQUFNTixRQUFRLENBQUNPLElBQUksQ0FBQyxDQUFDO0VBQ2hDeEIsT0FBTyxDQUFDQyxHQUFHLENBQUNzQixJQUFJLENBQUM7RUFFakJFLFdBQVcsQ0FBQ0MsU0FBUyxHQUFHSCxJQUFJLENBQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFFN0NDLFNBQVMsQ0FBQ0YsU0FBUyxHQUFHSCxJQUFJLENBQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUM7O0VBRXpDOztFQUVBLElBQUlKLElBQUksQ0FBQ00sT0FBTyxLQUFLLE1BQU0sRUFBRTtJQUN6QkMsV0FBVyxDQUFDQyxTQUFTLEdBQUcsbUJBQW1CO0VBQy9DO0FBRUo7Ozs7Ozs7O1VDdkNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL21vZGFsLXJlZ2lzdGVyLmpzIiwid2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ29rIGNvbnRhY3QhISEnKVxuXG5jb25zdCBmb3JtX3JlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXInKTtcblxubGV0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtX3JlZ2lzdGVyKTtcbnBhcmFtcy5hcHBlbmQoJ2FjdGlvbicsICdnZXRfcmVnaXN0ZXJfZGF0YScpXG5cblxuZm9ybV9yZWdpc3Rlci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcGFyYW1zLmFwcGVuZCgncHNldWRvJywgcHNldWRvLnZhbHVlKVxuICAgIHBhcmFtcy5hcHBlbmQoJ21haWwnLCBtYWlsLnZhbHVlKVxuICAgIHBhcmFtcy5hcHBlbmQoJ3Bhc3N3b3JkJywgcmVnaXN0ZXJfcGFzc3dvcmQudmFsdWUpXG5cblxuICAgIFxuICAgIGdldENvbnRhY3REYXRhKCk7XG5cbn0pXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFJlZ2lzdGVyRGF0YSgpe1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwse1xuICAgICAgICBtZXRob2QgOiAncG9zdCcsXG4gICAgICAgIGJvZHk6IHBhcmFtcyxcbiAgICB9KTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIHBzZXVkb0Vycm9yLmlubmVyVGV4dCA9IGRhdGEuZXJyb3JzWydwc2V1ZG8nXTtcblxuICAgIG1haWxFcnJvci5pbm5lclRleHQgPSBkYXRhLmVycm9yc1snbWFpbCddO1xuXG4gICAgLy8gcGFzc3dvcmRFcnJvci5pbm5lclRleHQgPSBkYXRhLmVycm9yc1snbWVzc2FnZSddO1xuXG4gICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGZvcm1Db250YWN0LmlubmVySFRNTCA9IFwiPGgxPlN1cGVyICEhPC9oMT5cIjtcbiAgICB9XG5cbn1cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5NGY5MDkzZjI1NTg5YjdmNTZiOFwiKSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZm9ybV9yZWdpc3RlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBzZXVkbyIsInZhbHVlIiwibWFpbCIsInJlZ2lzdGVyX3Bhc3N3b3JkIiwiZ2V0Q29udGFjdERhdGEiLCJnZXRSZWdpc3RlckRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiTVlTQ1JJUFQiLCJhamF4VXJsIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwicHNldWRvRXJyb3IiLCJpbm5lclRleHQiLCJlcnJvcnMiLCJtYWlsRXJyb3IiLCJzdWNjZXNzIiwiZm9ybUNvbnRhY3QiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9