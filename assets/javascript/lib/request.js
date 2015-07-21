/**
 * Get resource from supplied url and return as Promise
 * @param url
 * @returns {Promise|*|function(): Promise}
 */
function get(url) {
    return new Promise(function (resolve, reject) {
        let req = new XMLHttpRequest();

        req.open('GET', url, true);

        req.onload = function () {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    var json;

                    try {
                        json = JSON.parse(req.responseText);
                        resolve(json);
                    } catch(err) {
                        reject(Error(err.message));
                    }
                }
            }
        }

        req.onerror = function () {
            reject(Error(req.statusText))
        }

        req.send();
    });
}

export default {
    get
};