import { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/esm/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
 

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('api/projects')
          .then(response => response.json())
          .then(data => {
            setProjects(data._embedded.projectList);
            setLoading(false);
          })
      }, []);
    
      const remove = async (id) => {
        await fetch(`/api/projects/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        }).then(() => {
          let updatedProjects = [...projects].filter(i => i.id !== id);
          setProjects(updatedProjects);
        });
      }
    
      if (loading) {
        return <p>Loading...</p>;
      }

      const projectList = projects.map(project => {

        return (
        <tr className='fs-5'key={project.id}>
          <td as={Link}  >
            <Link to={"/boards/" + project.id} className='fs-5'>{project.name}</Link>
          </td>
          <td className='fs-5'>{project.key}</td>
          <td className='fs-5'>{project.startDate}</td>
          <td>
            <ButtonGroup>
              <Button   as={Link} to={"/projects/" + project.id}>Edit</Button>
              <Button  className='btn-danger' onClick={() => remove(project.id)}>Delete</Button>
            </ButtonGroup>
          </td>
        </tr>
        )
      });

    return (
        <Table hover className='fs-5'>
            <thead>
                <tr >
                    <th className='fs-5' width="30%">Name</th>
                    <th className='fs-5' width="20%" >Key</th>
                    <th className='fs-5' width="30%">Date Opened</th>
                    <th className='fs-5' width="20%"></th>
                </tr>
            </thead>
            <tbody>
                {projectList}
            </tbody>
        </Table>
    )
}
