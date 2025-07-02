import { Link } from "react-router-dom";

export function NotFoundPage() {
    return (
      <div>
        <h3>404 Page Not Found </h3>
        <Link to ="/"> Go back home</Link>
      </div>
    );
  }