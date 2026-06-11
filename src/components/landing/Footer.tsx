export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 md:px-12 lg:px-20 py-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
        <div>
          <p className="font-display text-fib-34 leading-none">Felipe Burgos</p>
          <p className="mt-3 text-fib-8 text-muted-foreground">Pastor y Evangelista</p>
        </div>
        <div className="text-fib-13 text-foreground/70">
          <p>“No hay nada que sea difícil para ti.”</p>
          <p className="mt-2 text-fib-8 text-primary">Jeremías 32:17</p>
        </div>
        <div className="md:text-right text-fib-8 text-muted-foreground">
          <p>
            <span className="font-display text-[1.2em] leading-none">©</span> {new Date().getFullYear()}{" "}
            Ministerio Felipe Burgos
          </p>
        </div>
      </div>
    </footer>
  );
}