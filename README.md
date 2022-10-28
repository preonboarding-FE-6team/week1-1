# 📖 1주차 과제 - 사전 과제 Best Practice

### 과제목적 : 원티드 프리온보딩 프론트엔드 선발 과제의 Best Pratice 산출

> 기간 :2022년 10월 25일(화) - 2022년 10월 28일(금)

**📎[배포링크 바로가기](https://best-practice-todo-list.vercel.app/)**

</br>

# 👨‍👩‍👧‍👦 Members

|                                           최승진<br/>(팀장)                                           |                                         임준홍<br/>(부팀장)                                         |                                                곽현                                                 |                                                  문도연                                                  |                                                 선민경                                                  |                                                 소윤호                                                  |                                                 이유진                                                  |                                                 최원오                                                  |
| :---------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/46988995?v=4" alt="tooooo1" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/67459853?v=4" alt="helen" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/73919235?v=4" alt="flora" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/102936206?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/76088728?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/30254570?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/42020919?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/99406837?v=4" alt="magictaro" width="60" height="60"> |
|                                [yondo123](https://github.com/yondo123)                                |                            [tesseractjh](https://github.com/tesseractjh)                            |                               [kwakhyun](https://github.com/kwakhyun)                               |                               [Moondoyeon](https://github.com/Moondoyeon)                                |                                 [seonsy44](https://github.com/seonsy44)                                 |                                 [younhoso](https://github.com/younhoso)                                 |                                    [2ujin](https://github.com/2ujin)                                    |                                [choi1five](https://github.com/choi1five)                                |

</br>

# 🖥 Demo

**회원가입**  
<img width="300" alt="signup" src="https://user-images.githubusercontent.com/46988995/198378448-0fa850cf-37e1-472b-a645-08daea43b072.gif">

**로그인**  
<img width="300" alt="signin" src="https://user-images.githubusercontent.com/46988995/198378645-0fa22b5a-41b1-456d-99d0-bafabc2e2557.gif">

**할 일 추가**  
<img width="300" alt="add" src="https://user-images.githubusercontent.com/46988995/198378734-65f8596a-57b8-453b-bc4f-3a02d9190434.gif">

**할 일 수정 및 삭제**  
<img width="300" alt="modify" src="https://user-images.githubusercontent.com/46988995/198378753-613e63a8-2e03-48b4-b454-ca1b95189007.gif">

</br>

# **⚡️ Skills**

React, React-router-dom, axios, npm, CSS

</br>

# 🚀 기능요구사항

### **1) Auth**

- 이메일과 비밀번호의 유효성 검사
  - 이메일 조건: `@` 포함
  - 비밀번호 조견: 8자 이상
  - 입력된 이메일과 비밀번호가 위 조건을 만족할 때 버튼 활성화
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 `/todo` 경로로 이동
  - 응답받은 JWT는 로컬 스토리지에 저장
- 로그인 여부에 따른 리다이렉트 처리
  - 로컬 스토리지에 토큰이 있는 경우 `/` 페이지 접속시 `/todo` 경로로 리다이렉트
  - 로컬 스토리지에 토큰이 없는 경우 `/todo` 페이지 접속시 `/` 경로로 리다이렉트
- 로그아웃 시 로컬 스토리지에서 토큰 삭제 후 `/` 경로로 이동

### **2) Todo list**

- 조회 / 추가
  - `/todo` 경로에 접속하면 투두 리스트의 목록 조회
  - 투두 리스트 내용 및 완료 여부 표시
  - 입력창과 추가버튼이 있고, 추가버튼 클릭시 입력창의 내용이 새로운 투두 리스트로 추가
- 삭제 / 수정
  - 수정버튼 존재, 해당 버튼을 누르면 수정모드 활성화, 내용 수정가능
  - 수정모드에서 제출 버튼과 취소버튼이 표시되며 수정 내용 제출/취소 가능
  - 삭제버튼이 존재, 해당 버튼을 누르면 투두 리스트 삭제

</br>

# 👍 **Best Practice**

## 1. 폴더 구조

<img width="250" alt="image" src="https://user-images.githubusercontent.com/76088728/198422657-7e1cdc2d-7ef2-48c4-80c6-20ac23b4b4c9.png">

- 선정이유
  - 컴포넌트(components), 훅스(hooks), 페이지(pages), 상태관리(store) 별로 폴더를 나누어 직관적인 폴더명을 사용함으로써 구조 파악이 원활
  - 컴포넌트 내부 Auth와 Todo로 관심사를 분리가 명확
  - UI 컴포넌트용 폴더를 분리해 재사용되는 UI 컴포넌트를 관리

<br  />

## 2. UI/UX

### 2-1. UI 전반

- 선정이유
  - 적절한 이미지와 아이콘 사용으로 깔끔하고 보기 편한 UI 구성
  - 웹과 모바일 사용 환경을 고려해 미디어 쿼리 사용
- 코드 설계 방식

### 2-2. 알림모달

<img width="300" alt="image" src="https://user-images.githubusercontent.com/76088728/198300183-a304dfaf-64e5-4639-b541-06727537eb37.gif">

- 선정이유

  - 자바스크립트에서 기본으로 제공되는 알림창은 단점이 있음
    1. 알림창이 띄어져 있는 동안 스크립트가 일시 정지되며 동작에 제한을 받음
    2. 스타일링이 불가능
  - 위의 단점을 보완하기 위해 알림 모달을 직접 만들어 사용

- 코드 설계 방식
  react의 context를 이용해 전역에서 모달창을 쓸 수 있도록 함.

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

### 2-3. UX 전반

- Auth 페이지 접속 시 이메일 input 에 focus, Todo 페이지 접속 시 Todo추가 input에 focus를 함으로써 사용자 경험 향상.

<br  />

## 3. API 서버통신

### 3-1. axios의 인스턴스, 인터셉터 활용

- 선정이유:
  - axios의 인스턴스를 이용하여 인증정보 유무에 따라 api 요청 처리가 가능하다.
  - 공통부분을 인터셉터가 처리해주기 때문에 유지보수성이 뛰어나다.
- 코드 설계 방식 (참고 링크: [[관련 PR](https://github.com/preonboarding-FE-6team/week1-1/pull/7)])

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
    () => ({ message: '런타임 에러가 발생했습니다!' })
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
    () => ({ message: '런타임 에러가 발생했습니다!' })
  );
  authApi.interceptors.response.use(
    config => config,
    error => error.response
  );
  ```

### 3-2. 에러메시지 처리

- 선정이유
  - 에러 발생시 상태코드별 적절한 에러메시지 및 리다이렉션할 주소 반환
- 코드 설계 방식

  ```jsx
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
  ```

<br  />

## 4. 로그인 여부에 따른 Redirect 처리

- 선정이유

  - 코드가 직관적이어서 가독성이 좋음
  - 페이지 컴포넌트에서 Redirect를 처리하지 않고 Route에서 처리하여 로직을 분리했기 때문에 페이지 컴포넌트에서는 Redirect를 신경쓰지 않아도 됨

- 코드 설계 방식

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

## 5. 상태관리

- 선정이유:
  - Context를 사용하여 불필요한 props drilling 방지
  - Todo 배열을 관리하는 Context(`TodosContext`)와 Todo를 추가, 수정, 삭제하는 Context를 분리(`TodosDisPatchContext`)해 Todo의 변화에 따른 불필요한 리렌더링 방지
- 코드 설계 방식 <br />
  <img width="300" alt="image" src="https://user-images.githubusercontent.com/76088728/198300661-ba8f4466-724d-4c0f-9229-3718ca6752a5.png">

<br  />

## 6. 최적화

### 6-1. `React.memo` 사용

- 선정이유: Memoization 기능을 사용해 props가 변하지 않는 투두 아이템 리렌더링 방지
- 코드 설계 방식

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

### 6-2. `useCallback` 사용

- 선정이유: useCallback을 사용해 무분별한 함수 호출 방지
- 코드 설계 방식

  ```jsx
  const changeHandler = useCallback(e => {
    setInputState(e.target.value);
  }, []);
  ```

<br  />

# 📚 팀 규칙

- ### 📕 **Git commit convention**
  커밋 메세지 영어로 통일
  | rule | 설명 |
  | -------- | -------------------------------------------------------- |
  | Feat | 새로운 기능 추가 |
  | Fix | 버그 고친 경우 |
  | Design | css 수정 |
  | Chore | 빌드 업무 수정, 패키지 매니저 수정 |
  | !HOTFIX | 급하게 치명적인 버그를 고쳐야하는 경우 |
  | Docs | 문서 수정 |
  | Style | 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우 |
  | Rename | 파일 및 폴더 구조 변경 |
  | Refactor | 코드 리팩토링 |
  | Test | 테스트 코드, 리팩토링 테스트 코드 추가 |
  | Remove | 파일 삭제 |
  | Modify | 코드 단순 수정 |
- ### 📘 **Git branch strategy**
  main (배포/운영) ← develop (통합 개발) ← feat-개발내용 (단위 개발)

</br>

# 📝 **회의록**

<a href="https://www.notion.so/2022-10-27-35dcd07cf811402686f2b318e62a6792">1차 회의록</a>
</br>
<a href="https://suddenlydisappeared.notion.site/275961c80dab46b09db7284242c1b1b2">선발과제 개인코드 설명</a>
