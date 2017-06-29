    $.get( "/layout/top.html", function( top ) {
         $.get( "/layout/bottom.html", function( bottom ) {
             $.get( "page.html", function( page ) {
                    r = top + page + bottom;
                    document.write(r);
             });
        });
    });