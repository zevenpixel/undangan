import { InvitationGate } from "@/components/layout/InvitationGate";
import { Acara } from "@/components/sections/Acara";
import { Countdown } from "@/components/sections/Countdown";
import { Footer } from "@/components/sections/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { Gift } from "@/components/sections/Gift";
import { LiveStream } from "@/components/sections/LiveStream";
import { Mempelai } from "@/components/sections/Mempelai";
import { Quote } from "@/components/sections/Quote";
import { RSVP } from "@/components/sections/RSVP";
import { Story } from "@/components/sections/Story";
import { Ucapan } from "@/components/sections/Ucapan";
import { AudioToggle } from "@/components/ui/AudioToggle";

export default function Home() {
  return (
    <>
      <InvitationGate>
        <main className="flex flex-col bg-cream">
          <Quote />
          <Mempelai />
          <Countdown />
          <Acara />
          <Story />
          <Gallery />
          <LiveStream />
          <Gift />
          <RSVP />
          <Ucapan />
          <Footer />
        </main>
      </InvitationGate>
      <AudioToggle />
    </>
  );
}
