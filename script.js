/* ==========================================
   SCRIPT.JS
   Convite Digital
========================================== */

// ================================
// BOTÃO COPIAR PIX
// ================================

const botaoPix = document.getElementById("copiarPix");
const chavePix = document.getElementById("chavePix");
const mensagemPix = document.getElementById("mensagemPix");

if (botaoPix && chavePix) {

    botaoPix.addEventListener("click", async () => {

        const texto = chavePix.value;

        try {

            if (navigator.clipboard && window.isSecureContext) {

                await navigator.clipboard.writeText(texto);

            } else {

                const area = document.createElement("textarea");
                area.value = texto;
                document.body.appendChild(area);
                area.select();
                document.execCommand("copy");
                document.body.removeChild(area);

            }

            mensagemPix.textContent = "✅ Chave PIX copiada com sucesso!";

        } catch (erro) {

            mensagemPix.textContent = "❌ Não foi possível copiar.";

        }

        setTimeout(() => {

            mensagemPix.textContent = "";

        }, 3000);

    });

}

// ================================
// ENTRADA DO CARTÃO
// ================================

window.addEventListener("load", () => {

    const cartao = document.querySelector(".moldura");

    if (cartao) {

        cartao.style.opacity = "0";
        cartao.style.transform = "translateY(30px)";

        setTimeout(() => {

            cartao.style.transition = "all .8s ease";
            cartao.style.opacity = "1";
            cartao.style.transform = "translateY(0)";

        }, 200);

    }

});

// ================================
// BRIL
