import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import './index.css'


const Pwinput = withRouter(({ history }) => (
    
    <input id="pw-input" autoComplete="off" style={{backgroundColor: "#F8F8F8", border: "none",
            borderRadius: "8px", width: "100%", maxWidth: "300px", height: "40px", textAlign: "center", fontSize: "1.3em", fontWeight: "300",
            fontFamily: "Open Sans"}} 
            onKeyDown={(e) => {
                
                if (e.key === 'Enter') {
                    // console.log("enter clicked")
                    // Check input, client-side check
                    if (e.target.value == "darwin") {
                        localStorage.setItem('token', "somerandomhash8ncsa78g23liadvn");
                        // Force to goto home
                        // this.props.history.push("/");
                        // console.log("in here");
                        history.push('/')

                        // const ShowTheLocationWithRouter = withRouter(ShowTheLocation);
                        
                        // this.props.router.push('/')
                        // props.history.push('/foo')

                    } else {
                        localStorage.clear();
                    }
                }
            }}>
    </input>
  ))

class Login extends React.Component {

    render() {
        return (
            <div style={{margin: "auto", marginTop:"39vh", textAlign: "center"}}>
                <h2 style={{fontSize: "1.4em", fontWeight: "600"}}>Enter Password</h2>

                <Pwinput></Pwinput>

                <p style={{marginTop: "25px"}}>
                    <a style={{fontSize: "0.7em", fontWeight: "400", marginTop: "50px", color: "#A3A3A3"}} href="mailto:koh.terai@gmail.com?Subject=Requesting%20Portfolio%20Access" target="_top">I don't have a password</a>

                </p>

                {/* <Button2></Button2> */}
                {/* <div>
                    <div className="button-text" style={{
                    textAlign: "center",
                    margin: "30px 10px"}}>
                        <a target="_blank" href={this.props.url} className="button-wrapper" style={{
                        textDecoration: "none"}}>
                            <div className="button-content">
                                Enter
                            </div>
                        </a>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Login;