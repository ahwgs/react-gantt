import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Context from "../../context";
import Dependence from "./Dependence";
var Dependencies = function Dependencies() {
  var _useContext = useContext(Context),
    store = _useContext.store;
  var dependencies = store.dependencies;
  return /*#__PURE__*/React.createElement(React.Fragment, null, dependencies.map(function (dependence) {
    return /*#__PURE__*/React.createElement(Dependence, {
      key: JSON.stringify(dependence),
      data: dependence
    });
  }));
};
export default observer(Dependencies);