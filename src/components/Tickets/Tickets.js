import React from 'react';
import moment from 'moment';
import {  Button } from '@mui/material';
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

const Tickets = ({ projects }) => {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <Title>Tickets</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Assigned To</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Created Date</TableCell>
            <TableCell>Ticket Status</TableCell>
            <TableCell align='right'>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {projects &&
            projects.slice(0, 3).map((project) => (
              <TableRow key={project._id}>
                <TableCell >{project.projectName}</TableCell>
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
                    onClick={preventDefault}
                    sx={{ mt: 3 }}
                  />
                </TableCell>
              </TableRow>
            ))} */}
        </TableBody>
      </Table>

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
          onClick={preventDefault}
          style={{ textDecoration: 'none' }}
        >
          See all...
        </Link>
        <Button variant='contained' onClick={
          ()=> navigate('/create-ticket')
        }>+ Create New Ticket</Button>
      </span>
    </React.Fragment>
  );
};

export default Tickets;
