import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getAuthenticatedUser } from "../service/auth";

export const useAuthenticatedUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userAuth = await getAuthenticatedUser();
        setUser(userAuth);
        console.log("User data:", userAuth);
      } catch (err) {
        console.error("Error fetching user:", err);
        setUser(null);
        setError(err);

        // Show SweetAlert error
        Swal.fire({
          icon: "error",
          title: "Failed to fetch user",
          text: err.message || "An unknown error occurred.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
};
