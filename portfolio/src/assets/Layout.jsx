import Hero from "./components/Hero";

export default function Layout(props) {

    return (
      <div className="layout shadow-lg pt-6">{props.children}
      </div>
    )
  }