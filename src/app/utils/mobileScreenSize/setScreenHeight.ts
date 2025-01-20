export default function setScreenHeight() {
  const vh = window.innerHeight * 0.01;
  console.log("Calculated vh: ", vh);
  document.documentElement.style.setProperty(
    "--vh",
    `${vh}px`
  );
}
