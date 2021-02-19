import { ErrorPage } from "../components";

import React from "react";
import Layout from "../layouts/index";

const PageNotFound = ({ location }) => {
  return (
    <Layout location={location}>
      <ErrorPage />
    </Layout>
  );
};

export default PageNotFound;
