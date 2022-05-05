import { getData } from 'helpers/getData';
import React from 'react';
import { loadPosts, PostsType, setLoading } from 'store/slices/postsSlice';
import { AppDispatch } from 'store/store';
import { ParamsType, PostType } from 'types/';

// w/o redux
export const handleLoad = async (
  setData: React.Dispatch<PostType[] | null>,
  page: number,
  params? : ParamsType,
) => {
  const res: PostType[] = [];
  await getData(`/api/${page}`, { params }).then((data) => res.push(...data.ans));
  if (res && res.length) {
    setData(res);
  }
};

// w redux
export const getRepos = (
  page: number,
  params : ParamsType,
) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  const response = await getData(`/api/${page}`, { params });
  const a: PostsType = {};
  a[page] = response.ans;
  dispatch(loadPosts(a));
};
