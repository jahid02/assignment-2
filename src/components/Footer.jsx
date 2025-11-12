const data = [
  { id: 1, title: "About", link: "#" },
  { id: 2, title: "Blog", link: "#" },
  { id: 3, title: "Features", link: "#" },
  { id: 4, title: "Help & Feedback", link: "#" },
];

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 mt-12 py-8 px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-6">
          {data.map((item) => (
            <a key={item.id} href={item.link} className="hover:text-white transition">
              {item.title}
            </a>
          ))}
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">© Learn with Sumit — All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
