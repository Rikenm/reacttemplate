import React from 'react';
import {Switch, Route,withRouter,Redirect} from "react-router-dom";

import Homepage from "../components/Homepage";

import Profile from "../components/Profile";


const Navigaton = (props) =>{

        return(<Switch>
            <Route exact path= "/" render = {props => 
                <div>
                    <Homepage></Homepage>
                </div> 
            }
            />

            <Route exact path= "/profile" render = {props => 
                <div>
                    <Profile/>
                </div> 
            }
            />



            <Route  render = {props => 
                <div>
                   Not found
                </div> 
            }
            />





             </Switch>
            )


}


export default withRouter(Navigaton)