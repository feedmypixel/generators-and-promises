/**
 * Display user details
 * @param user
 * @param store
 */
function userDetails({user, store}) {
    let {name, age, hairColour, eyeColour} = store[user.id];
    let div = document.createElement('div');

    div.textContent = `User ${name} is ${age} and has ${hairColour} hair and ${eyeColour} eyes!`;
    document.body.appendChild(div);
}

export default {
    userDetails
};
