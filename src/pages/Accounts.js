import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
import { BlogPostCard } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';

import AddAccountModal from './addAccountModal';


export default function BlogPage() {
  const [dialog, dialogOpen] = useState(false)

  const handleDialogOpen = () => {
    dialogOpen(!dialog);
  };
  return (
    <>
      <Helmet>
        <title> Dashboard: Blog | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Accounts
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleDialogOpen}>
            New Account
          </Button>
          <AddAccountModal dialog={dialog} dialogOpen={dialogOpen} />
        </Stack>

        {/* <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack> */}

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
}