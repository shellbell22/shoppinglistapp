// $(document).ready(function() {

/* Adds to list */
$('#addbutton').click(function(){
    var text = $('#inputName').val();
    if(text.length){
        $('<li />', {html: text}).appendTo('ul.missionlist')
    }
    $('#inputName').val('');
});


/* complete button */

/*delete button*/

/* extra:

Add Filter
Search Box
List Frequent Items
Web Storage API

*/

// )};
