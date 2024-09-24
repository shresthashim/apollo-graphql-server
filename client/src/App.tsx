import React from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      description
      user {
        id
        name
        username
        email
        phone
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery<{ projects: Project[] }>(GET_PROJECTS);

  if (loading) return <div className='loading'>Loading...</div>;
  if (error) return <div className='error'>Error: {error.message}</div>;

  if (!data || !data.projects) {
    return <div className='no-projects'>No projects found.</div>;
  }

  return (
    <div className='projects-container'>
      <h1 className='header'>Projects List</h1>
      <div className='projects-grid'>
        {data.projects.map(({ id, name, description, user }) => (
          <div key={id} className='project-card'>
            <h3 className='project-name'>{name}</h3>
            <p className='project-description'>{description}</p>
            <div className='user-info'>
              <h4>Created by:</h4>
              <p>
                {user.name} (@{user.username})
              </p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
