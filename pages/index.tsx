import {
  Box,
} from '@mui/material';
import PaginationComponent from 'components/PaginationComponent';
import SearchComponent from 'components/SearchComponent';
import TableComponent from 'components/TableComponent';
import { getRepos } from 'helpers/handleLoad';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearPosts,
  setAll, setAsc, setPage, setSearch,
} from 'store/slices/postsSlice';
import { RootState } from 'store/store';
import { PostType } from 'types';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const page = useSelector((state: RootState) => state.posts.currentPage);
  const data = useSelector((state: RootState) => state.posts.posts);
  const search = useSelector((state: RootState) => state.posts.currentSearch);
  const asc = useSelector((state: RootState) => state.posts.currentAsc);
  const loading = useSelector((state: RootState) => state.posts.isLoading);

  const [searchRes, setSearchRes] = React.useState<PostType[] | null>(null);
  const [searchQ, setSearchQ] = React.useState<string>();

  const router = useRouter();
  const pageQuery = router.query.page ? Number(router.query.page) : 1;
  const searchQuery = router.query.search ? String(router.query.search) : 'id';
  const ascQuery = router.query.asc ? String(router.query.asc) : 'true';

  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // page refresh
  useEffect(() => {
    dispatch(setAll({ page: pageQuery, search: searchQuery, asc: ascQuery }));
  }, [ascQuery, pageQuery, searchQuery]);

  // load page or get from redux
  useEffect(() => {
    setSearchRes(null);
    if (!data[page]) {
      dispatch(getRepos(page, { sType: search, sDir: asc }));
    }
  }, [page]);

  // change sort
  useEffect(() => {
    dispatch(clearPosts());
    dispatch(getRepos(page, { sType: search, sDir: asc }));
  }, [search, asc]);

  // upd page
  const handlePage = (pageNew: number) => {
    window.history.pushState(null, '', `/?page=${pageNew}&search=${search}&asc=${asc}`);
    dispatch(setPage(pageNew));
  };

  // upd tags/asc
  const handleColumn = (colName: string) => {
    if (search === colName) {
      window.history.pushState(
        null,
        '',
        `/?page=${page}&search=${search}&asc=${asc === 'true' ? 'false' : 'true'}`,
      );
      dispatch(setAsc(asc === 'true' ? 'false' : 'true'));
    } else {
      window.history.pushState(null, '', `/?page=${page}&search=${colName}&asc=${asc}`);
      dispatch(setSearch(colName));
    }
  };

  return (
    <Box sx={{
      width: '1432px', height: '900px', display: 'flex', flexDirection: 'column',
    }}
    >
      <SearchComponent
        searchQ={searchQ}
        setSearchQ={setSearchQ}
        setSearchRes={setSearchRes}
      />
      <TableComponent
        searchRes={searchRes}
        data={data[page]}
        search={search}
        asc={asc}
        loading={loading}
        handleColumn={handleColumn}
      />
      <PaginationComponent
        page={page}
        pages={pages}
        handlePage={handlePage}
      />
    </Box>
  );
};

export default Home;
