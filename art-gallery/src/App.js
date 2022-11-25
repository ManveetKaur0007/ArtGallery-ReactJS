import Container from '@mui/material/Container'; 
import Grid from '@mui/material/Grid';
import './App.css';

function App() {
  return (
    <Container maxWidth="sm" style={{backgroundColor: "lightblue", fontFamily:"cursive"}}>
    <Grid item xs={12} style={{textAlign:"center"}}>
        <h1>The Art Gallery</h1>
    </Grid>
    <Grid item xs={12}>
      <nav>navigation area</nav>
    </Grid>
    <Grid item xs={12}>
        <p>Art is often considered the process or product of deliberately arranging elements in a way that appeals 
        to the senses or emotions. It encompasses a diverse range of human activities, creations and ways of expression, 
        including music, literature, film, sculpture and paintings</p>
    </Grid><br/><br/>
    <Grid item xs={12}>
        Project Made By:<br/>
            <a href="https://manveetkaur0007.wixsite.com/index">Manveet Kaur</a><br/>
            <a href="http://file:///F:/DevFolio/index.html">Simranjit Kaur</a>
        </Grid>
    </Container>
  );
}

export default App;
