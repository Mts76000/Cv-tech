self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/modal-contact.js":
/*!***************************************!*\
  !*** ./src/asset/js/modal-contact.js ***!
  \***************************************/
/***/ (() => {

const opener_modal_contact = document.querySelectorAll('.js_modal_contact');
let params = new FormData();
params.append('action', 'get_contact');
async function GetContactUser() {
  try {
    let response = await fetch(MYSCRIPT.ajaxUrl, {
      method: 'post',
      body: params
    });
    let data = await response.json();
    console.log(data);
    console.log(data.user.email);
    console.log(data.user.phoneNumber);
  } catch (error) {
    console.error('Erreur lors de la conversion de la réponse JSON :', error);
  }
}
opener_modal_contact.forEach(function (button) {
  button.addEventListener('click', function (evt) {
    //const postId = button.getAttribute('data-post-id');
    const postId = button.dataset.postId;
    console.log(postId);
    evt.preventDefault();
    params.append('id', postId);
    MicroModal.show('modal-contact');
    GetContactUser();
  });
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bf34c7dd2990f61b83b6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmIwN2RiODE5ZTA0NTQ0Zjc2M2U4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNQSxvQkFBb0IsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztBQUczRSxJQUFJQyxNQUFNLEdBQUcsSUFBSUMsUUFBUSxDQUFDLENBQUM7QUFDM0JELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUM7QUFFdEMsZUFBZUMsY0FBY0EsQ0FBQSxFQUFHO0VBQzVCLElBQUk7SUFDQSxJQUFJQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sRUFBRTtNQUN6Q0MsTUFBTSxFQUFFLE1BQU07TUFDZEMsSUFBSSxFQUFFVDtJQUNWLENBQUMsQ0FBQztJQUNGLElBQUlVLElBQUksR0FBRyxNQUFNTixRQUFRLENBQUNPLElBQUksQ0FBQyxDQUFDO0lBRWhDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDO0lBQ2pCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDSSxJQUFJLENBQUNDLEtBQUssQ0FBQztJQUM1QkgsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQ0ksSUFBSSxDQUFDRSxXQUFXLENBQUM7RUFLdEMsQ0FBQyxDQUFDLE9BQU9DLEtBQUssRUFBRTtJQUNaTCxPQUFPLENBQUNLLEtBQUssQ0FBQyxtREFBbUQsRUFBRUEsS0FBSyxDQUFDO0VBQzdFO0FBQ0o7QUFDQXBCLG9CQUFvQixDQUFDcUIsT0FBTyxDQUFFLFVBQVNDLE1BQU0sRUFBRTtFQUMzQ0EsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBU0MsR0FBRyxFQUFFO0lBQzNDO0lBQ0EsTUFBTUMsTUFBTSxHQUFHSCxNQUFNLENBQUNJLE9BQU8sQ0FBQ0QsTUFBTTtJQUNwQ1YsT0FBTyxDQUFDQyxHQUFHLENBQUNTLE1BQU0sQ0FBQztJQUNuQkQsR0FBRyxDQUFDRyxjQUFjLENBQUMsQ0FBQztJQUNwQnhCLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLElBQUksRUFBRW9CLE1BQU0sQ0FBQztJQUMzQkcsVUFBVSxDQUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hDdkIsY0FBYyxDQUFDLENBQUM7RUFHcEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7OztVQ3JDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9tb2RhbC1jb250YWN0LmpzIiwid2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgb3BlbmVyX21vZGFsX2NvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanNfbW9kYWxfY29udGFjdCcpO1xuXG5cbmxldCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcbnBhcmFtcy5hcHBlbmQoJ2FjdGlvbicsICdnZXRfY29udGFjdCcpXG5cbmFzeW5jIGZ1bmN0aW9uIEdldENvbnRhY3RVc2VyKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKE1ZU0NSSVBULmFqYXhVcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgYm9keTogcGFyYW1zXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS51c2VyLmVtYWlsKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS51c2VyLnBob25lTnVtYmVyKTtcblxuXG5cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIGNvbnZlcnNpb24gZGUgbGEgcsOpcG9uc2UgSlNPTiA6JywgZXJyb3IpO1xuICAgIH1cbn1cbm9wZW5lcl9tb2RhbF9jb250YWN0LmZvckVhY2goIGZ1bmN0aW9uKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAvL2NvbnN0IHBvc3RJZCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdC1pZCcpO1xuICAgICAgICBjb25zdCBwb3N0SWQgPSBidXR0b24uZGF0YXNldC5wb3N0SWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHBvc3RJZCk7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwYXJhbXMuYXBwZW5kKCdpZCcsIHBvc3RJZCk7XG4gICAgICAgIE1pY3JvTW9kYWwuc2hvdygnbW9kYWwtY29udGFjdCcpO1xuICAgICAgICBHZXRDb250YWN0VXNlcigpO1xuXG5cbiAgICB9KTtcbn0pO1xuXG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmYzNGM3ZGQyOTkwZjYxYjgzYjZcIikiXSwibmFtZXMiOlsib3BlbmVyX21vZGFsX2NvbnRhY3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJhbXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkdldENvbnRhY3RVc2VyIiwicmVzcG9uc2UiLCJmZXRjaCIsIk1ZU0NSSVBUIiwiYWpheFVybCIsIm1ldGhvZCIsImJvZHkiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImVycm9yIiwiZm9yRWFjaCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwb3N0SWQiLCJkYXRhc2V0IiwicHJldmVudERlZmF1bHQiLCJNaWNyb01vZGFsIiwic2hvdyJdLCJzb3VyY2VSb290IjoiIn0=