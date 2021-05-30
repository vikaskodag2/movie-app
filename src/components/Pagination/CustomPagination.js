import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import "./CustomPagination.css";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const CustomPagination = ({ totalPages, setPage, curPage }) => {
  const handlePageChange = (e) => {
    setPage(+e.target.textContent);
    window.scroll(0, 0);
  };

  return (
    <div className="pagination">
      <ThemeProvider theme={darkTheme}>
        <Pagination
          onChange={handlePageChange}
          count={totalPages}
          shape="rounded"
          page={curPage}
          color="primary"
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
