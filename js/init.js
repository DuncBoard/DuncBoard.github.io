$('.ui-btn').css('width','50%');
soundManager.setup({
	onready: function() {
		var dunc_mp3_1 = soundManager.createSound({
			url: 'mp3/dunc1.mp3'
		});

		var dunc_mp3_2 = soundManager.createSound({
			url: 'mp3/dunc2.mp3'
		});

		var dunc_mp3_3 = soundManager.createSound({
			url: 'mp3/dunc3.mp3'
		});

		var dunc_mp3_4 = soundManager.createSound({
			url: 'mp3/dunc4.mp3'
		});
		
		var dunc_mp3_5 = soundManager.createSound({
			url: 'mp3/dunc5.mp3'
		});

		$("#comeonbtn").click(function() {
			dunc_mp3_1.play();
			duncShake();
		});
		$("#woahbtn").click(function() {
			dunc_mp3_2.play();
			duncShake();
		});
		$("#hangbtn").click(function() {
			dunc_mp3_3.play();
			duncShake();
		});
		$("#jokebtn").click(function() {
			dunc_mp3_4.play();
			duncShake();
		});
		$("#bananabtn").click(function() {
			dunc_mp3_5.play();
			duncShake();
		});
	},
	ontimeout: function() {}
});

$('#dunc').jrumble();
var duncShake = function() {
	$('#dunc').trigger('startRumble');
	setTimeout(function() {
		$('#dunc').trigger('stopRumble')
	}, 2500);
};

$('.ui-btn').css('width','50%');