$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
	
$(".close").on('click', function(){
        $(this).parent('.card').fadeOut(500, function() {
			$.when($(this).remove()).done(function() {
			checkEmpty();
			});
		})
    });

function checkEmpty() {
	if($("#notifications").find(".card").length == 0) {
		$("#notifications").append("<p>You have no new notifications.</p>");
	}
}
	
function initMenu() {
    $('#menu ul').hide();
    $('#menu ul').children('.current').parent().show();
    //$('#menu ul:first').show();
    $('#menu li a').click(
    function() {
        var checkElement = $(this).next();
        if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            return false;
        }
        if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#menu ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
            return false;
        }
    }
    );
}

$(document).ready(function() {initMenu();});