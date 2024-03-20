/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useQuery } from "@tanstack/react-query";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Skeleton } from "@/components/ui/skeleton";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const HttpStateReactQuery = () => {
  const {
    isLoading,
    error,
    data: users,
    isError,
  } = useQuery({
    queryKey: ["usersData"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      }),
  });

  return (
    <Card className="w-[350px] mt-8">
      <CardHeader>
        <CardTitle>Users (RQ)</CardTitle>
        {users && users.length > 0 && (
          <CardDescription>You haves {users.length} users.</CardDescription>
        )}
      </CardHeader>
      <CardContent className="grid gap-4">
        {!isError ? (
          <>
            {isLoading ? (
              <>
                {Array.from({ length: 5 }).map((_, index) => (
                  <div className="flex items-center space-x-4 rounded-md border p-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[150px]" />
                      <Skeleton className="h-4 w-[100px]" />
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {users &&
                  users.map((user: any) => (
                    <div className="flex items-center space-x-4 rounded-md border p-4">
                      <Avatar>
                        <AvatarImage
                          src={`https://i.pravatar.cc/40?img=3${user.id}`}
                          alt={user.name}
                        />
                        <AvatarFallback>{user.name}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {user.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </>
        ) : (
          <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default HttpStateReactQuery;
