import { useCallback, useContext } from 'react';
import { AlertModalContext } from '../store/modal-context';

const errorMessages = {
  'auth/signup': {
    400: '이미 존재하는 계정입니다.',
  },
  'auth/signin': {
    401: '비밀번호를 다시 확인해 주세요.',
    404: '존재하지 않는 계정입니다.',
  },
};

const useHttp = () => {
  const modal = useContext(AlertModalContext);

  const sendRequest = useCallback(async (url, requestConfig, applyData) => {
    try {
      const response = await fetch(`https://pre-onboarding-selection-task.shop/${url}`, requestConfig);
      if (!response.ok) {
        const errorMessage = errorMessages[url][response.status];
        throw new Error(errorMessage);
      }

      if (requestConfig.method !== 'DELETE') {
        const data = await response.json();

        applyData(data);
      } else {
        applyData();
      }
    } catch (error) {
      modal.show(error.message);
    }
  }, []);

  return sendRequest;
};

export default useHttp;
