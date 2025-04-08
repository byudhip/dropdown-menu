export function dropdownMenu() {
  const addDropdownBtn = (targetElement) => {
    const button = document.createElement('button');
    button.textContent = '⋮';
    button.classList.add('show-dropdown');
    targetElement.appendChild(addDropdownBtn);
  };
  const addDropdownMenu = () => {
    const menu = document.createElement('div');
    menu.setAttribute('hidden', true);
    menu.innerHTML = `
    <p>Edit</p>
    <p>Copy</p>
    <p>Delete</p>
  `;
    document.querySelector('body').appendChild(menu);
  };
  const applyListeners = () => {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    document.addEventListener('click', (e) => {
      if (e.target.closest('.show-dropdown')) {
        const parentDiv = e.target.closest('.show-dropdown');
        parentDiv.appendChild(dropdownMenu);
        dropdownMenu.removeAttribute('hidden');
      } else {
        dropdownMenu.setAttribute('hidden', true);
      }
    });
  };
  return { addDropdownBtn, addDropdownMenu, applyListeners };
}
