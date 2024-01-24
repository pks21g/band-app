import React from 'react'

export const Cd = () => {
  return (
    <>
    <section class="container cd">
        <div class="grid-3">
          <div class="cd-item">
            <div class="cd-image">
              <img
                src="https://source.unsplash.com/black-vinyl-record-on-orange-surface-OXhQHGiez_k"
                alt=""
              />
            </div>
            <hr />
            <div class="flex sale">
              <a href="">Standard LP</a>
              <i class="fa-solid fa-arrow-up"></i>
            </div>
          </div>

          <div class="cd-item">
            <div class="cd-image">
              <img
                src="https://source.unsplash.com/shallow-focus-photography-of-black-vinyl-player-PvqGd3PH6ZE"
                alt=""
              />
            </div>
            <hr />
            <div class="flex">
              <a href="">CD</a>
              <i class="fa-solid fa-arrow-up"></i>
            </div>
          </div>

          <div class="cd-item">
            <div class="cd-image">
              <img
                src="https://source.unsplash.com/a-black-and-white-cassette-tape-recorder-on-a-white-background-B04nWJ2wZYI"
                alt=""
              />
            </div>
            <hr />
            <div class="flex">
              <a href="">Cassette</a>
              <i class="fa-solid fa-arrow-up"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
