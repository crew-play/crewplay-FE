import { decode } from "js-base64";

export const decodeToken = () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJwcm92aWRlcklkIjoiMzgwMzQwOTUzMSIsIm5pY2tuYW1lIjoi7Ket7Kek7ZWc7J6Q65GQIn0.kWN8NQs4oZ5IcVvr2neB_aAqxTDXeSpBmLcDDFzH44A";
  const payload = token.split(".")[1];
  const decodePayload = decode(payload);
  console.log(decodePayload);
};
