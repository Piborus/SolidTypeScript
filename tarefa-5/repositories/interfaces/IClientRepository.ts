import Cliente from "../../entities/Cliente";

interface IClientRepository {
    adicionaCliente(cliente: Cliente) : void;

    listaClientes() : Cliente[];
}

export default IClientRepository;