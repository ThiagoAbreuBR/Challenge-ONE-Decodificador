const input = document.getElementById("caixaTexto");
const textoCriptogradoDescriptografado = document.getElementById("textoCriptogradoDescriptografado");
const imgTexto = document.getElementById("imgTexto");
const copiandoTexto = document.getElementById("copiandoTexto");
const mensagemVazia = document.getElementById("mensagemVazia");
const digiteTexto = document.getElementById("digiteTexto");

function criptografar(chaveCriptografica) {
  let mensagemDescriptografada = chaveCriptografica
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return mensagemDescriptografada
}

function descriptografar(chaveDescriptografica) {
  let mensagemCriptografada = chaveDescriptografica
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return mensagemCriptografada;
}

function procurandoTexto() {
  if (input.textContent.length === 0) {
    mensagemVazia.textContent = "Nenhuma mensagem encontrada"
    setTimeout(() => {
      mensagemVazia.textContent = '';
    }, 3000);
  }
}

function visibilidadeImagem() {
  if (textoCriptogradoDescriptografado.textContent.length === 0) {
    imgTexto.style.display = "block";
    mensagemVazia.style.display = "block";
    digiteTexto.style.display = "block";
  } else {
    imgTexto.style.display = "none";
    mensagemVazia.style.display = "none";
    digiteTexto.style.display = "none";
  }
}

function exibirTextoCriptografado() {
  let inputCriptografar = input.value;
  let mensagemCriptografada = criptografar(inputCriptografar);

  textoCriptogradoDescriptografado.textContent = mensagemCriptografada;
  procurandoTexto()
  visibilidadeImagem();
}

function exibirTextoDescriptografado() {
  let inputDescriptografar = input.value;
  let mensagemDescriptografada = descriptografar(inputDescriptografar);

  textoCriptogradoDescriptografado.textContent = mensagemDescriptografada;
  procurandoTexto()
  visibilidadeImagem();
}

function btnCopiar() {
  let textoCopiado = textoCriptogradoDescriptografado.textContent;
  if (/^\s*$/.test(textoCopiado)) {
    copiandoTexto.textContent = 'Espaço vazio, não foi possível copia-ló';
    setTimeout(() => {
      copiandoTexto.textContent = '';
    }, 3000);
    return;
  }

  navigator.clipboard.writeText(textoCopiado)
    .then(() => {
      copiandoTexto.textContent = 'Mensagem copiada com sucesso';
      setTimeout(() => {
        copiandoTexto.textContent = '';
      }, 3000);
    })
    .catch((error) => {
      console.error('Erro ao copiar a mensagem:', error);
    });
}