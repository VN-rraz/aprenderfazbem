function teste(){ //tiraFoto()
    alert("Fique parado e aguarde um momento sua foto está sendo tirada!")
   mostraFoto();
}

function mostraFoto(){
var anchor = document.createElement('a');
anchor.href = "https://img.meutimao.com.br/_upload/forumtopico/2015/09/19/macaco-dando-lingua-50e98.jpg";
anchor.target = '_blank';
anchor.download = "macaco";
anchor.click();
}