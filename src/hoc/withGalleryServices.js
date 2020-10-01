import React from 'react';
import GalleryServicesContext from '../galleryContext/galleryContext';

const WithGalleryServices = () => (Wrapped) => {
    return (props) => {
        return(
            <GalleryServicesContext.Consumer>
                {
                    (GalleryService) => {
                        return <Wrapped {...props} GalleryService={GalleryService}/>
                    }
                }
            </GalleryServicesContext.Consumer>
        )
    }
};

export default WithGalleryServices;