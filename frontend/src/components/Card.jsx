export default function Card({ children }) {
    return (
      <div className="bg-black shadow-lg rounded-lg p-6">
        {children}
      </div>
    );
  }