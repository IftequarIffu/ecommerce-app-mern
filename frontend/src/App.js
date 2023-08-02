import { Container } from 'react-bootstrap'
import Header from './components/Header'
import React from 'react'
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Header />
    <main>
      <Container>
        <Outlet />
      </Container>
    <Footer />
    </main>
    </>
  )
}

export default App