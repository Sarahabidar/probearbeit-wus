// components/Footer.js
export default function Footer({ visitorCount }) {
  return (
    <footer className="bg-gray-600 text-white p-4 mt-auto">
      <p>Visitor Count: {visitorCount}</p>
    </footer>
  );
}
