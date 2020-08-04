import React from 'react';
import { closeCreateModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateVideoContainer from '../videos/create_video_container'
// import { ProtectedRoute } from '../../util/route_util';

function Modal({ modal, closeModal }) {
    // debugger
    if (!modal) {
        return null;
    }
    switch (modal) {
        case 'create':
            // debugger
            return (
            <div className="modal-background" onClick={closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <i className="fas fa-times fa-lg " onClick={closeModal}></i>
                    <CreateVideoContainer />
                </div>
            </div>);
        default:
            return null;
    }
}

const msp = state => {
    // debugger
    return {
        modal: state.ui.modal,
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeCreateModal())
    };
};

export default connect(msp, mdp)(Modal);
