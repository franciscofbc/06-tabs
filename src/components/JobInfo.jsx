import Duties from './Duties';

const JobInfo = ({ job }) => {
  const { title, dates, duties, company } = job;

  return (
    <article>
      <h1>{title}</h1>
      <span>{company}</span>
      <p>{dates}</p>
      <ul>
        {duties.map((duty, index) => {
          return <Duties key={index} duty={duty} />;
        })}
      </ul>
    </article>
  );
};
export default JobInfo;
