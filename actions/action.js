import * as actionTypes from './actionTypes';

const galleryRequested = () => {
    return {
        type: actionTypes.GALLERY_REQUESTED
    }
}

const galleryLoaded = (payload) => {
    return {
        type: actionTypes.GALLERY_LOADED,
        payload
    }
}


export {
    galleryRequested,
    galleryLoaded,
}