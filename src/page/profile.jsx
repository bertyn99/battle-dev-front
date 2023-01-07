import React from "react";
import BadgeList from "../components/badges/BadgeList";
import DetailsUser from "../components/user/DetailsUser";

function Profile() {
  return (
    <div>
      <DetailsUser />

      <BadgeList></BadgeList>
    </div>
  );
}

export default Profile;
