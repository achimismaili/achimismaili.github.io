var PageComingSoon = function () {
    return {
      //Coming Soon
      initPageComingSoon: function () {
			var newYear = new Date();
			newYear = new Date(2017, 7-2, 27);
			$('#defaultCountdown').countdown({until: newYear})
        }
    };
}();
