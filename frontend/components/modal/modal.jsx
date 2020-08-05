import React from 'react';
import { closeCreateModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateVideoContainer from '../videos/create_video_container'
import EditVideoContainer from '../videos/edit_video_container';

function Modal({ modal, closeModal }) {
    
    if (!modal) {
        return null;
    }
    switch (modal) {
        case 'create':
            return (
            <div className="modal-background" onClick={closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <i className="fas fa-times fa-lg " onClick={closeModal}></i>
                    <CreateVideoContainer />
                </div>
            </div>);
        case 'edit':
            return (
                <div className="modal-background" onClick={closeModal}>
                rawr
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        <i className="fas fa-times fa-lg " onClick={closeModal}></i>
                        <EditVideoContainer />
                    </div>
                </div>);
        default:
            return null;
    }
}

const msp = state => {
    
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
