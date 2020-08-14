import React, { Component } from "react";

import classes from "./Learners.module.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchClientsAction from "../../bloc/fetchClients";
import { getClients,getClientPending,getClientError } from "../../store/reducer";
import LearnerCard from "../UI/LearnerCard/LearnerCard";
import { NavLink } from "react-router-dom";

class Learners extends Component {
    componentDidMount() {
        this.props.fetchClients();
    }

    shouldComponentUpdate(prevProps, prevState) {
        if (prevProps.clients === this.props.client) return false;
        return true;
    }

    render() {

        if(this.props.pending) {
            return <h1>Please wait while we fetch Learners..</h1>
        }

        if(this.props.error) {
            return <h1>Something went wrong please try refreshing</h1>
        }
        
        const learners = [];
        this.props.clients.forEach((client) =>
        learners.push({
                id: client._id,
                name: client.name,
                imgSrc: client.imageURL,
                batch: client.batch
            })
        );
        console.log(learners);
        return (
            <div className={classes.Learners}>
                {/* <h1>Learners List</h1> */}
                <div className={classes.Card}>
                    {learners.map((learner) => (
                        <NavLink to="/detail" key={learner.id}>
                            <LearnerCard
                           
                                name={learner.name}
                                batch={learner.batch}
                                
                                imgSrc ={learner.imgSrc}
                                clicked={() =>
                                    this.props.detailHandler(learner)
                                }
                            />
                        </NavLink>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    clients: getClients(state),
    pending: getClientPending(state),
    error: getClientError(state)
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            fetchClients: fetchClientsAction,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Learners);
