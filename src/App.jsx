import { useEffect, useState } from 'react';

import Loading from './components/Loading';
import JobInfo from './components/JobInfo';
import BtnContainer from './components/BtnContainer';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState({});

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setJobs(data);

      setCurrentItem(data[0]);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
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
      <section className="container">
        <BtnContainer
          jobs={jobs}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
        <JobInfo currentItem={currentItem} />
      </section>
    </main>
  );
};
export default App;
