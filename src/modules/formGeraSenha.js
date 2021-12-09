import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdChars = document.querySelector('.qtd-chars');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', () => {
        if (qtdChars.value > 30 || qtdChars.value < 5) {
            senhaGerada.innerHTML = "A quantidade precisa ser entre 5 e 30 caracteres";
            return;
        }
        if (!chkMaiusculas.checked && !chkMinusculas.checked && !chkNumeros.checked && !chkSimbolos.checked) {
            senhaGerada.innerHTML = "Você precisa selecionar no mínimo uma opção!"
            return;
        }
        senhaGerada.innerHTML = geraSenha(qtdChars.value,
            chkMaiusculas.checked,
            chkMinusculas.checked,
            chkNumeros.checked,
            chkSimbolos.checked);
    })
}