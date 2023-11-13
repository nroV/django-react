import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loginuser,registeruser } from "../service/action/Auth";
import {LoginUrl,SignUpUrl} from "../service/constants/ApiUrl"
import { RotatingLines } from 'react-loader-spinner'
export default function Register({isauth,setAuth,}) {
  const [isloading, setLoading] = useState(false);
  const [iserror, setError] = useState(false);

  const [token, setToken] = useState(false);


  const navigation = useNavigate()

    const [payload,setPayLoad] = useState(


      {

        "first_name":"",
        "last_name":"",
        "username":"",
        "email":"",
        "password":""
        }
    )
      
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
        const response = await Loginuser(SignUpUrl, payload);
  
        console.log(response.status);
  
        if (response.ok) {
          const res = await response.json();
  
          // console.log(res)
  
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
    console.log(payload)
  return (
    <main className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-md-6 col-lg-5">
        <card className="card p-5 my-5">
          <top>
            <h4>Register</h4>
          </top>
          <hr />
          <div className="card-body p-0">
            <form onSubmit={(e)=>submitform(e)}>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Firstname
                </label>
                <input
                  type="text"
                  name="first_name"
                  class="form-control"
                  onChange={(e)=>handlechangevalue(e)}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
            
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Lastname
                </label>
                <input
                    type="text"
                    name="last_name"
                    onChange={(e)=>handlechangevalue(e)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
            
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  onChange={(e)=>handlechangevalue(e)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
            
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={(e)=>handlechangevalue(e)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={(e)=>handlechangevalue(e)}
                  class="form-control"
                  id="exampleInputPassword1"
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
              <button type="submit" class="btn btn-dark w-100">
                Login
              </button>
            </form>

            <Link to={'/login'} className='nav-link text-decoration-none text-center py-2'>
            
              Already have an account 
            </Link>
          </div>
        </card>
      </div>
    </div>
  </main>
  )
}
