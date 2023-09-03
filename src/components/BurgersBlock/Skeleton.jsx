import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="menuMain__cart"
    speed={2}
    width={260}
    height={397}
    viewBox="0 0 250 397"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="79" y="266" rx="0" ry="0" width="117" height="36" />
    <rect x="105" y="311" rx="0" ry="0" width="72" height="28" />
    <rect x="11" y="4" rx="0" ry="0" width="250" height="240" />
    <rect x="67" y="349" rx="0" ry="0" width="144" height="50" />
  </ContentLoader>
);

export default Skeleton;
