import { Skeleton } from "@/components/ui/skeleton";
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { checkAuthService, loginService, registerService } from "@/services";
import { createContext, useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [auth, setAuth] = useState({
    authenticate: false,
    user: null,
  });

  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  async function handleRegisterUser(event) {
    event.preventDefault();
    try {
      const data = await registerService(signUpFormData);
      if (data.success) {
        toast({
          variant: "success",
          title: "Account Created Successfully",
          description: "Please log in to continue.",
          className: "bg-white",
          duration: 3000,
        });
        setSignUpFormData(initialSignUpFormData);
      }
    } catch (e) {
      toast({
        variant: "destructive",
        title: e?.response?.data?.message,
        duration: 3000,
      });
    }
  }

  async function handleLoginUser(event) {
    event.preventDefault();
    try {
      const data = await loginService(signInFormData);

      if (data.success) {
        sessionStorage.setItem(
          "accessToken",
          JSON.stringify(data.data.accessToken)
        );

        setAuth({
          authenticate: true,
          user: data.data.user,
        });

        setSignInFormData(initialSignInFormData);

        toast({
          variant: "success",
          title: "Logged in Successfully",
          className: "bg-white",
          duration: 2000,
        });
      } else {
        setAuth({
          authenticate: false,
          user: null,
        });
        setSignInFormData(initialSignInFormData);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: error?.response?.data?.message,
        description: "Please check your email and password and try again.",
        duration: 3000,
      });
      setSignInFormData(initialSignInFormData);
    }
  }

  // check auth user
  async function checkAuthUser() {
    try {
      const data = await checkAuthService();
      if (data.success) {
        setAuth({
          authenticate: true,
          user: data.data.user,
        });
        setLoading(false);
      } else {
        setAuth({
          authenticate: false,
          user: null,
        });
        setLoading(false);
      }
    } catch (e) {
      if (!e?.response?.data?.success) {
        setAuth({
          authenticate: false,
          user: null,
        });
        setLoading(false);
      }
    }
  }

  function resetCredentials() {
    setAuth({
      authenticate: false,
      user: null,
    });
  }

  useEffect(() => {
    checkAuthUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
        handleLoginUser,
        auth,
        resetCredentials,
      }}
    >
      {loading ? <Skeleton /> : children}
    </AuthContext.Provider>
  );
}
