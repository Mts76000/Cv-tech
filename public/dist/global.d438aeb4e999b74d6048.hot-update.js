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
/******/ 	__webpack_require__.h = () => ("9c1aafc1672bec1e848c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmQ0MzhhZWI0ZTk5OWI3NGQ2MDQ4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNQSxvQkFBb0IsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztBQUczRSxJQUFJQyxNQUFNLEdBQUcsSUFBSUMsUUFBUSxDQUFDLENBQUM7QUFDM0JELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUM7QUFFdEMsZUFBZUMsY0FBY0EsQ0FBQSxFQUFHO0VBQzVCLElBQUk7SUFDQSxJQUFJQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sRUFBRTtNQUN6Q0MsTUFBTSxFQUFFLE1BQU07TUFDZEMsSUFBSSxFQUFFVDtJQUNWLENBQUMsQ0FBQztJQUNGLElBQUlVLElBQUksR0FBRyxNQUFNTixRQUFRLENBQUNPLElBQUksQ0FBQyxDQUFDO0lBRWhDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDO0VBTXJCLENBQUMsQ0FBQyxPQUFPSSxLQUFLLEVBQUU7SUFDWkYsT0FBTyxDQUFDRSxLQUFLLENBQUMsbURBQW1ELEVBQUVBLEtBQUssQ0FBQztFQUM3RTtBQUNKO0FBQ0FqQixvQkFBb0IsQ0FBQ2tCLE9BQU8sQ0FBRSxVQUFTQyxNQUFNLEVBQUU7RUFDM0NBLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVNDLEdBQUcsRUFBRTtJQUMzQztJQUNBLE1BQU1DLE1BQU0sR0FBR0gsTUFBTSxDQUFDSSxPQUFPLENBQUNELE1BQU07SUFDcENQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxNQUFNLENBQUM7SUFDbkJELEdBQUcsQ0FBQ0csY0FBYyxDQUFDLENBQUM7SUFDcEJyQixNQUFNLENBQUNFLE1BQU0sQ0FBQyxJQUFJLEVBQUVpQixNQUFNLENBQUM7SUFDM0JHLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQ3BCLGNBQWMsQ0FBQyxDQUFDO0VBR3BCLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7Ozs7Ozs7VUNwQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJsaXBhY2svLi9zcmMvYXNzZXQvanMvbW9kYWwtY29udGFjdC5qcyIsIndlYnBhY2s6Ly93ZWJsaXBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9wZW5lcl9tb2RhbF9jb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzX21vZGFsX2NvbnRhY3QnKTtcblxuXG5sZXQgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5wYXJhbXMuYXBwZW5kKCdhY3Rpb24nLCAnZ2V0X2NvbnRhY3QnKVxuXG5hc3luYyBmdW5jdGlvbiBHZXRDb250YWN0VXNlcigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChNWVNDUklQVC5hamF4VXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIGJvZHk6IHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIFxuXG5cblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgY29udmVyc2lvbiBkZSBsYSByw6lwb25zZSBKU09OIDonLCBlcnJvcik7XG4gICAgfVxufVxub3BlbmVyX21vZGFsX2NvbnRhY3QuZm9yRWFjaCggZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIC8vY29uc3QgcG9zdElkID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0LWlkJyk7XG4gICAgICAgIGNvbnN0IHBvc3RJZCA9IGJ1dHRvbi5kYXRhc2V0LnBvc3RJZDtcbiAgICAgICAgY29uc29sZS5sb2cocG9zdElkKTtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHBhcmFtcy5hcHBlbmQoJ2lkJywgcG9zdElkKTtcbiAgICAgICAgTWljcm9Nb2RhbC5zaG93KCdtb2RhbC1jb250YWN0Jyk7XG4gICAgICAgIEdldENvbnRhY3RVc2VyKCk7XG5cblxuICAgIH0pO1xufSk7XG5cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5YzFhYWZjMTY3MmJlYzFlODQ4Y1wiKSJdLCJuYW1lcyI6WyJvcGVuZXJfbW9kYWxfY29udGFjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiR2V0Q29udGFjdFVzZXIiLCJyZXNwb25zZSIsImZldGNoIiwiTVlTQ1JJUFQiLCJhamF4VXJsIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZm9yRWFjaCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwb3N0SWQiLCJkYXRhc2V0IiwicHJldmVudERlZmF1bHQiLCJNaWNyb01vZGFsIiwic2hvdyJdLCJzb3VyY2VSb290IjoiIn0=