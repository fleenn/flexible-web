$(document).ready(function() {
			var deviceWidth = document.documentElement.clientWidth;
			if (deviceWidth > 800) {
				deviceWidth = 800;
			}
			document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
		});