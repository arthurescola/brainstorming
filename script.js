const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está ao lado de uma linha de um bonde com uma alavanca, se você a puxar, o bonde irá trocar de trajetório. No trilho em que o bonde está indo, está o seu melhor amigo amarrado. No segundo trilho, está 5 pessoas desconhecidas amarradas. O que você faz?",
        alternativas: [
            {
                texto: "Puxa a alavanca, salvando seu melhor amigo.",
                afirmacao: "...você preferiu sacrificar 5 desconhecidos para salvar seu amigo, "
            },
            {
                texto: "Não faz nada, salvando as 5 pessoas desconhecidas.",
                afirmacao: "...você prefiriu sacrificar seu melhor amigo para salvar 5 pessoas que você não conhece, "
            }
        ]
    },
    {
        enunciado: "Na mesma situação. Você encontra uma família no trilho do bonde, e no outro trilho, uma familia de cachorros. O que você faz?",
        alternativas: [
            {
                texto: "Puxa a alavanca, salvando a família.",
                afirmacao: "preferiu salvar humanos sobre animais, "
            },
            {
                texto: "Não faz nada, salvando a família de cachorros.",
                afirmacao: "preferiu salvar animais sobre humanos, "
            }
        ]
    },
    {
        enunciado: "No mesmo problema. Você encontra um gato no trilho do bonde, e no segundo trilho, 5 milhões de camarões. O que você faz?",
        alternativas: [
            {
                texto: "Puxa a alavanca, salvando o gato.",
                afirmacao: "preferiu salvar 1 animal doméstico sobre 5 milhões animais marinhos, "
            },
            {
                texto: "Não faz nada, salvando os camarões.",
                afirmacao: "preferiu salvar 5 milhões animais marinhos sobre 1 animal doméstico, "
            }
        ]
    },
    {
        enunciado: "Nos primeiro trilho, você observa um bebê, que no futuro irá crescer para ser um cientista e irá criar a cura para o câncer, e no outro trilho, outro bebê que irá crescer um presidente que criará várias guerras mundiais. Mas uma multidão está olhando para você, e não sabem o futuro dos bebês. O que você faz?",
        alternativas: [
            {
                texto: "Puxa a alavanca, salvando o mundo do câncer, mas sendo visto como um assassino.",
                afirmacao: "afirmação"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No problema do Bonde...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();