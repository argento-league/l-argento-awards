export default function Home() {
  const TitleText = "Sistema de votacion para los premios de l'Argento League"
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Argento Awards</h1>
      <p className="text-lg">{TitleText}</p>
    </div>
  );
}
