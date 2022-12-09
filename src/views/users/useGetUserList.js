import { useState, useEffect } from "react";

function useCreateUser(callback) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    setIsLoading(true);
    try {
      const { data } = await apiCall("asdfasfdasdfasdf"); // get list

      setData(data);
      setIsLoading(false);
      if (callback) callback(); // refresh the get user list
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  }

  return { isLoading, data, reload: getUser };
}

export default useCreateUser;
