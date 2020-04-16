import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Results from './components/Results';
import SearchForm from './components/SearchForm';
import Grid from '@material-ui/core/Grid';
import Navbar from './components/Navbar';
import Error from './components/Error';
import Loading from './components/Loading';

function App() {
  const [busResults, setBusResults] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)
  // const [loading, setLoading] = useState(false);

  const searchHandler = value => {
    setSearch(value);
  };

  useEffect(() => {
    // Axios Config
    const busAPI = `https://api.translink.ca/rttiapi/v1/stops/${search}/estimates?apikey=6YFw3JVqJF5VEsg2eqFs`;
    const axiosHeaders = {
      'content-type': 'application/JSON',
    };
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(busAPI, { axiosHeaders });
        setBusResults(response.data);
      } catch (error) {
        // console.log(error);
        setError(true);
        setSearch('');
      } finally {
        setLoading(false);
      }
    };
    if (search === '') {
      console.log('not searching');
    } else {
      setError(false);
      fetchData();
      
    }
  }, [search]);

  // console.log(busResults);

  return (
    <Grid container direction="column" spacing={0}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item container>
        <Grid item xs={2} sm={2} />
        <Grid item xs={12} sm={8}>
          <SearchForm searchHandler={searchHandler} search={search} />
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={2} sm={2} />
        <Grid item xs={12} sm={8}>
          {error ? <Error /> : <Results busResults={busResults} />}
          {loading ? <Loading /> : null }
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
