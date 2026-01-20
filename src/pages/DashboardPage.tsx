import { Plus } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { RoomCard } from "@/components/dashboard/RoomCard";
import { AddRoomCard } from "@/components/dashboard/AddRoomCard";
import { Button } from "@/components/ui/button";
import { mockRooms } from "@/data/mockData";

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Dashboard"
        description="Monitor and control your grow rooms"
        actions={
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Room
          </Button>
        }
      />

      <div className="p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {mockRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
          <AddRoomCard />
        </div>
      </div>
    </div>
  );
}
