/**
 * Iterate over a generator
 * @param generator
 * @returns Promise
 */
function process(generator) {
    let cursor = generator();

    function iterate(result) {
        if (result.done) {
            return result.value;
        } else {
            return result.value.then(function (res) {
                // Arguments passed to next() become the value returned by yield
                return iterate(cursor.next(res));
            });
        }
    }

    // The first call to next() is a special case where any argument passed to it is lost
    return iterate(cursor.next());
}

export default {
    process
};