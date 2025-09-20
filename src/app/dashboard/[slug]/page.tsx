import { Counter } from "@/app/components/Counter";

type Params = Promise<{slug:string}>;

export default async function DashboardRoute({params}: {params:Params}) {
    const{slug} = await params;
  return (
    <div>
      <h1>Hello From the slug route {slug}</h1>
      <Counter/>
      
    </div>
  );
}
