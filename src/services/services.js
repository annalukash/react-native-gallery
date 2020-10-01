export default class GalleryServices {
    constructor() {
        this._baseApi = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'
    }

    getGalleryList = async () => {
        const response = await fetch(this._baseApi);

        return await response.json();
    }
}