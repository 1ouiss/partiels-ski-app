import instance from "./api.service";

const endPoint = '/post';

const getPosts = async () => {
    const response = await instance.get(`${endPoint}`)
    return response.data;
}

const getOnePostById = async (id) => {
    const response = await instance.get(`${endPoint}/${id}`)
    return response.data;
}

const postService = {
    getPosts,
    getOnePostById
}

export default postService;