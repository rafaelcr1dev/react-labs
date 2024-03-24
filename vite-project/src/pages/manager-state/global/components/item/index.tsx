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

import { Button } from "@/components/ui/button";
import useItemsStore, {
  ItemStoreTypes,
} from "@/pages/manager-state/global/store/use-items-store";
import { ItemTypes } from "@/types/item";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { TrashIcon } from "@radix-ui/react-icons";

const Item: React.FC<ItemTypes> = (itemProps) => {
  const { id, name, brand, price, image, quantity } = itemProps;
  const { removeItem, changeQuantityItem } = useItemsStore() as ItemStoreTypes;

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

      <Select
        defaultValue={quantity}
        onValueChange={(value) => changeQuantityItem(itemProps, value)}
      >
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

      <Button variant="link" onClick={() => removeItem(id)}>
        <TrashIcon className="h-6 w-6" />
      </Button>
    </li>
  );
};

export default Item;
