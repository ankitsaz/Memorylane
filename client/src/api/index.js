import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});
;
export const fetchPosts = () => API.get('/user');
export const createPost = (newPost) => API.post('/user', newPost);
export const likePost = (id) => API.patch(`/user/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/user/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/user/${id}`);

export const signIn = (formData) => API.post('/posts/signin', formData);
export const signUp = (formData) => API.post('/posts/signup', formData);