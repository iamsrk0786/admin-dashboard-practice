// import React from 'react';
// import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// import Header from './components/footer';

// function App() {
//   return (
//     <div style={{ display: 'flex' }}>
//       <div style={{ flexGrow: 1 }}>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Header />} />
//             {/* <Route path="/about" element={<h1>About</h1>} />
//             <Route path="/contact" element={<h1>Contact</h1>} /> */}
//           </Routes>  
//         </Router>
//       </div>
//     </div>
//   );
// }

// export default App;


import Typography from '@mui/material/Typography'
import Navbar from './components/Navbar';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import HeroSection from './components/HeroSection';
import { Container } from '@mui/material';
import CakeSection from './components/CakeSection';
import ContactUs from './components/ContactUs';


const theme = createTheme({
  palette: {
    primary: {
      main: '#864313',
    },
  },
});

function App() {
  return (
   <ThemeProvider theme={theme}>
       <Navbar />
       <Container>
          <HeroSection /> 
          <CakeSection />
          <ContactUs />
       </Container>
   </ThemeProvider>
  );
}

export default App;