import React, { useState } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Streams.css";
import { streamsX } from "../../../src/stream";

const Streams = ({ user }) => {
  const pageSize = 4; // numărul de elemente afișate pe pagină
  const [currentPage, setCurrentPage] = useState(1); // pagina curentă

  const indexOfLastStream = currentPage * pageSize;
  const indexOfFirstStream = indexOfLastStream - pageSize;
  const currentStreams = streamsX.slice(indexOfFirstStream, indexOfLastStream);
  console.log(currentStreams);
  const totalPages = Math.ceil(streamsX.length / pageSize);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="big-container-stream">
      <NavigationBar user={user} />
      <div className="container-stream">
        <h1>Simplex Streams</h1>
        <p>
          Welcome to our games webstore! Here you can find an extensive
          collection of video games from various genres, available for purchase
          and download. We also offer a streaming service, where you can watch
          your favorite games being played live by expert players or catch up on
          previous gameplay videos. Additionally, we have a section featuring
          short videos that showcase the latest and greatest games, so you can
          get a sneak peek before making a purchase. Join our community of
          gamers and indulge in endless hours of entertainment!
        </p>
        <div className="stream">
          {currentStreams.map((stream, i) => {
            return (
              <iframe
                key={i}
                width="480"
                height="270"
                src={stream}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                autoPlay="1"
                allowFullScreen
              ></iframe>
            );
          })}
        </div>
        <div className="pagination">
          {Array.from(Array(totalPages).keys()).map((page) => {
            const pageNumber = page + 1;
            return (
              <button
                key={pageNumber}
                className={pageNumber === currentPage ? "active" : ""}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Streams;
