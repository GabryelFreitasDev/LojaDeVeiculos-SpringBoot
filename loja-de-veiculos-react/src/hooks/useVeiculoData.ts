import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { VeiculoData } from "../interface/VeiculoData";

const API_URL = 'http://localhost:8080';

// Responsável por realizar o método GET na API e retornar os dados
const fetchData = async (): AxiosPromise<VeiculoData[]> => {
    const response = axios.get(API_URL + '/veiculos');
    return response;
};

export function useVeiculoData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['veiculo-data'],
        retry: 2
    });

    return{
        ...query,
        data: query.data?.data
    }
}