function initTab() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo')
    //function para ativar um classe porem antes ela faz o loop removendo todas as classes
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo')
    }
    //quando for preciso passar um parans dentro do addEventListener que estiver dentro do forEach sera necessario declarar uma nova function nos parans do addEventListener
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}
initTab()

function initAccordion() {
  const accordionPerguntas = document.querySelectorAll('.js-accordion dt')
  if (accordionPerguntas.length) {
    const activeClass = 'ativo'
    accordionPerguntas[0].classList.add(activeClass)
    accordionPerguntas[0].nextElementSibling.classList.add(activeClass)

    function ativeAccordion(evente) {
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }

    accordionPerguntas.forEach((pergunta) => {
      pergunta.addEventListener('click', ativeAccordion)
    })
  }
}
initAccordion()

function scrollSuabe() {
  const linksMenu = document.querySelectorAll('.js-menu a[href^="#"]')

  if (linksMenu.length) {
    function scrollToSection(event) {
      event.preventDefault()
      //getAttribute pega apenas o conteudo do que eu estou clicando
      const href = this.getAttribute('href')
      const section = document.querySelector(href)
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      /*//fazendo o scroll atraves da verificação do item ate o topo
      const topo = section.offsetTop
      //comando para fazer o scroll
      window.scrollTo({
        top: topo,
        behavior: 'smooth',
      })*/
    }

    linksMenu.forEach((link) => {
      link.addEventListener('click', scrollToSection)
    })
  }
}
scrollSuabe()

function initAnimacaoScroll() {
  const section = document.querySelectorAll('.js-scroll')
  if (section.length) {
    const metadeTela = window.innerWidth * 0.8

    function animaScroll() {
      section.forEach((section) => {
        const topo = section.getBoundingClientRect().top
        const metaTopoIgualZero = (topo - metadeTela) < 0
        if (metaTopoIgualZero) {
          section.classList.add('ativo')
        } else {
          section.classList.remove('ativo')
        }
      })
    }
    animaScroll()

    window.addEventListener('scroll', animaScroll)
  }
}
initAnimacaoScroll()