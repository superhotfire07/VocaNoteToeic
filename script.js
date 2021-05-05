var searchBox = $('#searchBox');
var submitBtn = $('button');
var tr = $('tr');
var AreThereAnyResults = false;
var td = $('td');
var noResult = $('#noResult')
noResult.hide(0);


$(document).ready(
    function() {
        searchBox.keyup(
            function(e) {
            noResult.hide(0);
            var $keyword = $(this).val().toLowerCase();
            $('tbody > tr').hide(0);
            var tdVal = $('td:contains('+$keyword+')');
            tdVal.parent().show(0);
            
            if (typeof tdVal.css('display') == 'undefined'){
                noResult.show(0);
            }
    }
);
});


