interface TypeTransaction {
  name?: string;
  createdAt?: Date;
}

export function TypeTransaction({
  createdAt = new Date(),
  name,
}: TypeTransaction) {
  return (
    <div className="flex justify-between items-center mt-4">
      <h2>{name}</h2>
      <p className={"text-sm text-slate-500"}>
        criado em {new Date(createdAt).getDate()}/
        {new Date(createdAt).getMonth()}
      </p>
    </div>
  );
}
