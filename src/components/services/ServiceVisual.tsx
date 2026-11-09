import Image from "next/image";
import {
  CalendarDays,
  Check,
  CheckCheck,
  CirclePlay,
  ClipboardList,
  FileText,
  Film,
  HeartPulse,
  Camera,
  MessageCircle,
  MonitorPlay,
  Play,
  SearchCheck,
  ShieldCheck,
  UserRound,
  Video,
} from "lucide-react";
import type { ServiceTabId } from "@/data/serviceTabs";

type ServiceVisualProps = {
  serviceId: ServiceTabId;
  /** Optional approved photo. Example: /images/services/doctor.jpg */
  doctorImageSrc?: string;
};

function Portrait({ src, className = "" }: { src?: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#DDEFEA] to-[#B8D8D0] ${className}`}>
      {src ? (
        <Image
          src={src}
          alt="Approved medical professional portrait"
          fill
          sizes="(max-width: 1024px) 65vw, 28vw"
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-[#267E80]">
          <UserRound aria-hidden="true" className="h-14 w-14 sm:h-16 sm:w-16" strokeWidth={1.35} />
          <span className="text-[9px] font-semibold uppercase tracking-wide">Photo placeholder</span>
        </div>
      )}
    </div>
  );
}

function SampleLabel() {
  return (
    <span className="absolute bottom-2 right-3 rounded-full border border-[#C5E0DF] bg-white/90 px-2.5 py-1 text-[9px] font-semibold text-[#42636B] shadow-sm">
      Illustrative preview
    </span>
  );
}

function ProfileVisual({ doctorImageSrc }: { doctorImageSrc?: string }) {
  return (
    <div className="relative mx-auto flex h-[330px] w-full max-w-[530px] items-center justify-center sm:h-[400px] lg:h-[420px]">
      <div aria-hidden="true" className="absolute right-4 top-6 h-[270px] w-[270px] rounded-full bg-[#D9F1EF] sm:h-[330px] sm:w-[330px]" />
      <div className="absolute left-0 top-8 z-10 flex flex-col gap-3 sm:left-4 sm:top-14">
        {[
          { label: "Instagram", Icon: Camera },
          { label: "Profile details", Icon: FileText },
          { label: "Contact path", Icon: MessageCircle },
        ].map(({ label, Icon }) => (
          <div key={label} className="flex items-center gap-2 rounded-xl border border-[#D3E7E5] bg-white/95 px-3 py-2 text-[11px] font-semibold text-[#31565E] shadow-[0_8px_20px_rgba(10,58,64,.09)] sm:text-xs">
            <Icon aria-hidden="true" className="h-4 w-4 text-[#168080]" />
            {label}
          </div>
        ))}
      </div>
      <div className="relative ml-14 mt-3 w-[215px] rotate-[4deg] overflow-hidden rounded-[24px] border-[7px] border-white bg-white shadow-[0_18px_48px_rgba(7,56,65,.18)] sm:ml-20 sm:w-[270px]">
        <Portrait src={doctorImageSrc} className="h-[140px] w-full sm:h-[175px]" />
        <div className="space-y-2 p-4 sm:p-5">
          <div className="flex items-start justify-between gap-1">
            <div>
              <p className="text-sm font-extrabold text-[#0B3142] sm:text-base">Example Specialist</p>
              <p className="text-[10px] text-[#586B70] sm:text-xs">Sample professional profile</p>
            </div>
            <ShieldCheck aria-hidden="true" className="h-5 w-5 shrink-0 text-[#168080]" />
          </div>
          <div className="flex gap-2"><span className="h-2 w-20 rounded-full bg-[#DFEAE9]"/><span className="h-2 w-12 rounded-full bg-[#DFEAE9]"/></div>
          <div className="rounded-lg bg-[#176978] px-3 py-2 text-center text-[10px] font-bold text-white sm:text-xs">Clear contact information</div>
          <div className="space-y-1.5"><div className="h-1.5 w-full rounded-full bg-[#E9EFF0]"/><div className="h-1.5 w-[82%] rounded-full bg-[#E9EFF0]"/></div>
        </div>
      </div>
      <div className="absolute right-0 top-11 z-10 rounded-xl border border-[#CBE4DF] bg-white px-3 py-2 shadow-md sm:right-1 sm:top-16">
        <div className="flex items-center gap-1.5"><CheckCheck className="h-4 w-4 text-[#158784]"/><span className="text-[10px] font-bold text-[#0B3142] sm:text-xs">Clear positioning</span></div>
      </div>
      <SampleLabel />
    </div>
  );
}

function ReelsVisual({ doctorImageSrc }: { doctorImageSrc?: string }) {
  return (
    <div className="relative mx-auto flex h-[330px] w-full max-w-[530px] items-center justify-center sm:h-[400px] lg:h-[420px]">
      <div aria-hidden="true" className="absolute right-8 top-5 h-[275px] w-[275px] rounded-full bg-[#D9F1EF] sm:h-[330px] sm:w-[330px]" />
      <div className="absolute left-0 top-12 z-10 space-y-3 sm:left-3">
        <div className="flex items-center gap-2 rounded-xl border border-[#D3E7E5] bg-white p-2.5 text-xs font-bold text-[#1B5F65] shadow-md"><ClipboardList className="h-4 w-4"/>Doctor-reviewed script</div>
        <div className="flex items-center gap-2 rounded-xl border border-[#D3E7E5] bg-white p-2.5 text-xs font-bold text-[#1B5F65] shadow-md"><Film className="h-4 w-4"/>Professional editing</div>
      </div>
      <div className="relative ml-14 h-[300px] w-[170px] rotate-[5deg] overflow-hidden rounded-[27px] border-[9px] border-[#0B3142] bg-[#D5ECE9] shadow-[0_20px_45px_rgba(7,56,65,.25)] sm:h-[362px] sm:w-[205px]">
        <Portrait src={doctorImageSrc} className="h-full w-full" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#092C38]/95 to-transparent p-4 pt-20 text-white">
          <p className="text-sm font-extrabold">Doctor Education Reel</p>
          <p className="mt-1 text-[10px] text-white/85">Clear language. One takeaway.</p>
        </div>
        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0B3142]/85 text-white shadow-lg">
          <Play aria-hidden="true" className="ml-0.5 h-5 w-5 fill-current" />
        </div>
      </div>
      <div className="absolute right-0 top-16 z-10 flex items-center gap-2 rounded-xl border border-[#D3E7E5] bg-white p-2.5 text-[11px] font-semibold text-[#1B5F65] shadow-md"><Video className="h-4 w-4"/>Shoot & produce</div>
      <div className="absolute bottom-12 right-0 z-10 flex items-center gap-2 rounded-xl border border-[#D3E7E5] bg-white p-2.5 text-[11px] font-semibold text-[#1B5F65] shadow-md"><CheckCheck className="h-4 w-4"/>Approval workflow</div>
      <SampleLabel />
    </div>
  );
}

