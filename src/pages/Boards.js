import { useSearchParams, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import IssueBoard from "../components/IssueBoard";

export const issueLoader = async () => {
    const res = await fetch('/api/issues');
    if (!res.ok) {
        throw Error('Could not fetch the issues');
    }

    return res.json();
}

export default function Boards() {
    const [ issues, setIssues ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const { project } = useParams();

    useEffect(() => {
        setLoading(true);

        fetch(`/api/issues?projectId=${project}`)
        .then(response => response.json())
        .then(data => {
            if (Object.hasOwn(data, "_embedded")) {
                setIssues(data._embedded.issueList);
            } else {
                setIssues([]);
            }
          setLoading(false);
        })
    }, [project, setIssues]);

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

    let todo = [];
    let inProgress = [];
    let inReview = [];
    let done = [];

    issues.forEach(issue => {
        switch (issue.status) {
            case 'INPROGRESS':
                inProgress.push(issue);
                break;
            case 'INREVIEW':
                inReview.push(issue);
                break;
            case 'DONE':
                done.push(issue);
                break;
            default:
                todo.push(issue);
        }
    })

    return (
        <div className='row gy-3 gx-2'>
            <IssueBoard data={todo} project={project} status='TODO'/>
            <IssueBoard data={inProgress} project={project} status='INPROGRESS'/>
            <IssueBoard data={inReview} project={project} status='INREVIEW'/>
            <IssueBoard data={done}  project={project} status='DONE'/>

        </div>
    )
}