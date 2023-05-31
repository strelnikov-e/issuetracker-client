import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
// pages
import Home from './pages/Home';
import RootLayout from './layouts/RootLayout'
import NotFound from './pages/errors/NotFound';
import Projects, { projectLoader } from './pages/Projects';
import ProjectError from './pages/errors/ProjectError';
import ProjectLayout from './layouts/ProjectLayout';
import ProjectDetails from './pages/ProjectDetails';
import IssuesLayout from './layouts/IssuesLayout';
import IssueError from './pages/errors/IssueError';
import Issues from './pages/Issues';
import IssueDetails from './pages/IssueDetails';
import Boards from './pages/Boards';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path='projects' element={<ProjectLayout />}  errorElement={<ProjectError />}>
        <Route index element={<Projects />} />
      </Route>
      <Route path='projects/:id' element={<ProjectDetails />} />

      <Route path='issues' element={<IssuesLayout />}  errorElement={<IssueError />}>
        <Route index element={<Issues />} />
      </Route>
      <Route path='boards/:project' element={<IssuesLayout />}  errorElement={<IssueError />}>
        <Route index element={<Boards />} />
      </Route>
      <Route path='issues/:id' element={<IssueDetails />}/>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
