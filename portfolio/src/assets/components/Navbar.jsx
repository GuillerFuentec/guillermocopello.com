export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 w-4/6 shadow-md rounded-full mt-5 sticky">
        <div className="flex-1 navbar-a-containart">
          <a className="navbar-link">About</a>
          <a className="navbar-link">Blog</a>
          <a className="navbar-link">Projects</a>
          <a className="navbar-link">Skills</a>
        </div>
        {/* IMG */}
        <div className="flex-none">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
            >
                <div className="w-10 rounded-full absolute">
                <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
                </div>
            </div>
        </div>
        {/* IMG */}
      </div>
    </>
  );
}
