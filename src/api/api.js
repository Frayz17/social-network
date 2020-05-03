import * as axios from "axios";

const configuredAxios = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "c6565346-28dd-47aa-9622-89a200214d02",
  },
});

export const usersApi = {
  getUsers: (currentPage, pageSize) => {
    return configuredAxios
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
};

export const followApi = {
  follow: (userId) => {
    return configuredAxios
      .post(`follow/${userId}`)
      .then((response) => response.data);
  },

  unFollow: (userId) => {
    return configuredAxios
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};

export const profileApi = {
  getUserProfile: (userId) => {
    return configuredAxios.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const authApi = {
  getMyAccountInfo: () => {
    return configuredAxios.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
};
