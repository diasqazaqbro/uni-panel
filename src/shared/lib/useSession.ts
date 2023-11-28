"use client";
import { useState, useEffect } from "react";

export interface IUserProfile {
  avatar: string;
  email: string;
  favourite_list_id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  recent_list_id: string;
  username: string;
}

interface ISessionHook {
  user: IUserProfile | null;
  isAuthorized: boolean;
  getToken: () => string | null;
  setSession: (newToken: string) => void;
  clearSession: () => void;
}

const useSession = (): ISessionHook => {
  const [user, setUser] = useState<IUserProfile | null>(null);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  const getToken = (): string | null => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      return localStorage.getItem("token") || "";
    }
    return null;
  };

  const setSession = (newToken: string): void => {
    localStorage.setItem("token", newToken);
  };

  const clearSession = (): void => {
    localStorage.removeItem("token");
    setIsAuthorized(false);
    setUser(null);
  };

  useEffect(() => {
    const userToken = getToken();
    fetch('https://pixel2protocolv1-production-c8ac.up.railway.app/profile', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Ошибка запроса:", error);
      });
  }, []);
  return {
    user,
    getToken,
    setSession,
    clearSession,
    isAuthorized,
  };
};

export default useSession;
