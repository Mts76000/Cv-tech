self["webpackHotUpdateweblipack"]("src_asset_js_modal-profil_js",{

/***/ "./src/asset/js/modal-profil.js":
/*!**************************************!*\
  !*** ./src/asset/js/modal-profil.js ***!
  \**************************************/
/***/ (() => {

// // modal profil
//
// const profilOpenButtons = document.querySelectorAll('.modal_profil');
// const burger = document.querySelector("#nav_burger");
//
// profilOpenButtons.forEach(function(button) {
//     button.addEventListener('click', function(evt) {
//         evt.preventDefault();
//         burger.classList.remove("opened");
//         MicroModal.show('modal-test');
//     });
// });
//

const profilOpenButtons = document.querySelectorAll('.modal_profil');
const burger = document.querySelector("#nav_burger");
profilOpenButtons.forEach(function (button) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    burger.classList.remove("opened");
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

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2Fzc2V0X2pzX21vZGFsLXByb2ZpbF9qcy5hNDQyYWRhY2RkMWUyNjk5ZGY3MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUEsaUJBQWlCLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0FBQ3BFLE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsYUFBYSxDQUFDO0FBRXBESixpQkFBaUIsQ0FBQ0ssT0FBTyxDQUFDLFVBQVNDLE1BQU0sRUFBRTtFQUN2Q0EsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBU0MsR0FBRyxFQUFFO0lBQzNDQSxHQUFHLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BCTixNQUFNLENBQUNPLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUVqQyxNQUFNQyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxZQUFZLENBQUMsY0FBYyxDQUFDOztJQUVoRDtJQUNBO0lBQ0E7O0lBRUE7SUFDQUMsS0FBSyxDQUFDLDRCQUE0QixHQUFHRixNQUFNLENBQUMsQ0FDdkNHLElBQUksQ0FBQ0MsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDakNGLElBQUksQ0FBQ0csSUFBSSxJQUFJO01BQ1Y7TUFDQWpCLFFBQVEsQ0FBQ2tCLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0MsU0FBUyxHQUFHRixJQUFJOztNQUV6RDtNQUNBRyxVQUFVLENBQUNDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQ0RDLEtBQUssQ0FBQ0MsS0FBSyxJQUFJQyxPQUFPLENBQUNELEtBQUssQ0FBQyxRQUFRLEVBQUVBLEtBQUssQ0FBQyxDQUFDO0VBQ3ZELENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmxpcGFjay8uL3NyYy9hc3NldC9qcy9tb2RhbC1wcm9maWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyAvLyBtb2RhbCBwcm9maWxcbi8vXG4vLyBjb25zdCBwcm9maWxPcGVuQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9wcm9maWwnKTtcbi8vIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2X2J1cmdlclwiKTtcbi8vXG4vLyBwcm9maWxPcGVuQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uKGJ1dHRvbikge1xuLy8gICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuLy8gICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuZWRcIik7XG4vLyAgICAgICAgIE1pY3JvTW9kYWwuc2hvdygnbW9kYWwtdGVzdCcpO1xuLy8gICAgIH0pO1xuLy8gfSk7XG4vL1xuXG5cbmNvbnN0IHByb2ZpbE9wZW5CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX3Byb2ZpbCcpO1xuY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZfYnVyZ2VyXCIpO1xuXG5wcm9maWxPcGVuQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuZWRcIik7XG5cbiAgICAgICAgY29uc3QgdXNlcklkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlci1pZCcpO1xuXG4gICAgICAgIC8vIFLDqWN1cMOpcmVyIGxlcyBpbmZvcm1hdGlvbnMgZGUgbCd1dGlsaXNhdGV1ciBkZXB1aXMgbGEgYmFzZSBkZSBkb25uw6llcyBlbiB1dGlsaXNhbnQgdW5lIHJlcXXDqnRlIEFKQVggb3Ugc2ltaWxhaXJlXG4gICAgICAgIC8vIFZvdXMgZGV2ZXogw6ljcmlyZSB1bmUgbG9naXF1ZSBwb3VyIHLDqWN1cMOpcmVyIGxlcyBpbmZvcm1hdGlvbnMgZGUgbCd1dGlsaXNhdGV1ciBlbiBmb25jdGlvbiBkZSBzb24gSURcbiAgICAgICAgLy8gRW5zdWl0ZSwgbWV0dGV6IMOgIGpvdXIgbGUgY29udGVudSBkZSBsYSBtb2RhbCBhdmVjIGNlcyBpbmZvcm1hdGlvbnNcblxuICAgICAgICAvLyBFeGVtcGxlIGRlIGNvZGUgQUpBWCBwb3VyIHLDqWN1cMOpcmVyIGxlcyBpbmZvcm1hdGlvbnMgZGUgbCd1dGlsaXNhdGV1ciBkZXB1aXMgdW5lIFVSTCBQSFBcbiAgICAgICAgZmV0Y2goJ2dldF91c2VyX2luZm8ucGhwP3VzZXJfaWQ9JyArIHVzZXJJZClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIC8vIE1ldHRyZSDDoCBqb3VyIGxlIGNvbnRlbnUgZGUgbGEgbW9kYWwgYXZlYyBsZXMgaW5mb3JtYXRpb25zIGRlIGwndXRpbGlzYXRldXJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY29udGVudCcpLmlubmVySFRNTCA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAvLyBBZmZpY2hlciBsYSBtb2RhbFxuICAgICAgICAgICAgICAgIE1pY3JvTW9kYWwuc2hvdygnbW9kYWwtdGVzdCcpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcikpO1xuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOlsicHJvZmlsT3BlbkJ1dHRvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidXJnZXIiLCJxdWVyeVNlbGVjdG9yIiwiZm9yRWFjaCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInVzZXJJZCIsImdldEF0dHJpYnV0ZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsImRhdGEiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIk1pY3JvTW9kYWwiLCJzaG93IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9