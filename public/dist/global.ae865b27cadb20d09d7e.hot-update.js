self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/modal-contact.js":
/*!***************************************!*\
  !*** ./src/asset/js/modal-contact.js ***!
  \***************************************/
/***/ (() => {

const opener_modal_contact = document.querySelectorAll('.js_modal_contact');
let params = new FormData();
params.append('action', 'get_register_form');
opener_modal_contact.forEach(function (button) {
  button.addEventListener('click', function (evt) {
    //const postId = button.getAttribute('data-post-id');
    const postId = button.dataset.postId;
    console.log(postId);
    evt.preventDefault();
    MicroModal.show('modal-contact');
  });
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fd28734308443dee7f1e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmFlODY1YjI3Y2FkYjIwZDA5ZDdlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNQSxvQkFBb0IsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztBQUczRSxJQUFJQyxNQUFNLEdBQUcsSUFBSUMsUUFBUSxDQUFDLENBQUM7QUFDM0JELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQztBQUM1Q0wsb0JBQW9CLENBQUNNLE9BQU8sQ0FBQyxVQUFTQyxNQUFNLEVBQUU7RUFDMUNBLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVNDLEdBQUcsRUFBRTtJQUMzQztJQUNBLE1BQU1DLE1BQU0sR0FBR0gsTUFBTSxDQUFDSSxPQUFPLENBQUNELE1BQU07SUFDcENFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxNQUFNLENBQUM7SUFDbkJELEdBQUcsQ0FBQ0ssY0FBYyxDQUFDLENBQUM7SUFDcEJDLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLGVBQWUsQ0FBQztFQUdwQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7Ozs7Ozs7O1VDZkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvbW9kYWwtY29udGFjdC5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9wZW5lcl9tb2RhbF9jb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzX21vZGFsX2NvbnRhY3QnKTtcblxuXG5sZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5wYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAnZ2V0X3JlZ2lzdGVyX2Zvcm0nKVxub3BlbmVyX21vZGFsX2NvbnRhY3QuZm9yRWFjaChmdW5jdGlvbihidXR0b24pIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgLy9jb25zdCBwb3N0SWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3QtaWQnKTtcbiAgICAgICAgY29uc3QgcG9zdElkID0gYnV0dG9uLmRhdGFzZXQucG9zdElkO1xuICAgICAgICBjb25zb2xlLmxvZyhwb3N0SWQpO1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgTWljcm9Nb2RhbC5zaG93KCdtb2RhbC1jb250YWN0Jyk7XG5cblxuICAgIH0pO1xufSk7XG5cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmZDI4NzM0MzA4NDQzZGVlN2YxZVwiKSJdLCJuYW1lcyI6WyJvcGVuZXJfbW9kYWxfY29udGFjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZm9yRWFjaCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwb3N0SWQiLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiTWljcm9Nb2RhbCIsInNob3ciXSwic291cmNlUm9vdCI6IiJ9