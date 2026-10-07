(() => {
  let trigger = null;
  const dialogs = [...document.querySelectorAll('.project-dialog')];
  document.querySelectorAll('[data-project]').forEach(button => {
    button.addEventListener('click', () => {
      const dialog = document.getElementById(button.dataset.project);
      if (!dialog || dialog.open) return;
      trigger = button;
      dialog.showModal();
      document.body.classList.add('modal-open');
    });
  });
  dialogs.forEach(dialog => {
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      const bounds = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.body.classList.remove('modal-open');
      if (trigger) trigger.focus({preventScroll: true});
      trigger = null;
    });
  });
})();
