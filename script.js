//ids: menu, valor, res, botao

const menu = document.getElementById('menu');
const valor = document.getElementById('valor');
const botao = document.getElementById('botao');
let result = document.getElementById('res');
let saldo = 1000

botao.addEventListener('click', () => {
    if(menu.value == 'saldo'){
        result.innerHTML = `Saldo R$${saldo},00`
        valor.value = ''

    } else if (menu.value == 'saque' && valor.value != '' && saldo - Number(valor.value) >= 0 && valor.value > 0){
        saldo = saldo - Number(valor.value)
        result.innerHTML = `Operação realizada com sucesso.<br>
        Saque: R$${valor.value}<br>
        Saldo: R$${saldo}`
        valor.value = ''
    
    } else if(menu.value == 'saque' && valor.value != '' && saldo - Number(valor.value) < 0  && valor.value > 0){
        result.innerHTML = `A transação não pode ser efetuada, consulte seu saldo.`
    }
    else if (menu.value == 'deposito' && valor.value != '' && valor.value > 0){
        saldo = saldo + Number(valor.value)
        result.innerHTML = `Operação realizada com sucesso.<br>
        Depósito: R$${valor.value}<br>
        Saldo: R$${saldo}`
        valor.value = ''
    
    } else if(menu.value == 'saque' && (saldo - valor) <= 0 && valor.value > 0){
        saldo == saldo
        result.innerHTML = `A transação não pode ser efetuada, consulte seu saldo.`
    } else if(valor.value != Number){
        result.innerHTML = `Insira um valor válido.`
    }else {
        result.innerHTML = `Insira um valor válido.`
    }
    valor.value = ''
})
