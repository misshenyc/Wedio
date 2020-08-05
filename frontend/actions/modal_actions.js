export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => {
    return {
        type: OPEN_MODAL,
        modal
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};

export const openCreateModal = () => dispatch => {
    dispatch(openModal('create'));
};

export const openEditModal = () => dispatch => {
    dispatch(openModal('edit'));
};

export const closeCreateModal=() => dispatch => {
    dispatch(closeModal());
}
