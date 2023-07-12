import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import axios from "axios";
import dayjs from "dayjs";
import { UserBadge } from "../components/UserBadge";
import { useAuth } from "../hooks/useAuth";

export default function ProjectDetails() {
  const { user } = useAuth();
  let initialFormState = {
    id: "",
    name: "",
    description: "",
    status: "OPEN",
    startDate: "",
    managers: [{ id: 0 }],
    admins: [user],
  };

  const draftUser = { id: 0, firstName: "", lastName: "" };

  const [project, setProject] = useState(initialFormState);
  const navigate = useNavigate();
  const { id } = useParams();

  // const fetch = async () => {
  //   const response = await axios.get(`/api/projects/${id}`);
  //   return response;
  // };

  useEffect(() => {
    if (id !== "new") {
      axios.get(`/api/projects/${id}`)
        .then((data) => setProject(data.data));
    }
  }, [id, setProject ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    project["startDate"] = event.target.startDate.value;
    if (project.id) {
      axios.put(`/api/projects/${project.id}`, project);
    } else {
      axios.post(`/api/projects`, project);
    }

    setProject(initialFormState);
    navigate("/projects");
  };

  const title = (
    <h4 className="mb-4">{project.id ? "Edit project" : "Create project"}</h4>
  );


  return (
    <Form className="" onSubmit={handleSubmit}>
      {title}

      <Row className="g-5 mb-4">
        <Col md={6} lg={7}>
          <Row>
            <Form.Group className="mb-4" controlId="formProjectName">
              <Form.Label>Name*</Form.Label>
              <Form.Control
                className="sm"
                name="name"
                type="text"
                required
                value={project.name || ""}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className="mb-4" controlId="formProjectStartDate">
              <Form.Label>Start date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={
                  project.startDate || new Date().toISOString().slice(0, 10)
                }
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-4" controlId="formProjectDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={project.description || ""}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
        </Col>

        <Col md={6} lg={5}>
          <Card className="mt-4">
            <Card.Header>Information</Card.Header>
            <Card.Body>
              <Row className="py-3">
                <Col className="py-1 align-middle col-5">
                  {Array.from(project.admins).length > 1
                    ? "Administrators:"
                    : "Administrator:"}
                </Col>
                <Col className="">
                  {Array.from(project.admins).length === 0 ? (
                    <UserBadge user={draftUser}></UserBadge>
                  ) : (
                    project.admins.map((user) => (
                      <div key={user.id} className="py-1">
                        <UserBadge user={user}></UserBadge>
                      </div>
                    ))
                  )}
                  {/* {project.admins.map((user) => (
                <div key={user.id} className="mb-2">
                <UserBadge user={user}></UserBadge>
                </div>
              ))} */}
                </Col>
              </Row>
              <Row className="border-top border-bottom py-3">
                <Col className="py-1 align-middle col-5">
                  {Array.from(project.managers).length > 1
                    ? "Managers:"
                    : "Manager:"}
                </Col>
                <Col className="">
                  {Array.from(project.managers).length === 0 ? (
                    <UserBadge user={draftUser}></UserBadge>
                  ) : (
                    project.managers.map((user) => (
                      <div key={user.id} className="py-1">
                        <UserBadge user={user}></UserBadge>
                      </div>
                    ))
                  )}
                </Col>
              </Row>
              <Row className="py-2 align-middle">
                <Col className="col-5">Created:</Col>
                <Col className="text-muted">
                  {dayjs(project.startDate).format("MMM D, YYYY")}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Form.Group>
          <Button variant="primary me-2" type="submit">
            Submit
          </Button>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Cancel
          </Button>
        </Form.Group>
      </Row>
    </Form>
  );
}
