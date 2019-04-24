import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

const repositoriesQuery = gql`
  {
    github {
      user(username: "nikgraf") {
        repos {
          id
          name
        }
      }
    }
  }
`;

function Repositories() {
  const { data, error } = useQuery(repositoriesQuery, { suspend: true });
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {data.github.user.repos.map(repo => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  );
}

export default Repositories;
