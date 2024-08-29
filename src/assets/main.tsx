/* Click Empreendimentos */

export function openMenu(): void {
    setTimeout(open, 500);
}

export function open(): void {
    // It's a good practice to specify the type of the element.
    const menu = document.querySelector<HTMLButtonElement>("#menu_emp");

    if (menu) {
        menu.click();
    }
}

export function menuMobile(): void {
    const menu_aberto = document.querySelector<HTMLElement>("#menu-aberto");
    const menu_fechado = document.querySelector<HTMLElement>("#menu-fechado");

    if (menu_aberto && menu_fechado) {
        menu_aberto.classList.toggle("d-none");
        menu_fechado.classList.toggle("d-none");
    }
}



