"use client"

import { useState } from "react"
import HomeCard from "./HomeCard"
import { useRouter } from "next/navigation";

const MeetingTypeList = () => {
  const router = useRouter();

  const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting'
    | 'isInstantMeeting' | undefined>();

  return (
    <section className="grid grid-cols-1 gap-5
    md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        ImgUrl="/icons/add-meeting.svg"
        bgColor="bg-orange-1"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState('isInstantMeeting')}
      />
      <HomeCard
        ImgUrl="/icons/join-meeting.svg"
        bgColor="bg-blue-1"
        title="Join Meeting"
        description="via invitation link"
        handleClick={() => setMeetingState('isJoiningMeeting')}
      />
      <HomeCard
        ImgUrl="/icons/schedule.svg"
        bgColor="bg-purple-1"
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClick={() => setMeetingState('isScheduleMeeting')}
      />
      <HomeCard
        ImgUrl="/icons/recordings.svg"
        bgColor="bg-yellow-1"
        title="View Recordings"
        description="Check out your meetings"
        handleClick={() => router.push('/recordings')}
      />

    </section>
  )
}
export default MeetingTypeList