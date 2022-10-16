interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  name: string;
  presentation: string;
  location: string;
  about: string;
  phoneNumber: string;
  email: string;
}

export interface Technology extends SanityBody {
  _type: 'technology';
  technologyName: string;
}

export interface Experience extends SanityBody {
  _type: 'experience';
  companyLogo: Image;
  companyName: string;
  jobTitle: string;
  location: string;
  startDate: number;
  endDate: number;
}

export interface Skill extends SanityBody {
  _type: 'skill';
  skillLogo: Image;
}

export interface Social extends SanityBody {
  _type: 'social';
  title: string;
  url: string;
}
