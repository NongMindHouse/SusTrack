export interface Project {
  id: string;
  name: string;
  description: string;
  bannerUrl?: string;
  websiteUrl: string | "";
  selectedSDG: number;
  latitude: number;
  longitude: number;
  organization?: string;
  date?: Date | null;
  periodTime?: string;
}

export interface User {
  id: string;
  email: string;
  profileUrl?: string;
  userName: string;
  firstName?: string;
  lastName?: string;
}
