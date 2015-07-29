import request from '../lib/request';

const DATA_LOCATION = 'data'
const USER_ID_URL = `${DATA_LOCATION}/userId.json`;
const USER_STORE_URL = `${DATA_LOCATION}/userStore.json`;

/**
 * Synchronous generator to provide user details by obtaining user id from one location and user details from another
 * @returns {*}
 */
function *getSync() {
    /* NOTE I would typically use an endpoint to request the user data via ID but this is not what this
     investigation is about */
    try {
        let user = yield request.get(USER_ID_URL);
        let store = yield request.get(USER_STORE_URL);

        return Promise.resolve({user, store});
    } catch (err) {
        return Promise.reject(err);
    }
}

/**
 * Parallel generator to provide user details and user store data from two locations
 * @returns {*}
 */
function *get() {

    try {
        let user = request.get(USER_ID_URL);
        let store = request.get(USER_STORE_URL);

        return Promise.resolve({user: yield user, store: yield store});
    } catch (err) {
        return Promise.reject(err);
    }
}

export default {
    get,
    getSync
};