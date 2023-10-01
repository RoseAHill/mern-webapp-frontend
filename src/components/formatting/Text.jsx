const Title = ({children}) => {
  return (
    <div className="text-3xl font-bold">{children}</div>
  )
}

const Subtitle = ({children}) => {
  return (
    <div className="text-lg font-medium italic">{children}</div>
  )
}

const Label = ({children}) => {
  return (
    <div className="font-mono">{children}</div>
  )
}

export { Title, Subtitle, Label }