const KTLayout = {
	_isSidebarCollapse() {
		return document.body.classList.contains('sidebar-collapse');
	},
	_handleMegaMenu() {
		const megamenuEl = document.querySelector('#megamenu');
		if (!megamenuEl) return;

		const menu = KTMenu.getInstance(megamenuEl);
		menu.disable();

		setTimeout(() => {
			menu.enable();
		}, 500);
	},
	_handleSidebar() {
		const sidebarToggle = KTToggle.getInstance(this.sidebarToggleEl);
		sidebarToggle?.on('toggle', () => {
			this.sidebarEl.classList.add('animating');

			this._handleMegaMenu();

			KTDom.transitionEnd(this.sidebarEl, () => {
				this.sidebarEl.classList.remove('animating');
			});
		});
	},
	_handleSidebarMenu() {
		const menuEl = document.querySelector('#sidebar_menu');
		const scrollableEl = document.querySelector('#sidebar_scrollable');
		const menuActiveItemEl = menuEl.querySelector(".menu-item.active");

		if (!menuActiveItemEl || KTDom.isVisibleInParent(menuActiveItemEl, scrollableEl)) {
			return;
		}

		scrollableEl.scroll({
			top: KTDom.getRelativeTopPosition(menuActiveItemEl, scrollableEl) - 100,
			behavior: 'instant'
		});
	},
	init() {
		this.sidebarEl = document.querySelector('#sidebar');
		this.sidebarWrapperEl = document.querySelector('#sidebar_wrapper');
		this.headerEl = document.querySelector('#header');
		this.sidebarToggleEl = document.querySelector('#sidebar_toggle');

		if (this.sidebarEl && this.sidebarToggleEl) {
			this._handleSidebar();
			this._handleSidebarMenu();
		}
		//console.log("Corriendo KTLayout.init() en el archivo demo1.js");
	},
	isSidebarCollapse() {
		return this._isSidebarCollapse();
	}
}


export default KTLayout;