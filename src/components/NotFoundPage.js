import React from "react";

import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    404! - <Link to="/"> Home </Link>
  </div>
);

// into AppRouter
export default NotFoundPage;
