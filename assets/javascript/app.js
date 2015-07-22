import user from './modules/user';
import generatorUtil from './lib/generatorUtil';
import display from './modules/display';

generatorUtil.process(user.getSync)
    .then(display.userDetails)
    .catch(console.error.bind(console));

generatorUtil.process(user.get)
    .then(display.userDetails)
    .catch(console.error.bind(console));