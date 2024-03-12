import { useState, useMemo, useCallback, memo } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type ChildComponentPropTypes = {
  name?: string;
  handleClick: () => void;
};

type CounterResultsComponentPropTypes = {
  count: number;
  doubleCount: number;
};

// `memo` é usado para memorizar o componente `ButtonClickComponent`.
//  Isso significa que o componente só será renderizado novamente se suas propriedades `name` ou `handleClick` mudarem.
const ButtonClickComponent = memo(
  ({ name, handleClick }: ChildComponentPropTypes) => {
    console.log("rendering ButtonClickComponent...");
    return <Button onClick={handleClick}>Click Me, {name}!</Button>;
  }
);

const ButtonResetComponent = memo(
  ({ handleClick }: ChildComponentPropTypes) => {
    console.log("rendering ButtonResetComponent...");
    return (
      <Button onClick={handleClick} variant="outline">
        Reset
      </Button>
    );
  }
);

const CounterResultsComponent = memo(
  ({ count, doubleCount }: CounterResultsComponentPropTypes) => {
    console.log("rendering CounterResultsComponent...");
    return (
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">Count: {count}</p>
        <p className="text-sm text-muted-foreground">
          Double Count: {doubleCount}
        </p>
      </div>
    );
  }
);

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Usando useMemo para armazenar o resultado do cálculo
  // Isso significa que o cálculo só será executado novamente quando o valor de `count` mudar.
  const doubleCount = useMemo(() => {
    console.log("calculating doubleCount...");
    return count * 2;
  }, [count]);

  // Usando useCallback para armazenar a função de clique
  // Isso significa que a função só será recriada se o valor `count` mudar.
  const handleClick = useCallback(() => {
    console.log("button clicked!");
    setCount(count + 1);
  }, [count]);

  const handleReset = useCallback(() => {
    console.log("button click reset!");
    setCount(0);
  }, []);

  console.log("rendering ParentComponent...");

  return (
    <Card className="w-[350px] mt-8">
      <CardHeader>
        <CardTitle>Create project (Cached)</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form autoComplete="off">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        </form>
        <div className="mb-4 mt-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
          <CounterResultsComponent count={count} doubleCount={doubleCount} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <ButtonClickComponent name={name} handleClick={handleClick} />
        <ButtonResetComponent handleClick={handleReset} />
      </CardFooter>
    </Card>
  );
};

const CachingPage = () => {
  return (
    <>
      <main>
        <ParentComponent />
      </main>
    </>
  );
};

export default CachingPage;
