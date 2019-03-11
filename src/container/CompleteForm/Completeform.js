import React, { Component } from 'react'
import './completeform.css';
import Mainlogo from './images/Logo.png';
import Signin from '../Signin/Signin';
import Signup from '../Sign Up/Signup';
export default class Compeleteform extends Component {
  state = {
    signup: "Sign Up here",
    signup1: "Registered ?",
    signin: "Sign In Here",
    signin1: "Not Registered ?",
    switching: true,
  }
  togglesignsignup = () => {

    this.setState({

      switching: !this.state.switching
    })
  }
  render() {
    return (
      <div className="Signupform">
        <div className="signupparmet">
          <div className="leftform">
            <div style={{ paddingTop: '25px' }}>
              <img src={Mainlogo} className="imagespec" />
            </div>
            {this.state.switching ? <Signin /> : <Signup />}
            <div className="alreadyregistered">
             {this.state.switching? this.state.signin1: this.state.signup1}<span className="hoversignin" onClick={this.togglesignsignup}> {this.state.switching?this.state.signup:this.state.signin} </span>
            </div>

          </div>
          <div className="rightbarrr">
            <div className="inside">

              <div className="quotecorner">
                <p>-
                  “When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”
                </p>
                <p>
                  -Helen Keller
                  </p>
              </div>


            </div>

          </div>

        </div>
      </div>
    )
  }
}

{/* <div className="col-md-8 leftside">
          <img src={Mainlogo} className="logosettings" />

          <div>
            Welcome to Nvest GX Exchange
        </div>
          <div>
            <span className="moneyText">A time to raise your own money</span>
          </div>
          <div className="formdimension">
            <div className="col-md-8 offset-2">
              <form>
                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
                  </div>
                </div>
                <fieldset class="form-group">

                </fieldset>
                <div class="form-group row">
                  <div class="col-sm-2">Remember Me</div>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="gridCheck1" />
                      <label class="form-check-label" for="gridCheck1">
                        Sign In
                     </label>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                  </div>
                </div>
              </form>
            </div>
          </div>


        </div>
        */}
