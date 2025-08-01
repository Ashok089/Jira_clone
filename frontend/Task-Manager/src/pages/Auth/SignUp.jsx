import { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { vaildateEmail } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";
import Input from "../../components/inputs/Input";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminInviteToken, setAdminInviteToken] = useState("");

  const [error, setError] = useState(null);


    const handleSignUp = async (e) => {
      e.preventDefault();   
  
      if(!fullName) {
        setError("Please enter your fullName.");
        return;
      }

      if(!vaildateEmail(email)) {
        setError("Please enter a valid email address.");
        return;
      } 
  
      if(!password) {
        setError("Please enter your password.");
        return;
      }
  
      setError("");
  
    };


  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join us today by entering your details below.
        </p>


        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image= {profilePic} setImage={setProfilePic} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 

           <Input 
            value={fullName}
            onChange={({target}) => setFullName(target.value)}
            label ="Full Name"
            placeholder="Nitendo"
            type="text"
            />

           <Input 
            value={email}
            onChange={({target}) => setEmail(target.value)}
            label ="Email Address"
            placeholder="Enter your email"
            type="text"
            />

            <Input 
            value={password}
            onChange={({target}) => setPassword(target.value)}
            label ="Password"
            placeholder="Enter your password (min 8 characters)"
            type="password"
            />

            <Input 
            value={password}
            onChange={({target}) => setPassword(target.value)}
            label ="Admin Invite Token"
            placeholder="6 Digit Token"
            type="text"
            />


        {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
        
        <button 
          type='submit' 
          className='btn-primary'
        >
          SIGN UP
        </button>

        <p className='text-[13px] text-slate-800 mt-3'>Already have an account? {" "} 
          <Link className='text-primary font-medium underline' to="/login">
          Login
          </Link>
        </p>
            </div>
        </form>

      </div>
    </AuthLayout>
  );
};

export default SignUp;

