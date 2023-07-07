import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import JobInfo from './components/JobInfo';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setJobs(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    // setTimeout(() => {
    fetchData();
    // }, 2000);
  }, []);

  if (isLoading) {
    return (
      <main>
        <section>
          <Loading />
        </section>
      </main>
    );
  }

  return (
    <main>
      <section>
        <JobInfo key={jobs[0].id} job={jobs[0]} />
      </section>
    </main>
  );
};
export default App;
