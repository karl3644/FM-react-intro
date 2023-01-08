import { useState, lazy, Suspense } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Components
// import SearchParams from "./SearchParams";
// import Details from "./Details";
import AdoptedPetContext from "./AdoptedPetContext";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      suspense: true,
    },
  },
});

const App = () => {
  // entire useState hook is passed. this allows child components to update the value
  const adoptedPet = useState(null);

  return (
    <QueryClientProvider client={queryClient}>
      <AdoptedPetContext.Provider value={adoptedPet}>
        <Suspense
          fallback={
            <div className="loading-pane">
              <h2 className="loader">🍕</h2>
            </div>
          }
        >
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="/" element={<SearchParams />}></Route>
          </Routes>
        </Suspense>
      </AdoptedPetContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
