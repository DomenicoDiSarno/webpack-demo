// import _ from 'lodash';

function component() {
    import(/* webpackChunkName: "ciaone" */ 'lodash').then(
        ({default: _}) => {
            const element = document.createElement('div');

            element.innerHTML = _.join(['Hello', 'webpack'], ' ');

            return element;
        }
    );
  }

  document.body.appendChild(component());
