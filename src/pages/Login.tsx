import { Link } from "react-router-dom"

const Login = () => {
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
            <p className="text-center mt-5 capitalize">Don't Have an Account? <Link to={'/signup'} className="ml-2 tracking-wide underline text-primary">Signup</Link></p>
            <div className="form-control">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login