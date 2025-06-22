import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";


export default function Login() {
  const auth = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    // Normally you get this from backend
    const fakeToken = "abc123";
    if (auth && auth.login) {
      auth.login(fakeToken);
      router.push("/dashboard");
    } else {
      // Optionally handle the error case
      console.error("Auth context not available");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-xl mb-4">Login Page</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login Now
      </button>
    </div>
  );
}
