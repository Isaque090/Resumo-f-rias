 var conta = 0;
  let animacao = true;
    function modoclaro() {
      const bola = document.getElementById('bola')
      const quadro = document.getElementById('quadro')


       

      const body = document.getElementById('body')

      const h1 = document.getElementById('h1')
      const principal = document.getElementById('principal')
      const Selecione = document.getElementById('Selecione')
      const isaq = document.getElementById('isaq')
      const luan = document.getElementById('luan')
      const isaqtext = document.getElementById('isaq-text')
      const luantext = document.getElementById('luan-text')


let modo=""

      if (conta === 0) {
            if (animacao) {
      
                
                bola.classList.add("bola-ani-br");
              
                

       
    }
 modo="claro"



        body.classList.remove("body");
        body.classList.add("a-body");

        h1.classList.remove("h1");
        h1.classList.add("h1-br");

        principal.classList.remove("principal");
        principal.classList.add("principal-br");

        Selecione.classList.remove("selecione");
        Selecione.classList.add("selecione-br");

        isaq.classList.remove("estilo");
        isaq.classList.add("estilo-br");


        luan.classList.remove("estilo");
        luan.classList.add("estilo-br");


        luantext.classList.remove("luan-text")
        luantext.classList.add("luan-text-br")

        isaqtext.classList.remove("isaq-text")
        isaqtext.classList.add("isaq-text-br")
        bola.classList.remove("bola-teste")
        bola.classList.add("bola");


        bola.classList.remove("bolaa");
        bola.classList.add("bolaa-br");

        quadro.classList.remove("quadro");
        quadro.classList.add("quadro-br");
        conta++;
      } else {
        modo="preto"
        body.classList.remove("a-body");
        body.classList.add("body");

        h1.classList.remove("h1-br");
        h1.classList.add("h1");

        principal.classList.remove("principal-br");
        principal.classList.add("principal");

        Selecione.classList.remove("selecione-br");
        Selecione.classList.add("selecione");

        isaq.classList.remove("estilo-br");
        isaq.classList.add("estilo");


        luan.classList.remove("estilo-br");
        luan.classList.add("estilo");

        luantext.classList.remove("luan-text-br")
        luantext.classList.add("luan-text")

        isaqtext.classList.remove("isaq-text-br")
        isaqtext.classList.add("isaq-text")

        bola.classList.remove("bola");
        bola.classList.add("bola-br");

        bola.classList.add("bola-teste");


        bola.classList.remove("bolaa-br");
        bola.classList.add("bolaa");

        quadro.classList.remove("quadro-br");
        quadro.classList.add("quadro");
        
bola.classList.add("bola-ani");
        conta--;
      }
localStorage.setItem("modo", modo);
    }
    window.addEventListener('DOMContentLoaded',() =>{

            let modosalvo=localStorage.getItem('modo')

            if(modosalvo==="claro"){
                conta=0;
                  animacao = false;
                modoclaro();

            }

         
        });