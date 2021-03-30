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

            var realTd = $(this).text();


            var boxVal = searchBox.val().toLowerCase();

            
            if (realTd == boxVal) {
                /* $('td').hide(0);
                $('tbody > tr > th').hide(0);
                
                
                $(this).parent().children().show(0); */
                $('html').scrollTop(0);
             

                if (AreThereAnyResults == false) {
                var result = $(this).parent().clone().addClass('bg-light');
                $('tbody').prepend(result);
                AreThereAnyResults = true;
                console.log($('.bg-light').eq(0).text());
                $('tbody tr').eq(0).click(function() {

        

                    console.log('hi');
                    $(this).remove();
                    AreThereAnyResults = false;
                });
      
                } else{
                $('tbody tr').eq(0).remove();

                var result = $(this).parent().clone().addClass('bg-light');
                $('tbody').prepend(result);

                $('tbody tr').eq(0).click(function() {

                    console.log('hi');
                    $(this).remove();
                    AreThereAnyResults = false;
                });

                }
               
                return false;
            } 
            else {
                return true;
                
            }
        });
        

       
    }
);
});


