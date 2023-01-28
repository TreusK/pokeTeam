export default function Input({ label, children, ...rest }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="p-6 text-2xl">{label}</h2>
      <div className="p-4">
        <input type="text" className="p-2 border border-solid" {...rest} />
        {children}
      </div>
    </div>
  );
}
