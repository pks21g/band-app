import React from "react";
import { ArrowUpRight } from "phosphor-react";
import { Link } from "react-router-dom";
export const Cd = () => {
  return (
    <>
      <section className="container cd">
        <div className="grid-3">
          <div className="cd-item">
            <div className="cd-image">
              <img
                src="https://source.unsplash.com/black-vinyl-record-on-orange-surface-OXhQHGiez_k"
                alt=""
              />
            </div>
            <hr />
            <div className="flex sale">
              <Link to={"/band-app/music"}>
                Standard LP
                <ArrowUpRight size={25} weight="bold" />
              </Link>
            </div>
          </div>

          <div className="cd-item">
            <div className="cd-image">
              <img
                src="https://source.unsplash.com/shallow-focus-photography-of-black-vinyl-player-PvqGd3PH6ZE"
                alt=""
              />
            </div>
            <hr />
            <div className="flex">
              <Link to={"/band-app/music"}>
                CD
                <ArrowUpRight size={25} weight="bold" />
              </Link>
            </div>
          </div>

          <div className="cd-item">
            <div className="cd-image">
              <img
                src="https://source.unsplash.com/a-black-and-white-cassette-tape-recorder-on-a-white-background-B04nWJ2wZYI"
                alt=""
              />
            </div>
            <hr />
            <div className="flex">
              <Link to={"/band-app/music"}>
                Cassette
                <ArrowUpRight size={25} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
