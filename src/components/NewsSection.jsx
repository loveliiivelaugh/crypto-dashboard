import React, { useEffect, useState } from 'react';
import { Card, CardContent, CircularProgress, Grid, Typography } from '@mui/material';
// import { useApi } from '../hook';
import { bing } from '../api';

const NewsSection = () => {
  // const { news } = useApi();
  const [news, setNews] = useState([]);
  useEffect(() => {
    (async () => {
      const { value } = await bing.getNews();
      setNews(value);
    })();
  });
  return (
    <>
      <Typography variant="h2" gutterBottom>
        Top Stories in Crypto News
      </Typography>
      <Grid container>
        {news.length ? news.map(({ name, description, provider, datePublished, image, url }, i) => (
          <Grid key={i} item md={4}>
            <Card sx={{ m: 1, p: 1, cursor: 'pointer' }} onClick={() => window.open(url)}>
              <CardContent>
                <center>
                  <img src={image?.thumbnail.contentUrl} alt={name} style={{ width: '40%' }} />
                </center>
                <Typography variant="h5" gutterBottom>
                  {name}
                </Typography>
                <Typography variant="subtitle1" component="p" gutterBottom>
                  {description}
                </Typography>
                <Typography variant="subtitle2" component="p" textAlign="right">
                  {new Date(datePublished).getUTCDate()} {new Date(datePublished).toLocaleString('en-us', { month: 'long' })} {new Date(datePublished).getUTCFullYear()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )) : <CircularProgress />}
      </Grid>
    </>
  )
}

export default NewsSection;