function delay(time){
    return new Promise(resolve =>- setTimeout(resolve, time));
}

$(document).keydown(async function(e){
    if (saut)
        return;

    //Haut
    if (e.which == 38){
        $("#perso").css("margin-top", "-71px");                      
    } 
    //Bas     
    else if(e.which == 40){
        $("#perso").css("margin-top", "0px");            
    }  
    //Saut
    else if(e.which == 32){
        var txtMargin = $("#perso").css("margin-top");
        var nextMargin = -122;
        saut = true;        

        //Haut
        if (txtMargin == "-71px")
            nextMargin = -71;
        //Bas
        else if (txtMargin == "0px")
            nextMargin = 0;

        //Animation saut quand on est en haut
        if (txtMargin == "-71px"){
            while(nextMargin != -211){
                await delay(vitesseSaut);
                nextMargin -= 4;
                $("#perso").css("margin-top", nextMargin + "px");
            }          

            while (nextMargin != -71){
                await delay(vitesseSaut);
                nextMargin += 2;
                $("#perso").css("margin-top", nextMargin + "px");
                if (nextMargin == 1)
                    $("#perso").css("margin-top", "0px");
            }
            saut = false;                           
        }
        
        //Animation saut quand on est en bas
        else{
            while(nextMargin != 140){
                await delay(vitesseSaut);
                nextMargin += 4;
                $("#perso").css("margin-top", nextMargin + "px");
            }          

            while (nextMargin != 0){
                await delay(vitesseSaut);
                nextMargin -= 4;
                $("#perso").css("margin-top", nextMargin + "px");
            }
            saut = false; 
        }
            
    }
});




