import { AiFillYoutube, AiOutlineExclamation } from "react-icons/ai";
import { BsFire } from "react-icons/bs";
import { CiStreamOn } from "react-icons/ci";
import { PiMusicNoteLight, PiStudentFill } from "react-icons/pi";
import { MdOutlineSportsEsports } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import { SiMarketo, SiYoutubemusic, SiYoutubestudio } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";

export const sidebarItem = [
  {
    title: "",
    links: [
      {
        path: "/",
        title: "Main",
        icon: AiFillYoutube,
      },
      {
        path: "/shorts",
        title: "Shorts",
        icon: BsFire,
      },
      {
        path: "/subs",
        title: "Subscription",
        icon: BsFire,
      },
    ],
  },
  {
    title: "Meeting",
    links: [
      {
        path: "/main",
        title: "Main",
        icon: AiFillYoutube,
      },
      {
        path: "/trending",
        title: "Trending",
        icon: BsFire,
      },
      {
        path: "/music",
        title: "Music",
        icon: PiMusicNoteLight,
      },
      {
        path: "/lie",
        title: "Live",
        icon: CiStreamOn,
      },
      {
        path: "/sport",
        title: "Sport",
        icon: GoTrophy,
      },
      {
        path: "/gaming",
        title: "Gaming",
        icon: MdOutlineSportsEsports,
      },
      {
        path: "/edu",
        title: "Education",
        icon: PiStudentFill,
      },
      {
        path: "/beauty",
        title: "Beauty",
        icon: SiMarketo,
      },
    ],
  },
  {
    title: "YouTube Services",
    links: [
      {
        path: "/gaming",
        title: "YouTube Studio",
        icon: SiYoutubestudio,
      },
      {
        path: "/edu",
        title: "YouTube Music",
        icon: SiYoutubemusic,
      },
      {
        path: "/beauty",
        title: "YouTube Kids",
        icon: TbBrandYoutubeKids,
      },
    ],
  },
  {
    title: "",
    links: [
      {
        path: "/settings",
        title: "Settings",
        icon: SiYoutubestudio,
      },
      {
        path: "/report",
        title: "Report",
        icon: SiYoutubemusic,
      },
      {
        path: "/beauty",
        title: "Help",
        icon: "",
      },
      {
        path: "/faq",
        title: "FAQ",
        icon: AiOutlineExclamation,
      },
    ],
  },
];
