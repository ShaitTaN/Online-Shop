import React, { FC } from "react";
import ContentLoader from "react-content-loader";

const Loader: FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={250}
      height={300}
      viewBox="0 0 250 300"
			backgroundColor="#fff"
			foregroundColor="#d7b399"
    >
      <rect x="0" y="0" rx="0" ry="0" width="NaN" height="NaN" />
      <rect x="0" y="0" rx="22" ry="22" width="250" height="300" />
    </ContentLoader>
  );
};

export default Loader;
