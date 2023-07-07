import { v4 as uuidv4 } from 'uuid';

import Duties from './Duties';

const JobInfo = ({ currentItem }) => {
  const { title, company, dates, duties } = currentItem;

  return (
    <article>
      <h1>{title}</h1>
      <span>{company}</span>
      <p className="date">{dates}</p>
      <ul>
        {duties.map((duty) => {
          return <Duties key={uuidv4()} duty={duty} />;
        })}
      </ul>
    </article>
  );
};
export default JobInfo;
