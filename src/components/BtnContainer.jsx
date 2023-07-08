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
          className={
            currentItem.company === job.company ? 'btn btn-active' : 'btn'
          }
        >
          {job.company}
        </button>
      ))}
    </menu>
  );
};

export default BtnContainer;
