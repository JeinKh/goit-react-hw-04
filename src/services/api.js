import axios from "axios";

export const fetchPhotos = async (query, page = 1, per_page = 5) => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/?client_id=ENy3U_6hZ63GrxnCWX1HQ2HokdsFBjo2O4Dl2a5m_e0`,
    {
      params: {
        query: query,
        page,
        per_page,
      },
    }
  );
  return response.data;
};
