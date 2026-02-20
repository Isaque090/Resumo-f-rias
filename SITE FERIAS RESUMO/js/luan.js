 var conta = 0;
 let animacao = true;
        function modoclaro() {
            const bola = document.getElementById('bola')
            const quadro = document.getElementById('quadro')



            const body = document.getElementById('body')

            const h1 = document.getElementById('h1')


            const lazer = document.getElementById('lazer')
            const cor = document.getElementById('cor')
            const estudos = document.getElementById('estudos')
            const header = document.getElementById('header')
            const header1 = document.getElementById('header1')
             const header2 = document.getElementById('header2')

            const linha = document.getElementById('linha')
            const linha1 = document.getElementById('linha1')
            const linha2 = document.getElementById('linha2')
            const linha3 = document.getElementById('linha3')
            const linha4 = document.getElementById('linha4')
            const linha5 = document.getElementById('linha5')
            const voltar = document.getElementById('voltar')
             const habilidade= document.getElementById('habilidade')
           
               const a2= document.getElementById('a2')
                 const modal = document.getElementById('footer')
    const modalbody = document.getElementById('modal-body')
    const modalheader = document.getElementById('modal-header')
    const modalcontent = document.getElementById('modal-content')
    const modalcontent2 = document.getElementById('modal-content2')
     const modalbody2 = document.getElementById('modal-body2')
    const modalheader2 = document.getElementById('modal-header2')
        const modal2 = document.getElementById('footer2')

           const modalcontent3 = document.getElementById('modal-content3')
     const modalbody3 = document.getElementById('modal-body3')
    const modalheader3 = document.getElementById('modal-header3')
        const modal3 = document.getElementById('footer3')






let modo="";
            if (conta === 0) {
               if (animacao) {
      
                
                bola.classList.add("bola-ani-br");
              
                

       
    }
    
modo="claro"
                body.classList.remove("body");
                body.classList.add("a-body");

                h1.classList.remove("h1");
                h1.classList.add("h1-br");
 
  a2.classList.add("a-br");

  
        modal.classList.remove("modal-footer-a")
        modal.classList.add("modal-footer-a-br");

        modalbody.classList.remove("modal-body-a")
        modalbody.classList.add("modal-body-br");


        modalheader.classList.remove("modal-header-a")
        modalheader.classList.add("modal-header-br");

        modalcontent.classList.remove("modal-content-a")
        modalcontent.classList.add("modal-content-br");

         modalcontent2.classList.remove("modal-content-a")
        modalcontent2.classList.add("modal-content-br");

         modalbody2.classList.remove("modal-body-a")
        modalbody2.classList.add("modal-body-br");


        modalheader2.classList.remove("modal-header-a")
        modalheader2.classList.add("modal-header-br");

         modal2.classList.remove("modal-footer-a")
        modal2.classList.add("modal-footer-a-br");






              modalcontent3.classList.remove("modal-content-a")
        modalcontent3.classList.add("modal-content-br");

         modalbody3.classList.remove("modal-body-a")
        modalbody3.classList.add("modal-body-br");


        modalheader3.classList.remove("modal-header-a")
        modalheader3.classList.add("modal-header-br");

         modal3.classList.remove("modal-footer-a")
        modal3.classList.add("modal-footer-a-br");

        


                bola.classList.remove("bola-teste")
                bola.classList.add("bola");


                bola.classList.remove("bolaa");
                bola.classList.add("bolaa-br");
           

                         quadro.classList.remove("quadro");
                quadro.classList.add("quadro-br");

                lazer.classList.remove("lazer");
                lazer.classList.add("lazer-br");

                cor.classList.remove("cor");
                cor.classList.add("cor-br");


                estudos.classList.remove("estudos");
                estudos.classList.add("estudos-br");

                header.classList.remove("header");
                header.classList.add("header-br");

                header1.classList.remove("header");
                header1.classList.add("header-br");

                header2.classList.remove("header");
                header2.classList.add("header-br");

                
                linha.classList.remove("linha");
                linha1.classList.remove("linha");
                linha2.classList.remove("linha");
                linha3.classList.remove("linha");
                linha4.classList.remove("linha");
                linha5.classList.remove("linha");

                linha.classList.add("linha-br");
                linha1.classList.add("linha-br");
                linha2.classList.add("linha-br");
                linha3.classList.add("linha-br");
                  linha4.classList.add("linha-br");
                linha5.classList.add("linha-br");

                voltar.classList.remove("voltar");
                voltar.classList.add("voltar-br");

 habilidade.classList.remove("habilidade");
                habilidade.classList.add("habilidade-br");
                conta++;
            } else {
               modo="escuro"
                body.classList.remove("a-body");
                body.classList.add("body");

  h1.classList.remove("h1-br");
                h1.classList.add("h1");




                bola.classList.remove("bola");
                bola.classList.add("bola-br");

                bola.classList.add("bola-teste");


                bola.classList.remove("bolaa-br");
                bola.classList.add("bolaa");

                quadro.classList.remove("quadro-br");
                quadro.classList.add("quadro");

                lazer.classList.remove("lazer-br");
                lazer.classList.add("lazer");

                cor.classList.remove("cor-br");
                cor.classList.add("cor");

              
  a2.classList.remove("a-br");
                estudos.classList.remove("estudos-br");
                estudos.classList.add("estudos");

                header.classList.remove("header-br");
                header.classList.add("header");

                header1.classList.remove("header-br");
                header1.classList.add("header");

                 header2.classList.remove("header-br");
                header2.classList.add("header");


                linha.classList.remove("linha-br");
                linha1.classList.remove("linha-br");
                linha2.classList.remove("linha-br");
                linha3.classList.remove("linha-br");
                linha4.classList.remove("linha-br");
                linha5.classList.remove("linha-br");

                linha.classList.add("linha");
                linha1.classList.add("linha");
                linha2.classList.add("linha");
                linha3.classList.add("linha");
 linha4.classList.add("linha");
                linha5.classList.add("linha");

                voltar.classList.remove("voltar-br");
                voltar.classList.add("voltar");
                  bola.classList.add("bola-ani");

                   habilidade.classList.remove("habilidade-br");
                habilidade.classList.add("habilidade");

                 modalbody.classList.remove("modal-body-br")
        modalbody.classList.add("modal-body-a");


        modalcontent.classList.remove("modal-content-br")
        modalcontent.classList.add("modal-content-a");

         modalheader.classList.remove("modal-header-br")
                   modalheader.classList.add("modal-header-a");




     

         modalcontent2.classList.remove("modal-content-br")
        modalcontent2.classList.add("modal-content-a");

         modalbody2.classList.remove("modal-body-br")
        modalbody2.classList.add("modal-body-a");


        modalheader2.classList.remove("modal-header-br")
        modalheader2.classList.add("modal-header-a");

         modal2.classList.remove("modal-footer-a-br")
        modal2.classList.add("modal-footer-a");






              modalcontent3.classList.remove("modal-content-br")
        modalcontent3.classList.add("modal-content-a");

         modalbody3.classList.remove("modal-body-br")
        modalbody3.classList.add("modal-body-a");


        modalheader3.classList.remove("modal-header-br")
        modalheader3.classList.add("modal-header-a");

         modal3.classList.remove("modal-footer-a-br")
        modal3.classList.add("modal-footer-a");

        

                conta--;
            }

  localStorage.setItem("modo",modo)
        }

        window.addEventListener('DOMContentLoaded',() =>{

            let modosalvo=localStorage.getItem('modo')

            if(modosalvo==="claro"){
                conta=0;
                  animacao = false;
                modoclaro();

            }

            ScrollReveal().reveal('#habilidade', {
            origin: 'left',
            distance: '100%'
            , duration: 1500,

        });
        ScrollReveal().reveal('#estudos', {
            origin: 'left',
            distance: '100%'
            , duration: 2000,

        });
        ScrollReveal().reveal('#lazer', {
            origin: 'left',
            distance: '100%'
            , duration: 2500,

        });
         ScrollReveal().reveal('#h1', {
          duration: 7000,

        });
        });

     