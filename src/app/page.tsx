import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white flex-col gap-6">
      <h1 className="text-3xl font-bold">¡PassTix está vivo! 🎫</h1>
      <Button variant="default">Botón de prueba</Button>
      <Button variant="secondary">Botón secundario</Button>
      <Button variant="destructive">Eliminar</Button>
    </div>
  );
}
