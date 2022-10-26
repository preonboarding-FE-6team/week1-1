import { useCallback } from "react";

const useHttp = () => {
  const sendRequest = useCallback(async (url, requestConfig, applyData) => {
    try {
      const response = await fetch(
        `https://pre-onboarding-selection-task.shop/${url}`,
        requestConfig
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      if (requestConfig.method !== "DELETE") {
        const data = await response.json();

        applyData(data);
      } else {
        applyData();
      }
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return sendRequest;
};

export default useHttp;
