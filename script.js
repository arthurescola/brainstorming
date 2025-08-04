const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está ao lado de uma linha de um bonde com uma alavanca, se você a puxar, o bonde irá trocar de trajetório. No trilho em que o bonde está indo, está 5 desconhecidos presos no trilho. No segundo trilho, está o seu melhor amigo também preso no trilho. O que você faz?",
        alternativas: [
            {
                texto: "Puxa a alavanca, salvando as 5 pessoas desconhecidas.",
                afirmacao: "...preferiu sacrificar o seu melhor amigo para salvar 5 desconhecidos, "
            },
            {
                texto: "Não faz nada, salvando o seu melhor amigo.",
                afirmacao: "...preferiu sacrificar 5 desconhecidos para salvar o seu melhor amigo, "
            }
        ]
    },
    {
        enunciado: "Na mesma situação. Você encontra uma família no trilho do bonde, e no outro trilho, uma familia de cachorros. O que você faz?",
        alternativas: [
            {
                texto: "Puxa a alavanca, salvando a família humana.",
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
                afirmacao: "preferiu salvar 1 animal doméstico sobre vários animais marinhos, "
            },
            {
                texto: "Não faz nada, salvando os camarões.",
                afirmacao: "preferiu salvar vários animais marinhos sobre 1 animal doméstico, "
            }
        ]
    },
    {
        enunciado: "No primeiro trilho está 5 pessoas desconhecidas, e no segundo trilho está um milionário, que diz que irá te pagar R$100.000 para não puxar a alavanca. O que você faz?",
        alternativas: [
            {
                texto: "Puxa a alavanca, salvando as 5 pessoas e recusando a oferta.",
                afirmacao: "ignorou um suborno,"
            },
            {
                texto: "Não faz nada, salvando o milionário.",
                afirmacao: "aceitou um suborno para matar 5 pessoas,"
            }
        ]
    },
    {
        enunciado: "Nos primeiro trilho, você observa um bebê, que no futuro irá crescer para ser um cientista e irá criar a cura para o câncer, e no outro trilho, outro bebê que irá crescer um presidente que criará várias guerras mundiais. Mas uma multidão está olhando para você, e não sabem o futuro dos bebês. O que você faz?",
        alternativas: [
            {
                texto: "Puxa a alavanca, salvando o mundo do câncer, mas sendo visto como um assassino..",
                afirmacao: "sacrificou a própria imagem para salvar o mundo."
            },
            {
                texto: "Não faz nada, salvando o futuro ditador.",
                afirmacao: "priorizou a própria imagem sobre salvar o mundo."
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
    caixaPerguntas.textContent = "No problema do Bonde, você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();