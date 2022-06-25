/*=============== Filtros das Abas ===============*/
/*const tabs = document.querySelectorAll('button[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => {  
            tc.classList.remove('filtros_ativo')
        })
        target.classList.add('filtros_ativo')

        tabs.forEach(t => { 
            t.classList.remove('filtros-aba-ativo')
        })
        tab.classList.add('filtros-aba-ativo')
    })
})
*/

/*=============== TEMA DARK E LIGHT ===============*/
const temaBtn = document.getElementById('tema-botao')
const temaDark = 'tema-dark'
const iconeTema = 'ri-sun-line'

// Tópico selecionado anteriormente (se o usuário selecionou)
const temaSelecionado = localStorage.getItem('tema-selecionado')
const iconeSelecionado = localStorage.getItem('icone-selecionado')

// Obtemos o tema atual que a interface possui validando a classe tema-dark
const getCurrentTheme = () => document.body.classList.contains(temaDark) ? 'dark' : 'light'
const getCurrentIcon = () => temaBtn.classList.contains(iconeTema) ? 'ri-moon-line' : 'ri-sun-line'

// validar se o usuário já escolheu um tópico
if (temaSelecionado) {
    // Se a validação for cumprida, pergunta qual foi o problema para saber se ativamos ou desativamos o escuro
    document.body.classList[temaSelecionado === 'dark' ? 'add' : 'remove'](temaDark)
    temaBtn.classList[iconeSelecionado === 'ri-moon-line' ? 'add' : 'remove'](iconeTema)
}

// Ativa/desativa o tema manualmente com o botão
temaBtn.addEventListener('click', () => {
    // Adiciona ou remove o tema escuro / ícone
    document.body.classList.toggle(temaDark)
    temaBtn.classList.toggle(iconeTema)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('tema-selecionado', getCurrentTheme())
    localStorage.setItem('icone-selecionado', getCurrentIcon())
})

/*=============== ANIMAÇÃO DO SCROLL REVEAL  ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.perfil_borda`)
sr.reveal(`.perfil_nome`, { delay: 500 })
sr.reveal(`.perfil_descricao`, { delay: 600 })
sr.reveal(`.perfil_social`, { delay: 700 })
sr.reveal(`.perfil_info_grupo`, { interval: 100, delay: 700 })
sr.reveal(`.perfil_botao`, { delay: 800 })
sr.reveal(`.filtros_conteudo`, { delay: 900 })
sr.reveal(`.filtros`, { delay: 1000 })