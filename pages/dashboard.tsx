
import PrivateRoute from "@/components/PrivateRoute";
import { NextPage } from "next";


const Dashboard : NextPage = () => {
  return (
    <PrivateRoute>
      <div className="p-5">
        <h1 className="text-2xl">Welcome to Dashboard (Private Page)</h1>
      </div>
    </PrivateRoute>
  );
};

export default Dashboard;
