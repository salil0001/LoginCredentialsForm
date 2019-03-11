import React, { Component } from 'react'

export default class Signup extends Component {
    render() {
        return (
            <div>
                <div className="subheads">
                    <div>
                        Sign Up to the Nvest
                     </div>
                    <div className="headd">
                        The First Step towards earning money.
                      </div>
                </div>  
                <div className="col-md-10 amendform">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input required type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        
                        <div className="row submitbuttons">
                            <div style={{ paddingRight: '10px' }}>
                                <div className=""><button type="submit" class="btn buttonspecifications">Register </button></div>
                            </div>
                            <div className=""><button class="btn buttonspecifications1"><i class="fab fa-facebook-square"></i> Facebook</button></div>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
