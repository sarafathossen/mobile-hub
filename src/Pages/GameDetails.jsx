import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer ";
import { useLoaderData, useParams } from "react-router";
import AppDetailsCard from "../Component/AppDetailsCard";

const GameDetails = () => {
  useEffect(() => {
    document.title = "Game Details | Visit Game Details";
  }, []);

  const data = useLoaderData();
  const { id } = useParams();
  const [appdata, setAppData] = useState({});

  useEffect(() => {
    const dataDetails = data.find((singleApp) => singleApp.id == id);
    setAppData(dataDetails || {});
  }, [data, id]);

  return (
    <div className="bg-base-100 dark:bg-gray-900 min-h-screen text-base-content dark:text-gray-200 transition-colors duration-300">
      {/* Header */}
      <Header />

      {/* Game Details Section */}
      <main className="w-11/12 max-w-6xl mx-auto py-8 sm:py-12">
        {appdata && Object.keys(appdata).length > 0 ? (
          <AppDetailsCard appdata={appdata} />
        ) : (
          <p className="text-center text-lg sm:text-xl text-base-content/70 dark:text-gray-400">
            Loading game details...
          </p>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GameDetails;
