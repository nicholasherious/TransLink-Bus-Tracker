import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Results from './components/Results';
import SearchForm from './components/SearchForm';
import Grid from '@material-ui/core/Grid';
import Navbar from './components/Navbar';
import Error from './components/Error';
import Loading from './components/Loading';
import Example from './components/Example';
import BusAlert from './components/BusAlert';

function App() {
  const [busResults, setBusResults] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [example, setExample] = useState(false);
  const [alert, setAlert] = useState(false);
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
        if (response.data.length === 0) {
          setAlert(true);
        }
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
      setExample(true);
    } else {
      setAlert(false);
      setError(false);
      setExample(false);
      fetchData();
    }
  }, [search]);

  // console.log(busResults);
  // console.log(alert)

  return (
    <Grid container direction="column">
      <Grid item>
        <Navbar search={search} />
      </Grid>
      <Grid item container>
        <Grid item xs={1} sm={2} />
        <Grid item xs={10} sm={8}>
          <SearchForm searchHandler={searchHandler} search={search} />
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={1} sm={2} />
        <Grid item xs={10} sm={8}>
          {example ? <Example /> : null}
          {error ? <Error /> : <Results busResults={busResults} />}
          {loading ? <Loading /> : null}
          {alert ? <BusAlert /> : null}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
