dineroCofla = prompt("cuanto dinero tienes Cofla?")
dineroRoberto = prompt("cuanto dinero tienes Roberto?")
dineroPedro = prompt("cuanto dinero tienes Pedro?")

heladoAgua = 0.6;
heladoCrema = 1;
heladix = 1.6;
heladovich = 1.7;
helardo =1.8;
heladoConfites = 2.9;
pote =2.9;


if (dineroCofla >= heladoAgua && dineroCofla < heladoCrema){
  alert("Cofla comprate: helado de Agua: cuesta $" + heladoAgua + "\n"+
  "y su cambio es $" + (dineroCofla - heladoAgua))
} 
else if (dineroCofla >= heladoCrema && dineroCofla < heladix){
    alert("Cofla comprate: helado de Crema: cuesta $" + heladoCrema + "\n"+
    "y su cambio es $" + (dineroCofla - heladoCrema))
}
else if (dineroCofla >= heladix && dineroCofla < heladovich){
    alert("Cofla comprate: heladix: cuesta $" + heladix + "\n"+
    "y su cambio es $" + (dineroCofla - heladix))
}
else if (dineroCofla >= heladovich && dineroCofla < helardo){
    alert("Cofla comprate: heladovich: cuesta $ " + heladovich + "\n"+
    "y su cambio es $" + (dineroCofla - heladovich))
}
else if (dineroCofla >= helardo && dineroCofla < pote){
    alert("Cofla comprate: helardo: cuesta $" + helardo + "\n"+
    "y su cambio es $" + (dineroCofla - helardo))
}
else if (dineroCofla >= pote ){
    alert(" Cofla comprate: Potecito de Helado Con Confites cuesta $" + heladoConfites 
    +"\n" + "o Pote de 1/4 KG: cuesta $" + pote 
    +"\n" + "y te sobra: " + (dineroCofla - pote));
    
} else{ alert("Cofla: no tienes sufiente dinero");
 }

 
if (dineroRoberto >= heladoAgua && dineroRoberto < heladoCrema){
    alert("Roberto comprate: helado de Agua:cuesta $" + heladoAgua)
  }
else if (dineroRoberto >= heladoCrema && dineroRoberto < heladix){
      alert("Roberto comprate: helado de Crema: cuesta $" + heladoCrema )
  }
 else if (dineroRoberto >= heladix && dineroRoberto < heladovich){
      alert("Roberto comprate: heladix: cuesta $" + heladix )
  }
else if (dineroRoberto >= heladovich && dineroRoberto < helardo){
      alert("Roberto comprate: heladovich: cuesta $" + heladovich )
  }
else  if (dineroRoberto >= helardo && dineroRoberto < pote){
      alert("Roberto comprate: helardo: cuesta $" + helardo )
  }
else  if (dineroRoberto >= pote ){
      alert(" Roberto comprate: Potecito de Helado Con Confites cuesta $" + heladoConfites 
      +"\n" + " o Pote de 1/4 KG cuesta $" + pote );
      
  } else{ alert("Roberto: no tienes sufiente dinero");
   }


   if (dineroPedro >= heladoAgua && dineroPedro < heladoCrema){
    alert("Pedro comprate: helado de Agua: cuesta $" + heladoAgua)
  }
else if (dineroPedro >= heladoCrema && dineroPedro < heladix){
      alert("Pedro comprate: helado de Crema: cuesta $" + heladoCrema )
  }
else  if (dineroPedro >= heladix && dineroPedro < heladovich){
      alert("Pedro comprate: heladix:cuesta $ " + heladix )
  }
 else if (dineroPedro>= heladovich && dineroPedro < helardo){
      alert("Pedro comprate: heladovich: cuesta $" + heladovich )
  }
else  if (dineroPedro >= helardo && dineroPedro < pote){
      alert("Pedro comprate: helardo: cuesta $" + helardo )
  }
else  if (dineroPedro >= pote ){
      alert(" Pedro comprate: Potecito de Helado Con Confites cuesta $" + heladoConfites 
      +"\n" + " o Pote de 1/4 KG: cuesta $" + pote );
      
  } else{ alert("Pedro: no tienes sufiente dinero");
   }