/* eslint-disable @typescript-eslint/no-misused-promises */
import { FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/features/user/userApi";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const from = location.state?.from ? location.state?.from : "/";

  const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const email = e.currentTarget["email"] as HTMLInputElement;
    const password = e.currentTarget["password"] as HTMLInputElement;
    if (!email.value || email.value === "") {
      alert("Email is Requried!");
      return;
    }
    if (!password.value || password.value === "") {
      alert("Password is required!");
      return;
    }

    const option = {
      email: email.value,
      password: password.value,
    };
    const result = await loginUser(option);
    if (result?.data?.statusCode === 200) {
      localStorage.setItem(
        "accessToken",
        JSON.stringify(result?.data?.data?.accessToken)
      );
      navigate(from, { replace: true });
    }
    if (result?.error?.status === 400) {
      alert(result?.error?.data?.message);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="container mx-auto flex items-center justify-between flex-row-reverse gap-8">
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Unlock the magic of literature with BookWorm Haven's login. Step
            into a universe of captivating stories, knowledge, and endless
            inspiration. Embrace the joy of reading as you turn the key to your
            very own literary haven. Let's embark on this incredible journey
            together! 📚🔓✨
          </p>
        </div>
        <div className="card flex-shrink-0 max-w-lg w-full shadow-2xl bg-base-100 p-6">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p className="text-center mt-5 capitalize">
              Don't Have an Account?{" "}
              <Link
                to={"/signup"}
                className="ml-2 tracking-wide underline text-primary"
              >
                Signup
              </Link>
            </p>
            <div className="form-control">
              <button
                disabled={isLoading}
                className="btn btn-primary disabled:border disabled:border-gray-500  disabled:text-gray-500"
              >
                {isLoading && (
                  <span className="loading loading-spinner loading-md"></span>
                )}
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
