import Intro from "./components/intro";
import SocialLoginButton from "./components/social-login-button";

export default function Login() {
  return (
    <div className="mx-auto flex h-[calc(100vh-164px)] min-h-[400px] w-full max-w-[358px] flex-col justify-center overflow-auto px-4 md:w-[341px]">
      <Intro />
      <SocialLoginButton />
    </div>
  );
}
