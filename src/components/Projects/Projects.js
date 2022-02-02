import React from 'react';
import moment from 'moment';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../layout/Title';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { useNavigate } from 'react-router';
function preventDefault(event) {
  event.preventDefault();
}

const Projects = ({ projects, isAllProjects }) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Title>Projects</Title>
      <Table size='small'>
        <TableHead  >
          <TableRow >
            <TableCell>Name</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Team</TableCell>
            <TableCell>Tickets</TableCell>
            <TableCell align='right'>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects && isAllProjects
            ? projects.map((project) => (
                <TableRow key={project._id}>
                  <TableCell>{project.projectName}</TableCell>
                  <TableCell>
                    {moment(project.startDate).format('MMMM Do, YYYY')}
                  </TableCell>
                  <TableCell>
                    {moment(project.endDate).format('MMMM Do, YYYY')}
                  </TableCell>
                  <TableCell>{project.developers.length}</TableCell>
                  <TableCell>{project.tickets.length}</TableCell>
                  <TableCell align='right'>
                    <ZoomInIcon
                      color='primary'
                      href='#'
                      onClick={() => {
                        navigate(`/project-details/${project._id}`);
                      }}
                      sx={{ mt: 3 }}
                    />
                  </TableCell>
                </TableRow>
              ))
            : projects.slice(0, 3).map((project) => (
                <TableRow key={project._id}>
                  <TableCell>{project.projectName}</TableCell>
                  <TableCell>
                    {moment(project.startDate).format('MMMM Do, YYYY')}
                  </TableCell>
                  <TableCell>
                    {moment(project.endDate).format('MMMM Do, YYYY')}
                  </TableCell>
                  <TableCell>{project.developers.length}</TableCell>
                  <TableCell>{project.tickets.length}</TableCell>
                  <TableCell align='right'>
                    <ZoomInIcon
                      color='primary'
                      href='#'
                      onClick={() => {
                        navigate(`/project-details/${project._id}`);
                      }}
                      sx={{ mt: 3 }}
                    />
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
      {!isAllProjects && (
        <span
          style={{
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Link
            color='primary'
            href='#'
            onClick={() => {
              navigate(`/all-projects`);
            }}
            style={{ textDecoration: 'none' }}
          >
            See all...
          </Link>
        </span>
      )}
    </React.Fragment>
  );
};

export default Projects;
