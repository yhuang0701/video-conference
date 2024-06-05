"use client"

import { useState } from "react"
import HomeCard from "./HomeCard"
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/components/ui/use-toast"


const MeetingTypeList = () => {
  const router = useRouter();

  const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting'
    | 'isInstantMeeting' | undefined>();

  const { user } = useUser();
  const client = useStreamVideoClient();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  })
  const [callDetails, setcallDetails] = useState<Call>();
  const { toast } = useToast()

  const createMeeting = async () => {
    if (!client || !user) return;

    try {
      if (!values.dateTime) {
        toast({ title: "Please select a date and time", })
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call('default', id);

      if (!call) throw new Error("Failed to create call");

      const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant Meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description
          }
        }
      })

      setcallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`)
      }

      toast({ title: "Meeting Created", })

    } catch (error) {
      console.log(error);
      toast({
        title: "Failed to create meeting",
      })
    }
  }

  return (
    <section className="grid grid-cols-1 gap-5
    md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        ImgUrl="/icons/add-meeting.svg"
        bgColor="bg-orange-1"
        title="New Meeting"
        description="Start an Instant Meeting"
        handleClick={() => setMeetingState('isInstantMeeting')}
      />
      <HomeCard
        ImgUrl="/icons/join-meeting.svg"
        bgColor="bg-blue-1"
        title="Join Meeting"
        description="Via Invitation Link"
        handleClick={() => setMeetingState('isJoiningMeeting')}
      />
      <HomeCard
        ImgUrl="/icons/schedule.svg"
        bgColor="bg-purple-1"
        title="Schedule Meeting"
        description="Plan Your Meeting"
        handleClick={() => setMeetingState('isScheduleMeeting')}
      />
      <HomeCard
        ImgUrl="/icons/recordings.svg"
        bgColor="bg-yellow-1"
        title="View Recordings"
        description="Check Out Recordings"
        handleClick={() => router.push('/recordings')}
      />

      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />

    </section>
  )
}
export default MeetingTypeList