$('#myInput').keyup(function(){
    var filter = $(this).val().toUpperCase();
    console.log(filter);
    var item = $('.listview a');

    for(var i=0; i<item.length; i++){
        var a = item[i];

        var b = a.innerHTML.toUpperCase().indexOf(filter);
        console.log(b);

        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            item[i].style.display = "";

        }else{
            item[i].style.display = "none";

        }
    }
})