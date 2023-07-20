import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="container mx-auto flex items-center justify-between flex-row-reverse gap-8">
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
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
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
                type="text"
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
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup