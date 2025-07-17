import { useEffect, useState } from "react";
import { getAuthenticatedUser } from "../service/auth";

export const useAuthenticatedUser = () => {
const [user, setUser] = useState(null);

useEffect(() => {
    fetchUser();
}, []);

const fetchUser = async () => {
    try {
    const userAuth = await getAuthenticatedUser();
    setUser(userAuth);
    console.log("User data:", userAuth);
    } catch (error) {
    console.error("Error fetching user:", error);
    setUser(null);
    }
};

return { user };
};
