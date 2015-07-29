import user from './modules/user';
import generatorUtil from './lib/generatorUtil';
import display from './modules/display';
import printError from './lib/utils/printError';

generatorUtil.process(user.getSync)
    .then(display.userDetails, printError)
    .catch(printError);

generatorUtil.process(user.get)
    .then(display.userDetails, printError)
    .catch(printError);