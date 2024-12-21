import {NavLink, useRouteError} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          
          fontSize: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Opps! Error an occurred</h3>
        {error ? <p>{error.data}</p> : null}
        <NavLink to="/">
          <button>Go to Home</button>
        </NavLink>
      </div>
    </>
  );
};

export default ErrorPage;
