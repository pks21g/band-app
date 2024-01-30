import React from "react";
import countryList from "../../data/CountryList";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "phosphor-react";

const Rest = () => {
  return (
    <div>
      <section className="container shop">
        <h1 className="band-name section-font-size flex">STORE</h1>
        <div className="grid-4">
          <div className="shop-item">
            <img
              src="https://source.unsplash.com/gray-baseball-cap-on-white-surface-2loKxdi6Hmo"
              alt=""
            />
            <hr />
            <div className="flex sale">
              <Link to="/band-app/store">
                The Cap
                <ArrowUpRight size={25} weight="bold" />
              </Link>
            </div>
          </div>
          <div className="shop-item">
            <img
              src="https://source.unsplash.com/a-pair-of-key-chains-with-a-name-tag-DJ60cnp2snE"
              alt=""
            />
            <hr />
            <div className="flex sale">
              <Link to="/band-app/store">
                The Keyring
                <ArrowUpRight size={25} weight="bold" />
              </Link>
              <i className="fa-solid fa-arrow-up"></i>
            </div>
          </div>
          <div className="shop-item">
            <img
              src="https://source.unsplash.com/black-leather-bifold-wallet-on-brown-wooden-table-COlvpyHo6iw"
              alt=""
            />
            <hr />
            <div className="flex sale">
              <Link to="/band-app/store">
                The Wallet <ArrowUpRight size={25} weight="bold" />
              </Link>
              <i className="fa-solid fa-arrow-up"></i>
            </div>
          </div>
          <div className="shop-item">
            <img
              src="https://source.unsplash.com/selective-focus-photo-of-white-mug-on-white-surrface-BwJt34F8wKw"
              alt=""
            />
            <hr />
            <div className="flex sale">
              <Link to="/band-app/store">
                The Cup <ArrowUpRight size={25} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex">
          <Link
            to={"/band-app/store"}
            className="album-btn live-tour-btn store-btn"
          >
            Visit store
          </Link>
        </div>
      </section>

      <section className="videos container">
        <h1 className="band-name section-font-size flex">VIDEOS</h1>
        <div className="grid-3">
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/7eMoo0rV7tE"
              frameborder="0"
              title="Cover"
            ></iframe>
          </div>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/7eMoo0rV7tE"
              frameborder="0"
              title="Cover"
            ></iframe>
          </div>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/7eMoo0rV7tE"
              frameborder="0"
              title="Cover"
            ></iframe>
          </div>
        </div>
        <div className="flex">
          <Link
            to={"https://youtube.com"}
            className="album-btn live-tour-btn store-btn"
          >
            Watch more videos
          </Link>
        </div>
      </section>
      <section className="news container">
        <div className="form">
          <h2 className="news-heading">Get the latest news</h2>
          <div className="form-group">
            <div>
              <label for="fname">First Name*</label>
            </div>
            <div>
              <input
                type="text"
                id="fname"
                placeholder="First Name"
                required
                minlength="3"
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <label for="lname">Last Name*</label>
            </div>

            <div>
              <input
                type="text"
                id="lname"
                placeholder="Last Name"
                required
                minlength="3"
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <label for="email">Email*</label>
            </div>
            <div>
              <input type="email" id="email" placeholder="Email" required />
            </div>
          </div>

          <div className="form-group">
            <div>
              <label for="country-list">Country*</label>
            </div>
            <div>
              <select id="country-list">
                {countryList.map((country, index) => (
                  <option key={index}>{country}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <div className="mailing-list">
              <p>
                By subscribing to the mailing list you agree to the terms of use
                of the Disco Fighter' Newsletter
              </p>
              <a
                href=""
                className="mailing-list-btn album-btn store-btn live-tour-btn"
              >
                Join the Mailing List
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rest;
