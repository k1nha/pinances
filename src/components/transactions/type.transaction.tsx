interface TypeTransaction {
  name: string;
  createdAt: string;
}

export function TypeTransaction() {
  return (
    <div className="flex justify-between items-center mt-4">
      <h2>Carro</h2>
      <p className={"text-sm text-slate-500"}>criado em 20/03/2023</p>
    </div>
  );
}
