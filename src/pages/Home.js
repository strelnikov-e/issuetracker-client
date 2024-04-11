import issuetracker from "../assets/issue-tracker.png";

export default function Home() {
  const Get = () => (
    <span className="me-1" style={{ color: "wheat" }}>
      GET
    </span>
  );

  const Post = () => (
    <span className="me-1" style={{ color: "salmon" }}>
      POST
    </span>
  );
  const Update = () => (
    <span className="me-1" style={{ color: "mediumlightgreyRed" }}>
      UPDATE
    </span>
  );
  const Patch = () => (
    <span className="me-1 text-lg" style={{ color: "lightgrey" }}>
      PATCH
    </span>
  );
  const Delete = () => (
    <span className="me-1" style={{ color: "orangered" }}>
      DELETE
    </span>
  );

  return (
    <div className="">
      <div className="container-lg py-5">
        <h1 className="pt-5 mt-5 text-xl-center">
          User friendly bug tracker to help you build your project
        </h1>
        <p className="fs-4 text-secondary mt-4 mb-5 text-xl-center">
          Create your project and invite other users. Assign roles. Track your
          tasks and project progress.
        </p>

        <div className="d-flex justify-content-center mb-5">
          <a href="login" className="btn btn-lg btn-primary">
            Get Started
          </a>
        </div>

        <img
          src={issuetracker}
          alt="issueTrackerImg"
          className="shadow-lg rounded mx-auto d-block w-75"
        />
      </div>

      <div className="bg-dark p-0 text-light">
        <div className="container-lg">
          <h3 className="d-flex justify-content-start mt-5 py-5">
            REST endpoints
          </h3>

          <h5 className="bg-primary text-light p-2">Open endpoits</h5>
          <ul className="py-3">
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Get />
                /api/token
              </h6>
              <p>
                Get JWT token. Submit email and password inside request body.
              </p>
              <p>{'{"email": "***@mail.com", "password": "***"}'}</p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Post />
                /api/users
              </h6>
              <p>Create new user.</p>
              <p>Required fields: email, password, firstName, lastName</p>
            </li>
          </ul>

          <h5 className="bg-primary text-light p-2">Require authentication</h5>
          <h5 style={{ color: "lightgrey" }} className="fs-4">User</h5>
          <ul className="py-3">
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Get /> /api/users
              </h6>
              <p>
                Get all users. Add project(id) to get users assigned to project.
                Id should be a number. Example: /api/users?project=1
              </p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Get /> /api/users/details
              </h6>
              <p>Get details of current users.</p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Update /> /api/users/:id
              </h6>
              <p>Update user by id.</p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Patch /> /api/users/:id
              </h6>
              <p>Patch user by id.</p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Delete /> /api/users/:id
              </h6>
              <p>Delete user by id.</p>
            </li>
          </ul>

          <h5 style={{ color: "lightgrey" }} className="text-lg">Roles</h5>
          <ul className="py-3">
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Get /> /api/roles/project
              </h6>
              <p>
                Get all roles for project. Add project(id) to get users assigned
                to project. Id should be a number. Example: /api/users?project=1
              </p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Get /> /api/roles/:id
              </h6>
              <p>Get role by id.</p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Post /> /api/roles
              </h6>
              <p>Create new role.</p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Patch /> /api/roles/:id/role
              </h6>
              <p>Change role. Reques body should include new Role.</p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Delete /> /api/roles/:id
              </h6>
              <p>Delete role by id.</p>
            </li>
          </ul>

          <h5 style={{ color: "lightgrey" }} className="text-lg">Projects</h5>
          <ul className="py-3">
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Get /> api/projects{" "}
                <span className="fw-normal text-light">
                  (optional parameters: name, page, size, sort)
                </span>
              </h6>
              <p>
                Get all projects. Request without parameters returns a page with
                all projects where user has assignment.
              </p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Get /> /api/projects/:id
              </h6>
              <p>Get project by id.</p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Post /> /api/projects
              </h6>
              <p>Create new project.</p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Update /> /api/projects/:id
              </h6>
              <p>Update project.</p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Delete /> /api/projects/:id
              </h6>
              <p>Delete project by id.</p>
            </li>
          </ul>

          <h5 style={{ color: "lightgrey" }} className="text-lg">Issues</h5>
          <ul className="py-3">
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Get />
                api/issues{" "}
                <span className="fw-normal text-light">
                  (optional parameters: name, project, dueDate, type, status,
                  priority, assignee(id), reporter(id), incomplete ,page, size,
                  sort)
                </span>
              </h6>
              <p>
                Get all issues. Request without parameters returns a page with
                all issues where user has assignment.
                <div>
                  Parameters: name, type, status, priority, assignee and dueDate
                  cannot be combined!
                </div>
              </p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Get />
                api/issues/assignee/:id{" "}
                <span className="fw-normal text-light">
                  (optional parameters: project, incomplete ,page, size, sort)
                </span>
              </h6>
              <p>
                Get all issues where user has role ASSIGNEE. Request without
                parameters returns issue page of all user projects.
              </p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Get />
                api/issues/mywork{" "}
                <span className="fw-normal text-light">
                  (optional parameters: project, incomplete ,page, size, sort)
                </span>
              </h6>
              <p>
                Get all issues where user has role MANAGER or ASSIGNEE. Request
                without parameters returns issue page of all user projects.
              </p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Get /> /api/issues/:id
              </h6>
              <p>Get issue by id.</p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Post /> /api/issues
              </h6>
              <p>Create new issue.</p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Update /> /api/projects/:id
              </h6>
              <p>Update issue.</p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Patch /> /api/projects/:id
              </h6>
              <p>Patch issue.</p>
            </li>
            <li className="">
              <h6
                className="font-monospace fw-semibold"
                style={{ color: "moccasin" }}
              >
                <Delete /> /api/projects/:id
              </h6>
              <p>Delete issue by id.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
