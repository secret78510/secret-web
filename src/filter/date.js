export default function (timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
}
