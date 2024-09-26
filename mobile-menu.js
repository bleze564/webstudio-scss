(() => {
    const refs = {
         openModalBtn: document.querySelector("[data-open-header-modal]"),
         closeModalBtn: document.querySelector("[data-close-header-modal]"),
         backdrop: document.querySelector("[data-header-backdrop]"),
       };
 
       refs.openModalBtn.addEventListener("click", toggleModal);
       refs.closeModalBtn.addEventListener("click", toggleModal);
 
       refs.backdrop.addEventListener("click", logBackdropClick);
 
       function toggleModal() {
         refs.backdrop.classList.toggle("is-hidden");
       }
 
       function logBackdropClick() {
         console.log("Це клік в бекдроп");
       }
 })()