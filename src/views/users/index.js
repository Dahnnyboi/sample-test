import React from "react";
import useCreateUser from "./useCreateUser";
import useGetUserList from "./useGetUserList";
import UserTable from "./UserTable";

function Index() {
  const { isLoading, data, reload } = useGetUserList();
  const { isCreating, onCreate } = useCreateUser(reload);

  return (
    <div>
      <UserTable data={data} />
    </div>
  );
}

export default Index;
