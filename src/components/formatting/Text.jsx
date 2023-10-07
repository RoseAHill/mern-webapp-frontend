const Title = ({children, tw=""}) => {
  return (
    <div className={`text-3xl font-bold ${tw}`}>{children}</div>
  )
}

const Subtitle = ({children, tw=""}) => {
  return (
    <div className={`text-lg font-medium italic ${tw}`}>{children}</div>
  )
}

const Label = ({children, tw=""}) => {
  return (
    <div className={`font-mono ${tw}`}>{children}</div>
  )
}

export { Title, Subtitle, Label }