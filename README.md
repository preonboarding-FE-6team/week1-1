# ๐ 1์ฃผ์ฐจ ๊ณผ์  - ์ฌ์  ๊ณผ์  Best Practice

### ๊ณผ์ ๋ชฉ์  : ์ํฐ๋ ํ๋ฆฌ์จ๋ณด๋ฉ ํ๋ก ํธ์๋ ์ ๋ฐ ๊ณผ์ ์ Best Practice ์ฐ์ถ

> ๊ธฐ๊ฐ :2022๋ 10์ 25์ผ(ํ) - 2022๋ 10์ 28์ผ(๊ธ)

**๐[๋ฐฐํฌ๋งํฌ ๋ฐ๋ก๊ฐ๊ธฐ](https://best-practice-todo-list.vercel.app/)**

</br>

# ๐จโ๐ฉโ๐งโ๐ฆย Members

|                                           ์ต์น์ง<br/>(ํ์ฅ)                                           |                                         ์์คํ<br/>(๋ถํ์ฅ)                                         |                                            ๋ฌธ๋์ฐ<br/>(์๊ธฐ)                                             |                                           ์ต์์ค<br/>(๋ถ์๊ธฐ)                                           |                                         ์์คํธ<br/>(๋ถ์๊ธฐ)                                         |                                            ์ ๋ฏผ๊ฒฝ<br/>(ํ์)                                            |                                             ๊ณฝํ<br/>(ํ์)                                             |                                            ์ด์ ์ง<br/>(ํ์)                                            |
| :---------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/46988995?v=4" alt="tooooo1" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/67459853?v=4" alt="helen" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/102936206?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/99406837?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/30254570?v=4" alt="flora" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/76088728?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/73919235?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/42020919?v=4" alt="magictaro" width="60" height="60"> |
|                                [yondo123](https://github.com/yondo123)                                |                            [tesseractjh](https://github.com/tesseractjh)                            |                               [Moondoyeon](https://github.com/Moondoyeon)                                |                                [choi1five](https://github.com/choi1five)                                |                               [younhoso](https://github.com/younhoso)                               |                                 [seonsy44](https://github.com/seonsy44)                                 |                                 [kwakhyun](https://github.com/kwakhyun)                                 |                                   [@2ujin@](https://github.com/2ujin)                                   |

</br>

# ๐ฅย Demo

| **ํ์๊ฐ์**                                                                                                                                            | **๋ก๊ทธ์ธ**                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="250" height="400" alt="signup" src="https://user-images.githubusercontent.com/46988995/198378448-0fa850cf-37e1-472b-a645-08daea43b072.gif"> | <img width="250" height="400" alt="signin" src="https://user-images.githubusercontent.com/46988995/198378645-0fa22b5a-41b1-456d-99d0-bafabc2e2557.gif"> |
| **ํ  ์ผ ์ถ๊ฐ**                                                                                                                                          | **ํ  ์ผ ์์  ๋ฐ ์ญ์ **                                                                                                                                  |
| <img width="250" height="400" alt="add" src="https://user-images.githubusercontent.com/46988995/198378734-65f8596a-57b8-453b-bc4f-3a02d9190434.gif">    | <img width="250" height="400" alt="modify" src="https://user-images.githubusercontent.com/46988995/198378753-613e63a8-2e03-48b4-b454-ca1b95189007.gif"> |

</br>

# **โก๏ธย Skills**

React, React-router-dom, Axios, npm, CSS

</br>

# ๐ย ๊ธฐ๋ฅ์๊ตฌ์ฌํญ

### **1) Auth**

- ์ด๋ฉ์ผ๊ณผ ๋น๋ฐ๋ฒํธ์ ์ ํจ์ฑ ๊ฒ์ฌ
  - ์ด๋ฉ์ผ ์กฐ๊ฑด:ย `@`ย ํฌํจ, ๋น๋ฐ๋ฒํธ ์กฐ๊ฑด: 8์ ์ด์
  - ์๋ ฅ๋ ์ด๋ฉ์ผ๊ณผ ๋น๋ฐ๋ฒํธ๊ฐ ์ ์กฐ๊ฑด์ ๋ง์กฑํ  ๋ ๋ฒํผ ํ์ฑํ
- ๋ก๊ทธ์ธ API๋ฅผ ํธ์ถํ๊ณ , ์ฌ๋ฐ๋ฅธ ์๋ต์ ๋ฐ์์ ๋ย `/todo`ย ๊ฒฝ๋ก๋ก ์ด๋
  - ์๋ต๋ฐ์ JWT๋ ๋ก์ปฌ ์คํ ๋ฆฌ์ง์ ์ ์ฅ
- ๋ก๊ทธ์ธ ์ฌ๋ถ์ ๋ฐ๋ฅธ ๋ฆฌ๋ค์ด๋ ํธ ์ฒ๋ฆฌ
  - ๋ก์ปฌ ์คํ ๋ฆฌ์ง์ ํ ํฐ์ด ์๋ ๊ฒฝ์ฐย `/`ย ํ์ด์ง ์ ์์ย `/todo`ย ๊ฒฝ๋ก๋ก ๋ฆฌ๋ค์ด๋ ํธ
  - ๋ก์ปฌ ์คํ ๋ฆฌ์ง์ ํ ํฐ์ด ์๋ ๊ฒฝ์ฐย `/todo`ย ํ์ด์ง ์ ์์ย `/`ย ๊ฒฝ๋ก๋ก ๋ฆฌ๋ค์ด๋ ํธ
- ๋ก๊ทธ์์ ์ ๋ก์ปฌ ์คํ ๋ฆฌ์ง์์ ํ ํฐ ์ญ์  ํย `/`ย ๊ฒฝ๋ก๋ก ์ด๋

### **2) Todo list**

- ์กฐํ / ์ถ๊ฐ
  - `/todo`ย ๊ฒฝ๋ก์ ์ ์ํ๋ฉด ํฌ๋ ๋ฆฌ์คํธ์ ๋ชฉ๋ก ์กฐํ
  - ํฌ๋ ๋ฆฌ์คํธ ๋ด์ฉ ๋ฐ ์๋ฃ ์ฌ๋ถ ํ์
  - ์๋ ฅ์ฐฝ๊ณผ ์ถ๊ฐ๋ฒํผ์ด ์๊ณ , ์ถ๊ฐ๋ฒํผ ํด๋ฆญ์ ์๋ ฅ์ฐฝ์ ๋ด์ฉ์ด ์๋ก์ด ํฌ๋ ๋ฆฌ์คํธ๋ก ์ถ๊ฐ
- ์ญ์  / ์์ 
  - ์์ ๋ฒํผ ์กด์ฌ, ํด๋น ๋ฒํผ์ ๋๋ฅด๋ฉด ์์ ๋ชจ๋ ํ์ฑํ, ๋ด์ฉ ์์ ๊ฐ๋ฅ
  - ์์ ๋ชจ๋์์ ์ ์ถ ๋ฒํผ๊ณผ ์ทจ์๋ฒํผ์ด ํ์๋๋ฉฐ ์์  ๋ด์ฉ ์ ์ถ/์ทจ์ ๊ฐ๋ฅ
  - ์ญ์ ๋ฒํผ ์กด์ฌ, ํด๋น ๋ฒํผ์ ๋๋ฅด๋ฉด ํฌ๋ ๋ฆฌ์คํธ ์ญ์ 

</br>

# ๐ **Best Practice**

## 1. ๋๋ ํ ๋ฆฌ ๊ตฌ์กฐ

<img width="250" height="500" src="https://user-images.githubusercontent.com/102936206/198420786-154a6198-02af-4cad-b37c-6166eee28d32.png">

- ์ปดํฌ๋ํธ(components), ํ์ค(hooks), ์ํ๊ด๋ฆฌ(store), ํจ์(utils)๋ก ์ง๊ด์ ์ธ ํด๋๋ช์ ์ฌ์ฉํจ์ผ๋ก์จ ๊ตฌ์กฐ ํ์์ด ์ํ
- components ๋ด common๊ณผ pages๋ก ๊ด์ฌ์ฌ ๋ถ๋ฆฌ๊ฐ ๋ชํ
- ๋ก์ง์ ๋ด๋นํ๋ .jsx ํ์ผ๊ณผ UI๋ฅผ ๋ด๋นํ๋ .module.css ํ์ผ์ ๋ถ๋ฆฌ
- UI ์ปดํฌ๋ํธ์ฉ ํด๋๋ฅผ ๋ถ๋ฆฌํด ์ฌ์ฌ์ฉ๋๋ UI ์ปดํฌ๋ํธ๋ฅผ ๊ด๋ฆฌ

<br  />

## 2. UI/UX

### 2-1. UI/UX ์ ๋ฐ

- ์ ์ ํ ์ด๋ฏธ์ง์ ์์ด์ฝ ์ฌ์ฉ์ผ๋ก ๊น๋ํ๊ณ  ๋ณด๊ธฐ ํธํ UI ๊ตฌ์ฑ
- ์น๊ณผ ๋ชจ๋ฐ์ผ ์ฌ์ฉ ํ๊ฒฝ์ ๊ณ ๋ คํด ๋ฏธ๋์ด ์ฟผ๋ฆฌ ์ฌ์ฉ
- Auth ํ์ด์ง ์ ์์ ์ด๋ฉ์ผ input ์ focus, Todo ํ์ด์ง ์ ์์ ํ ์ผ์ถ๊ฐ input์ focusํ์ฌ UX ํฅ์

### 2-2. ์๋ฆผ๋ชจ๋ฌ

<img width="300" alt="alarm Modal" src="https://user-images.githubusercontent.com/76088728/198300183-a304dfaf-64e5-4639-b541-06727537eb37.gif">

- ์๋ฐ์คํฌ๋ฆฝํธ์์ ๊ธฐ๋ณธ์ผ๋ก ์ ๊ณต๋๋ ์๋ฆผ์ฐฝ์ ๋จ์ ์ด ์์
  1. ์๋ฆผ์ฐฝ์ด ๋์ด์ ธ ์๋ ๋์ ์คํฌ๋ฆฝํธ๊ฐ ์ผ์ ์ ์ง๋๋ฉฐ ๋์์ ์ ํ์ ๋ฐ์
  2. ์คํ์ผ๋ง์ด ๋ถ๊ฐ๋ฅ
- ์์ ๋จ์ ์ ๋ณด์ํ๊ธฐ ์ํด ์๋ฆผ ๋ชจ๋ฌ์ ์ง์  ๋ง๋ค์ด ์ฌ์ฉ

- ์ฝ๋ ์ค๊ณ ๋ฐฉ์:react์ context๋ฅผ ์ด์ฉํด ์ ์ญ์์ ๋ชจ๋ฌ์ฐฝ์ ์ธ ์ ์๋๋ก ํจ

  ```jsx
  import { createContext, useState } from 'react';
  import AlertModal from '../components/UI/AlertModal';

  const AlertModalContext = createContext();

  const AlertModalProvider = ({ children }) => {
    const [isOpened, setIsOpened] = useState(false);
    const [content, setContent] = useState('');

    const show = text => {
      setContent(text);
      setIsOpened(true);
      setTimeout(() => {
        setIsOpened(false);
      }, 2950);
    };

    return (
      <AlertModalContext.Provider value={{ show }}>
        {isOpened && <AlertModal content={content} />}
        {children}
      </AlertModalContext.Provider>
    );
  };

  export { AlertModalContext, AlertModalProvider };
  ```

<br  />

## 3. API ์๋ฒํต์ 

### 3-1. axios์ ์ธ์คํด์ค, ์ธํฐ์ํฐ ํ์ฉ

- axios์ ์ธ์คํด์ค๋ฅผ ์ด์ฉํ์ฌ ์ธ์ฆ์ ๋ณด ์ ๋ฌด์ ๋ฐ๋ผ api ์์ฒญ ์ฒ๋ฆฌ๊ฐ ๊ฐ๋ฅํจ
- ๊ณตํต๋ถ๋ถ์ย ์ธํฐ์ํฐ๊ฐ ์ฒ๋ฆฌํด์ฃผ๊ธฐ ๋๋ฌธ์ ์ ์ง๋ณด์์ฑ์ด ๋ฐ์ด๋จ
- ์ฝ๋ ์ค๊ณ ๋ฐฉ์ (์ฐธ๊ณ  ๋งํฌ: [[๊ด๋ จ PR](https://github.com/preonboarding-FE-6team/week1-1/pull/7)])

  ```jsx
  import axios from 'axios';

  const DEFAULT_CONFIG = {
    baseURL: process.env.REACT_APP_SERVER,
    headers: { 'Content-Type': 'application/json' },
  };

  export const api = axios.create(DEFAULT_CONFIG);
  export const authApi = axios.create(DEFAULT_CONFIG);

  api.interceptors.request.use(
    config => config,
    () => ({ message: '๋ฐํ์ ์๋ฌ๊ฐ ๋ฐ์ํ์ต๋๋ค!' })
  );
  api.interceptors.response.use(
    config => config;
    error => error.response;
  );

  authApi.interceptors.request.use(
    config => {
      if (localStorage.getItem('authToken')) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('authToken')}`;
      }
      return config;
    },
    () => ({ message: '๋ฐํ์ ์๋ฌ๊ฐ ๋ฐ์ํ์ต๋๋ค!' })
  );
  authApi.interceptors.response.use(
    config => config,
    error => error.response
  );
  ```

### 3-2. ์๋ฌ๋ฉ์์ง ์ฒ๋ฆฌ

- ์๋ฌ ๋ฐ์์ ์ํ์ฝ๋๋ณ ์ ์ ํ ์๋ฌ๋ฉ์์ง์ ๋ฆฌ๋ค์ด๋ ์ํ  ์ฃผ์๋ฅผ ๋ฐํํจ
- ์ฝ๋ ์ค๊ณ ๋ฐฉ์

  ```jsx
  import { api, authApi } from './axios';

  export const authAPI = {
    async signUp(email, password) {
      const result = await api.post('/auth/signup', { email, password });
      return {
        result,
        errorMsg: {
          default: 'ํ์๊ฐ์์ ์คํจํ์์ต๋๋ค!',
        },
      };
    },

    async signIn(email, password) {
      const result = await api.post('/auth/signin', { email, password });
      return {
        result,
        errorMsg: {
          default: '๋ก๊ทธ์ธ์ ์คํจํ์์ต๋๋ค!',
          401: '์์ด๋ ๋๋ ๋น๋ฐ๋ฒํธ๊ฐ ์ผ์นํ์ง ์์ต๋๋ค!',
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
          default: 'ํ  ์ผ ๋ชฉ๋ก์ ๋ถ๋ฌ์ค๋๋ฐ ์คํจํ์์ต๋๋ค!',
        },
      };
    },

    async createTodo(todo) {
      const result = await authApi.post('/todos', { todo });
      return {
        result,
        errorMsg: {
          default: 'ํ  ์ผ ๋ชฉ๋ก์ ์ถ๊ฐํ๋๋ฐ ์คํจํ์์ต๋๋ค!',
        },
      };
    },

    async updateTodo(id, todo, isCompleted) {
      const result = await authApi.put(`/todos/${id}`, { todo, isCompleted });
      return {
        result,
        errorMsg: {
          default: 'ํ  ์ผ ๋ชฉ๋ก์ ์์ ํ๋๋ฐ ์คํจํ์์ต๋๋ค!',
        },
      };
    },

    async deleteTodo(id) {
      const result = await authApi.delete(`/todos/${id}`);
      return {
        result,
        errorMsg: {
          default: 'ํ  ์ผ ๋ชฉ๋ก์ ์ญ์ ํ๋๋ฐ ์คํจํ์์ต๋๋ค!',
        },
      };
    },
  };
  ```

<br  />

## 4. ๋ก๊ทธ์ธ ์ฌ๋ถ์ ๋ฐ๋ฅธ Redirect ์ฒ๋ฆฌ

- ํ์ด์ง ์ปดํฌ๋ํธ๊ฐ ์๋ Route์์ Redirect๋ฅผ ์ฒ๋ฆฌํด ๋ก์ง์ ๋ถ๋ฆฌํจ
- ์ฝ๋ ์ค๊ณ ๋ฐฉ์

  ```jsx
  import { Navigate } from 'react-router-dom';

  function AuthRoute({ element, destination, reversed }) {
    const accessToken = localStorage.getItem('authToken');
    const isAuthorized = reversed ? !accessToken : accessToken;
    return isAuthorized ? element : <Navigate to={destination} />;
  }

  export default AuthRoute;
  ```

  ```jsx
  function App() {
    return (
      <div className="App">
        <AlertModalProvider>
          <Routes>
            <Route path="/" element={<AuthRoute element={<Auth />} destination="/todo" reversed />} />
            <Route path="/todo" element={<AuthRoute element={<Todo />} destination="/" />} />
          </Routes>
        </AlertModalProvider>
      </div>
    );
  }
  ```

<br />

## 5. ์ํ๊ด๋ฆฌ

- Context๋ฅผ ์ฌ์ฉํ์ฌ ๋ถํ์ํ props drilling ๋ฐฉ์ง
- Todo ๋ฐฐ์ด์ ๊ด๋ฆฌํ๋ Context(`TodosContext`)์ Todo๋ฅผ ์ถ๊ฐ, ์์ , ์ญ์ ํ๋ Context๋ฅผ ๋ถ๋ฆฌ(`TodosDisPatchContext`)ํด Todo์ ๋ณํ์ ๋ฐ๋ฅธ ๋ถํ์ํ ๋ฆฌ๋ ๋๋ง ๋ฐฉ์ง
- ์ฝ๋ ์ค๊ณ ๋ฐฉ์ <br />
  <img width="300" alt="image" src="https://user-images.githubusercontent.com/76088728/198300661-ba8f4466-724d-4c0f-9229-3718ca6752a5.png">

<br  />

## 6. ์ต์ ํ

### 6-1. `React.memo` ์ฌ์ฉ

- Memoization ๊ธฐ๋ฅ์ ์ฌ์ฉํด props๊ฐ ๋ณํ์ง ์๋ ํฌ๋ ์์ดํ ๋ฆฌ๋ ๋๋ง ๋ฐฉ์ง

- ์ฝ๋ ์ค๊ณ ๋ฐฉ์

  ```jsx
  import React from 'react';

  const TodoItem = ({ ... }) => {
  	...
  	return (
  		<li> ... </li>
  	)
  }

  export default React.memo(TodoItem);
  ```

### 6-2. `useCallback` ์ฌ์ฉ

- useCallback์ ์ฌ์ฉํด ๋ฌด๋ถ๋ณํ ํจ์ ํธ์ถ ๋ฐฉ์ง

- ์ฝ๋ ์ค๊ณ ๋ฐฉ์

  ```jsx
  const changeHandler = useCallback(e => {
    setInputState(e.target.value);
  }, []);
  ```

# ๐ข ํ๋ก์ ํธ ์คํ๋ฐฉ๋ฒ

์คํํ  ๋ ๋ฐ๋์ ๋ค์ ํ์ผ์ ์ต์๋จ์ ์์ฑํ ์คํ ํด์ฃผ์์ผ ํฉ๋๋ค.

```
// .env.local
REACT_APP_SERVER = ์๋ฒ์ฃผ์
```

```
npm install
npm start
```

<br  />

# ๐ย ํ ๊ท์น

- ### ๐ย **Git commit convention**
  | rule     | ์ค๋ช                                                     |
  | -------- | -------------------------------------------------------- |
  | Feat     | ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ                                         |
  | Fix      | ๋ฒ๊ทธ ๊ณ ์น ๊ฒฝ์ฐ                                           |
  | Design   | css ์์                                                  |
  | Chore    | ๋น๋ ์๋ฌด ์์ , ํจํค์ง ๋งค๋์  ์์                        |
  | !HOTFIX  | ๊ธํ๊ฒ ์น๋ช์ ์ธ ๋ฒ๊ทธ๋ฅผ ๊ณ ์ณ์ผํ๋ ๊ฒฝ์ฐ                   |
  | Docs     | ๋ฌธ์ ์์                                                 |
  | Style    | ์ฝ๋ formatting, ์ธ๋ฏธ์ฝ๋ก (;) ๋๋ฝ, ์ฝ๋ ๋ณ๊ฒฝ์ด ์๋ ๊ฒฝ์ฐ |
  | Rename   | ํ์ผ ๋ฐ ํด๋ ๊ตฌ์กฐ ๋ณ๊ฒฝ                                   |
  | Refactor | ์ฝ๋ ๋ฆฌํฉํ ๋ง                                            |
  | Test     | ํ์คํธ ์ฝ๋, ๋ฆฌํฉํ ๋ง ํ์คํธ ์ฝ๋ ์ถ๊ฐ                   |
  | Remove   | ํ์ผ ์ญ์                                                 |
  | Modify   | ์ฝ๋ ๋จ์ ์์                                            |
- ### ๐ **Git branch strategy**
  main (๋ฐฐํฌ/์ด์) โ develop (ํตํฉ ๊ฐ๋ฐ) โ feat-๊ฐ๋ฐ๋ด์ฉ (๋จ์ ๊ฐ๋ฐ)

</br>

# ๐ย **๋ฌธ์**

<a href="https://www.notion.so/2022-10-27-35dcd07cf811402686f2b318e62a6792"> ํ์๋ก</a>
</br>
<a href="https://suddenlydisappeared.notion.site/275961c80dab46b09db7284242c1b1b2">๊ณผ์ ์ํ ์  ๊ฐ์ธ์ฝ๋ ์ค๋ช</a>
