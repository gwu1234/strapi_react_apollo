import "./App.css";
import Home from "./Home";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:1337/graphql",
  });

  return (
    <ApolloProvider client={client}>
       <Home/> 
    </ApolloProvider>
  );
}

export default App;
