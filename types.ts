
export interface NetAcadLink {
  name: string;
  url: string;
}

export interface Course {
  id: number;
  title: string;
  officialName: string;
  links: NetAcadLink[];
  description: string;
  certification: string;
}
