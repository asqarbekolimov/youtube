import { AiFillYoutube, AiOutlineExclamation } from 'react-icons/ai';
import { BsFire } from 'react-icons/bs';
import { CiStreamOn } from 'react-icons/ci';
import { PiMusicNoteLight, PiStudentFill } from 'react-icons/pi';
import { MdOutlineSportsEsports, MdSubscriptions } from 'react-icons/md';
import { GoTrophy } from 'react-icons/go';
import { SiMarketo, SiYoutubemusic, SiYoutubestudio } from 'react-icons/si';
import { TbBrandYoutubeKids, TbPlayerPlay } from 'react-icons/tb';

export const sidebarItem = [
  {
    title: '',
    links: [
      {
        path: '/',
        title: 'Main',
        icon: AiFillYoutube,
      },
      {
        path: '/shorts',
        title: 'Shorts',
        icon: TbPlayerPlay,
      },
      {
        path: '/subs',
        title: 'Subscription',
        icon: MdSubscriptions,
      },
    ],
  },
  {
    title: 'Meeting',
    links: [
      {
        path: '/trending',
        title: 'Trending',
        icon: BsFire,
      },
      {
        path: '/music',
        title: 'Music',
        icon: PiMusicNoteLight,
      },
      {
        path: '/lie',
        title: 'Live',
        icon: CiStreamOn,
      },
      {
        path: '/sport',
        title: 'Sport',
        icon: GoTrophy,
      },
      {
        path: '/gaming',
        title: 'Gaming',
        icon: MdOutlineSportsEsports,
      },
      {
        path: '/edu',
        title: 'Education',
        icon: PiStudentFill,
      },
      {
        path: '/beauty',
        title: 'Beauty',
        icon: SiMarketo,
      },
    ],
  },
  {
    title: 'YouTube Services',
    links: [
      {
        path: '/gaming',
        title: 'YouTube Studio',
        icon: SiYoutubestudio,
      },
      {
        path: '/edu',
        title: 'YouTube Music',
        icon: SiYoutubemusic,
      },
      {
        path: '/beauty',
        title: 'YouTube Kids',
        icon: TbBrandYoutubeKids,
      },
    ],
  },
  {
    title: '',
    links: [
      {
        path: '/settings',
        title: 'Settings',
        icon: SiYoutubestudio,
      },
      {
        path: '/report',
        title: 'Report',
        icon: SiYoutubemusic,
      },
      {
        path: '/beauty',
        title: 'Help',
        icon: '',
      },
      {
        path: '/faq',
        title: 'FAQ',
        icon: AiOutlineExclamation,
      },
    ],
  },
];

export const Catogories = [
  {
    name: 'all',
    title: 'All',
  },
  {
    name: 'gaming',
    title: 'Gaming',
  },
  {
    name: 'music',
    title: 'Music',
  },
  {
    name: 'sport',
    title: 'Sport',
  },
  {
    name: 'programming',
    title: 'Programming',
  },
  {
    name: 'news',
    title: 'news',
  },
  {
    name: 'subject',
    title: 'Subject',
  },
  {
    name: 'live',
    title: 'Live',
  },
  {
    name: 'football',
    title: 'Football',
  },
  {
    name: 'art',
    title: 'Art',
  },
  {
    name: 'beauty',
    title: 'Beauty',
  },
];
