    jQuery.getJSON('http://starblast.io/simstatus.json', function (data) {  
        var socket = new eio.Socket('45.32.193.42:3060');
      socket.on('open', function(){
        socket.send("ping");
        socket.on("message",function(data){
            console.log(data);
            switch (data.name) {
                case "welcome":
                    return console.log(e.data);
                case "entered":
                    return console.log(e.data);
                case "player_name":
                    return console.log(e.data);
                case "modemsg":
                    return console.log(e.data);
            }
            
        });
      });
    
    });