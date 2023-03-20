import { Routes, Route } from 'react-router-dom'
import { CreateAccount } from '../pages/CreateAccount';
import { ForgotPassword } from '../pages/ForgotPassword';
import { CheckYourEmail } from '../pages/ForgotPassword/CheckYourEmail';
import { PasswordReset } from '../pages/ForgotPassword/PasswordReset';
import { SetNewPassword } from '../pages/ForgotPassword/SetNewPassword';
import { SignIn } from '../pages/SignIn';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/forgot-password/verify-email' element={<CheckYourEmail />} />
      <Route path='/forgot-password/reset-password' element={<SetNewPassword />} />
      <Route path='/forgot-password/password-reset' element={<PasswordReset />} />
      <Route path='/create-account' element={<CreateAccount />} />
    </Routes>
  );
}
