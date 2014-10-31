$('#navBar').live('pageshow',function(event){
    var serviceURL = 'service1.asmx/GetLankanList';

    $.ajax({            
            type: "POST",
            url: serviceURL,
            data: param="",
            contentType:"application/json; charset=utf-8",
            dataType: "json",
            success: successFunc,
            error: errorFunc
    });

    function successFunc(data, status){
        // parse it as object
        var lankanListArray = JSON.parse(data.d);

        // creating html string
        var listString = '<ul data-role="listview" id="customerList">';

        // running a loop
        $.each(lankanListArray, function(index,value){
         listString += '<li data-filtertext="demos homepage" data-icon="home"><a href=".././" data-ajax="false">Home</a></li>';
         listString += '<li><a href="#" >'+this.Name+'</a></li>';
        });
        listString +='</ul>';



        //appending to the div
        $('#LankanLists').html(listString);

        // refreshing the list to apply styles
        $('#LankanLists ul').listview();
    }

    function errorFunc(){
        alert('error');
    }
});