import Intro from "./components/intro";
import SocialLoginButton from "./components/social-login-button";

export default function Login() {
  return (
    <div className="mx-auto flex h-[calc(100vh-164px)] min-h-[400px] w-[341px] flex-col justify-center overflow-auto">
      <Intro />
      <SocialLoginButton />
    </div>
  );
}
