import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const PowerStation = ({ station, onSelectStation }) => {
  return (
    <Card className="cursor-pointer hover:shadow-lg transition">
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2">{station.name}</h2>
        <p><strong>Power:</strong> {station.power}</p>
        <p><strong>Battery Capacity:</strong> {station.capacity}</p>
        <p className="my-2 text-sm text-gray-600">{station.description}</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-4 w-full" onClick={() => onSelectStation(station)}>
              Choose Rate
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{station.name}</DialogTitle>
            </DialogHeader>
            {/* Here you will show options for booking rates */}
            {/* Include daily, weekend, and weekly rates */}
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default PowerStation;
