import React, { Component } from 'react'
import './Signin.css';
export default class Signin extends Component {
  render() {
    return (
      <div>
              <div className="subheads">
                <div>
                  Welcome to Nvest
                </div>
                <div className="headd">
                  Start raising your Money
             </div>
              </div>
              <div className="col-md-10 amendform">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <div className="row submitbuttons">
                    <div style={{ paddingRight: '10px' }}>
                      <div className=""><button type="submit" class="btn buttonspecifications">Get Started</button></div>
                    </div>
                    <div className=""><button class="btn buttonspecifications1"><i class="fab fa-facebook-square"></i> Facebook</button></div>

                  </div>
                </form>
              </div>
            </div>
    )
  }
}
