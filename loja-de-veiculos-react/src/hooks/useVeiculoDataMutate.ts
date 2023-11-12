import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { VeiculoData } from "../interface/VeiculoData";

const API_URL = 'http://localhost:8080';

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
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['veiculo-data'] });
        }
    });

    return mutate;
}

export function useVeiculoDataMutateDelete() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: deleteData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['veiculo-data'] });
        }
    });

    return mutate;
}