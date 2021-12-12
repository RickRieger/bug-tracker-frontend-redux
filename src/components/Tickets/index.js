import {  useSelector } from 'react-redux';
import Tickets from './Tickets';

const TicketsWrapper = () => {
  const { tickets } = useSelector(
    (state) => state.tickets
  );
  return <Tickets tickets={tickets} />;
};

export default TicketsWrapper;
