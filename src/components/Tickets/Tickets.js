import React from 'react';
import moment from 'moment';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../layout/Title';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { useNavigate } from 'react-router';


const Tickets = ({ tickets }) => {
  const navigate = useNavigate();

  return (
    <React.Fragment >
      <Title >Tickets</Title>
      <span
            style={{
              marginLeft:'auto',
              marginRight:'0'
            }}
          >
            <Button
              variant='contained'
              color='success'
              onClick={() => navigate('/create-ticket')}
            >
              + Create New Ticket
            </Button>
          </span>
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
          {tickets &&
            tickets.map((ticket) => (
              <TableRow key={ticket._id}>
                <TableCell>{ticket.title}</TableCell>
                <TableCell>
                  {ticket.developer ? ticket.developer : 'Unassigned'}
                </TableCell>
                <TableCell>{ticket.priorityLevel}</TableCell>
                <TableCell>{ticket.createdAt}</TableCell>
                <TableCell>{ticket.ticketStatus}</TableCell>
                <TableCell align='right'>
                  <ZoomInIcon
                    color='primary'
                    href='#'
                    sx={{ mt: 3 }}
                    onClick={()=>{navigate(`/ticket-details/${ticket._id}`)}}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>


    </React.Fragment>
  );
};

export default Tickets;
