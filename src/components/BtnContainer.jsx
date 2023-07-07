const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <menu>
      {jobs.map((job) => (
        <button
          type="button"
          key={job.id}
          onClick={() => {
            setCurrentItem(job);
          }}
          className="btn"
        >
          {job.company}
        </button>
      ))}
    </menu>
  );
};

export default BtnContainer;
