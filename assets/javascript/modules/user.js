import request from '../lib/request';

const DATA_LOCATION = 'data'
const USER_ID_URL = `${DATA_LOCATION}/userId.json`;
const USER_STORE_URL = `${DATA_LOCATION}/userStore.json`;

/**
 * Synchronous generator to provide user details by obtaining user id from one location and user details from another
 * @returns {{userId: *, userDetail: *}}
 */
function *getSync() {
    /* NOTE I would typically use an endpoint to request the user data via ID but this is not what this
     investigation is about */
    let user = yield request.get(USER_ID_URL);
    let store = yield request.get(USER_STORE_URL);

    return {user, store};
}

/**
 * Parallel generator to provide user details and user store data from two locations
 * @returns {{userId: *, userDetail: *}}
 */
function *get() {
    let user = request.get(USER_ID_URL);
    let store = request.get(USER_STORE_URL);

    return {user: yield user, store: yield store};
}

export default {
    get,
    getSync
};