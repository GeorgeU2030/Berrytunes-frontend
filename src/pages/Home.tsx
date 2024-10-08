import Footer from "@/components/Footer";
import Menubar from "@/components/Menubar";
import YoutubeGrid from "@/components/youtube/YoutubeGrid";
import { AuthContext } from "@/context/AuthContext";
import { AuthContextType } from "@/interfaces/AuthContextType";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function Home() {
  
  const authContext = useContext<AuthContextType | null >(AuthContext);

  const { user, isLoading } = authContext!;

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <div className="bg-white min-h-screen w-full flex flex-col">
      <Menubar user={user}/>
      <div className="flex-grow overflow-x-hidden">
        <div className="container mx-auto px-4 py-8">
          <YoutubeGrid /> 
        </div>
      </div>
      <Footer/>
    </div>
  )
}
