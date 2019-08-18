const Index = () => {
  const displayText = (text: string) => {
    return (
      <span>{text}</span>
    )
  }

  return (
    <div>{displayText('Hello')}</div>
  )
}

Index.getInitialProps = async function() {
  return {}
}

export default Index