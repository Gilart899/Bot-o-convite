/* ==========================================
   SCRIPT.JS
   Convite Digital - Animações e Interações
========================================== */


// ================================
// CHAVE PIX - COPIAR AUTOMATICAMENTE
// ================================

const botaoPix = document.getElementById("copiarPix");
const chavePix = document.getElementById("chavePix");
const mensagemPix = document.getElementById("mensagemPix");

if (botaoPix && chavePix) {

    botaoPix.addEventListener("click", async () => {

        const textoPix = chavePix.textContent.trim();

        try {

            if (navigator.clipboard && window.isSecureContext) {

                await navigator.clipboard.writeText(textoPix);

            } else {

                const area = document.createElement("textarea");
                area.value = textoPix;
                document.body.appendChild(area);
                area.select();
                document.execCommand("copy");
                document.body.removeChild(area);

            }

            if (mensagemPix) {
                mensagemPix.innerHTML = "✅ Chave PIX copiada!";
                mensagemPix.classList.add("mostrar");

                setTimeout(() => {
                    mensagemPix.classList.remove("mostrar");
                }, 3000);
            }

        } catch (erro) {

            alert("Não foi possível copiar automaticamente.\n\nChave PIX:\n" + textoPix);

        }

    });

}
if (botaoPix) {

    botaoPix.addEventListener("click", () => {

        const textoPix = chavePix.innerText;

        navigator.clipboard.writeText(textoPix)
        .then(() => {

            mensagemPix.classList.add("mostrar");

            mensagemPix.innerHTML = "✅ Chave copiada!";

            setTimeout(() => {

                mensagemPix.classList.remove("mostrar");

            },3000);

        })
        .catch(() => {

            mensagemPix.innerHTML = "❌ Não foi possível copiar";

            mensagemPix.classList.add("mostrar");

        });

    });

}



// ================================
// ENTRADA SUAVE DO CARTÃO
// ================================

window.addEventListener("load", () => {

    const cartao = document.querySelector(".cartao");

    if(cartao){

        setTimeout(()=>{

            cartao.classList.add("entrada");

        },300);

    }

});



// ================================
// ANIMAÇÃO DAS ROSAS
// ================================

const rosas = document.querySelectorAll(".rosa");


rosas.forEach((rosa,index)=>{

    rosa.style.animationDelay = `${index * 0.5}s`;

});



// ================================
// ANIMAÇÃO DAS VELAS
// ================================

const velas = document.querySelectorAll(".vela");


velas.forEach((vela,index)=>{

    vela.style.animationDelay = `${index * 0.3}s`;

});



// ================================
// EFEITO DE PARTÍCULAS / BRILHOS
// ================================

function criarBrilho(){

    const brilho = document.createElement("span");

    brilho.classList.add("brilho");

    brilho.style.left = Math.random() * 100 + "%";

    brilho.style.animationDuration =
    (Math.random()*3 + 2) + "s";


    document.body.appendChild(brilho);


    setTimeout(()=>{

        brilho.remove();

    },5000);

}


// cria brilhos automaticamente

setInterval(criarBrilho,800);



// ================================
// EFEITO DE MOVIMENTO SUAVE NO CARTÃO
// ================================

const areaCartao = document.querySelector(".cartao");


if(areaCartao){

areaCartao.addEventListener("mousemove",(e)=>{

    const largura = areaCartao.offsetWidth;
    const altura = areaCartao.offsetHeight;


    const x = (e.offsetX / largura - 0.5) * 10;
    const y = (e.offsetY / altura - 0.5) * 10;


    areaCartao.style.transform =
    `rotateY(${x}deg) rotateX(${-y}deg)`;

});


areaCartao.addEventListener("mouseleave",()=>{

    areaCartao.style.transform =
    "rotateY(0deg) rotateX(0deg)";

});


}



// ================================
// MÚSICA AUTOMÁTICA (OPCIONAL)
// ================================

const musica = document.getElementById("musica");


const iniciarMusica = ()=>{

    if(musica){

        musica.play().catch(()=>{});

    }

};


document.addEventListener(
"click",
iniciarMusica,
{once:true}
);



// ================================
// DATA / CONTAGEM REGRESSIVA
// ================================

const dataEvento = document.querySelector("#dataEvento");


if(dataEvento){

    const data = new Date(dataEvento.dataset.data);

    const atualizar = ()=>{

        const agora = new Date();

        const distancia = data - agora;


        if(distancia <= 0){

            return;

        }


        const dias = Math.floor(
        distancia / (1000*60*60*24)
        );


        const horas = Math.floor(
        (distancia/(1000*60*60))%24
        );


        const minutos = Math.floor(
        (distancia/(1000*60))%60
        );


        const segundos = Math.floor(
        (distancia/1000)%60
        );


        const contador =
        document.querySelector("#contador");


        if(contador){

            contador.innerHTML =
            `${dias} dias ${horas}h ${minutos}m ${segundos}s`;

        }

    };


    setInterval(atualizar,1000);

    atualizar();

}



// ================================
// FINAL
// ================================

console.log(
"🌹 Convite carregado com sucesso!"
);
