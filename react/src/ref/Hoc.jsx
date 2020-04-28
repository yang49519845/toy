import React from "react"

function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log("old props", prevProps)
      console.log("new props", this.props)
    }
    render() {
      const { forwardedRef, ...rest } = this.props
      return <WrappedComponent ref={forwardedRef} {...rest} />
    }
  }
  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }

  // 在 DevTools 中为该组件提供一个更有用的显示名。
  // 例如 “ForwardRef(logProps(MyComponent))”
  const name = WrappedComponent.displayName || WrappedComponent.name;
  forwardRef.displayName = `logProps(${name})`;

  return React.forwardRef(forwardRef);
}

export default logProps
