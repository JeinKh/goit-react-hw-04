import { useEffect } from "react";
import { useState } from "react";
import { fetchPhotos } from "../services/api";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import ErrorMassage from "./ErrorMessage/ErrorMassage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoadinng, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const openModal = (imgUrl) => {
    setIsModalOpen(true);
    setCurrentImg(imgUrl);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImg("");
  };

  useEffect(() => {
    const getData = async () => {
      if (!query) {
        return;
      }
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetchPhotos(query, page);
        setResults((prev) => [...prev, ...response]);
        setTotal(response.total_pages);
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
      <ImageGallery items={results} onImageClick={openModal} />
      {isLoadinng && <Loader />}
      {isError && <ErrorMassage />}
      {total > page && !isLoadinng && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      <Toaster />
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageUrl={currentImg}
      />
    </div>
  );
};

export default App;
