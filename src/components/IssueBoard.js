import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import IssueCard from './IssueCard';
import Collapse from 'react-bootstrap/esm/Collapse';
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'

function IssueBoard({ data, status, project }) {
    let initialFormState = {name: '', project: {id: parseInt(project)}, status};
    const [ isCreateFormOpen, setIsCreateFormOpen ] = useState(false);
    const [ issue, setIssue ] = useState(initialFormState);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setIssue({...issue, [name]: value})
    }

    const handleCreateDraftIssue = async (event) => {
        event.preventDefault();
        console.log(issue)

        await fetch('/api/issues', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(issue)
        });
        setIssue(initialFormState);
        setIsCreateFormOpen(false);
    }

    return (
        <div className='col'>
            <Card style={{ width: '10' }} className='bg-light' key={status} >
                <Card.Body className='px-1'>
                    <Card.Subtitle className='bg-light mb-2 px-2'>{status}</Card.Subtitle>
                    <ListGroup>
                        {data.map(issue => (
                            <IssueCard data={issue} key={issue.id}/>
                        ))}
                    </ListGroup>
                </Card.Body>
                <Button className='btn btn-light text-muted text-start' onClick={() => setIsCreateFormOpen(!isCreateFormOpen)} >+ Create issue</Button>
                <Collapse in={isCreateFormOpen}>
                    <Form onSubmit={handleCreateDraftIssue} className='p-1' id="boards-create-issue-collapse" >
                        <Form.Control name='name' value={issue.name} onChange={handleChange} placeholder="Start typing to create a draft"/>
                    </Form>
                </Collapse>
            </Card>
        </div>

    );
}

export default IssueBoard;