import { api, authApi } from './axios';

export const authAPI = {
  async signUp(email, password) {
    const result = await api.post('/auth/signup', { email, password });
    return {
      result,
      errorMsg: {
        default: '회원가입에 실패하였습니다!',
      },
    };
  },

  async signIn(email, password) {
    const result = await api.post('/auth/signin', { email, password });
    return {
      result,
      errorMsg: {
        default: '로그인에 실패하였습니다!',
        401: '아이디 또는 비밀번호가 일치하지 않습니다!',
      },
    };
  },
};

export const todoAPI = {
  async getTodos() {
    const result = await authApi.get('/todos');
    return {
      result,
      errorMsg: {
        default: '할 일 목록을 불러오는데 실패하였습니다!',
      },
    };
  },

  async createTodo(todo) {
    const result = await authApi.post('/todos', { todo });
    return {
      result,
      errorMsg: {
        default: '할 일 목록을 추가하는데 실패하였습니다!',
      },
    };
  },

  async updateTodo(id, todo, isCompleted) {
    const result = await authApi.put(`/todos/${id}`, { todo, isCompleted });
    return {
      result,
      errorMsg: {
        default: '할 일 목록을 수정하는데 실패하였습니다!',
      },
    };
  },

  async deleteTodo(id) {
    const result = await authApi.delete(`/todos/${id}`);
    return {
      result,
      errorMsg: {
        default: '할 일 목록을 삭제하는데 실패하였습니다!',
      },
    };
  },
};
