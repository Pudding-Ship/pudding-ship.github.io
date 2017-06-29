    $.get( "/layout/top.html", function( top ) {
         $.get( "/layout/bottom.html", function( bottom ) {
             body = $("#page").html();
             if (typeof body === 'undefined'){
                body = '';
             }
          r = top + body + bottom;
          document.write(r);
        });
    });