import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente('Ricardo', 11122233309);

const cliente2 = new Cliente('Alice', 88822233309);

const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(500);

const conta2 = new ContaCorrente(cliente2, 102);

let valor = 200;
conta1.transferir(valor, conta2);

console.log(ContaCorrente.numeroContas);