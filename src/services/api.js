import axios from "axios";

export const fetchPhotos = async (query, page, per_page) => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/?client_id=ENy3U_6hZ63GrxnCWX1HQ2HokdsFBjo2O4Dl2a5m_e0`,
    {
      params: {
        query,
        page,
        per_page,
      },
    }
  );
  return response.data;
};
