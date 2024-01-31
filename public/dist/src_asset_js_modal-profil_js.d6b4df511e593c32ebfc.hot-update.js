self["webpackHotUpdateweblipack"]("src_asset_js_modal-profil_js",{

/***/ "./src/asset/js/modal-profil.js":
/*!**************************************!*\
  !*** ./src/asset/js/modal-profil.js ***!
  \**************************************/
/***/ (() => {

// modal profil

// const opener_profil = document.querySelector('#modal_profil');
// opener_profil.addEventListener('click', function(evt) {
//     evt.preventDefault();
//     MicroModal.show('modal-test');
//
// });

const profilOpenButtons = document.querySelectorAll('.modal_profil');
const burger = document.querySelector("#nav_burger");
profilOpenButtons.forEach(function (button) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    burger.classList.remove("opened");
    MicroModal.show('modal-test');
  });
});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2Fzc2V0X2pzX21vZGFsLXByb2ZpbF9qcy5kNmI0ZGY1MTFlNTkzYzMyZWJmYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLE1BQU1BLGlCQUFpQixHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztBQUNwRSxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUVwREosaUJBQWlCLENBQUNLLE9BQU8sQ0FBQyxVQUFTQyxNQUFNLEVBQUU7RUFDdkNBLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVNDLEdBQUcsRUFBRTtJQUMzQ0EsR0FBRyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNwQk4sTUFBTSxDQUFDTyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDakNDLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQztFQUNqQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvbW9kYWwtcHJvZmlsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gbW9kYWwgcHJvZmlsXG5cbi8vIGNvbnN0IG9wZW5lcl9wcm9maWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxfcHJvZmlsJyk7XG4vLyBvcGVuZXJfcHJvZmlsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG4vLyAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgTWljcm9Nb2RhbC5zaG93KCdtb2RhbC10ZXN0Jyk7XG4vL1xuLy8gfSk7XG5cblxuXG5jb25zdCBwcm9maWxPcGVuQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9wcm9maWwnKTtcbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2X2J1cmdlclwiKTtcblxucHJvZmlsT3BlbkJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbihidXR0b24pIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbmVkXCIpO1xuICAgICAgICBNaWNyb01vZGFsLnNob3coJ21vZGFsLXRlc3QnKTtcbiAgICB9KTtcbn0pO1xuXG4iXSwibmFtZXMiOlsicHJvZmlsT3BlbkJ1dHRvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidXJnZXIiLCJxdWVyeVNlbGVjdG9yIiwiZm9yRWFjaCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsInJlbW92ZSIsIk1pY3JvTW9kYWwiLCJzaG93Il0sInNvdXJjZVJvb3QiOiIifQ==