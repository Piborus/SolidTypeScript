import Cliente from "../entities/Cliente";
import IClientRepository from "../repositories/interfaces/IClientRepository";

export default class ClienteController {
   constructor(private readonly repository: IClientRepository){}

    adicionaCliente(cliente: Cliente) {
        this.repository.adicionaCliente(cliente);
    }
    listaClientes() {
        return this.repository.listaClientes();
    }
}