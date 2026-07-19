/* ==========================================
   CONFIGURAÇÃO DO CONVITE
========================================== */


const convite = {


    // Nome principal do convite

    nome:
    "Nome da Aniversariante",



    // Data e horário do evento

    data:
    "31/12/2026",

    horario:
    "19:00",



    // Local

    local:
    "Coloque aqui o endereço do evento",



    // Chave Pix

    pix:
    "coloque-sua-chave-pix",



    // WhatsApp para confirmação

    whatsapp:
    "5579999999999",



    // Mensagem automática do WhatsApp

    mensagem:

    "Olá! Gostaria de confirmar minha presença no evento."

};






// ================================
// APLICAR CONFIGURAÇÕES
// ================================


window.addEventListener("DOMContentLoaded",()=>{


    const nome =
    document.querySelector("#nomeEvento");


    if(nome){

        nome.innerHTML =
        convite.nome;

    }



    const local =
    document.querySelector("#localEvento");


    if(local){

        local.innerHTML =
        convite.local;

    }




    const pix =
    document.querySelector("#chavePix");


    if(pix){

        pix.innerHTML =
        convite.pix;

    }




    const botaoWhatsapp =
    document.querySelector(".whatsapp");


    if(botaoWhatsapp){


        botaoWhatsapp.href =

        "https://wa.me/" +

        convite.whatsapp +

        "?text=" +

        encodeURIComponent(
        convite.mensagem
        );


    }



});
