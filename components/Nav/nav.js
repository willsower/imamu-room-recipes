import ActiveLink from "./active_link";

export default function Nav() {
  return (
    <nav className="items-center bg-gray-50 p-4 border-b border-gray-200 w-full custom-horizontal-nav">
      <style jsx>{`
        .nav-link {
          text-decoration: none;
        }
        .active:after {
          content: "";
        }
      `}</style>
      <ActiveLink activeClassName="active" href="/">
        <a className="nav-link">All</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/bentoBox">
        <a className="nav-link">Bento Boxes</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/breakfast">
        <a className="nav-link">Breakfast</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/lunch">
        <a className="nav-link">Lunch</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/dinner">
        <a className="nav-link">Dinner</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/dessert">
        <a className="nav-link">Dessert</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="snacksAndAppetizers">
        <a className="nav-link">Snacks &amp; Appetizers</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/drinks">
        <a className="nav-link">Drinks</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/vegetarian">
        <a className="nav-link">Vegetarian</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/vegan">
        <a className="nav-link">Vegan</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/soup">
        <a className="nav-link">Soup</a>
      </ActiveLink>
    </nav>
  );
}
