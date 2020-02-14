import React from "react";

// const withLog = WrappedComponent => {
//     return function WithLog(props) {
//         console.log(`<${WrappedComponent.name}/> props :`, props);
//         return <WrappedComponent {...props} />;
//     };
// };

const propsLogger = WrappedComponent => props => {
  console.log(`<${WrappedComponent.name}/> props :`, props);
  return <WrappedComponent {...props} />;
};

export default propsLogger;
