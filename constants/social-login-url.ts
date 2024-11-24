// KAKAO
export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;

// NAVER
export const NAVER_LOGIN_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NAVER_CLIENT_ID}&state=${process.env.NEXT_PUBLIC_NAVER_STATE}&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI}`;
