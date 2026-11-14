export default function Logo({ className = 'logo' }) {
  return (
    <img
      src="/logo.jpg"
      alt="BeautyPod, powered by Leafwater"
      className={className}
    />
  );
}
