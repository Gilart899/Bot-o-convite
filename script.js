function copiarPix(){

    let chave=document.getElementById("pix").value;

    navigator.clipboard.writeText(chave);

    document.getElementById("mensagem").innerHTML=
    "✅ Chave Pix copiada com sucesso!";

    setTimeout(function(){

        document.getElementById("mensagem").innerHTML="";

    },3000);

}
