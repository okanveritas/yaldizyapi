document.addEventListener('DOMContentLoaded', function() {
	const menuToggle = document.getElementById('menuToggle');
	const mainNav = document.getElementById('mainNav');

	if (menuToggle && mainNav) {
		menuToggle.addEventListener('click', function(e) {
			e.preventDefault();
			mainNav.classList.toggle('active');
			
			// İkon değişimi
			const icon = this.querySelector('i');
			if (mainNav.classList.contains('active')) {
				icon.classList.remove('fa-bars');
				icon.classList.add('fa-times');
			} else {
				icon.classList.remove('fa-times');
				icon.classList.add('fa-bars');
			}
		});

		// Menü dışına tıklandığında kapat
		document.addEventListener('click', function(e) {
			if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
				mainNav.classList.remove('active');
				const icon = menuToggle.querySelector('i');
				if (icon) {
					icon.classList.remove('fa-times');
					icon.classList.add('fa-bars');
				}
			}
		});

		// Menü linklerine tıklandığında kapat
		const menuLinks = mainNav.querySelectorAll('a');
		menuLinks.forEach(link => {
			link.addEventListener('click', () => {
				mainNav.classList.remove('active');
				const icon = menuToggle.querySelector('i');
				icon.classList.remove('fa-times');
				icon.classList.add('fa-bars');
			});
		});
	}
});