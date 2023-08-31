import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CharityDetailsPage = () => {
  const { id } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [charity, setCharity] = useState<any>();

  useEffect(() => {
    const fetchCharity = async () => {
      const { data } = await axios.get(`/nonprofit/${id}`);

      setCharity(data?.data?.nonprofit);
    };

    fetchCharity();
  }, []);

  console.log(charity);

  return <div>CharityDetailsPage</div>;
};

export default CharityDetailsPage;
