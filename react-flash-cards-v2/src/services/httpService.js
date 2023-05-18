import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001"
});

export async function read(url) {
    const { data } = await axiosInstance.get(url);
    return data;
}

export async function exclude(url) {
    const { status } = await axiosInstance.delete(url);

    if (status != 200) {
        throw new Error();
    }
}

export async function create(url, newData) {
    const { data } = await axiosInstance.post(url, newData);

    return {
        data: data
    };
}

export async function update(url, newData) {
    const { data } = await axiosInstance.put(url, newData);

    return {
        data: data
    };
}