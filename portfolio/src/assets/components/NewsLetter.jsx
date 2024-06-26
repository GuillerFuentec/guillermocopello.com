export default function NewsLetter() {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="flex flex-col w-full lg:flex-row">
            <div className="card-body">
              <div className="justify-start py-3">
                <form>
                  <h6 className="footer-title">Newsletter</h6>
                  <fieldset className="form-control w-80 mx-auto md:w-80">
                    <label className="label">
                      <span className="label-text">
                        Enter your email address
                      </span>
                    </label>
                    <div className="join">
                      <input
                        type="text"
                        placeholder="username@site.com"
                        className="input input-bordered join-item"
                      />
                      <button className="btn btn-accent join-item">
                        Subscribe
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
