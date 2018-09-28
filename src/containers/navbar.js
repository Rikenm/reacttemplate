import React, {Component} from "react";
import {Link} from "react-router-dom";




export default class NavBar extends Component{



  render(){
    
    return (
       <nav className="navbar navbar-expand fixed-top">

        <div className = "container-fluid" style={{fontFamily:"Bungee Inline",fontSize:"20px"}}>
            <Link to = "/" className="navbar-brand">
                 {/* <img src={} style={{width: '60px', height: '60px'}}/> */}
            </Link>

            { true == false ? (
                      <ul className="nav navbar-nav navbar-right collapse-lg" style={{ paddingTop: "15px"}}>
                      <li>
                         <Link to ={`/users/${this.props.currentUser.user.id}`}>Profile</Link>
                      </li>
                      <li>
                                <a style={
                                    {color:"#fff"}
                                } onClick ={this.logout}>
                               <Link to ={`/login`}>Logout</Link>

                                </a>
                      </li>

                      </ul>

            ):

                        <ul className="nav navbar-nav navbar-right"  style={{ paddingTop: "15px"}}>
                            <li>
                                <Link to ="/login">Log in</Link>
                            </li>

                            <li>
                                <Link to ="/signup">Sign Up</Link>
                            </li>
                        </ul>



            }
        </div>

       </nav>





    )
  }
}

function mapStateToProps(state){
return {
    currentUser: state.currentUser
}

}

// export default connect(mapStateToProps,{logout})(NavBar)
