import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/esm/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const issueLoader = async () => {
    const res = await fetch('/api/issues');
    if (!res.ok) {
        throw Error('Could not fetch the issues');
    }

    return res.json();
}

export default function Issues() {
    const [ issues, setIssues ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ searchParams, setSearchParams ] = useSearchParams();

    useEffect(() => {
        setLoading(true);
        const [ project ] = searchParams.has("projectId")? searchParams.get("projectId") : '0';

        fetch(`/api/issues${project !== '0' ? `?projectId=${project}` : '' }`)
        .then(response => response.json())
        .then(data => {
            if (Object.hasOwn(data, "_embedded")) {
                setIssues(data._embedded.issueList);
            } else {
                setIssues([]);
            }
          setLoading(false);
        })
    }, [searchParams]);

    const remove = async (id) => {
        await fetch(`/api/issues/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
          let updatedIssues = [...issues].filter(i => i.id !== id);
          setIssues(updatedIssues);
        });
      }

      if (loading) {
        return <p>Loading...</p>
      }

    const issueList = issues.map(issue => {
        let status = 'To do';
        switch (issue.status) {
            case "INPROGRESS" :
                status = 'In progress';
                break;
            case "DONE" :
                status = 'Done'
                break;
            case "REVIEW" :
                status = "In review"
        }

        return (
        <tr key={issue.id}>
          <td as={Link}  >
            <Link to={issue.id} >{issue.name}</Link>
          </td>
          <td>{status}</td>
          <td>{issue.startDate}</td>
          <td>
            <ButtonGroup>
              <Button size="sm"  as={Link} to={issue.id.toString()}>Edit</Button>
              <Button size="sm" className='btn-danger' onClick={() => remove(issue.id)}>Delete</Button>
            </ButtonGroup>
          </td>
        </tr>
        )
      });

    return (
        <Table hover>
            <thead>
                <tr>
                    <th width="30%">Name</th>
                    <th width="20%" >Status</th>
                    <th width="30%">Date Opened</th>
                    <th width="20%"></th>
                </tr>
            </thead>
            <tbody>
                {issueList}
            </tbody>
        </Table>
    )
}