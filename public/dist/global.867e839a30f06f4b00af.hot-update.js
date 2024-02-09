self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/modal-contact.js":
/*!***************************************!*\
  !*** ./src/asset/js/modal-contact.js ***!
  \***************************************/
/***/ (() => {

const opener_modal_contact = document.querySelectorAll('.js_modal_contact');
opener_modal_contact.forEach(function (button) {
  button.addEventListener('click', function (evt) {
    const postId = button.getAttribute('data-post-id');
    console.log(postId);
    evt.preventDefault();
    const modal = document.querySelector("modal-contact-".concat(postId));
    MicroModal.show(modal);
  });
});

// const postId = open.dataset.postId;
// const modal = document.querySelector(`#modal-${postId}`);
// e.preventDefault();
// modal.classList.add("opened");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("97e5a04bed8476d9b151")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjg2N2U4MzlhMzBmMDZmNGIwMGFmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNQSxvQkFBb0IsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztBQUUzRUYsb0JBQW9CLENBQUNHLE9BQU8sQ0FBQyxVQUFTQyxNQUFNLEVBQUU7RUFDMUNBLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVNDLEdBQUcsRUFBRTtJQUMzQyxNQUFNQyxNQUFNLEdBQUdILE1BQU0sQ0FBQ0ksWUFBWSxDQUFDLGNBQWMsQ0FBQztJQUNsREMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQztJQUNuQkQsR0FBRyxDQUFDSyxjQUFjLENBQUMsQ0FBQztJQUNwQixNQUFNQyxLQUFLLEdBQUdYLFFBQVEsQ0FBQ1ksYUFBYSxrQkFBQUMsTUFBQSxDQUFrQlAsTUFBTSxDQUFFLENBQUM7SUFDL0RRLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDSixLQUFLLENBQUM7RUFDMUIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOztBQUlGO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ2pCQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9tb2RhbC1jb250YWN0LmpzIiwid2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgb3BlbmVyX21vZGFsX2NvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanNfbW9kYWxfY29udGFjdCcpO1xuXG5vcGVuZXJfbW9kYWxfY29udGFjdC5mb3JFYWNoKGZ1bmN0aW9uKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICBjb25zdCBwb3N0SWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3QtaWQnKTtcbiAgICAgICAgY29uc29sZS5sb2cocG9zdElkKTtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbW9kYWwtY29udGFjdC0ke3Bvc3RJZH1gKTtcbiAgICAgICAgTWljcm9Nb2RhbC5zaG93KG1vZGFsKTtcbiAgICB9KTtcbn0pO1xuXG5cblxuLy8gY29uc3QgcG9zdElkID0gb3Blbi5kYXRhc2V0LnBvc3RJZDtcbi8vIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI21vZGFsLSR7cG9zdElkfWApO1xuLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gbW9kYWwuY2xhc3NMaXN0LmFkZChcIm9wZW5lZFwiKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5N2U1YTA0YmVkODQ3NmQ5YjE1MVwiKSJdLCJuYW1lcyI6WyJvcGVuZXJfbW9kYWxfY29udGFjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwicG9zdElkIiwiZ2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwibW9kYWwiLCJxdWVyeVNlbGVjdG9yIiwiY29uY2F0IiwiTWljcm9Nb2RhbCIsInNob3ciXSwic291cmNlUm9vdCI6IiJ9