import { Snippet } from '../../interfaces/video.interface';

export interface CardProps {
  id?: string;
  videoId?: string;
  video: Snippet;
  isLoading: boolean;
}
