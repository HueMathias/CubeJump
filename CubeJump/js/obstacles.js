function Spawn(){    
    if (perdu){
        //Corrige bug plusieurs ennemis spawns d'un coup
        clearInterval(active);
        clearInterval(activeBas);

        //Reset
        speed = 2000;
        vitesseObjet = 20;
        vitesseSaut = 10;
        speedBas = 2800;
        vitesseObjetBas = 20;
        score = 0;
    }        

    document.getElementById("score").value = score;
    perdu = false;
    //Gère class perso + ennemis
    $("#perso").removeClass();
    $("#perso").addClass(couleursPerso[cptPerso]);    

    //Affichage
    $("#menu").hide();
    $("#perdu").hide();    
    $("#jeu").show();   

    //Démarre le spawn d'ennemis en haut
    active = setInterval(function(){
        if (perdu) 
            return;
           
        var id = CreateObstacle("haut");
        Move(id);           
    }, speed);

    activeBas = setInterval(function(){
        if (perdu)
            return;
        var id = CreateObstacle("bas");
        Move(id);           
    }, speedBas);
}


function CreateObstacle(pos){    
    var element;
    if (pos == "haut"){
        var element = document.createElement("div");
        element.id = "carre" + n;                        
        document.body.appendChild(element);
        document.getElementById("jeu").appendChild(element);
        element.classList = "carre objet " + couleursEnnemi[cptEnnemi];
    }
    else{
        var element = document.createElement("div");
        element.id = "carreBas" + n;                        
        document.body.appendChild(element);
        document.getElementById("jeu").appendChild(element);
        element.classList = "carreBas objet " + couleursEnnemi[cptEnnemi];
    }
    n++;
    return element.id;
}


async function Move(id){
    var margin = $("#" + id).css("margin-left").replace("px", "");
    margin = parseInt(margin);

    while (margin >= -100){
        if (perdu){
            //FIN DE PARTIE
            $("#jeu").hide();
            $("#perdu").show();
            document.getElementById(id).remove();
            document.getElementById("scorePerdu").innerHTML = "Votre score est de " + score + " points !";   
        }            

        if (id.indexOf("carreBas") != -1)
            await delay(vitesseObjetBas)
        else
            await delay(vitesseObjet);

        margin -= 10;
        $("#" + id).css("margin-left", margin + "px"); 
        Collision(id);               
    }
    //Gestion du score
    if (id.indexOf("carreBas") != -1)
        score += 200;
    else
        score += 100;
    document.getElementById("score").value = score;

    document.getElementById(id).remove();
}

function Collision(id){
    var idG = $("#" + id).offset().left-8;
    var idD = $("#" + id).offset().left + $("#" + id).width()+8;
    var idH = $("#" + id).offset().top-8;
    var idB = $("#" + id).offset().top + $("#" + id).height()+8;

    var pG = $("#perso").offset().left-8;
    var pD = $("#perso").offset().left + $("#perso").width()+8;
    var pH = $("#perso").offset().top-8;
    var pB = $("#perso").offset().top + $("#perso").height()+8;

    if (((pD <= idD && pD >= idG) || (pG >= idG && pG <= idD)) && pB >= idH && pH <= idB)
        perdu = true;
}

function MeilleursScores(){
    //Meilleurs scores
    if (score2 == 0 && score3 != 0 && score > score3){
        localStorage.setItem('score2', score);
    }
    else if (score > score3 && (score < score2 || score2 == 0)){
        localStorage.removeItem('score3');  
        localStorage.setItem('score3', score);
    }
    else if (score1 == 0 && score > score2){
        localStorage.setItem('score1', score);
    }
    else if (score > score2 && (score < score1 || score1 == 0)){
        localStorage.removeItem('score2');
        localStorage.setItem('score2', score);
    }
    else if (score > score1){
        localStorage.removeItem('score1');
        localStorage.setItem('score1', score);
    }

    score3 = localStorage.getItem('score3');
    score2 = localStorage.getItem('score2');
    score1 = localStorage.getItem('score1'); 
}