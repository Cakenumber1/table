import { getData } from 'helpers/getData';
import React from 'react';
import { PostType } from 'types/PostType';

export const handleSearch = async (setSearchRes: React.Dispatch<PostType[]>, str: string) => {
  const res: PostType[] = [];
  if (str.length) {
    // eslint-disable-next-line no-return-assign
    await getData('/api/', { params: { str } }).then((data) => res.push(...data.result));
    if (res && res.length) {
      setSearchRes(res);
    } else {
      setSearchRes([]);
    }
  }
};
