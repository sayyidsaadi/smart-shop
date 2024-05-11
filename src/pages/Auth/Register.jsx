import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toastAlert } from "../../utils/toastAlert";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  // Handle User Create
  const handleUserCreate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    // Validate
    if (!name || !email || !password || !photoUrl) {
      return toastAlert("All Fields Are Required", "error");
    }

    // Create User
    const result = await createUser(email, password);
    toastAlert("User Create Successful", "success");
    result?.user && navigate("/");
    // Update User Profile
    await updateUserProfile(name, photoUrl);
    e.target.reset();
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Create your account
        </h2>

        <form
          noValidate=""
          className="space-y-8 mt-6"
          onSubmit={handleUserCreate}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full px-3 py-2  rounded-md border focus:outline-color-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@com"
                className="w-full px-3 py-2  rounded-md border focus:outline-color-primary"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2  rounded-md border focus:outline-color-primary"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="photoUrl" className="text-sm">
                  Photo URL
                </label>
              </div>
              <input
                type="text"
                name="photoUrl"
                id="photoUrl"
                placeholder="Photo URL"
                className="w-full px-3 py-2  rounded-md border focus:outline-color-primary"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-color-primary text-white"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center dark:text-gray-600 mt-4">
          Already have and account?
          <Link
            to="/login"
            rel="noopener noreferrer"
            className="underline font-medium"
          >
            &nbsp; Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
