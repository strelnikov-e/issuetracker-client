import { useParams, useNavigate, useSearchParams, Link } from "react-router-dom"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";

export default function IssueDetails() {
    let initialFormState = {
        id: '',
        name: '',
        description: '',
        status: 'TODO',
        startDate: ''
    };

    const [ issue, setIssue ] = useState(initialFormState);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id !== 'new') {
            fetch(`/api/issues/${id}`)
            .then(response => response.json())
            .then(data => setIssue(data))
        }
    }, [id, setIssue]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setIssue({...issue, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(issue)
        console.log(event.target.startDate.value)
        issue['startDate'] = event.target.startDate.value;

        await fetch(`/api/issues${issue.id ? `/${issue.id}` : '' }`, {
            method: (issue.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(issue)
        });
        setIssue(initialFormState);
        navigate('/issues');
    }

    const title = <h4 className="mb-4">{issue.id ? 'Edit issue' : 'Create issue' }</h4>;

    return (
        <Form onSubmit={handleSubmit}>
            {title}
            <Form.Group className="mb-4" controlId="formIssueName">
                <Form.Label>Name*</Form.Label>
                <Form.Control className="sm" type="text" name="name" required value={issue.name || "" } onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formIssueStartDate">
                <Form.Label>Start date</Form.Label>
                <Form.Control type="date" name="startDate" value={issue.startDate || (new Date().toISOString().slice(0,10))} 
                onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formIssueDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} name="description" value={issue.description || ""} onChange={handleChange} />
            </Form.Group>
            <Form.Select className="mb-4" aria-label="selectIssueStatus" name="status" value={issue.status || "TODO"} onChange={handleChange}>
                <option value="TODO">To do</option>
                <option value="INPROGRESS">In progress</option>
                <option value="REVIEW">In review</option>
                <option value="DONE">Done</option>
            </Form.Select>
            <Form.Group >
                <Button variant="primary me-2" type="submit">Submit</Button>
                <Button variant="secondary" as={Link} to="/issues">Cancel</Button>
            </Form.Group>
        </Form>
    );
}
