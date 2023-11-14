import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loginuser } from "../service/action/Auth";
import { LoginUrl } from "../service/constants/ApiUrl";
import { RotatingLines } from "react-loader-spinner";
import ErrorAuth from "../component/ErrorAuth";
export default function Login({ isauth, setAuth }) {
  const [isloading, setLoading] = useState(false);
  const [iserror, setError] = useState(false);
  const [errormessage, setErrorMessage] = useState();
  const [token, setToken] = useState(false);

  const navigation = useNavigate();

  const [payload, setPayLoad] = useState({
    email: "",
    password: "",
  });
  function handlechangevalue(e) {
    e.preventDefault();

    const { name, value } = e.target;

    setPayLoad((pre) => {
      return {
        ...pre,

        [name]: value,
      };
    });
  }
  async function submitform(e) {
    e.preventDefault();
    console.log(payload);
    setLoading(true);

    try {
      const response = await Loginuser(LoginUrl, payload);
      console.log(response);
      console.log(response.status)

      if (!response.ok) {
        const res = await response.json();
        console.log(res);
        setErrorMessage(res);
        setError(true);
      }

      if(response.status === 400) {
        const res = await response.json();
        setErrorMessage(res)
      }
      if (response.ok) {
        const res = await response.json();

        console.log(res);

        setToken(res.token);
        localStorage.setItem("token", res.token);
        setAuth(true);
        navigation("/");
      } else {
        throw new Error("There has been error during communication");
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  console.log(token);
  console.log(errormessage);
  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <card className="card p-5 my-5">
            <top>
              <h4>Login</h4>
            </top>
            <div className="card-body p-0">
              <form onSubmit={(e) => submitform(e)}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  {iserror && (
                    <message>
                      <p className="text-danger">
                 
                        {errormessage.email} 
                      </p>
                    </message>
                  )}
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    f
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => handlechangevalue(e)}
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  {iserror && (
                    <message>
                      <p className="text-danger">
                 
                        {errormessage.password} 
                      </p>
                    </message>
                  )}
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => handlechangevalue(e)}
                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Remember me
                  </label>
                </div>

                {isloading && (
                  <div className={`container d-flex justify-content-center`}>
                    <RotatingLines
                      strokeColor="#4fa94d"
                      strokeWidth="5"
                      animationDuration="0.75"
                      color="#4fa94d"
                      width="46"
                      visible={true}
                    />
                  </div>
                )}

                {


                    iserror && <>
                    
                  <ErrorAuth      message=  {errormessage.message}/>
                    </>
                }

                {!isloading && (
                  <button type="submit" class="btn btn-dark w-100">
                    Login
                  </button>
                )}
              </form>
              <Link
                to={"/register"}
                className="nav-link text-decoration-none text-center py-2"
              >
                Create an account here
              </Link>
            </div>
          </card>
        </div>
      </div>
    </main>
  );
}
