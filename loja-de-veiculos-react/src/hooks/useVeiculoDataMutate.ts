import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { VeiculoData } from "../interface/VeiculoData";

const API_URL = 'http://localhost:8080';

// Responsável por executar os métodos POST,DELETE E PUT na API 
const postData = async (data: VeiculoData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/veiculos', data);
    return response;
};

const deleteData = async (idVeiculo?: Number): AxiosPromise<any> => {
    const response = axios.delete(`${API_URL}/veiculos/${idVeiculo}`);
    return response;
};

const putData = async (data: VeiculoData): AxiosPromise<any> => {
    const response = axios.put(API_URL + '/veiculos', data);
    return response;
};


export function useVeiculoDataMutatePost() {
    const queryClient = useQueryClient();
    const mutatePost = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['veiculo-data'] });
        }
    });

    return mutatePost;
}

export function useVeiculoDataMutateDelete() {
    const queryClient = useQueryClient();
    const mutateDelete = useMutation({
        mutationFn: deleteData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['veiculo-data'] });
        }
    });

    return mutateDelete;
}

export function useVeiculoDataMutatePut() {
    const queryClient = useQueryClient();
    const mutatePut = useMutation({
        mutationFn: putData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['veiculo-data'] });
        }
    });

    return mutatePut;
}