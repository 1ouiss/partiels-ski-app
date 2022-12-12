import instance from "./api.service";

const endPoint = '/comment';

const createComment = async (data) => {
    const response = await instance.post(`${endPoint}`, data)
    return response.data;
}

const commentService = {
    createComment
}

export default commentService;