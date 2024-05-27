import outsideClick from './outsideclick.js';

export default class Dropdown {
    constructor(dropdownMenus, events) {
        this.dropdownMenus = document.querySelectorAll(dropdownMenus);

        if (events === undefined) {
            this.events = ['click', 'touchstart'];
        } else {
            this.events = events;
        }

        this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
        this.activeClass = 'active';
    }

    addDropdownMenusEvent() {
        this.dropdownMenus.forEach((menu) => {
            this.events.forEach((userEvent) => {
                menu.addEventListener(userEvent, this.activeDropdownMenu);
            });
        });
    }

    activeDropdownMenu(event) {
        event.preventDefault();
        const element = event.currentTarget;
        element.classList.add(this.activeClass);
        outsideClick(event.currentTarget, this.events, () => {
            element.classList.remove(this.activeClass);
        });
    };

    init() {
        if (this.dropdownMenus.length) {
            this.addDropdownMenusEvent();
        };
        return this;
    }
};
