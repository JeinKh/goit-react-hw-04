import { useEffect } from "react";
import { useState } from "react";
import { fetchPhotos } from "../services/api";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import ErrorMassage from "./ErrorMessage/ErrorMassage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoadinng, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const res = await fetchPhotos(query, page);
        setResults((prev) => [...prev, ...res.results]);
        setTotal(res.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = (query) => {
    setQuery(query);
    setResults([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSetQuery} />
      {isLoadinng && <Loader />}
      {isError && <ErrorMassage />}
      {total > page && !isLoadinng && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
    </div>
  );
};

export default App;
