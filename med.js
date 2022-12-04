



function checkName(){
    
    
    
   if (f.name.value==""){
    alert("champ non et prenom est obligatoire");
    return false;
   }
    if(f.maill.value==""){
    alert("champ email est obligatoire");
    return false;
   }
    if(f.Project24.value==""){
    alert("champ Project est obligatoire");
    return false;

  }
    if(f.message24.value==""){
    alert("champ message est obligatoire");
    return false;

    }
    if( (f.maill.value.indexOf('@')==-1)||(f.maill.value.indexOf('.')==-1) ){
    alert('verifier que votre mail est correct');
    return false;
   }
}
