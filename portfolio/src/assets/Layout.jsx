import Hero from "./components/Hero";

export default function Layout(props) {

    return (
      <div className="layout shadow-2xl pt-6">{props.children}
      </div>
    )
  }