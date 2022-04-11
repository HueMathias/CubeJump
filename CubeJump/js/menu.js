function Personnaliser(){
    $("#menu").hide();
    $("#jeu").hide();
    $("#perdu").hide();
    $("#infos").hide();
    $("#personnaliser").show();
}

function SwitchPerso(cpt){        
    var qte = couleursPerso.length;
    $("#persoChoix").removeClass(couleursPerso[cptPerso]);

    switch (cpt){
        case 1:
            if (cptPerso == 0)
                cptPerso = qte;
            else 
                cptPerso--;
            break;
        case 2:
            if (cptPerso == qte)
                cptPerso = 0;
            else
                cptPerso++;
    }    
    $("#persoChoix").addClass(couleursPerso[cptPerso]);    
}

function SwitchEnnemi(cpt){        
    var qte = couleursEnnemi.length;
    $("#ennemiChoix").removeClass(couleursEnnemi[cptEnnemi]);

    switch (cpt){
        case 1:
            if (cptEnnemi == 0)
                cptEnnemi = qte;
            else 
                cptEnnemi--;
            break;
        case 2:
            if (cptEnnemi == qte)
                cptEnnemi = 0;
            else
                cptEnnemi++;
    }    
    $("#ennemiChoix").addClass(couleursEnnemi[cptEnnemi]);    
}

function ValiderPerso(){
    $("#personnaliser").hide();

    if (perdu)
        $("#perdu").show();        
    else
        $("#menu").show();       
}

function Retour(){
    $("#perdu").hide();
    $("#jeu").hide();
    $("#infos").hide();
    $("#tableauScores").hide();

    $("#menu").show();    
}

function Infos(){
    $("#menu").hide();
    $("#jeu").hide();
    $("#perdu").hide();
    $("#personnaliser").hide();
    $("#infos").show();    
}

function AfficherScores(){
    $("#menu").hide();
    $("#jeu").hide();
    $("#perdu").hide();
    $("#personnaliser").hide();
    $("#infos").hide();    
    
    $("#tableauScores").show();

    document.getElementById("score1").value = score1;
    document.getElementById("score2").value = score2;
    document.getElementById("score3").value = score3;
}