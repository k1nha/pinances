import axios from "axios";
import { cookies } from "next/headers";

const token = cookies().get("tknpina");

export const HTTP = axios.create({
  baseURL: "http://localhost:3000/api/",
});

if (token) {
  HTTP.defaults.headers["Authorization"] = `Bearer ${token}`;
}
