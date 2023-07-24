/* eslint-disable @typescript-eslint/no-misused-promises */
import { Link } from "react-router-dom";
import { useSignupUserMutation } from "../redux/features/user/userApi";
import { FormEvent } from "react";

const Signup = () => {
  const [signupUser, { isLoading }] = useSignupUserMutation();

  const handleSignup = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const email = e.currentTarget["email"] as HTMLInputElement;
    const password = e.currentTarget["password"] as HTMLInputElement;

    if (!email.value || email.value === "") {
      alert("Email is required!");
      return; // Prevent form submission
    }

    const data = {
      data: {
        email: email.value,
        password: password.value,
      },
    };

    const result = await signupUser(data);

    if (result?.data?.id);
    {
      alert("Sign up successfully");
    }
    if (result.error.status === 400) {
      return alert(result?.error?.data?.message);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="container mx-auto lg:flex items-center justify-between flex-row-reverse gap-8">
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Ready to embark on a reading adventure like no other? Sign up for
            BookWorm Haven and open the door to a world of literary wonders.
            Connect with fellow book enthusiasts, curate your personal reading
            lists, and get lost in the pages of countless captivating tales.
            Unleash your imagination and begin your journey towards a lifetime
            of literary bliss. Let's explore, learn, and share the magic of
            books together! 📚🌟📝
          </p>
        </div>
        <div className="card flex-shrink-0 max-w-lg w-full shadow-2xl bg-base-100 p-6">
          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p className="text-center mt-5 capitalize">
              You have an account?
              <Link
                to={"/login"}
                className="ml-2 tracking-wide underline text-primary"
              >
                Login
              </Link>
            </p>
            <div className="form-control">
              <button disabled={isLoading} className="btn btn-primary">
                {isLoading && (
                  <span className="loading loading-spinner loading-md"></span>
                )}{" "}
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
