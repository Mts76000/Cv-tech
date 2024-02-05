self["webpackHotUpdateweblipack"]("global",{

/***/ "./src/asset/js/modal-contact.js":
/*!***************************************!*\
  !*** ./src/asset/js/modal-contact.js ***!
  \***************************************/
/***/ (() => {

// const  opener_modal_contact = document.querySelectorAll('.js_modal_contact');
//
// opener_modal_contact.forEach(function(button) {
//     button.addEventListener('click', function(evt) {
//         evt.preventDefault();
//         MicroModal.show('modal-contact');
//     });
// });

const profilOpenButtons = document.querySelectorAll('.js_modal_contact');
profilOpenButtons.forEach(function (button) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    const userId = this.getAttribute('data-user-id');

    // Récupérer les informations de l'utilisateur depuis la base de données en utilisant une requête AJAX ou similaire
    // Vous devez écrire une logique pour récupérer les informations de l'utilisateur en fonction de son ID
    // Ensuite, mettez à jour le contenu de la modal avec ces informations

    // Exemple de code AJAX pour récupérer les informations de l'utilisateur depuis une URL PHP
    fetch('get_user_info.php?user_id=' + userId).then(response => response.text()).then(data => {
      // Mettre à jour le contenu de la modal avec les informations de l'utilisateur
      document.getElementById('modal-content').innerHTML = data;

      // Afficher la modal
      MicroModal.show('modal-test');
    }).catch(error => console.error('Error:', error));
  });
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("84f94296196216cb1b35")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmI2MGJmN2FmOGJlOGYzMmRmZWUyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLE1BQU1BLGlCQUFpQixHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO0FBR3hFRixpQkFBaUIsQ0FBQ0csT0FBTyxDQUFDLFVBQVNDLE1BQU0sRUFBRTtFQUN2Q0EsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBU0MsR0FBRyxFQUFFO0lBQzNDQSxHQUFHLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBR3BCLE1BQU1DLE1BQU0sR0FBRyxJQUFJLENBQUNDLFlBQVksQ0FBQyxjQUFjLENBQUM7O0lBRWhEO0lBQ0E7SUFDQTs7SUFFQTtJQUNBQyxLQUFLLENBQUMsNEJBQTRCLEdBQUdGLE1BQU0sQ0FBQyxDQUN2Q0csSUFBSSxDQUFDQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNqQ0YsSUFBSSxDQUFDRyxJQUFJLElBQUk7TUFDVjtNQUNBYixRQUFRLENBQUNjLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0MsU0FBUyxHQUFHRixJQUFJOztNQUV6RDtNQUNBRyxVQUFVLENBQUNDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQ0RDLEtBQUssQ0FBQ0MsS0FBSyxJQUFJQyxPQUFPLENBQUNELEtBQUssQ0FBQyxRQUFRLEVBQUVBLEtBQUssQ0FBQyxDQUFDO0VBQ3ZELENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7Ozs7Ozs7VUMxQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvbW9kYWwtY29udGFjdC5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gY29uc3QgIG9wZW5lcl9tb2RhbF9jb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzX21vZGFsX2NvbnRhY3QnKTtcbi8vXG4vLyBvcGVuZXJfbW9kYWxfY29udGFjdC5mb3JFYWNoKGZ1bmN0aW9uKGJ1dHRvbikge1xuLy8gICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuLy8gICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgTWljcm9Nb2RhbC5zaG93KCdtb2RhbC1jb250YWN0Jyk7XG4vLyAgICAgfSk7XG4vLyB9KTtcblxuXG5cblxuXG5cblxuY29uc3QgcHJvZmlsT3BlbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanNfbW9kYWxfY29udGFjdCcpO1xuXG5cbnByb2ZpbE9wZW5CdXR0b25zLmZvckVhY2goZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cbiAgICAgICAgY29uc3QgdXNlcklkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlci1pZCcpO1xuXG4gICAgICAgIC8vIFLDqWN1cMOpcmVyIGxlcyBpbmZvcm1hdGlvbnMgZGUgbCd1dGlsaXNhdGV1ciBkZXB1aXMgbGEgYmFzZSBkZSBkb25uw6llcyBlbiB1dGlsaXNhbnQgdW5lIHJlcXXDqnRlIEFKQVggb3Ugc2ltaWxhaXJlXG4gICAgICAgIC8vIFZvdXMgZGV2ZXogw6ljcmlyZSB1bmUgbG9naXF1ZSBwb3VyIHLDqWN1cMOpcmVyIGxlcyBpbmZvcm1hdGlvbnMgZGUgbCd1dGlsaXNhdGV1ciBlbiBmb25jdGlvbiBkZSBzb24gSURcbiAgICAgICAgLy8gRW5zdWl0ZSwgbWV0dGV6IMOgIGpvdXIgbGUgY29udGVudSBkZSBsYSBtb2RhbCBhdmVjIGNlcyBpbmZvcm1hdGlvbnNcblxuICAgICAgICAvLyBFeGVtcGxlIGRlIGNvZGUgQUpBWCBwb3VyIHLDqWN1cMOpcmVyIGxlcyBpbmZvcm1hdGlvbnMgZGUgbCd1dGlsaXNhdGV1ciBkZXB1aXMgdW5lIFVSTCBQSFBcbiAgICAgICAgZmV0Y2goJ2dldF91c2VyX2luZm8ucGhwP3VzZXJfaWQ9JyArIHVzZXJJZClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIC8vIE1ldHRyZSDDoCBqb3VyIGxlIGNvbnRlbnUgZGUgbGEgbW9kYWwgYXZlYyBsZXMgaW5mb3JtYXRpb25zIGRlIGwndXRpbGlzYXRldXJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY29udGVudCcpLmlubmVySFRNTCA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAvLyBBZmZpY2hlciBsYSBtb2RhbFxuICAgICAgICAgICAgICAgIE1pY3JvTW9kYWwuc2hvdygnbW9kYWwtdGVzdCcpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcikpO1xuICAgIH0pO1xufSk7XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg0Zjk0Mjk2MTk2MjE2Y2IxYjM1XCIpIl0sIm5hbWVzIjpbInByb2ZpbE9wZW5CdXR0b25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJJZCIsImdldEF0dHJpYnV0ZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsImRhdGEiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIk1pY3JvTW9kYWwiLCJzaG93IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9