import React, { Component } from "react";
import { Route } from "react-router-dom";

import { getUser } from "../../store/reducer";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import Learners from "../../components/Learners/Learners";
import LearnerDetail from "../../components/LearnerDetail/LearnerDetail";
// import SignInForm from "../../components/SignInForm/SignInForm";
class LearnerDetails extends Component {
    state = {
        
        show: false,
        selectedLearner: null,
        auth: false
    };

    detailHandler = (learner) => {
        this.setState({ selectedLearner: learner });
    };
    setAuthHandler = () => {

        this.setState({ auth: true });
        console.log(this.state.auth)
    }

    render() {
        return (
            <React.Fragment>
                <Navbar cancel={this.popModal} showModal={this.showModal} setAuthHandler={this.setAuthHandler} auth={this.state.auth} />
                {/* <Navbar /> */}
                <Route
                   path="/"
                   exact
                   render={() => (
                                    <Learners detailHandler={this.detailHandler} />
                                )}
                />
                
                <Route
                   exact
                   path="/detail"
                   render={this.state.auth ? () => (
                                     <LearnerDetail
                                       {...this.props.history}
                                       learner={this.state.selectedLearner}
                            />
                        ): null }
                    />
                   
            </React.Fragment>

        )
        }

    }

    const mapStateToProps = (state) => ({
        user: getUser(state),
    });
    
    export default connect(mapStateToProps)(LearnerDetails);
