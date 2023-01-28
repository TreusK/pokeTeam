export default function Card({ className, ...rest }) {
  return (
    <div
      className={`w-36 h-48 bg-white text-center rounded shadow-lg group ${
        className || ""
      }`}
      {...rest}
    />
  );
}
