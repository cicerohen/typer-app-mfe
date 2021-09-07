export const Footer = () => {
  return (
    <footer className="bg-slate-700 p-8  space-y-8 min-h-fit lg:flex lg:space-y-0  lg:justify-between">
      <section className="grow">
        <h5 className="text-lg text-slate-300 mb-4">Typer</h5>
        <h6 className="text-sm text-slate-400 max-w-sm">
          Its just a fictional publishing app that implements a micro-frontend
          architecture
        </h6>
        <p className="text-sm text-slate-400 mt-4">
          <a href="#">View code on github</a>
        </p>
      </section>
      <section className="grow">
        <h5 className="text-lg text-slate-300 mb-4">Tooling</h5>
        <ul className="text-sm text-slate-400 leading-loose">
          <li>
            <a href="#">Single-SPA</a>
          </li>
          <li>
            <a href="#">Tailwind CSS</a>
          </li>
          <li>
            <a href="#">Lerna</a>
          </li>
        </ul>
      </section>
      <section className="grow">
        <h5 className="text-lg text-slate-300 mb-4">Author</h5>
        <h6 className="text-sm text-slate-400">
          <a href="https://github.com/cicerohen">Cicero Viana</a>
        </h6>
      </section>
    </footer>
  );
};
