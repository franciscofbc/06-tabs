import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const Duties = ({ duty }) => {
  return (
    <li>
      <MdOutlineKeyboardDoubleArrowRight className="icon" />
      <p>{duty}</p>
    </li>
  );
};
export default Duties;
