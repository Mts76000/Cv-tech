self["webpackHotUpdateweblipack"]("src_asset_js_modal-profil_js",{

/***/ "./src/asset/js/modal-profil.js":
/*!**************************************!*\
  !*** ./src/asset/js/modal-profil.js ***!
  \**************************************/
/***/ (() => {

// modal profil

const opener_profil = document.querySelector('#modal_profil');
opener_profil.addEventListener('click', function (evt) {
  evt.preventDefault();
  MicroModal.show('modal-test');
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2Fzc2V0X2pzX21vZGFsLXByb2ZpbF9qcy5mZTcyZjVjMDVkNDY3ODc2MWY0Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7O0FBRUEsTUFBTUEsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7QUFDN0RGLGFBQWEsQ0FBQ0csZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVNDLEdBQUcsRUFBRTtFQUNsREEsR0FBRyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUNwQkMsVUFBVSxDQUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDO0FBRWpDLENBQUMsQ0FBQztBQUlGLE1BQU1DLGlCQUFpQixHQUFHUCxRQUFRLENBQUNRLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztBQUNwRSxNQUFNQyxNQUFNLEdBQUdULFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUVwRE0saUJBQWlCLENBQUNHLE9BQU8sQ0FBQyxVQUFTQyxNQUFNLEVBQUU7RUFDdkNBLE1BQU0sQ0FBQ1QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVNDLEdBQUcsRUFBRTtJQUMzQ0EsR0FBRyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNwQkssTUFBTSxDQUFDRyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDakNSLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQztFQUNqQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvbW9kYWwtcHJvZmlsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gbW9kYWwgcHJvZmlsXG5cbmNvbnN0IG9wZW5lcl9wcm9maWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxfcHJvZmlsJyk7XG5vcGVuZXJfcHJvZmlsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgTWljcm9Nb2RhbC5zaG93KCdtb2RhbC10ZXN0Jyk7XG5cbn0pO1xuXG5cblxuY29uc3QgcHJvZmlsT3BlbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfcHJvZmlsJyk7XG5jb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdl9idXJnZXJcIik7XG5cbnByb2ZpbE9wZW5CdXR0b25zLmZvckVhY2goZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5lZFwiKTtcbiAgICAgICAgTWljcm9Nb2RhbC5zaG93KCdtb2RhbC10ZXN0Jyk7XG4gICAgfSk7XG59KTtcblxuIl0sIm5hbWVzIjpbIm9wZW5lcl9wcm9maWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJNaWNyb01vZGFsIiwic2hvdyIsInByb2ZpbE9wZW5CdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImJ1cmdlciIsImZvckVhY2giLCJidXR0b24iLCJjbGFzc0xpc3QiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9