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
    fetch('.php?post_id=' + postId).then(response => response.text()).then(data => {
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
/******/ 	__webpack_require__.h = () => ("22175d4803d7c4fa8572")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmZkZjdiNWM4ZDFjNjg1ZTg1MzQyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNQSxvQkFBb0IsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztBQUUzRUYsb0JBQW9CLENBQUNHLE9BQU8sQ0FBQyxVQUFTQyxNQUFNLEVBQUU7RUFDMUNBLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVNDLEdBQUcsRUFBRTtJQUMzQyxNQUFNQyxNQUFNLEdBQUdILE1BQU0sQ0FBQ0ksWUFBWSxDQUFDLGNBQWMsQ0FBQztJQUNsREMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQztJQUNuQkQsR0FBRyxDQUFDSyxjQUFjLENBQUMsQ0FBQzs7SUFFcEI7SUFDQUMsS0FBSyxDQUFDLGVBQWUsR0FBR0wsTUFBTSxDQUFDLENBQzFCTSxJQUFJLENBQUNDLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ2pDRixJQUFJLENBQUNHLElBQUksSUFBSTtNQUNWO01BQ0FmLFFBQVEsQ0FBQ2dCLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxTQUFTLEdBQUdGLElBQUk7TUFDM0Q7TUFDQUcsVUFBVSxDQUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUNEQyxLQUFLLENBQUNDLEtBQUssSUFBSWIsT0FBTyxDQUFDYSxLQUFLLENBQUMsOENBQThDLEVBQUVBLEtBQUssQ0FBQyxDQUFDO0VBQzdGLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7Ozs7Ozs7VUNuQkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvbW9kYWwtY29udGFjdC5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9wZW5lcl9tb2RhbF9jb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzX21vZGFsX2NvbnRhY3QnKTtcblxub3BlbmVyX21vZGFsX2NvbnRhY3QuZm9yRWFjaChmdW5jdGlvbihidXR0b24pIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgY29uc3QgcG9zdElkID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0LWlkJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBvc3RJZClcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gRW52b2kgZGUgbGEgcmVxdcOqdGUgQUpBWCBhdSBmaWNoaWVyIFBIUCBhdmVjIGwnSUQgZHUgcG9zdFxuICAgICAgICBmZXRjaCgnLnBocD9wb3N0X2lkPScgKyBwb3N0SWQpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAvLyBNZXR0ZXogbGUgY29udGVudSBkZSBsYSByw6lwb25zZSBkYW5zIGxlIG1vZGFsXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLTQtY29udGVudCcpLmlubmVySFRNTCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgLy8gQWZmaWNoZXIgbGUgbW9kYWxcbiAgICAgICAgICAgICAgICBNaWNyb01vZGFsLnNob3coJ21vZGFsLWNvbnRhY3QnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGRvbm7DqWVzOiAnLCBlcnJvcikpO1xuICAgIH0pO1xufSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyMjE3NWQ0ODAzZDdjNGZhODU3MlwiKSJdLCJuYW1lcyI6WyJvcGVuZXJfbW9kYWxfY29udGFjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwicG9zdElkIiwiZ2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZXh0IiwiZGF0YSIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiTWljcm9Nb2RhbCIsInNob3ciLCJjYXRjaCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==