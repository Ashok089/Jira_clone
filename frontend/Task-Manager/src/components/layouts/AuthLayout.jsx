
import UI_IMG from "../../assets/ChatGPT Image Jun 17, 2025, 01_22_31 AM.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Task Manager</h2>
        {children}
      </div>

      <div className="hidden md:flex w-[40vw] h-screen items-center justify-center bg-blue-50 bg-[url('/bg-img.png')] bg-cover bg-no-repeat bg-center">
        <img src={UI_IMG} className="w-64 lg:w-[90%]" alt="Auth UI" />
      </div>
    </div>
  );
};

export default AuthLayout;
