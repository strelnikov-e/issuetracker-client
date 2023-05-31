import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Stack from 'react-bootstrap/esm/Stack';
import { useState } from 'react';



function IssueCard({data: {name, key, type, status, priority, assignee}}) {
    // const issue = data.data;
    const threeDots = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                        </svg>
    // const [ issue, setIssue ] = useState();

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setIssue({...issue, [name]: value})
    // }


    const priorityBadge = 
        <Badge pill
            bg={priority === 'MEDIUM' ? "warning" : priority === 'HIGH' ? "danger" : "success"}>
            {priority}
        </Badge> 

    return (
        <>
            <ListGroup.Item action className='mb-1 border rounded'>
                <Stack direction='horizontal'>
                <div className="me-auto"> 
                <small>{priorityBadge} <span className='align-middle text-muted'> {key}</span> </small>
                    
                </div>
                    <DropdownButton  variant="light"  style={{zIndex:1}}>
                        {threeDots}
                    </DropdownButton>
                </Stack>
                <p className=''>{name}</p>
                <Stack direction='horizontal'>
                    <small className='text-muted me-auto'>{type}</small>
                    <Badge pill bg="secondary">{assignee}</Badge>
                </Stack>
                
            </ListGroup.Item>
        </>

    )
}

export default IssueCard;