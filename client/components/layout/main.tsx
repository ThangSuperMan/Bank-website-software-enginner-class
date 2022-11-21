import React from 'react'
import Footer from '../footer'
import Navbar from '../navbar'

interface Props {
  children: React.ReactElement
  asPath: string
}

const Layout: React.FC<Props> = (props) => {
  const { children, asPath } = props

  return (
    <div>
      <Navbar asPath={asPath} />
      {children}
      <Footer />
    </div >
  )
}

export default Layout
