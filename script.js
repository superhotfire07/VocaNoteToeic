var searchBox = $('#searchBox');
var submitBtn = $('button');
var tr = $('tr');
var AreThereAnyResults = false;



$(document).ready(
    function() {
        $(document).submit(
            function(e) {
            e.preventDefault();
            
            
            var td = tr.children();

            td.each (function(i){

            var realTd = $(this).text().replace(/(\s*)/g, "");


            var boxVal = searchBox.val().toLowerCase().replace(/(\s*)/g, "");

            
            if (realTd == boxVal) {
                /* $('td').hide(0);
                $('tbody > tr > th').hide(0);
                
                
                $(this).parent().children().show(0); */

                if (AreThereAnyResults == false) {
                var result = $(this).parent().clone().addClass('bg-light').attr('data-bs-toggle','modal').attr('data-bs-target','#delete');
                $('tbody').prepend(result);
                AreThereAnyResults = true;

                } else{
                    console.log($('tbody tr').eq(0).text());
                $('tbody tr').eq(0).remove();
               
                var result = $(this).parent().clone().addClass('bg-light').attr('data-bs-toggle','modal').attr('data-bs-target','#delete');
                $('tbody').prepend(result);
                
                }
               
                return false;
            } 
            else {
                return true;
                
            }
                
            $('html, body').animate({scrollTop: '0'}, 50);
        });
        
        
       
    }
);
});

$('.delete').click(function() {
    console.log('hello');
    $('.bg-light').eq(0).remove();
    $('.modal').modal('hide');
    AreThereAnyResults=false;
});

