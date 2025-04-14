
import { Link } from 'react-router-dom';
import AuthForm from '@/components/Auth/AuthForm';

const Auth = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/50 flex flex-col justify-center items-center p-4 md:p-8">
      <div className="absolute top-4 left-4">
        <Link to="/" className="flex items-center">
          <div className="bg-genie-600 text-white rounded-lg w-8 h-8 flex items-center justify-center mr-2">
            <span className="font-bold">SG</span>
          </div>
          <span className="font-bold text-xl">ShortGenie</span>
        </Link>
      </div>
      
      <div className="w-full max-w-md">
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
