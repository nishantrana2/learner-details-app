import React, { Component } from "react";
import classes from "./Navbar.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import Button from "../UI/Button/Button";

import { getUser } from "../../store/reducer";
import { connect } from "react-redux";



class Navbar extends Component {
    state = {
        hover: false,
    };

    toggleHover = () => {
        this.setState({ hover: !this.state.hover });
    };

    render() {
        var name;
        this.props.auth ? name="Sign In" : name="yoyo";
        return (
            <div className={classes.Navbar}>
                <div className={classes["Item"]}>
                    <a href="/">
                        <NavigationItem reload link="/" logo name="L E A R N E R S" />
                        
                       
                    </a>
                </div>
                
               <Button
              
               
               clicked={() => this.props.setAuthHandler()}
               name={!this.props.auth ? "Sign In": "Viewer"}
               
                />

            
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: getUser(state),
});

export default connect(mapStateToProps)(Navbar);
