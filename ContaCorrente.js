import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    #cliente;
    #saldo = 0;

    set setCliente(novoValor){
        if(novoValor instanceof Cliente){
            this.#cliente = novoValor;
        }
    }

    get getCliente(){
        return this.#cliente;
    }

    get getSaldo(){
        return this.#saldo;
    }

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this.#saldo += valor;           
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }
}