import * as React from 'react';
import Header from './componenets/Header/Header';
import Footer from './componenets/Footer/Footer'
import Container from './componenets/Container/Container';
interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = () => {
  return(
  
     
      <>
       <Header/>
       <Container/>
      <Footer/>
     </>
  );
};

export default App;

