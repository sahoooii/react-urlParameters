import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページ</h1>
      <Link to="/page2/999">URL Parameters</Link>
    </div>
  );
};
