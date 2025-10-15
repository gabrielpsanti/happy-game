var form = document.getElementById('formSugestao');
var tabela = document.getElementById('tabelaSugestoes').getElementsByTagName('tbody')[0];
var inputNome = document.getElementById('jogoNome');
var inputAno = document.getElementById('anoLancamento');
var inputImagem = document.getElementById('imagemJogo');
var inputMotivo = document.getElementById('motivo');

form.onsubmit = function (event) {
    event.preventDefault();

    var nome = inputNome.value.trim();
    var ano = inputAno.value.trim();
    var motivo = inputMotivo.value.trim();
    var arquivo = inputImagem.files[0];

    if (nome === "" || ano === "" || motivo === "" || !arquivo) {
        alert("Preencha todos os campos e selecione uma imagem!");
        return;
    }

    var tr = document.createElement('tr');

    var tdImg = document.createElement('td');
    var img = document.createElement('img');
    img.alt = "Capa do jogo";
    img.width = 84;
    img.height = 84;
    img.style.objectFit = "cover";
    img.src = URL.createObjectURL(arquivo);
    tdImg.appendChild(img);
    tr.appendChild(tdImg);

    var tdNome = document.createElement('td');
    tdNome.textContent = nome;
    tr.appendChild(tdNome);

    var tdAno = document.createElement('td');
    tdAno.textContent = ano;
    tr.appendChild(tdAno);

    var tdMotivo = document.createElement('td');
    tdMotivo.textContent = motivo;
    tr.appendChild(tdMotivo);

    var tdAcoes = document.createElement('td');
    var botaoRemover = document.createElement('button');
    botaoRemover.title = "Remover";
    botaoRemover.className = "btn btn-sm btn-outline-danger";
    botaoRemover.innerHTML = "<i class=\"fa-solid fa-trash\"></i>";
    botaoRemover.onclick = function () {
        tabela.removeChild(tr);
    };
    tdAcoes.appendChild(botaoRemover);
    tr.appendChild(tdAcoes);

    tabela.appendChild(tr);

    form.reset();
    inputNome.focus();
};
