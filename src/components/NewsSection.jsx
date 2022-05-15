import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { useApi } from '../hook';

const NewsSection = () => {
  const { news } = useApi();
  return (
    <Grid container>
      {news.map(({ name, description, provider, datePublished, image, url }, i) => (
        <Grid key={i} item md={3}>
          <Card sx={{ m: 1, p: 1 }} onClick={() => window.open(url)}>
            <CardContent>
              <img src={image?.thumbnail.contentUrl} alt={name} />
              <Typography variant="h5">
                {name}
              </Typography>
              <Typography variant="body1" component="p">
                {description}
              </Typography>
              <Typography variant="body1" component="p">
                <small style={{ color: '#555' }}>{datePublished}</small>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default NewsSection;