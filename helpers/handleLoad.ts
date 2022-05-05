import { getData } from 'helpers/getData';
import React from 'react';
import { loadPosts, setLoading } from 'store/slices/postsSlice';
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
  dispatch(loadPosts(response.ans));
};
