import { useState } from "react";
import { Link } from "react-router-dom";

export function Signup({}) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    // TODO
  }

  return (
    <div id="page-content">
      <h1 className="text-center mt-4" style={{ margin: "30px" }}>
        Sign-up to Alpha-Blog
      </h1>
      <form>
        <div className="form-group row" style={{ margin: "10px" }}>
          <label className="col-2 col-form-label">Username</label>
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            ></input>
          </div>
        </div>

        <div className="form-group row" style={{ margin: "10px" }}>
          <label className="col-2 col-form-label">Email</label>
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            ></input>
          </div>
        </div>

        <div className="form-group row" style={{ margin: "10px" }}>
          <label className="col-2 col-form-label">Password</label>
          <div className="col-9">
            <input
              type="password"
              id="inputPassword3"
              autoComplete="new-password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            ></input>
          </div>
        </div>

        <div className="form-group row" style={{ margin: "10px" }}>
          <label className="col-2 col-form-label">Re-enter Password</label>
          <div className="col-9">
            <input
              type="password"
              id="inputPassword3"
              className="form-control"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              placeholder="Re-enter Password"
            ></input>
          </div>
        </div>

        <div className="form-group row" style={{ margin: "10px" }}>
          <div className="col-2"></div>
          <div className="col">
            <button
              type="button"
              onClick={onSubmit}
              className="btn btn-outline-success btn-block w-100"
            >
              Signup
            </button>
          </div>
          <div className="col">
            <Link to="/" className="btn btn-outline-danger w-100">
              Cancel
            </Link>
          </div>
          <div className="col-1"></div>
        </div>
      </form>
    </div>
  );
}
