import { useState } from "react";

function useCreateUser(callback) {
  const [isCreating, setIsCreating] = useState();

  async function createUser(formData) {
    setIsCreating(true);
    try {
      await apiCall("asdfasfdasdfasdf", formData); // axios instance

      setIsCreating(false);
      if (callback) callback(); // refresh the get user list
    } catch (e) {
      setIsCreating(false);
      console.log(e);
    }
  }

  return { isCreating, onCreate: createUser };
}

export default useCreateUser;
