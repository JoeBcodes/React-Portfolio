interface SanityBody {
    _createAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    name: string;
    role: string;
    heroImage: Image;
    backgroundInformation: string;
    profilePic: Image;
    phoneNumber: string;
    email: string;
    address: string;
    socials: Social[];
}

export interface Technology extends SanityBody {
    _type: "technology";
    image: Image;
    progress: number;
    title: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    title: string;
    image: Image;
}

export interface Experience extends SanityBody {
    _type: "experience";
    jobTitle: string;
    companyImage: Image;
    company: string;
    dateStarted: date;
    dateEnded: date; 
    isCurrentlyWorkingHere: boolean;
    points: string[];
    technologies: Technology[];
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}