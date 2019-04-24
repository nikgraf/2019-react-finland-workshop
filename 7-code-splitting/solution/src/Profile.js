import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

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
  const { loading, data, error } = useQuery(profileQuery);
  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <img
        src={data.github.user.avatar_url}
        alt="avatar of nikgraf"
        width="80"
      />
      <span>nikgraf</span>
    </div>
  );
}

export default Profile;
