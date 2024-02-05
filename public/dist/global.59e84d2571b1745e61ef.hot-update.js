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
/******/ 	__webpack_require__.h = () => ("cc5cf17b17f564b82c2a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjU5ZTg0ZDI1NzFiMTc0NWU2MWVmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBRTVCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFFOUQsSUFBSUMsTUFBTSxHQUFHLElBQUlDLFFBQVEsQ0FBQ0osYUFBYSxDQUFDO0FBQ3hDRyxNQUFNLENBQUNFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7QUFHNUNMLGFBQWEsQ0FBQ00sZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVNDLENBQUMsRUFBRTtFQUNqREEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUVsQkwsTUFBTSxDQUFDRSxNQUFNLENBQUMsUUFBUSxFQUFFSSxNQUFNLENBQUNDLEtBQUssQ0FBQztFQUNyQ1AsTUFBTSxDQUFDRSxNQUFNLENBQUMsTUFBTSxFQUFFTSxJQUFJLENBQUNELEtBQUssQ0FBQztFQUNqQ1AsTUFBTSxDQUFDRSxNQUFNLENBQUMsVUFBVSxFQUFFTyxRQUFRLENBQUNGLEtBQUssQ0FBQztFQUd6Q0csY0FBYyxDQUFDLENBQUM7QUFFcEIsQ0FBQyxDQUFDO0FBRUYsZUFBZUMsZUFBZUEsQ0FBQSxFQUFFO0VBQzVCLElBQUlDLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxFQUFDO0lBQ3hDQyxNQUFNLEVBQUcsTUFBTTtJQUNmQyxJQUFJLEVBQUVqQjtFQUNWLENBQUMsQ0FBQztFQUNGLElBQUlrQixJQUFJLEdBQUcsTUFBTU4sUUFBUSxDQUFDTyxJQUFJLENBQUMsQ0FBQztFQUNoQ3hCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDc0IsSUFBSSxDQUFDO0VBRWpCRSxXQUFXLENBQUNDLFNBQVMsR0FBR0gsSUFBSSxDQUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDO0VBRTdDQyxTQUFTLENBQUNGLFNBQVMsR0FBR0gsSUFBSSxDQUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDOztFQUV6Qzs7RUFFQSxJQUFJSixJQUFJLENBQUNNLE9BQU8sS0FBSyxNQUFNLEVBQUU7SUFDekJDLFdBQVcsQ0FBQ0MsU0FBUyxHQUFHLG1CQUFtQjtFQUMvQztBQUVKOzs7Ozs7OztVQ3RDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9tb2RhbC1yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdvayBjb250YWN0ISEhJylcblxuY29uc3QgZm9ybV9yZWdpc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyJyk7XG5cbmxldCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybV9yZWdpc3Rlcik7XG5wYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAnZ2V0X3JlZ2lzdGVyX2RhdGEnKVxuXG5cbmZvcm1fcmVnaXN0ZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHBhcmFtcy5hcHBlbmQoJ3BzZXVkbycsIHBzZXVkby52YWx1ZSlcbiAgICBwYXJhbXMuYXBwZW5kKCdtYWlsJywgbWFpbC52YWx1ZSlcbiAgICBwYXJhbXMuYXBwZW5kKCdwYXNzd29yZCcsIHBhc3N3b3JkLnZhbHVlKVxuXG5cbiAgICBnZXRDb250YWN0RGF0YSgpO1xuXG59KVxuXG5hc3luYyBmdW5jdGlvbiBnZXRSZWdpc3RlckRhdGEoKXtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChNWVNDUklQVC5hamF4VXJsLHtcbiAgICAgICAgbWV0aG9kIDogJ3Bvc3QnLFxuICAgICAgICBib2R5OiBwYXJhbXMsXG4gICAgfSk7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICBwc2V1ZG9FcnJvci5pbm5lclRleHQgPSBkYXRhLmVycm9yc1sncHNldWRvJ107XG5cbiAgICBtYWlsRXJyb3IuaW5uZXJUZXh0ID0gZGF0YS5lcnJvcnNbJ21haWwnXTtcblxuICAgIC8vIHBhc3N3b3JkRXJyb3IuaW5uZXJUZXh0ID0gZGF0YS5lcnJvcnNbJ21lc3NhZ2UnXTtcblxuICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09ICd0cnVlJykge1xuICAgICAgICBmb3JtQ29udGFjdC5pbm5lckhUTUwgPSBcIjxoMT5TdXBlciAhITwvaDE+XCI7XG4gICAgfVxuXG59XG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2M1Y2YxN2IxN2Y1NjRiODJjMmFcIikiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImZvcm1fcmVnaXN0ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJhbXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwc2V1ZG8iLCJ2YWx1ZSIsIm1haWwiLCJwYXNzd29yZCIsImdldENvbnRhY3REYXRhIiwiZ2V0UmVnaXN0ZXJEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIk1ZU0NSSVBUIiwiYWpheFVybCIsIm1ldGhvZCIsImJvZHkiLCJkYXRhIiwianNvbiIsInBzZXVkb0Vycm9yIiwiaW5uZXJUZXh0IiwiZXJyb3JzIiwibWFpbEVycm9yIiwic3VjY2VzcyIsImZvcm1Db250YWN0IiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==