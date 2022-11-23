const When = ({ children, predicate }) => {
  if (!predicate) {
    return <></>
  }

  return <>{children}</>
}

export { When }