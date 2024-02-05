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

    // Envoi de la requête AJAX au fichier PHP avec l'ID du post
    fetch('modal-contact.php?post_id=' + postId).then(response => response.text()).then(data => {
      // Mettez le contenu de la réponse dans le modal
      document.getElementById('modal-4-content').innerHTML = data;
      // Afficher le modal
      MicroModal.show('modal-contact');
    }).catch(error => console.error('Erreur lors de la récupération des données: ', error));
  });
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fdf7b5c8d1c685e85342")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLjU1YTEyNTMzZjNlZTU4OTZiMTUzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNQSxvQkFBb0IsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztBQUUzRUYsb0JBQW9CLENBQUNHLE9BQU8sQ0FBQyxVQUFTQyxNQUFNLEVBQUU7RUFDMUNBLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVNDLEdBQUcsRUFBRTtJQUMzQyxNQUFNQyxNQUFNLEdBQUdILE1BQU0sQ0FBQ0ksWUFBWSxDQUFDLGNBQWMsQ0FBQztJQUNsREMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQztJQUNuQkQsR0FBRyxDQUFDSyxjQUFjLENBQUMsQ0FBQzs7SUFFcEI7SUFDQUMsS0FBSyxDQUFDLDRCQUE0QixHQUFHTCxNQUFNLENBQUMsQ0FDdkNNLElBQUksQ0FBQ0MsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDakNGLElBQUksQ0FBQ0csSUFBSSxJQUFJO01BQ1Y7TUFDQWYsUUFBUSxDQUFDZ0IsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUNDLFNBQVMsR0FBR0YsSUFBSTtNQUMzRDtNQUNBRyxVQUFVLENBQUNDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDcEMsQ0FBQyxDQUFDLENBQ0RDLEtBQUssQ0FBQ0MsS0FBSyxJQUFJYixPQUFPLENBQUNhLEtBQUssQ0FBQyw4Q0FBOEMsRUFBRUEsS0FBSyxDQUFDLENBQUM7RUFDN0YsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7OztVQ25CRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9tb2RhbC1jb250YWN0LmpzIiwid2VicGFjazovL3dlYmxpcGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgb3BlbmVyX21vZGFsX2NvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanNfbW9kYWxfY29udGFjdCcpO1xuXG5vcGVuZXJfbW9kYWxfY29udGFjdC5mb3JFYWNoKGZ1bmN0aW9uKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICBjb25zdCBwb3N0SWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3QtaWQnKTtcbiAgICAgICAgY29uc29sZS5sb2cocG9zdElkKVxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBFbnZvaSBkZSBsYSByZXF1w6p0ZSBBSkFYIGF1IGZpY2hpZXIgUEhQIGF2ZWMgbCdJRCBkdSBwb3N0XG4gICAgICAgIGZldGNoKCdtb2RhbC1jb250YWN0LnBocD9wb3N0X2lkPScgKyBwb3N0SWQpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAvLyBNZXR0ZXogbGUgY29udGVudSBkZSBsYSByw6lwb25zZSBkYW5zIGxlIG1vZGFsXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLTQtY29udGVudCcpLmlubmVySFRNTCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgLy8gQWZmaWNoZXIgbGUgbW9kYWxcbiAgICAgICAgICAgICAgICBNaWNyb01vZGFsLnNob3coJ21vZGFsLWNvbnRhY3QnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGRvbm7DqWVzOiAnLCBlcnJvcikpO1xuICAgIH0pO1xufSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmZGY3YjVjOGQxYzY4NWU4NTM0MlwiKSJdLCJuYW1lcyI6WyJvcGVuZXJfbW9kYWxfY29udGFjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwicG9zdElkIiwiZ2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZXh0IiwiZGF0YSIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiTWljcm9Nb2RhbCIsInNob3ciLCJjYXRjaCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==