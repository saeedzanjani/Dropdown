// Pakages
import Routes from "./routes";
import { ThemeProvider } from "react-jss";

// Components
import Layout from "./layouts";

// Files
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
