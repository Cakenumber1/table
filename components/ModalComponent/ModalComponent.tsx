import { Box, Modal, Typography } from '@mui/material';
import React from 'react';
import { PostType } from 'types/PostType';

import { useStyles } from './style';

type Props = {
  searchReq: PostType | null,
  setSearchReq: React.Dispatch<React.SetStateAction<PostType | null>>,
};

const ModalComponent: React.FC<Props> = ({
  searchReq,
  setSearchReq,
}) => {
  const classes = useStyles();

  return (
    <Box>
      <Modal
        open={!!searchReq}
        onClose={() => setSearchReq(null)}
        aria-labelledby="modal-search"
      >
        <Box className={classes.modal}>
          <Typography id="modal-search-result">
            {searchReq?.body}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalComponent;
