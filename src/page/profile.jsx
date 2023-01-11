import React from "react";
import BadgeList from "../components/badges/BadgeList";
import DetailsUser from "../components/user/DetailsUser";
import { useGetMyInfoQuery } from "../store/api/userApiSlice";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.auth.user);

  /*   if (user == null) {
    const { data, error, isLoading } = useGetMyInfoQuery();
    console.log(user);

  } */
  // Using a query hook automatically fetches data and returns query values
  /*
   */
  return (
    <div>
      <DetailsUser user={user} />

      <BadgeList babges={user}></BadgeList>
    </div>
  );
}

export default Profile;
