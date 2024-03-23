/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { TrashIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

const Item: React.FC = ({ name, brand, price, image, quantity }: any) => {
  return (
    <li className="flex items-center space-x-4 border p-4 mb-4">
      <Avatar>
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-muted-foreground">por {brand}</p>
        <p className="text-md font-medium">{price.formatted}</p>
      </div>

      <Select defaultValue={quantity}>
        <SelectTrigger className="w-[110px]">
          <SelectValue placeholder="Quantity" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Quantity</SelectLabel>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button variant="link" onClick={() => false}>
        <TrashIcon className="h-6 w-6" />
      </Button>
    </li>
  );
};

export default Item;
