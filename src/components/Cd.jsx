import React from 'react'

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
              <a href="">Standard LP</a>
              <i className="fa-solid fa-arrow-up"></i>
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
              <a href="">CD</a>
              <i className="fa-solid fa-arrow-up"></i>
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
              <a href="">Cassette</a>
              <i className="fa-solid fa-arrow-up"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
