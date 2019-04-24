import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import Img from "./Img";
import AvatarFallback from "./AvatarFallback";

const profileQuery = gql`
  {
    github {
      user(username: "nikgraf") {
        avatar_url
      }
    }
  }
`;

function Profile() {
  const { data, error } = useQuery(profileQuery, { suspend: true });
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <React.Suspense fallback={<AvatarFallback />}>
        <Img src={data.github.user.avatar_url} alt="avatar of nikgraf" />
      </React.Suspense>

      <span>nikgraf</span>
    </div>
  );
}

export default Profile;
