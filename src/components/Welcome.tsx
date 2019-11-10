import React from 'react'

interface Props {
    name: any
  }

class Welcome extends React.Component<Props>{
render()
{
    return <h1>Welcome {this.props.name} </h1>
}
}

export default Welcome;