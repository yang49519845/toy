import React from 'react';

function MyComponent(props) {
  /* 使用 props 渲染 */
  return <div>background: {props.color}</div>;
}
function areEqual(/** prevProps, nextProps */) {
  /*
  如果把 nextProps 传入 render 方法的返回结果与
  将 prevProps 传入 render 方法的返回结果一致则返回 true，
  否则返回 false
  */
}
export default React.memo(MyComponent, areEqual);
