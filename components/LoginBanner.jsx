import LoginButton from "./LoginButton";

const LoginBanner = () => (
  <div className="container mx-auto mt-6 flex max-w-5xl flex-col items-center">
    <h3 className="text-3xl font-bold">Premium Content</h3>
    <p className="my-3">Please sign in to read this article.</p>
    <LoginButton size="large" />
  </div>
);

export default LoginBanner;
