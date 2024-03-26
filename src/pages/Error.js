import React from "react";
import Cover from "../components/Cover";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import GoToTop from "../components/GoToTop";
export default function Error() {
  return (
    <Cover cover="defaultCover">
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
      <GoToTop />
    </Cover>
  );
}