function StrategyVisual() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const markedDays = new Set([1, 4, 9, 12, 17, 19, 23, 26]);
  return (
    <div className="relative mx-auto flex h-[330px] w-full max-w-[530px] items-center justify-center sm:h-[400px] lg:h-[420px]">
      <div aria-hidden="true" className="absolute right-5 top-7 h-[270px] w-[270px] rounded-full bg-[#D9F1EF] sm:h-[330px] sm:w-[330px]" />
      <div className="relative w-[min(92%,390px)] -rotate-[2deg] rounded-[22px] border border-[#D2E8E5] bg-white p-4 shadow-[0_20px_45px_rgba(7,56,65,.15)] sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2"><CalendarDays className="h-5 w-5 text-[#168080]"/><span className="text-sm font-extrabold text-[#0B3142] sm:text-base">Sample Content Calendar</span></div>
          <span className="rounded-full bg-[#E4F3EE] px-2 py-1 text-[9px] font-bold text-[#1B6867]">Monthly plan</span>
        </div>
        <div className="mt-5 grid grid-cols-7 gap-1.5 sm:gap-2">
          {days.map((day, index) => <div key={`${day}-${index}`} className="text-center text-[10px] font-bold text-[#58767A]">{day}</div>)}
          {Array.from({ length: 28 }, (_, index) => (
            <div key={index} className={`flex aspect-square items-center justify-center rounded-md border text-[10px] font-semibold ${markedDays.has(index) ? "border-[#B1D9CA] bg-[#CDEFE2] text-[#176978]" : "border-[#EEF3F2] bg-[#F6F9F8] text-[#8AA2A4]"}`}>
              {markedDays.has(index) ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : index + 1}
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-[10px] text-[#385D65]">
          <span className="rounded-full bg-[#E4F3EE] px-3 py-1.5">Patient FAQs</span>
          <span className="rounded-full bg-[#E4F3EE] px-3 py-1.5">Reel scripts</span>
          <span className="rounded-full bg-[#E4F3EE] px-3 py-1.5">Educational posts</span>
        </div>
      </div>
      <div className="absolute -top-1 right-0 flex items-center gap-1.5 rounded-xl border border-[#CBE4DF] bg-white p-2.5 text-[11px] font-semibold text-[#176978] shadow-md sm:top-7"><SearchCheck className="h-4 w-4"/>Topic research</div>
      <SampleLabel />
    </div>
  );
}

function ConsultationVisual({ doctorImageSrc }: { doctorImageSrc?: string }) {
  return (
    <div className="relative mx-auto flex h-[330px] w-full max-w-[530px] items-center justify-center sm:h-[400px] lg:h-[420px]">
      <div aria-hidden="true" className="absolute right-4 top-6 h-[270px] w-[270px] rounded-full bg-[#D9F1EF] sm:h-[330px] sm:w-[330px]" />
      <div className="relative w-[min(96%,425px)] overflow-hidden rounded-[22px] border-[6px] border-white bg-white shadow-[0_20px_45px_rgba(7,56,65,.16)]">
        <div className="flex items-center justify-between bg-[#0B3142] px-4 py-3 text-white"><span className="flex items-center gap-2 text-xs font-bold"><MonitorPlay className="h-4 w-4"/>Strategy Session</span><span className="rounded-full bg-white/15 px-2 py-1 text-[9px]">Concept preview</span></div>
        <div className="grid h-[165px] grid-cols-2 gap-2 bg-[#E7F4F2] p-3 sm:h-[205px]">
          <Portrait src={doctorImageSrc} className="h-full rounded-xl" />
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#CCE5D9] to-[#B8D8D0] text-[#176978]"><UserRound className="h-14 w-14" strokeWidth={1.4}/><span className="text-xs font-bold">Talkreach Team</span></div>
        </div>
        <div className="flex items-center justify-center gap-3 bg-white px-3 py-3 text-[#176978]"><Video className="h-5 w-5"/><MessageCircle className="h-5 w-5"/><ClipboardList className="h-5 w-5"/></div>
      </div>
      <div className="absolute bottom-6 left-0 z-10 rounded-xl border border-[#D3E7E5] bg-white p-3 text-[11px] font-semibold text-[#31565E] shadow-md sm:bottom-7 sm:left-1">
        <div className="flex items-center gap-2"><CheckCheck className="h-4 w-4 text-[#168080]"/>Clear next steps</div>
      </div>
      <div className="absolute right-0 top-4 z-10 rounded-xl border border-[#D3E7E5] bg-white p-2.5 text-[11px] font-semibold text-[#31565E] shadow-md sm:top-8"><CirclePlay className="mr-1 inline h-4 w-4 text-[#168080]"/>On-camera guidance</div>
      <SampleLabel />
    </div>
  );
}

/** Visual concepts built in JSX/CSS: they require no remote image URL. */
export function ServiceVisual({ serviceId, doctorImageSrc }: ServiceVisualProps) {
  const visual = (() => {
    switch (serviceId) {
      case "profile":
        return <ProfileVisual doctorImageSrc={doctorImageSrc} />;
      case "reels":
        return <ReelsVisual doctorImageSrc={doctorImageSrc} />;
      case "strategy":
        return <StrategyVisual />;
      case "consultation":
        return <ConsultationVisual doctorImageSrc={doctorImageSrc} />;
    }
  })();

  return (
    <div aria-label={`${serviceId} service illustration`} role="img" className="relative w-full overflow-hidden rounded-[24px] bg-gradient-to-br from-[#F5FCFA] via-[#EAF7F5] to-[#DDF2F0] p-3 sm:p-5">
      <HeartPulse aria-hidden="true" className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 text-[#98D5D0]/20" strokeWidth={1}/>
      {visual}
    </div>
  );
}
