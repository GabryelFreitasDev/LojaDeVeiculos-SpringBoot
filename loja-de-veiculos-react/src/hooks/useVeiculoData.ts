import axios, { AxiosPromise } from "axios";
import { VeiculoData } from "../interface/VeiculoData";

const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<VeiculoData[]> => {
    const response = axios.get(API_URL + "/veiculos");
    return response;
};

export function useVeiculoData(){
    const query = useQuery({
        queryFn = fetchData,
        queryKey
    });
}