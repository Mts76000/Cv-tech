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
if (form_register) {
  form_register.addEventListener('submit', async e => {
    e.preventDefault();
    console.log('oksubmit');
    const params = new FormData(form_register);
    params.append('action', 'get_register_form');
    await getRegisterData(params);
    console.log('okaddevent data');
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cd75a8a34469465ea993")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjY0NmY4Nzg0MWI2ZjliNTA0YzgwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBSUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBRTVCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOUQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQztBQUNwRSxNQUFNRSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBQzVELE1BQU1HLFFBQVEsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsMEJBQTBCLENBQUM7QUFDbkUsTUFBTUksV0FBVyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQztBQUUzRSxJQUFJRixhQUFhLEVBQUU7RUFDZkEsYUFBYSxDQUFDTyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsTUFBT0MsQ0FBQyxJQUFLO0lBQ2xEQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRWxCWCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDdkIsTUFBTVcsTUFBTSxHQUFHLElBQUlDLFFBQVEsQ0FBQ1gsYUFBYSxDQUFDO0lBQzFDVSxNQUFNLENBQUNFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7SUFFNUMsTUFBTUMsZUFBZSxDQUFDSCxNQUFNLENBQUM7SUFFN0JaLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0VBQ2xDLENBQUMsQ0FBQztBQUNOO0FBRUEsZUFBZWMsZUFBZUEsQ0FBQ0gsTUFBTSxFQUFFO0VBQ25DLElBQUlJLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxFQUFFO0lBQ3pDQyxNQUFNLEVBQUUsTUFBTTtJQUNkQyxJQUFJLEVBQUVUO0VBQ1YsQ0FBQyxDQUFDO0VBQ0YsSUFBSVUsSUFBSSxHQUFHLE1BQU1OLFFBQVEsQ0FBQ08sSUFBSSxDQUFDLENBQUM7RUFDaEN2QixPQUFPLENBQUNDLEdBQUcsQ0FBQ3FCLElBQUksQ0FBQztFQUVqQixJQUFJQSxJQUFJLENBQUNFLE9BQU8sS0FBSyxJQUFJLEVBQUU7SUFDdkJ0QixhQUFhLENBQUN1QixTQUFTLEdBQUcsbUJBQW1CO0VBQ2pEO0FBQ0o7Ozs7Ozs7O1VDakNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VibGlwYWNrLy4vc3JjL2Fzc2V0L2pzL21vZGFsLXJlZ2lzdGVyLmpzIiwid2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiICAgIGNvbnNvbGUubG9nKCdvayBjb250YWN0ISEhJyk7XG5cbiAgICBjb25zdCBmb3JtX3JlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXInKTtcbiAgICBjb25zdCBwc2V1ZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlciAjaWRlbnRpZmlhbnQnKTtcbiAgICBjb25zdCBtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fcmVnaXN0ZXIgI2VtYWlsJyk7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9yZWdpc3RlciAjcGFzc3dvcmQnKTtcbiAgICBjb25zdCBwc2V1ZG9FcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3JlZ2lzdGVyI2Vycm9yX3JlZ2lzdGVyJyk7XG5cbiAgICBpZiAoZm9ybV9yZWdpc3Rlcikge1xuICAgICAgICBmb3JtX3JlZ2lzdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdva3N1Ym1pdCcpXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybV9yZWdpc3Rlcik7XG4gICAgICAgICAgICBwYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAnZ2V0X3JlZ2lzdGVyX2Zvcm0nKTtcblxuICAgICAgICAgICAgYXdhaXQgZ2V0UmVnaXN0ZXJEYXRhKHBhcmFtcyk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdva2FkZGV2ZW50IGRhdGEnKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRSZWdpc3RlckRhdGEocGFyYW1zKSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgYm9keTogcGFyYW1zLFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGZvcm1fcmVnaXN0ZXIuaW5uZXJIVE1MID0gXCI8aDE+U3VwZXIgISE8L2gxPlwiO1xuICAgICAgICB9XG4gICAgfVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2Q3NWE4YTM0NDY5NDY1ZWE5OTNcIikiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImZvcm1fcmVnaXN0ZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwc2V1ZG8iLCJtYWlsIiwicGFzc3dvcmQiLCJwc2V1ZG9FcnJvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXJhbXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsImdldFJlZ2lzdGVyRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJNWVNDUklQVCIsImFqYXhVcmwiLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJzdWNjZXNzIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==