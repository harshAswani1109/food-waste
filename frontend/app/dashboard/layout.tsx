"use client"

import { UserProvider } from "@/context/UserContext";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <UserProvider>
          <div >
            <Sidebar />
              {children}
          </div>
        </UserProvider>
    </>
  );
}